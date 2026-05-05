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
        <div className="absolute inset-0 -z-10 grain opacity-40" />
        <div className="container-wide pt-20 md:pt-28 pb-24 md:pb-36">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
            <span className="h-px w-10 bg-gold/60" /> Independent Studio · Est. 2019
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 font-display font-medium text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight max-w-5xl"
          >
            Designing the <span className="italic gradient-text">quietly remarkable</span> for ambitious brands.
          </motion.h1>

          <div className="mt-12 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Noctura is a design & technology studio crafting brand systems, products and websites that feel as considered as they look.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gold text-gold-foreground font-medium hover:opacity-90 transition-opacity">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/portfolio" className="inline-flex items-center gap-2 h-12 px-7 rounded-full border border-border hover:bg-secondary transition-colors">
                View work
              </Link>
            </motion.div>
          </div>

          {/* HERO IMAGE / VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            className="mt-20 relative aspect-[16/9] rounded-3xl overflow-hidden border border-border"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.3_0.05_70)] via-[oklch(0.22_0.04_60)] to-[oklch(0.15_0.02_50)]" />
            <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-center">
                <p className="font-display italic text-2xl md:text-4xl text-foreground/80">"Less, but better — and felt."</p>
                <p className="mt-4 text-sm tracking-[0.3em] uppercase text-muted-foreground">— Studio Manifesto</p>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span>Selected Work 2019—2026</span>
              <span className="text-gold">● Currently booking Q3</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE / CLIENTS */}
      <section className="border-y border-border bg-surface py-8">
        <div className="container-wide flex flex-wrap items-center justify-between gap-8 text-muted-foreground">
          {["ATLAS", "LUMEN", "NORTHWIND", "VERRA", "OBSIDIAN", "MERIDIAN"].map((b) => (
            <span key={b} className="font-display text-xl tracking-[0.25em] opacity-70 hover:opacity-100 transition-opacity">{b}</span>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <SectionHeader
            eyebrow="What we do"
            title={<>A studio with <span className="italic text-gold">range</span>, built for depth.</>}
            description="Four practices, one team. We move from strategy to shipped product without the handoff friction."
          />
          <div className="mt-16 grid gap-px bg-border rounded-3xl overflow-hidden border border-border md:grid-cols-2">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-10 md:p-12 group hover:bg-accent transition-colors"
              >
                <div className="flex items-start justify-between mb-10">
                  <div className="h-12 w-12 rounded-2xl bg-gold/10 text-gold grid place-items-center">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-medium">{s.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="container-wide">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHeader eyebrow="Selected work" title={<>Projects we're <span className="italic">proud</span> of.</>} />
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-sm text-gold hover:gap-3 transition-all">
              View all projects <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-gradient-to-br from-[oklch(0.28_0.04_70)] to-[oklch(0.18_0.02_60)]">
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="font-display text-5xl md:text-6xl opacity-30 group-hover:opacity-50 transition-opacity">{p.title}</span>
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-background/80 backdrop-blur grid place-items-center group-hover:bg-gold group-hover:text-gold-foreground transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
                  </div>
                  <span className="text-sm text-muted-foreground">{p.year}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-36">
        <div className="container-wide">
          <SectionHeader eyebrow="Trusted by founders" title={<>Words from the <span className="italic text-gold">people</span> we build with.</>} align="center" />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-border bg-card p-10 md:p-12"
              >
                <div className="flex gap-1 text-gold mb-6">
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="font-display text-2xl md:text-3xl leading-snug">"{t.quote}"</blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-gold to-[oklch(0.5_0.1_60)]" />
                  <div>
                    <p className="font-medium">{t.author}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border p-12 md:p-20 text-center" style={{ background: "var(--gradient-gold)", color: "var(--gold-foreground)" }}>
            <div className="absolute inset-0 grain opacity-30" />
            <p className="text-xs uppercase tracking-[0.3em] opacity-70">Let's build</p>
            <h2 className="mt-4 font-display text-5xl md:text-7xl font-medium leading-[1.02] max-w-4xl mx-auto">
              Have a project in mind? Let's make it inevitable.
            </h2>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 h-14 px-9 rounded-full bg-background text-foreground font-medium hover:opacity-90 transition-opacity">
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
