import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Brush,
  ChevronLeft,
  ChevronRight,
  Cloud,
  Edit3,
  Globe,
  Megaphone,
  PenLine,
  Phone,
  Quote,
  Star,
  Trophy,
  Upload,
  Users,
  Check,
} from "lucide-react";
import heroBook from "@/assets/hero-book.png";
import book1 from "@/assets/book-1.jpg";
import book2 from "@/assets/book-2.jpg";
import book3 from "@/assets/book-3.jpg";
import book4 from "@/assets/book-4.jpg";
import book5 from "@/assets/book-5.jpg";
import book6 from "@/assets/book-6.jpg";
import sarah from "@/assets/avatar-sarah.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "WhiteFalcon Publishing — Turn Your Manuscript Into a Published Book" },
      { name: "description", content: "End-to-end book publishing: editing, cover design, global distribution and marketing. You write. We handle the rest." },
    ],
  }),
});

const steps = [
  { n: "01", icon: Upload, title: "Upload Manuscript", desc: "Submit your manuscript and tell us about your book." },
  { n: "02", icon: PenLine, title: "We Edit & Design", desc: "Our experts edit your book and design a stunning cover." },
  { n: "03", icon: Globe, title: "Publish Globally", desc: "We publish and distribute your book to leading platforms." },
  { n: "04", icon: Trophy, title: "Start Selling", desc: "Reach readers worldwide and earn your royalties." },
];

const services = [
  { icon: Edit3, color: "var(--brand)", bg: "oklch(0.66 0.21 290 / 0.18)", title: "Book Editing", desc: "Professional editing to refine your content and make it reader-ready." },
  { icon: Brush, color: "oklch(0.72 0.16 230)", bg: "oklch(0.72 0.16 230 / 0.18)", title: "Cover Design", desc: "Eye-catching cover designs that attract readers and represent your story." },
  { icon: BookOpen, color: "oklch(0.72 0.18 160)", bg: "oklch(0.72 0.18 160 / 0.18)", title: "Publishing", desc: "We publish your book in print, eBook, and audiobook formats globally." },
  { icon: Megaphone, color: "oklch(0.78 0.16 60)", bg: "oklch(0.78 0.16 60 / 0.18)", title: "Marketing", desc: "From social media to ads, we help your book reach the right audience." },
];

const stats = [
  { icon: Users, value: "500+", label: "Authors Published" },
  { icon: BookOpen, value: "1000+", label: "Books Published" },
  { icon: Globe, value: "50+", label: "Countries Reached" },
  { icon: Trophy, value: "98%", label: "Client Satisfaction" },
];

const books = [
  { src: book1, title: "The Silent Waves", author: "Lily Morgan" },
  { src: book2, title: "Timeless Memories", author: "James Carter" },
  { src: book3, title: "The Path Within", author: "Omar Stone" },
  { src: book4, title: "Broken Chains", author: "Michael Brown" },
  { src: book5, title: "Whispers of the Heart", author: "Sophia Lane" },
  { src: book6, title: "The Last Light", author: "Ethan Walker" },
];

const plans = [
  { name: "Basic", price: "$499", tag: "Perfect for first-time authors", features: ["Professional Editing", "eBook Publishing", "Standard Cover Design", "Global Distribution"], featured: false },
  { name: "Pro", price: "$799", tag: "Everything you need to succeed", features: ["Everything in Basic", "Print & eBook Publishing", "Premium Cover Design", "Marketing Support"], featured: true },
  { name: "Premium", price: "$1299", tag: "For authors who want the best", features: ["Everything in Pro", "Audiobook Publishing", "Advanced Marketing", "Priority Support"], featured: false },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
        <div className="container-wide pt-12 pb-20 md:pt-16 md:pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="inline-block text-[11px] tracking-[0.22em] font-semibold uppercase text-brand px-3 py-1.5 rounded-full border border-[color-mix(in_oklab,var(--brand)_40%,transparent)]">
              Publish Your Story. Inspire The World
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 font-display text-[clamp(2.5rem,5.6vw,4.75rem)] leading-[1.05] tracking-tight balance"
            >
              Turn Your Manuscript<br />
              Into a <span className="gradient-brand-text">Published Book</span>
            </motion.h1>
            <p className="mt-6 text-[15px] md:text-base text-muted-foreground max-w-md leading-relaxed">
              We provide end-to-end publishing solutions — from editing and cover design to global distribution and marketing. You write. We handle the rest.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary">Start Publishing <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn-outline">Free Consultation <Phone className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <img key={i} src={sarah} alt="" className="h-9 w-9 rounded-full border-2 border-background object-cover" loading="lazy" />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[var(--warning)]">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">4.9/5 from 500+ Authors</p>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="relative h-[460px] md:h-[540px] flex items-center justify-center">
            <div className="absolute inset-0 grid place-items-center">
              <div className="h-[380px] w-[380px] md:h-[460px] md:w-[460px] rounded-full border border-[color-mix(in_oklab,var(--brand)_30%,transparent)] opacity-70" />
            </div>
            <motion.div
              className="relative z-10 h-full flex items-center justify-center [perspective:1200px] [will-change:transform]"
              animate={{ rotateZ: [-3, 3, -3] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            >
              <motion.img
                src={heroBook}
                alt="Beyond The Horizon book by Alex Richards"
                className="h-full w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)] [transform-origin:50%_50%] [will-change:transform] [backface-visibility:hidden]"
                width={896}
                height={1024}
                animate={{ rotateY: 360 }}
                transition={{ duration: 1, ease: "linear", repeat: Infinity }}
              />
            </motion.div>
            <FloatTag className="top-4 right-2 md:right-8" icon={Edit3} label="Editing" />
            <FloatTag className="top-24 right-0" icon={PenLine} label="Design" />
            <FloatTag className="bottom-28 left-2" icon={BookOpen} label="Publishing" />
            <FloatTag className="bottom-6 right-6" icon={Megaphone} label="Marketing" />
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container-wide py-20">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">How It Works</span>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.6rem)] balance">Simple Steps to Publish Your Book</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-soft p-6 text-center relative"
            >
              <div className="absolute -top-3 left-5 text-[11px] font-semibold tracking-widest text-brand bg-background px-2.5 py-1 rounded-md border border-border">{s.n}</div>
              <div className="mx-auto h-12 w-12 grid place-items-center rounded-xl mt-2" style={{ background: "color-mix(in oklab, var(--brand) 15%, transparent)" }}>
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <h3 className="mt-4 font-display text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-wide py-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="eyebrow">Our Services</span>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.6rem)] balance">Everything You Need to Publish</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.title} className="card-soft p-6">
              <div className="h-11 w-11 grid place-items-center rounded-lg" style={{ background: s.bg }}>
                <s.icon className="h-5 w-5" style={{ color: s.color }} />
              </div>
              <h3 className="mt-5 font-display text-lg">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <Link to="/services" className="mt-4 inline-flex items-center gap-1 text-sm text-brand font-medium hover:gap-2 transition-all">
                Learn More <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-10 card-soft p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-4">
              <div className="h-12 w-12 grid place-items-center rounded-xl" style={{ background: "color-mix(in oklab, var(--brand) 15%, transparent)" }}>
                <s.icon className="h-5 w-5 text-brand" />
              </div>
              <div>
                <div className="font-display text-2xl">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUR WORK */}
      <section className="container-wide py-16">
        <div className="text-center relative max-w-3xl mx-auto">
          <span className="eyebrow">Our Work</span>
          <h2 className="mt-3 font-display text-[clamp(1.85rem,3.4vw,2.6rem)] balance">Books We've Helped Bring to Life</h2>
          <Link to="/portfolio" className="hidden md:inline-flex absolute right-0 top-1/2 -translate-y-1/2 btn-outline !h-10 !px-4">
            View All Projects <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mt-10 relative">
          <button aria-label="prev" className="hidden md:grid absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-secondary z-10">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {books.map((b) => (
              <div key={b.title} className="group">
                <div className="relative overflow-hidden rounded-lg border border-border aspect-[2/3] bg-surface">
                  <img src={b.src} alt={b.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="mt-3 text-center">
                  <p className="font-display text-sm">{b.title}</p>
                  <p className="text-xs text-muted-foreground">{b.author}</p>
                </div>
              </div>
            ))}
          </div>
          <button aria-label="next" className="hidden md:grid absolute -right-4 top-1/2 -translate-y-1/2 h-10 w-10 place-items-center rounded-full border border-border bg-background hover:bg-secondary z-10">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* TESTIMONIAL + PRICING */}
      <section className="container-wide py-16 grid lg:grid-cols-[1fr_2fr] gap-6">
        <div className="card-soft p-7">
          <span className="eyebrow">Testimonials</span>
          <h3 className="mt-3 font-display text-2xl">What Authors Say About Us</h3>
          <div className="mt-6 flex gap-4">
            <img src={sarah} alt="Sarah Mitchell" className="h-16 w-16 rounded-full object-cover" loading="lazy" />
            <div className="flex-1">
              <Quote className="h-5 w-5 text-brand mb-2" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                WhiteFalcon Publishing made my dream come true. Their team is professional, supportive, and truly cares about your success.
              </p>
              <p className="mt-3 text-sm font-semibold">— Sarah Mitchell</p>
              <p className="text-xs text-muted-foreground">Author of "The Silent Waves"</p>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-1.5">
            {[0,1,2,3].map((i) => <span key={i} className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-brand" : "w-1.5 bg-border"}`} />)}
          </div>
        </div>

        <div>
          <div className="text-center">
            <span className="eyebrow">Pricing Plans</span>
            <h3 className="mt-3 font-display text-2xl">Affordable Plans for Every Author</h3>
          </div>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            {plans.map((p) => (
              <div key={p.name} className={`card-soft p-5 relative ${p.featured ? "ring-2 ring-[var(--brand)]" : ""}`}>
                {p.featured && <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] tracking-widest bg-brand px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">MOST POPULAR</span>}
                <h4 className="font-display text-lg">{p.name}</h4>
                <p className="text-xs text-muted-foreground mt-0.5">{p.tag}</p>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-display text-2xl">{p.price}</span>
                  <span className="text-[10px] text-muted-foreground">One-time</span>
                </div>
                <ul className="mt-4 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-1.5 text-xs"><Check className="h-3.5 w-3.5 text-brand shrink-0" /> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className={`mt-5 w-full text-xs ${p.featured ? "btn-primary" : "btn-outline"} !h-9`}>Choose Plan</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="container-wide pb-16">
        <div className="card-soft p-6 md:p-8 grid lg:grid-cols-[1.1fr_2fr] gap-6 items-center">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 grid place-items-center rounded-xl shrink-0" style={{ background: "color-mix(in oklab, var(--brand) 18%, transparent)" }}>
              <Cloud className="h-6 w-6 text-brand" />
            </div>
            <div>
              <span className="eyebrow">Ready to publish?</span>
              <h3 className="font-display text-xl mt-1">Submit Your Manuscript</h3>
              <p className="text-xs text-muted-foreground mt-1">Take the first step today. Submit your manuscript and let's bring your book to life.</p>
            </div>
          </div>
          <form className="grid sm:grid-cols-2 gap-3">
            <input placeholder="Your Name" className="h-11 px-4 rounded-lg bg-surface border border-border text-sm outline-none focus:border-[var(--brand)]" />
            <input placeholder="Email Address" className="h-11 px-4 rounded-lg bg-surface border border-border text-sm outline-none focus:border-[var(--brand)]" />
            <div className="sm:col-span-1 h-11 px-4 rounded-lg bg-surface border border-dashed border-border flex items-center gap-2 text-xs text-muted-foreground">
              <Upload className="h-4 w-4 text-brand" /> Upload Manuscript (PDF, DOC, DOCX)
            </div>
            <button type="button" className="btn-primary sm:col-span-1">Submit Manuscript <ArrowRight className="h-4 w-4" /></button>
          </form>
        </div>
      </section>
    </>
  );
}

function FloatTag({ className, icon: Icon, label }: { className?: string; icon: typeof Edit3; label: string }) {
  return (
    <div className={`absolute z-20 ${className ?? ""}`}>
      <div className="card-soft px-3 py-2 flex items-center gap-2 backdrop-blur-md bg-background/70">
        <Icon className="h-3.5 w-3.5 text-brand" />
        <span className="text-xs font-medium">{label}</span>
      </div>
    </div>
  );
}
