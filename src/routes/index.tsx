import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, Layers, Compass, Zap, Star } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Noctura — A Design & Technology Studio" },
      { name: "description", content: "We design and build premium digital experiences for category-defining brands." },
      { property: "og:title", content: "Noctura — A Design & Technology Studio" },
      { property: "og:description", content: "We design and build premium digital experiences for category-defining brands." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Compass, title: "Brand Strategy", desc: "Positioning, narrative and identity systems that resonate." },
  { icon: Layers, title: "Product Design", desc: "Interfaces engineered for clarity, conversion and craft." },
  { icon: Zap, title: "Web Engineering", desc: "Performant, accessible builds in the modern web stack." },
  { icon: Sparkles, title: "Motion & 3D", desc: "Cinematic animation and interaction that elevates story." },
];

const projects = [
  { title: "Atlas Capital", tag: "Finance · Web", year: "2026" },
  { title: "Lumen Studio", tag: "Brand · Identity", year: "2025" },
  { title: "Northwind", tag: "Product · App", year: "2025" },
  { title: "Verra", tag: "E-commerce", year: "2024" },
];

const testimonials = [
  { quote: "Noctura translated a vague vision into a brand that feels inevitable. Every detail is intentional.", author: "Helena Voss", role: "CEO, Atlas Capital" },
  { quote: "The most considered studio we've worked with. The launch moved our key metric by 38% in six weeks.", author: "Marcus Lin", role: "Founder, Northwind" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-radial)" }} />
        <div className="absolute inset-0 -z-10 grain opacity-30" />
        <div className="container-wide pt-16 md:pt-24 pb-24 md:pb-32">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">
            Independent Studio · Est. 2019
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display text-[clamp(3rem,8.5vw,8rem)] leading-[0.92] tracking-[-0.035em] max-w-[15ch] display-balance"
          >
            Designing the <span className="italic gradient-text">quietly remarkable</span>.
          </motion.h1>

          <div className="mt-14 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl max-w-xl leading-[1.6] pretty"
            >
              Noctura is a design & technology studio crafting brand systems, products and websites that feel as considered as they look.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="btn-ghost">
                View selected work
              </Link>
            </motion.div>
          </div>

          {/* HERO IMAGE / VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 1 }}
            className="mt-20 md:mt-24 relative aspect-[16/8.5] rounded-[2rem] overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.32_0.05_70)] via-[oklch(0.22_0.04_60)] to-[oklch(0.14_0.02_50)]" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
            <div className="absolute inset-0 grain opacity-40" />
            <div className="absolute inset-0 grid place-items-center px-6">
              <div className="text-center">
                <p className="font-display italic text-3xl md:text-5xl text-foreground/90 leading-tight">"Less, but better — and felt."</p>
                <p className="mt-5 text-[11px] tracking-[0.4em] uppercase text-muted-foreground">— Studio Manifesto</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              <span>Selected Work · 2019—2026</span>
              <span className="inline-flex items-center gap-2 text-gold">
                <span className="relative grid place-items-center h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-gold" />
                </span>
                Booking Q3
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / CLIENTS */}
      <section className="border-y border-border bg-surface/60">
        <div className="container-wide py-10 flex flex-wrap items-center justify-between gap-x-10 gap-y-6 text-muted-foreground">
          <span className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground/70">Trusted by</span>
          {["ATLAS", "LUMEN", "NORTHWIND", "VERRA", "OBSIDIAN", "MERIDIAN"].map((b) => (
            <span key={b} className="font-display text-lg tracking-[0.28em] opacity-60 hover:opacity-100 hover:text-foreground transition-all">{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <SectionHeader
            eyebrow="What we do"
            title={<>A studio with <span className="italic text-gold">range</span>, built for depth.</>}
            description="Four practices, one team. We move from strategy to shipped product without the handoff friction."
          />
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="card-luxe p-10 md:p-12 group"
              >
                <div className="flex items-start justify-between mb-12">
                  <div className="h-12 w-12 rounded-xl bg-gold/10 text-gold grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition-colors duration-500">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs tracking-[0.3em] text-muted-foreground/70">0{i + 1} / 04</span>
                </div>
                <h3 className="font-display text-[28px] md:text-[34px] leading-[1.1]">{s.title}</h3>
                <p className="mt-4 text-muted-foreground leading-[1.65] pretty max-w-md">{s.desc}</p>
                <div className="mt-10 flex items-center gap-2 text-sm text-gold/80 group-hover:text-gold transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="py-28 md:py-36 bg-surface relative">
        <div className="absolute inset-x-0 top-0 hairline" />
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-8">
            <SectionHeader eyebrow="Selected work" title={<>Projects we're <span className="italic text-gold">proud</span> of.</>} />
            <Link to="/portfolio" className="group inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-gold transition-colors">
              View all projects
              <span className="grid place-items-center h-9 w-9 rounded-full border border-border group-hover:border-gold/50 group-hover:bg-gold/10 transition-colors">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>

          <div className="mt-20 grid gap-10 md:gap-12 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden border border-border bg-gradient-to-br from-[oklch(0.28_0.04_70)] to-[oklch(0.16_0.02_60)]">
                  <div className="absolute inset-0 grain opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display italic text-5xl md:text-6xl text-foreground/15 group-hover:text-foreground/30 transition-all duration-700 group-hover:scale-105">{p.title}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-5 right-5 h-11 w-11 rounded-full bg-background/70 backdrop-blur-md grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition-all duration-300">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-[22px] tracking-tight">{p.title}</h3>
                    <p className="text-[13px] text-muted-foreground mt-1 tracking-wide">{p.tag}</p>
                  </div>
                  <span className="text-[13px] text-muted-foreground/80 tabular-nums">{p.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 md:py-40">
        <div className="container-wide">
          <SectionHeader eyebrow="Trusted by founders" title={<>Words from the <span className="italic text-gold">people</span> we build with.</>} align="center" />
          <div className="mt-20 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="card-luxe p-10 md:p-12"
              >
                <div className="flex gap-1 text-gold mb-7">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <blockquote className="font-display text-[22px] md:text-[26px] leading-[1.35] tracking-tight pretty">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-10 flex items-center gap-4 pt-8 border-t border-border">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-gold to-[oklch(0.5_0.1_60)]" />
                  <div>
                    <p className="font-medium text-[15px]">{t.author}</p>
                    <p className="text-[13px] text-muted-foreground mt-0.5">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-28">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2.5rem] p-14 md:p-24 text-center" style={{ background: "var(--gradient-gold)", color: "var(--gold-foreground)", boxShadow: "var(--shadow-gold)" }}>
            <div className="absolute inset-0 grain opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(1_0_0/0.18),transparent_60%)]" />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.4em] opacity-70">Let's build</p>
              <h2 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.0] tracking-[-0.03em] max-w-4xl mx-auto display-balance">
                Have a project in mind? <span className="italic">Let's make it inevitable.</span>
              </h2>
              <Link to="/contact" className="mt-12 inline-flex items-center gap-2 h-14 pl-7 pr-2 rounded-full bg-background text-foreground font-medium hover:bg-foreground hover:text-background transition-colors group">
                Start a conversation
                <span className="grid place-items-center h-10 w-10 rounded-full bg-foreground/10 group-hover:bg-background/15 transition-colors">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
