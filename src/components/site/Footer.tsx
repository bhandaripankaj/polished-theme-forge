import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 relative overflow-hidden bg-surface">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -z-0 opacity-60" style={{ background: "var(--gradient-radial)" }} />

      <div className="container-wide relative pt-24 pb-10">
        <div className="grid gap-16 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <span className="grid place-items-center h-8 w-8 rounded-lg bg-gold text-gold-foreground font-display text-base font-semibold">N</span>
              <span className="font-display text-[19px] font-medium tracking-tight">Noctura<span className="text-gold">.</span></span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-[1.65] pretty">
              A design & technology studio building memorable digital products for ambitious brands.
            </p>
            <div className="mt-7 flex gap-2">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-9 w-9 grid place-items-center rounded-full border border-border hover:border-gold/40 hover:text-gold transition-colors" aria-label="social">
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Studio" links={[["About", "/about"], ["Services", "/services"], ["Work", "/portfolio"]]} />
          <FooterCol title="Connect" links={[["Contact", "/contact"], ["Careers", "/contact"], ["Press", "/contact"]]} />
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-5">Newsletter</h4>
            <form className="flex items-center gap-2 rounded-full border border-border bg-background pl-5 pr-1.5 py-1.5 focus-within:border-gold/40 transition-colors">
              <input className="flex-1 bg-transparent outline-none text-sm py-1.5 placeholder:text-muted-foreground/70" placeholder="your@email.com" />
              <button className="h-9 px-4 rounded-full bg-gold text-gold-foreground text-[13px] font-medium inline-flex items-center gap-1 hover:opacity-90 transition-opacity">
                Join <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground/80">Quarterly notes on craft, no spam.</p>
          </div>
        </div>

        <div className="mt-20">
          <p className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.9] tracking-[-0.04em] text-foreground/[0.06] select-none">
            Noctura<span className="text-gold/30">.</span>
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Noctura Studio — All rights reserved.</p>
          <p className="font-display italic text-sm">Crafted with intention in Stockholm.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground mb-5">{title}</h4>
      <ul className="space-y-3.5">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="group inline-flex items-center gap-1.5 text-[15px] text-foreground/85 hover:text-gold transition-colors">
              {label}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
