import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, Phone, MessageCircle, ShieldCheck, Sparkles, Users,
  Layers, CheckCircle2, ChevronDown, Quote, Star, MapPin, Mail,
  PhoneCall, ClipboardCheck, Rocket, LifeBuoy,
} from "lucide-react";
import heroBg from "@/assets/hero-construction.webp";
import techIllustration from "@/assets/tech-illustration.webp";
import projConstruction from "@/assets/project-construction.webp";
import projDigital from "@/assets/project-digital.webp";
import projEnterprise from "@/assets/project-enterprise.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banisheetla Innovations (BSI) — Innovate • Build • Elevate" },
      { name: "description", content: "BSI delivers road & building construction, plus website, app and software development. One company. Endless solutions." },
      { property: "og:title", content: "Banisheetla Innovations — Building Tomorrow" },
      { property: "og:description", content: "Construction and IT solutions under one roof." },
      { property: "og:url", content: absUrl("/") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [
      { rel: "canonical", href: absUrl("/") },
      { rel: "preload", as: "image", href: heroBg, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

/* ---------------- Counter ---------------- */
function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    if (!ref.current || seen) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setSeen(true), { threshold: 0.3 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [seen]);
  return { ref, seen };
}
/** Fades + lifts content into place the first time it scrolls into view. */
function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, seen } = useInView<HTMLDivElement>();
  return (
    <div ref={ref} className={`${className} transition-all duration-700 ease-out ${seen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
      {children}
    </div>
  );
}
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const { ref, seen } = useInView<HTMLSpanElement>();
  // Always start at the real, final number. This guarantees that on slow
  // connections, or before JS has hydrated, visitors see "500+" — never "0+".
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!seen) return;
    // Once the element is confirmed visible and JS is running, briefly
    // animate from 0 up to the real number as a polish effect only.
    setN(0);
    const dur = 1400, start = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [seen, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

/* ---------------- Data ---------------- */
const heroStats = [
  { n: 500, s: "+", l: "Projects" },
  { n: 100, s: "+", l: "Clients" },
  { n: 25,  s: "+", l: "Team Members" },
  { n: 100, s: "%", l: "Commitment" },
];

const serviceGroups = [
  { title: "IT Services" as const, blurb: "Software that scales with your business." },
  { title: "Construction Services" as const, blurb: "From highways to high-rises — engineered to last." },
];

const reasons = [
  { icon: ShieldCheck, t: "Quality Work", d: "Every project delivered to the highest standard." },
  { icon: CheckCircle2, t: "Timely Delivery", d: "We respect deadlines as much as quality." },
  { icon: Users, t: "Experienced Team", d: "Seasoned engineers, operators and developers." },
  { icon: Sparkles, t: "Innovation Driven", d: "Leveraging modern tools across every domain." },
  { icon: Layers, t: "End-to-End Solutions", d: "From planning to handover — one accountable partner." },
  { icon: Star, t: "Customer Satisfaction", d: "We're judged by repeat business and referrals." },
];

const projects = [
  { img: projConstruction, cat: "Road Construction", t: "State Highway Resurfacing", d: "12 km arterial road resurfaced and widened.", status: "Completed" },
  { img: projEnterprise, cat: "Building Construction", t: "Commercial Office Block", d: "G+5 mixed-use commercial building delivery.", status: "Ongoing" },
  { img: projConstruction, cat: "Infrastructure", t: "Industrial Access Roads", d: "Heavy-load access network for an industrial park.", status: "Completed" },
  { img: projDigital, cat: "Technology Projects", t: "Enterprise Web Platform", d: "Customer portal with cloud-native architecture.", status: "Delivered" },
  { img: projEnterprise, cat: "Construction", t: "Site Earthworks & Levelling", d: "Heavy machinery deployed for 40-acre industrial site preparation.", status: "Completed" },
  { img: projDigital, cat: "Technology Projects", t: "Mobile App for Field Ops", d: "Native iOS/Android app for field reporting.", status: "Delivered" },
];

const testimonials = [
  { n: "Rajesh Sharma", r: "Director, Sharma Realty", q: "BSI delivered our G+4 commercial block ahead of schedule. Quality and communication were exceptional.", a: "RS" },
  { n: "Anita Verma", r: "CEO, NextLeaf Retail", q: "Their team built our e-commerce platform end-to-end. Modern, fast and reliable — exactly what we needed.", a: "AV" },
  { n: "Pradeep Singh", r: "PWD Contractor", q: "BSI's road construction team delivered the site on time and within spec. Reliable execution from start to finish.", a: "PS" },
  { n: "Dr. Meera Iyer", r: "Founder, CareFirst Clinics", q: "From the clinic building to our patient app, BSI handled everything. True end-to-end partner.", a: "MI" },
];

const faqs = [
  { q: "What types of construction projects does BSI handle?", a: "Road construction, residential, commercial and industrial buildings — at any scale, from planning through to handover." },
  { q: "Do you offer ServiceNow and AI services?", a: "Yes. Our IT division specialises in ServiceNow implementation and configuration, and AI-driven automation and analytics solutions for enterprises." },
  { q: "What IT services does BSI provide?", a: "We offer ServiceNow consulting, AI solutions, custom software development, and IT consulting & support." },
  { q: "How long does a typical project take?", a: "Timelines depend on scope. Small software builds can be 2–6 weeks; full building or enterprise platform builds run 3–12 months. We share a detailed schedule before signing." },
  { q: "How is pricing decided?", a: "We provide free, itemized quotes based on scope, materials, equipment and timeline — no hidden charges." },
  { q: "Do you provide support after delivery?", a: "Yes — construction projects come with defect-liability warranty; software projects include support and maintenance plans." },
];

/* ---------------- Page ---------------- */
function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeCat, setActiveCat] = useState("All");
  const [tIdx, setTIdx] = useState(0);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  const cats = ["All", ...Array.from(new Set(projects.map((p) => p.cat)))];
  const visible = activeCat === "All" ? projects : projects.filter((p) => p.cat === activeCat);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroBg} alt="BSI construction and technology" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.14_0.05_255)]/95 via-[oklch(0.18_0.07_240)]/85 to-[oklch(0.22_0.09_220)]/70" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/40 bg-white/5 px-3 py-1 text-xs font-medium text-[var(--color-gold)] backdrop-blur animate-fade-in">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold)] animate-pulse" />
              Innovate • Build • Elevate
            </div>
            <h1 className="mt-5 font-display text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl xl:text-8xl animate-fade-up">
              BUILDING <span className="text-gradient-gold">TOMORROW</span>
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-white/90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              From Roads & Buildings to Technology & Business Solutions
            </p>
            <p className="mt-3 max-w-2xl text-base text-white/70 animate-fade-up" style={{ animationDelay: "0.15s" }}>
              One Company. Endless Solutions.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="hero">
                <a href="#contact">Get Free Quote <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
            <dl className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {heroStats.map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-3xl font-black text-white sm:text-4xl">
                    <Counter to={s.n} suffix={s.s} />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-white/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">About BSI</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Banisheetla Innovations Private Limited</h2>
            <p className="mt-5 text-base text-muted-foreground">
              A diversified company delivering infrastructure development, construction excellence,
              digital technology solutions and operational support — all under one roof.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Innovation", "Quality", "Reliability", "Safety", "Customer First", "On-Time"].map((v) => (
              <div key={v} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
                <CheckCircle2 className="mx-auto h-5 w-5 text-accent" />
                <div className="mt-2 text-sm font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-gradient-subtle py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">What We Do</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Comprehensive solutions, end to end</h2>
              <p className="mt-4 text-muted-foreground">Construction and IT — all delivered by one accountable partner.</p>
            {serviceGroups.map((g) => (
              <div key={g.title}>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">{g.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {services.filter((s) => s.category === g.title).map((s) => (
                    <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-primary opacity-10 transition group-hover:scale-150" />
                      <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                        <s.icon className="h-6 w-6" />
                      </div>
                      <h4 className="relative mt-4 text-base font-semibold">{s.title}</h4>
                      <span className="relative mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary opacity-0 transition group-hover:opacity-100">
                        Learn more <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Why Choose Us</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Trusted by businesses and contractors</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r) => (
            <div key={r.t} className="rounded-2xl border border-border bg-card p-6 shadow-card transition hover:border-[var(--color-gold)]/40">
              <r.icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 text-lg font-semibold">{r.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-subtle py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">How We Work</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">A clear process, start to finish</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Whether it's a construction site or a software build, every engagement follows the same accountable process.</p>
          </div>
          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" aria-hidden="true" />
            {[
              { icon: PhoneCall, t: "Consultation", d: "We understand your goals, site, or system requirements in detail." },
              { icon: ClipboardCheck, t: "Planning & Quote", d: "A transparent scope, timeline, and quotation — no hidden surprises." },
              { icon: Rocket, t: "Execution", d: "Our engineers, operators, and developers deliver to plan." },
              { icon: LifeBuoy, t: "Delivery & Support", d: "Handover with documentation, plus ongoing support after launch." },
            ].map((step, i) => (
              <div key={step.t} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
                  <step.icon className="h-6 w-6" />
                </div>
                <div className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-gold)]">Step {i + 1}</div>
                <h3 className="mt-1 text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-gradient-subtle py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Our Work</div>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Projects we're proud of</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {cats.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveCat(c)}
                  className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${activeCat === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:border-primary/40"}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <article key={`${p.t}-${i}`} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <span className="rounded-full bg-[var(--color-gold)]/90 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[oklch(0.2_0.05_250)]">{p.status}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-primary-glow">{p.cat}</div>
                  <h3 className="mt-2 text-lg font-bold">{p.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SPLIT */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.05_255)] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Technology Solutions</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Powering Your Business with Technology. <span className="text-gradient-gold">Building Your Future with Trust.</span>
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "ServiceNow Consulting", "AI Solutions",
                "Software Development", "IT Consulting & Support",
              ].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-gold)]" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button asChild size="lg" variant="hero"><a href="#contact">Talk to Our Tech Team <ArrowRight className="ml-1 h-4 w-4" /></a></Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--color-gold)]/20 to-accent/20 blur-2xl" />
            <img src={techIllustration} alt="Technology illustration" loading="lazy" width={1280} height={1024} className="relative rounded-2xl border border-white/10 shadow-elegant" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Clients Speak</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">What our clients say</h2>
        </Reveal>
        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card sm:p-12">
            <Quote className="h-10 w-10 text-[var(--color-gold)]" />
            <p className="mt-5 text-lg font-medium leading-relaxed text-foreground sm:text-xl">"{testimonials[tIdx].q}"</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground">{testimonials[tIdx].a}</div>
              <div>
                <div className="font-semibold">{testimonials[tIdx].n}</div>
                <div className="text-sm text-muted-foreground">{testimonials[tIdx].r}</div>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-[var(--color-gold)] text-[var(--color-gold)]" />)}
              </div>
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} aria-label={`Testimonial ${i + 1}`} onClick={() => setTIdx(i)} className={`h-2 rounded-full transition-all ${i === tIdx ? "w-8 bg-primary" : "w-2 bg-border"}`} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-subtle py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">FAQ</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Questions, answered</h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative overflow-hidden bg-gradient-hero py-20 text-white lg:py-28">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 80% 20%, rgba(180,220,230,0.25), transparent 50%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl lg:text-5xl">Let's Build Something Great Together</h2>
            <p className="mt-4 text-white/80">Tell us about your project — construction, equipment, or technology. We respond within one business day.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <aside className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-display text-lg font-bold">Reach Us</h3>
                <ul className="mt-4 space-y-4 text-sm text-white/85">
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href="tel:+919301103436" className="hover:text-[var(--color-gold)]">+91 9301103436</a></li>
                  <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href="https://wa.me/919301103436" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">WhatsApp +91 9301103436</a></li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href="mailto:info@banisheetla.com" className="break-all hover:text-[var(--color-gold)]">info@banisheetla.com</a></li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><span>H.N. 61, Kunkuri Khurd, Kotchhal, Pratapgarh, Mainpat, Surguja (C.G.), Ambikapur, India 497114</span></li>
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/15">
                <iframe
                  title="BSI Location"
                  src="https://www.google.com/maps?q=Mainpat,+Surguja,+Chhattisgarh&output=embed"
                  width="100%" height="220" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  style={{ border: 0 }}
                />
              </div>
            </aside>
            <form
              className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-8 lg:col-span-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  toast.success("Request received", { description: "Our team will reach out within one business day." });
                  (e.target as HTMLFormElement).reset();
                }, 700);
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="h-name" className="text-white/85">Name</Label><Input id="h-name" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div><Label htmlFor="h-phone" className="text-white/85">Phone</Label><Input id="h-phone" type="tel" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div className="sm:col-span-2"><Label htmlFor="h-email" className="text-white/85">Email</Label><Input id="h-email" type="email" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div className="sm:col-span-2">
                  <Label htmlFor="h-service" className="text-white/85">Service Required</Label>
                  <select id="h-service" required className="mt-2 flex h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
                    {["ServiceNow Consulting", "AI Solutions", "Software Development", "IT Consulting", "Road Construction", "Residential Construction", "Commercial Construction", "Industrial Projects", "Other"].map((s) => <option key={s} className="text-foreground">{s}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2"><Label htmlFor="h-msg" className="text-white/85">Message</Label><Textarea id="h-msg" rows={4} required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" placeholder="Tell us about your project…" /></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="submit" size="lg" variant="hero" disabled={sending}>{sending ? "Sending…" : "Request Quote"}</Button>
                <Button asChild type="button" size="lg" variant="outline" className="border-[#25D366]/60 bg-[#25D366]/10 text-white hover:bg-[#25D366]/20 hover:text-white">
                  <a href="https://wa.me/919301103436?text=Hi%20BSI%2C%20I%27d%20like%20a%20quote." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Now
                  </a>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
