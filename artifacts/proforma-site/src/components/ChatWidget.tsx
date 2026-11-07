import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { MessageCircle, Send, X } from "lucide-react";

/**
 * Floating website chat assistant. Talks to the /api/chat Netlify Function.
 * Leads the assistant collects are submitted to the "chat-lead" Netlify Form
 * (declared in index.html), which emails them like the contact form.
 */

type Msg = { role: "user" | "assistant"; content: string };

const GREETING =
  "Hi! 👋 I'm the Proforma MVP Marketing assistant. Ask me about branded apparel, promo products, gifts, company stores, or anything else. I can also have Holly reach out to you.";

const SUGGESTIONS = ["Holiday gift ideas", "Branded apparel for my team", "What are your minimums?", "Have Holly contact me"];

const STORAGE_KEY = "pmvp-chat";

function encodeForm(data: Record<string, string>) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");
}

/** Minimal, safe rendering: [links](url), **bold**, bullets, line breaks. */
function renderText(text: string): ReactNode[] {
  return text.split("\n").map((line, i) => {
    const bullet = /^\s*[-*•]\s+/.test(line);
    const body = line.replace(/^\s*[-*•]\s+/, "");
    const parts: ReactNode[] = [];
    const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
    let last = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(body))) {
      if (m.index > last) parts.push(body.slice(last, m.index));
      if (m[1]) {
        const href = m[2];
        const safe = /^(https?:\/\/|\/|mailto:|tel:)/.test(href) ? href : "#";
        parts.push(
          <a key={m.index} href={safe} className="underline font-semibold text-secondary hover:opacity-80">
            {m[1]}
          </a>,
        );
      } else {
        parts.push(<strong key={m.index}>{m[3]}</strong>);
      }
      last = re.lastIndex;
    }
    if (last < body.length) parts.push(body.slice(last));
    return (
      <span key={i} className={`block ${bullet ? "pl-4 relative" : ""} ${line.trim() === "" ? "h-2" : ""}`}>
        {bullet && <span className="absolute left-0">•</span>}
        {parts}
      </span>
    );
  });
}

export default function ChatWidget() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([{ role: "assistant", content: GREETING }]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Client-only (the site is pre-rendered); restore the conversation across pages
  useEffect(() => {
    setMounted(true);
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed.messages) && parsed.messages.length) setMessages(parsed.messages);
        if (parsed.open) setOpen(true);
        if (parsed.done) setDone(true);
      }
    } catch {
      /* storage unavailable */
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify({ messages, open, done }));
    } catch {
      /* ignore */
    }
  }, [messages, open, done, mounted]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, sending, open]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50);
  }, [open]);

  async function send(text: string) {
    const content = text.trim();
    if (!content || sending || done) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setSending(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json();
      if (data.lead) {
        await fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encodeForm({
            "form-name": "chat-lead",
            name: data.lead.name ?? "",
            email: data.lead.email ?? "",
            phone: data.lead.phone ?? "",
            company: data.lead.company ?? "",
            interest: data.lead.interest ?? "",
            notes: data.lead.notes ?? "",
            transcript: next.map((m) => `${m.role === "user" ? "Visitor" : "Assistant"}: ${m.content}`).join("\n\n"),
            page: window.location.pathname,
          }),
        }).catch(() => {});
      }
      if (data.limitReached) setDone(true);
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, something went wrong. You can reach Holly at info@proformamvpmarketing.com or 281.831.3527.",
        },
      ]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Sorry, I couldn't connect just now. You can reach Holly at info@proformamvpmarketing.com or 281.831.3527.",
        },
      ]);
    } finally {
      setSending(false);
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  if (!mounted) return null;

  const showSuggestions = messages.length === 1 && !sending;

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Chat with Proforma MVP Marketing"
          className="fixed z-[60] bottom-24 right-4 left-4 sm:left-auto sm:right-6 sm:w-[380px] h-[min(560px,calc(100dvh-11rem-var(--strip-h,0px)))] md:h-[min(560px,calc(100dvh-13rem-var(--strip-h,0px)))] flex flex-col rounded-2xl bg-white shadow-2xl border border-black/10 overflow-hidden"
        >
          <div className="flex items-center justify-between bg-primary text-white px-4 py-3">
            <div>
              <p className="font-display font-bold leading-tight">Proforma MVP Marketing</p>
              <p className="text-xs text-white/70">AI assistant · Holly follows up personally</p>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="p-1.5 rounded-full hover:bg-white/10">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50 text-[15px] leading-relaxed">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                    m.role === "user"
                      ? "bg-primary text-white rounded-br-sm"
                      : "bg-white text-slate-800 border border-slate-200 rounded-bl-sm"
                  }`}
                >
                  {m.role === "assistant" ? renderText(m.content) : m.content}
                </div>
              </div>
            ))}
            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-sm rounded-full border border-secondary/40 text-secondary bg-white px-3 py-1.5 hover:bg-secondary hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
            {sending && (
              <div className="flex justify-start" aria-live="polite">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:120ms]" />
                  <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce [animation-delay:240ms]" />
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-slate-200 bg-white px-3 py-3">
            <label htmlFor="chat-input" className="sr-only">Type your message</label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={600}
              disabled={done}
              placeholder={done ? "Reach Holly at info@proformamvpmarketing.com" : "Type your question…"}
              className="flex-1 min-w-0 rounded-full border border-slate-300 px-4 py-2.5 text-[15px] text-slate-800 outline-none focus:border-primary disabled:bg-slate-100"
            />
            <button
              type="submit"
              disabled={sending || done || !input.trim()}
              aria-label="Send"
              className="w-10 h-10 shrink-0 rounded-full bg-secondary text-white flex items-center justify-center disabled:opacity-40"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Chat with us"}
        className="fixed z-[60] bottom-5 right-4 sm:right-6 w-14 h-14 rounded-full bg-secondary text-white shadow-xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
