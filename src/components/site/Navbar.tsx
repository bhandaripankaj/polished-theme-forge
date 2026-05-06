import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-2xl bg-background/75 border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid place-items-center h-8 w-8 rounded-lg bg-gold text-gold-foreground font-display text-base font-semibold">N</span>
          <span className="font-display text-[19px] font-medium tracking-tight">
            Noctura<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 rounded-full border border-border/70 bg-background/40 backdrop-blur-md p-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 text-[13px] text-muted-foreground hover:text-foreground transition-colors rounded-full"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "px-4 py-2 text-[13px] text-foreground rounded-full bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-1.5 h-10 pl-5 pr-2 rounded-full bg-foreground text-background text-[13px] font-medium hover:bg-gold hover:text-gold-foreground transition-colors group"
          >
            Start a project
            <span className="grid place-items-center h-7 w-7 rounded-full bg-background/15 group-hover:bg-gold-foreground/15 transition-colors">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="md:hidden h-10 w-10 grid place-items-center rounded-full border border-border"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 inline-flex justify-center items-center h-11 rounded-full bg-gold text-gold-foreground font-medium">
                Start a project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
