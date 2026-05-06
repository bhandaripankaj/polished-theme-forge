import { Link } from "@tanstack/react-router";
import { ChevronDown, Menu, Moon, Sun, X, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

type NavLink = { to: string; label: string; caret?: boolean };
const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/how-it-works", label: "How It Works" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resources", label: "Resources", caret: true },
  { to: "/about", label: "About Us" },
];

export function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"
      )}
    >
      <div className="container-wide flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid place-items-center h-9 w-9 rounded-md" style={{ background: "var(--gradient-brand)" }}>
            <BookOpen className="h-4 w-4 text-white" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[18px] font-semibold tracking-tight">WhiteFalcon</span>
            <span className="block text-[9px] tracking-[0.32em] text-muted-foreground -mt-0.5">PUBLISHING</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-[13.5px] font-medium text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "px-3 py-2 text-[13.5px] font-medium text-foreground inline-flex items-center gap-1 relative after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-[var(--brand)]" }}
            >
              {l.label}
              {l.caret && <ChevronDown className="h-3 w-3 opacity-70" />}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="h-10 w-10 grid place-items-center rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/contact" className="hidden md:inline-flex btn-primary !h-10 !px-5">
            Start Publishing
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className="lg:hidden h-10 w-10 grid place-items-center rounded-lg border border-border"
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
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="px-3 py-3 rounded-lg text-foreground hover:bg-secondary">
                  {l.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setOpen(false)} className="mt-2 btn-primary">
                Start Publishing
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
