import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Noctura Studio" },
      { name: "description", content: "Brand strategy, product design, web engineering and motion. Four disciplines, one focused team." },
      { property: "og:title", content: "Services — Noctura Studio" },
      { property: "og:description", content: "Brand strategy, product design, web engineering and motion. Four disciplines, one focused team." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Brand Strategy & Identity",
    desc: "We position your company in language that earns belief, then translate it into an identity system built to scale.",
    items: ["Brand audit & positioning", "Naming & narrative", "Visual identity system", "Guidelines & rollout"],
  },
  {
    n: "02",
    title: "Product & UX Design",
    desc: "From early sketches to a shippable design system — interfaces engineered for clarity, conversion and craft.",
    items: ["Product strategy", "End-to-end UX", "Design systems", "Prototyping & validation"],
  },
  {
    n: "03",
    title: "Web Engineering",
    desc: "Performant, accessible builds in the modern web stack. We sweat Lighthouse scores so you don't have to.",
    items: ["Marketing sites", "Headless commerce", "Web apps", "CMS integration"],
  },
  {
    n: "04",
    title: "Motion, 3D & Direction",
    desc: "Cinematic animation and immersive interaction that elevates story and rewards attention.",
    items: ["Brand films", "Web motion", "Real-time 3D", "Interactive direction"],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Capabilities"
        title={<>Four disciplines. <span className="italic text-gold">One</span> studio.</>}
        description="We're set up so strategy, design, engineering and motion can pull on the same thread — without handoffs that cost momentum."
      />

      <section className="container-wide pb-32 space-y-6">
        {services.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-3xl border border-border bg-card p-10 md:p-14 grid md:grid-cols-[1fr_2fr] gap-10"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <div>
              <span className="text-gold font-display text-2xl">{s.n}</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-medium leading-tight">{s.title}</h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {s.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-1 h-5 w-5 grid place-items-center rounded-full bg-gold/15 text-gold"><Check className="h-3 w-3" /></span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}

        <div className="pt-10 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-7 rounded-full bg-gold text-gold-foreground font-medium hover:opacity-90 transition-opacity">
            Discuss your project <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
