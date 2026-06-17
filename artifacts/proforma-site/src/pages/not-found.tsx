import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-background p-6">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-display font-extrabold text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-display font-bold text-foreground mb-4">Page not found</h2>
        <p className="text-lg text-muted-foreground mb-10">
          We couldn't find the page you were looking for. It might have been moved or the link is broken.
        </p>
        <Link href="/" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring gap-2">
          <ArrowLeft className="w-5 h-5" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
