import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight, Phone, MessageCircle, ShieldCheck, Sparkles, Users,
  Layers, CheckCircle2, ChevronDown, Quote, Star, MapPin, Mail,
  PhoneCall, ClipboardCheck, Rocket, LifeBuoy, Workflow, Building2, Cpu, BarChart3,
} from "lucide-react";
import heroBg from "@/assets/tech-illustration.webp";
import projDigital from "@/assets/project-digital.webp";
import projEnterprise from "@/assets/project-enterprise.webp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { COMPANY } from "@/lib/constants";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Banisheetla Innovations — Cloud-Native SaaS for Government & Enterprise Workflows" },
      { name: "description", content: "Banisheetla Innovations builds cloud-native SaaS on AWS, including Jan Mitra, that helps businesses and government organizations digitize and automate their workflows." },
      { property: "og:title", content: "Banisheetla Innovations — Automate Government and Enterprise Workflows, on the Cloud" },
      { property: "og:description", content: "Cloud-native SaaS that helps organizations digitize and automate their workflows." },
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
  const [n, setN] = useState(to);
  useEffect(() => {
    if (!seen) return;
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
  { n: 15,  s: "+", l: "Projects" },
  { n: 10,  s: "+", l: "Clients" },
  { n: 20,  s: "+", l: "Team Members" },
  { n: 100, s: "%", l: "Commitment" },
];

const whatWeDo = [
  { icon: Workflow, t: "Workflow Automation", d: "Turn manual, paper-based processes into structured digital workflows with approvals, tracking, and audit trails." },
  { icon: Building2, t: "Digital Government Services", d: "Citizen and stakeholder-facing portals that let government bodies deliver services online, reducing wait times and paperwork." },
  { icon: Cpu, t: "Enterprise Integrations", d: "Connect your existing systems through APIs so data moves automatically instead of being re-entered by hand." },
  { icon: BarChart3, t: "Analytics and Reporting", d: "Real-time dashboards that give administrators visibility into request volumes, bottlenecks, and turnaround times." },
];

const reasons = [
  { icon: ShieldCheck, t: "Quality Work", d: "Every project delivered to the highest standard." },
  { icon: CheckCircle2, t: "Timely Delivery", d: "We respect deadlines as much as quality." },
  { icon: Users, t: "Experienced Team", d: "Seasoned engineers and developers behind every build." },
  { icon: Sparkles, t: "Innovation Driven", d: "Leveraging modern cloud tools across every engagement." },
  { icon: Layers, t: "End-to-End Solutions", d: "From planning to handover — one accountable partner." },
  { icon: Star, t: "Customer Satisfaction", d: "We're judged by repeat business and referrals." },
];

const projects = [
  { img: projDigital, cat: "Technology Projects", t: "Jan Mitra — Workflow Platform", d: "Digital request-and-approval platform for government and enterprise use.", status: "Live" },
  { img: projEnterprise, cat: "Technology Projects", t: "Enterprise Web Platform", d: "Customer portal with cloud-native architecture.", status: "Delivered" },
  { img: projDigital, cat: "Technology Projects", t: "Mobile App for Field Ops", d: "Native iOS/Android app for field reporting.", status: "Delivered" },
];

const testimonials = [
  { n: "Anita Verma", r: "CEO, NextLeaf Retail", q: "Their team built our e-commerce platform end-to-end. Modern, fast and reliable — exactly what we needed.", a: "AV" },
  { n: "Dr. Meera Iyer", r: "Founder, CareFirst Clinics", q: "From planning to our patient-facing app, BSI handled everything. A true end-to-end partner.", a: "MI" },
];

const faqs = [
  { q: "What does Banisheetla Innovations do?", a: "We build cloud-native SaaS products, including Jan Mitra, that help businesses and government organizations digitize and automate their workflows." },
  { q: "What is Jan Mitra?", a: "Jan Mitra is our workflow automation platform for organizations managing high volumes of requests, applications, or approvals. It's a product we built and operate — not a separate company." },
  { q: "Do you offer custom software development?", a: "Yes. Alongside Jan Mitra, we build custom software, ServiceNow implementations, and AI-driven automation for enterprises." },
  { q: "How long does a typical project take?", a: "Timelines depend on scope. A focused workflow deployment can go live in a few weeks; larger enterprise integrations run longer. We share a detailed schedule before starting." },
  { q: "How is pricing decided?", a: "Pricing depends on request volume, department count, and integration needs. See our Pricing page or request a quote for a scoped plan." },
  { q: "Do you provide support after launch?", a: "Yes — every engagement includes a support and maintenance plan after go-live." },
];

/* ---------------- Page ---------------- */
function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [tIdx, setTIdx] = useState(0);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img src={heroBg} alt="Banisheetla Innovations cloud technology" width={1920} height={1080} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.10_0.06_265)]/97 via-[oklch(0.14_0.08_255)]/90 to-[oklch(0.20_0.12_230)]/75" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(var(--color-gold) 1px, transparent 1px), linear-gradient(90deg, var(--color-gold) 1px, transparent 1px)", backgroundSize: "60px 60px" }} aria-hidden="true" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <h1 className="mt-0 font-display text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
              Automate Government and <span className="text-gradient-gold">Enterprise Workflows</span>, on the Cloud.
            </h1>
            <p className="mt-6 max-w-2xl text-xl font-medium text-white/90 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Banisheetla Innovations builds cloud-native SaaS on AWS that helps businesses and
              government organizations digitize and automate their workflows, from citizen service
              requests to internal approvals.
            </p>
            <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <Button asChild size="lg" variant="hero">
                <a href="#contact">Book a Demo <ArrowRight className="ml-1 h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                <Link to="/jan-mitra">Explore Jan Mitra</Link>
              </Button>
            </div>
            <dl className="hidden mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/15 pt-8 sm:grid-cols-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
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
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">About Us</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Banisheetla Innovations Private Limited</h2>
            <p className="mt-5 text-base text-muted-foreground">
              We build cloud-native SaaS products that help businesses and government organizations
              automate workflows and deliver digital services more efficiently. We built Jan Mitra
              to solve a problem we saw directly: too many organizations still rely on manual,
              paper-based processes that slow down both staff and the people they serve.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {["Innovation", "Quality", "Reliability", "Security", "Customer First", "On-Time"].map((v) => (
              <div key={v} className="rounded-xl border border-border bg-card p-4 text-center shadow-card">
                <CheckCircle2 className="mx-auto h-5 w-5 text-accent" />
                <div className="mt-2 text-sm font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="services" className="bg-gradient-subtle py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">What We Do</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">One platform. Real operational impact.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whatWeDo.map((s) => (
              <div key={s.t} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-primary opacity-10 transition group-hover:scale-150" />
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h4 className="relative mt-4 text-base font-semibold">{s.t}</h4>
                <p className="relative mt-2 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Why Choose Us</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Trusted by businesses and government bodies</h2>
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
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">Every engagement follows the same accountable, transparent process.</p>
          </div>
          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" aria-hidden="true" />
            {[
              { icon: PhoneCall, t: "Consultation", d: "We understand your workflow and system requirements in detail." },
              { icon: ClipboardCheck, t: "Planning & Quote", d: "A transparent scope, timeline, and quotation — no hidden surprises." },
              { icon: Rocket, t: "Execution", d: "Our engineers and developers deliver to plan." },
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
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Our Work</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">Projects we're proud of</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
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

      {/* JAN MITRA SPOTLIGHT */}
      <section className="relative overflow-hidden bg-[oklch(0.16_0.05_255)] py-20 text-white lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-gold)]">Our Flagship Product</div>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
              Jan Mitra: <span className="text-gradient-gold">Digital Services, Delivered Simply.</span>
            </h2>
            <p className="mt-5 text-white/80">
              Jan Mitra replaces manual paperwork and email-based tracking with a structured
              digital workflow, so requests move from submission to resolution with full
              visibility at every step.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Online application submission", "Automated routing & approvals", "Status tracking for applicants", "Admin dashboard with SLA tracking"].map((i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                  <CheckCircle2 className="h-4 w-4 text-[var(--color-gold)]" /> {i}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="hero"><Link to="/jan-mitra">Explore Jan Mitra <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"><Link to="/pricing">View Pricing</Link></Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[var(--color-gold)]/20 to-accent/20 blur-2xl" />
            <img src={projDigital} alt="Jan Mitra workflow platform" loading="lazy" width={1280} height={1024} className="relative rounded-2xl border border-white/10 shadow-elegant" />
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
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} aria-expanded={openFaq === i} className="flex w-full items-center justify-between gap-4 p-5 text-left">
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
            <p className="mt-4 text-white/80">Tell us about your workflow challenge. We respond within one business day.</p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-5">
            <aside className="space-y-4 lg:col-span-2">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <h3 className="font-display text-lg font-bold">Reach Us</h3>
                <ul className="mt-4 space-y-4 text-sm text-white/85">
                  <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href={COMPANY.phoneTel} className="hover:text-[var(--color-gold)]">{COMPANY.phone}</a></li>
                  <li className="flex items-start gap-3"><MessageCircle className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href={COMPANY.whatsappBase} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">WhatsApp {COMPANY.phone}</a></li>
                  <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><a href={COMPANY.emailHref} className="break-all hover:text-[var(--color-gold)]">{COMPANY.email}</a></li>
                  <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-[var(--color-gold)]" /><span>{COMPANY.addressFull}</span></li>
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
              onSubmit={async (e) => {
                e.preventDefault();
                setSending(true);
                const fd = new FormData(e.currentTarget);
                try {
                  const { supabase } = await import("@/integrations/supabase/client");
                  const { error } = await supabase.from("contact_submissions").insert({
                    name:    String(fd.get("name") ?? ""),
                    phone:   String(fd.get("phone") ?? ""),
                    email:   String(fd.get("email") ?? ""),
                    service: String(fd.get("service") ?? ""),
                    message: String(fd.get("message") ?? ""),
                  });
                  if (error) throw error;
                  toast.success("Request received", { description: "Our team will reach out within one business day." });
                  (e.target as HTMLFormElement).reset();
                } catch {
                  toast.error("Something went wrong", { description: "Please try WhatsApp or email us directly." });
                } finally {
                  setSending(false);
                }
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div><Label htmlFor="h-name" className="text-white/85">Name</Label><Input id="h-name" name="name" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div><Label htmlFor="h-phone" className="text-white/85">Phone</Label><Input id="h-phone" name="phone" type="tel" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div className="sm:col-span-2"><Label htmlFor="h-email" className="text-white/85">Email</Label><Input id="h-email" name="email" type="email" required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" /></div>
                <div className="sm:col-span-2">
                  <Label htmlFor="h-service" className="text-white/85">What are you interested in?</Label>
                  <select id="h-service" name="service" required className="mt-2 flex h-9 w-full rounded-md border border-white/20 bg-white/10 px-3 py-1 text-sm text-white">
                    {["Jan Mitra Demo", "ServiceNow Consulting", "AI Solutions", "Software Development", "IT Consulting", "Other"].map((s) => <option key={s} className="text-foreground">{s}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2"><Label htmlFor="h-msg" className="text-white/85">Message</Label><Textarea id="h-msg" name="message" rows={4} required className="mt-2 border-white/20 bg-white/10 text-white placeholder:text-white/40" placeholder="Tell us about your workflow challenge…" /></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button type="submit" size="lg" variant="hero" disabled={sending}>{sending ? "Sending…" : "Request Demo / Quote"}</Button>
                <Button asChild type="button" size="lg" variant="outline" className="border-[#25D366]/60 bg-[#25D366]/10 text-white hover:bg-[#25D366]/20 hover:text-white">
                  <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
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
