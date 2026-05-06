import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/pricing")({
  component: Page,
  head: () => ({ meta: [{ title: "Pricing — WhiteFalcon Publishing" }] }),
});

const plans = [
  { name: "Basic", price: "$499", tag: "Perfect for first-time authors", features: ["Professional Editing", "eBook Publishing", "Standard Cover Design", "Global Distribution"], featured: false },
  { name: "Pro", price: "$799", tag: "Everything you need to succeed", features: ["Everything in Basic", "Print & eBook Publishing", "Premium Cover Design", "Marketing Support"], featured: true },
  { name: "Premium", price: "$1299", tag: "For authors who want the best", features: ["Everything in Pro", "Audiobook Publishing", "Advanced Marketing", "Priority Support"], featured: false },
];

function Page() {
  return (
    <>
      <PageHero eyebrow="Pricing Plans" title={<>Affordable plans for <span className="gradient-brand-text">every author</span></>} description="Transparent pricing. No hidden fees. Pick a plan that suits your publishing journey." />
      <section className="container-wide py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`card-soft p-7 relative ${p.featured ? "ring-2 ring-[var(--brand)]" : ""}`}>
              {p.featured && <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] tracking-widest bg-brand px-3 py-1 rounded-full font-semibold">MOST POPULAR</span>}
              <h3 className="font-display text-xl">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.tag}</p>
              <div className="mt-5 flex items-baseline gap-2">
                <span className="font-display text-4xl">{p.price}</span>
                <span className="text-xs text-muted-foreground">One-time</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-brand" /> {f}</li>
                ))}
              </ul>
              <Link to="/contact" className={`mt-7 w-full ${p.featured ? "btn-primary" : "btn-outline"}`}>Choose Plan</Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
