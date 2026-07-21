import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight, CheckCircle2, ChevronDown, ClipboardList, FileCheck,
  Gauge, MessageCircle, Route as RouteIcon, ShieldCheck, Users,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/jan-mitra")({
  head: () => ({
    meta: [
      { title: "Jan Mitra — Digital Services, Delivered Simply | Banisheetla Innovations" },
      { name: "description", content: "Jan Mitra is Banisheetla's workflow automation platform for organizations that manage high volumes of requests, applications, or approvals." },
      { property: "og:title", content: "Jan Mitra — Digital Services, Delivered Simply" },
      { property: "og:description", content: "A structured digital workflow platform that replaces manual paperwork and email-based tracking." },
      { property: "og:url", content: absUrl("/jan-mitra") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/jan-mitra") }],
  }),
  component: JanMitraPage,
});

const features = [
  { icon: ClipboardList, title: "Online Application Submission", d: "Citizens and applicants submit requests digitally instead of on paper." },
  { icon: RouteIcon, title: "Automated Routing & Approvals", d: "Requests move automatically to the right approver, with a full audit trail." },
  { icon: Gauge, title: "Status Tracking for Applicants", d: "Applicants see exactly where their request stands, in real time." },
  { icon: FileCheck, title: "Document Upload & Verification", d: "Supporting documents are collected and verified digitally." },
  { icon: ShieldCheck, title: "Admin Dashboard with SLA Tracking", d: "Administrators see request volumes, bottlenecks, and turnaround times at a glance." },
  { icon: Users, title: "Multi-Department Support", d: "Built to scale across departments and organizational units." },
];

const benefits = [
  "Replace paper-based processes with structured digital workflows",
  "Reduce turnaround time on requests and approvals",
  "Give administrators real-time visibility into bottlenecks",
  "Give applicants transparency into where their request stands",
  "Full audit trail for every request, from submission to resolution",
];

const targetUsers = [
  { title: "Government Departments", d: "Deliver citizen-facing services online and reduce in-person visits." },
  { title: "Enterprises", d: "Digitize internal approval chains — HR, procurement, facilities." },
  { title: "Public Sector Bodies", d: "Manage high volumes of applications with full compliance and audit trails." },
];

const steps = [
  { t: "Submit", d: "Applicants submit requests online through a simple digital form." },
  { t: "Route", d: "The request is automatically routed to the right department or approver." },
  { t: "Track", d: "Both the applicant and admin team can track status in real time." },
  { t: "Resolve", d: "The request is resolved, documented, and closed with a full audit trail." },
];

const faqs = [
  { q: "Is Jan Mitra a separate company?", a: "No. Jan Mitra is a product built and operated by Banisheetla Innovations Private Limited." },
  { q: "Who is Jan Mitra built for?", a: "Government departments, enterprises, and public sector bodies that manage high volumes of requests, applications, or approvals." },
  { q: "Can Jan Mitra integrate with our existing systems?", a: "Yes — integration with existing enterprise systems is available on our Enterprise plan. See our Pricing page for details." },
  { q: "How do we get started?", a: "Book a demo using the button on this page, or reach out via WhatsApp or email — we'll scope a plan based on your workflow volume." },
];

function JanMitraPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="A Product by Banisheetla Innovations"
        title="Jan Mitra: Digital Services, Delivered Simply."
        description="Jan Mitra is Banisheetla's workflow automation platform, built for organizations that manage high volumes of requests, applications, or approvals. It replaces manual paperwork and email-based tracking with a structured digital workflow, so requests move from submission to resolution with full visibility at every step."
      >
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" variant="hero">
            <Link to="/contact">Request a Demo</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </PageHero>

      {/* PRODUCT OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Product Overview</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Built for organizations that run on requests and approvals</h2>
          <p className="mt-5 text-muted-foreground">
            Too many organizations still rely on manual, paper-based processes that slow down both
            staff and the people they serve. Jan Mitra replaces that with a structured digital
            workflow — from the first submission to final resolution — with full visibility at
            every step for both applicants and administrators.
          </p>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Key Features</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Everything a workflow needs, in one platform</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Benefits</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Why organizations choose Jan Mitra</h2>
            <ul className="mt-8 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-muted-foreground">{b}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-gradient-subtle p-10 shadow-card">
            <h3 className="font-display text-xl font-bold">Who it's for</h3>
            <div className="mt-6 space-y-5">
              {targetUsers.map((u) => (
                <div key={u.title}>
                  <div className="font-semibold">{u.title}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{u.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">How It Works</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From submission to resolution</h2>
          </div>
          <div className="relative mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block" aria-hidden="true" />
            {steps.map((step, i) => (
              <div key={step.t} className="relative rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="relative z-10 inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary font-bold text-primary-foreground shadow-elegant">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE JAN MITRA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Why Choose Jan Mitra</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">A platform built by people who solve this problem daily</h2>
          <p className="mt-5 text-muted-foreground">
            Jan Mitra is built and supported directly by Banisheetla Innovations — not a third-party
            reseller. That means faster support, direct customization, and a team that understands
            your workflow because we built the platform around exactly this problem.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">FAQ</div>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-semibold">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 text-white">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">See Jan Mitra in action</h2>
          <p className="mt-4 text-white/80">Tell us about your organization — we'll walk you through a live demo.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Request a Demo <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white">
              <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1 h-4 w-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
