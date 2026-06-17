import { useState } from "react";
import { useAdminLogin, useListContacts, getListContactsQueryKey } from "@workspace/api-client-react";
import logoPath from "@/assets/logo.png";

type Contact = {
  id: number;
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  projectType: string | null;
  message: string;
  createdAt: string;
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState<string | null>(
    () => sessionStorage.getItem("admin_token")
  );
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Contact | null>(null);

  const login = useAdminLogin();

  const { data: contacts, isLoading } = useListContacts({
    query: { enabled: !!token, queryKey: getListContactsQueryKey() },
    request: { headers: { "x-admin-token": token ?? "" } },
  });

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    login.mutate(
      { data: { password } },
      {
        onSuccess: (res) => {
          sessionStorage.setItem("admin_token", res.token);
          setToken(res.token);
        },
        onError: () => {
          setError("Incorrect password. Try again.");
        },
      }
    );
  }

  function handleLogout() {
    sessionStorage.removeItem("admin_token");
    setToken(null);
    setSelected(null);
  }

  if (!token) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <img src={logoPath} alt="ProForma MVP Marketing" className="h-12 w-auto mx-auto mb-6" />
            <h1 className="text-2xl font-display font-bold text-primary">Admin Access</h1>
            <p className="text-sm text-muted-foreground mt-1">Enter your password to view submissions</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-display font-medium text-foreground mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                placeholder="Enter admin password"
                data-testid="input-admin-password"
                required
              />
            </div>
            {error && (
              <p className="text-sm text-destructive" data-testid="text-login-error">{error}</p>
            )}
            <button
              type="submit"
              disabled={login.isPending}
              className="w-full h-11 bg-secondary text-white font-display font-semibold rounded-md text-sm transition-colors hover:bg-secondary/90 disabled:opacity-60"
              data-testid="button-login"
            >
              {login.isPending ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={logoPath} alt="ProForma MVP Marketing" className="h-9 w-auto brightness-0 invert" />
          <span className="text-sm font-display font-medium text-white/70">/ Admin</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-sm font-display text-white/70 hover:text-white transition-colors">
            View Site
          </a>
          <button
            onClick={handleLogout}
            className="text-sm font-display text-white/70 hover:text-white transition-colors"
            data-testid="button-logout"
          >
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-display font-bold text-primary">Contact Submissions</h2>
          <p className="text-muted-foreground mt-1">
            {contacts ? `${contacts.length} total submission${contacts.length !== 1 ? "s" : ""}` : "Loading..."}
          </p>
        </div>

        {isLoading && (
          <div className="text-muted-foreground text-sm">Loading submissions...</div>
        )}

        {contacts && contacts.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            <p className="text-lg">No submissions yet.</p>
            <p className="text-sm mt-1">They'll appear here when visitors fill out the contact form.</p>
          </div>
        )}

        {contacts && contacts.length > 0 && (
          <div className="flex gap-6">
            {/* Table */}
            <div className={`flex-1 min-w-0 bg-card border border-border rounded-xl overflow-hidden ${selected ? "hidden lg:block" : ""}`}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left px-4 py-3 font-display font-semibold text-muted-foreground">Name</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-muted-foreground hidden md:table-cell">Company</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-muted-foreground hidden lg:table-cell">Project Type</th>
                    <th className="text-left px-4 py-3 font-display font-semibold text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {(contacts as Contact[]).map((c) => (
                    <tr
                      key={c.id}
                      onClick={() => setSelected(c)}
                      className={`border-b border-border cursor-pointer transition-colors hover:bg-muted/30 ${selected?.id === c.id ? "bg-secondary/5 border-l-2 border-l-secondary" : ""}`}
                      data-testid={`row-contact-${c.id}`}
                    >
                      <td className="px-4 py-3">
                        <div className="font-medium text-foreground">{c.name}</div>
                        <div className="text-muted-foreground text-xs">{c.email}</div>
                      </td>
                      <td className="px-4 py-3 text-muted-foreground hidden md:table-cell">{c.company ?? "—"}</td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        {c.projectType ? (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                            {c.projectType}
                          </span>
                        ) : "—"}
                      </td>
                      <td className="px-4 py-3 text-muted-foreground text-xs whitespace-nowrap">{formatDate(c.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Detail panel */}
            {selected && (
              <div className="w-full lg:w-96 shrink-0 bg-card border border-border rounded-xl p-6 self-start">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-primary">Submission Detail</h3>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-muted-foreground hover:text-foreground text-sm"
                    data-testid="button-close-detail"
                  >
                    Close
                  </button>
                </div>
                <dl className="space-y-4 text-sm">
                  <div>
                    <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Name</dt>
                    <dd className="text-foreground">{selected.name}</dd>
                  </div>
                  <div>
                    <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Email</dt>
                    <dd>
                      <a href={`mailto:${selected.email}`} className="text-secondary hover:underline">{selected.email}</a>
                    </dd>
                  </div>
                  {selected.company && (
                    <div>
                      <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Company</dt>
                      <dd className="text-foreground">{selected.company}</dd>
                    </div>
                  )}
                  {selected.phone && (
                    <div>
                      <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Phone</dt>
                      <dd>
                        <a href={`tel:${selected.phone}`} className="text-secondary hover:underline">{selected.phone}</a>
                      </dd>
                    </div>
                  )}
                  {selected.projectType && (
                    <div>
                      <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Project Type</dt>
                      <dd>
                        <span className="inline-block px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                          {selected.projectType}
                        </span>
                      </dd>
                    </div>
                  )}
                  <div>
                    <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Submitted</dt>
                    <dd className="text-foreground">{formatDate(selected.createdAt)}</dd>
                  </div>
                  <div>
                    <dt className="font-display font-semibold text-muted-foreground text-xs uppercase tracking-wider mb-1">Message</dt>
                    <dd className="text-foreground leading-relaxed whitespace-pre-wrap bg-muted/40 rounded-md p-3">{selected.message}</dd>
                  </div>
                </dl>
                <a
                  href={`mailto:${selected.email}?subject=Re: Your ProForma MVP inquiry`}
                  className="mt-6 w-full h-10 inline-flex items-center justify-center rounded-md bg-secondary text-white font-display font-semibold text-sm hover:bg-secondary/90 transition-colors"
                  data-testid="button-reply"
                >
                  Reply via Email
                </a>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
