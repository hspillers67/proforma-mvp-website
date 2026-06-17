import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import logoPath from "@/assets/logo.png";

export default function ThankYou() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 h-20 flex items-center">
          <a href="/">
            <img src={logoPath} alt="ProForma MVP Marketing" className="h-12 w-auto" />
          </a>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full text-center py-24"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-secondary" strokeWidth={1.5} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              You're all set.
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Thanks for reaching out. We'll review your project details and get back to you within one business day.
            </p>
            <p className="text-base text-muted-foreground mb-12">
              In the meantime, feel free to browse our full range of capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#services"
                className="inline-flex h-12 items-center justify-center rounded-md bg-secondary px-7 text-base font-display font-semibold text-white shadow transition-transform hover:scale-105 hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                Explore Capabilities
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
              <a
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-7 text-base font-display font-medium text-foreground shadow-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <footer className="bg-primary text-primary-foreground py-8 border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} ProForma MVP Marketing. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
