import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-wide py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <span className="grid place-items-center h-9 w-9 rounded-xl bg-gold text-gold-foreground font-display text-lg font-bold">N</span>
              <span className="font-display text-xl font-semibold tracking-tight">Noctura.</span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              A design & technology studio building memorable digital products for ambitious brands.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Instagram, Linkedin, Github].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 grid place-items-center rounded-full border border-border hover:bg-accent transition-colors" aria-label="social">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Studio" links={[["About", "/about"], ["Services", "/services"], ["Portfolio", "/portfolio"]]} />
          <FooterCol title="Connect" links={[["Contact", "/contact"], ["Careers", "/contact"], ["Press", "/contact"]]} />
          <div>
            <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">Newsletter</h4>
            <form className="flex items-center gap-2 rounded-full border border-border bg-background pl-5 pr-1 py-1">
              <input className="flex-1 bg-transparent outline-none text-sm py-2" placeholder="your@email.com" />
              <button className="h-9 px-4 rounded-full bg-gold text-gold-foreground text-sm font-medium inline-flex items-center gap-1">
                Join <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Noctura Studio. All rights reserved.</p>
          <p className="font-display italic">Crafted with intention in Stockholm.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h4 className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-5">{title}</h4>
      <ul className="space-y-3">
        {links.map(([label, to]) => (
          <li key={label}>
            <Link to={to} className="text-foreground/90 hover:text-gold transition-colors">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
