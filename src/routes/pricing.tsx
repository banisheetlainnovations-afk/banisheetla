import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/lib/constants";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Banisheetla Innovations" },
      { name: "description", content: "Pricing for Jan Mitra and our SaaS solutions. Every plan is scoped to your organization's actual workflow volume." },
      { property: "og:title", content: "Pricing — Banisheetla Innovations" },
      { property: "og:description", content: "Simple, scoped pricing for Jan Mitra and our workflow automation platform." },
      { property: "og:url", content: absUrl("/pricing") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/pricing") }],
  }),
  component: PricingPage,
});

const plans = [
  {
    name: "Starter",
    blurb: "For teams piloting digital workflows on a single department or use case.",
    features: [
      "Online application submission",
      "Basic status tracking for applicants",
      "Admin dashboard",
      "Email support",
    ],
  },
  {
    name: "Growth",
    blurb: "For organizations running Jan Mitra across multiple departments.",
    features: [
      "Everything in Starter",
      "Automated routing and approvals",
      "SLA tracking and analytics dashboard",
      "Document upload and verification",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    blurb: "For government bodies and large enterprises with custom integration needs.",
    features: [
      "Everything in Growth",
      "Custom integrations with existing systems",
      "Dedicated onboarding and training",
      "Custom SLAs and support agreements",
    ],
  },
];

function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing, scoped to your organization"
        description="Every deployment of Jan Mitra is different — request rates, department count, and integration needs all affect cost. Talk to us and we'll scope a plan that fits."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-8 shadow-card ${
                plan.highlighted
                  ? "border-primary bg-card ring-2 ring-primary/30"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="mt-4 font-display text-2xl font-bold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.blurb}</p>
              <div className="mt-6 text-2xl font-bold text-primary">Contact for pricing</div>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8 w-full" variant={plan.highlighted ? "hero" : "outline"}>
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-gradient-subtle p-8 text-center">
          <h3 className="font-display text-xl font-bold">Not sure which plan fits?</h3>
          <p className="mt-2 text-muted-foreground">
            Tell us about your organization and workflow volume — we'll recommend the right scope.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Book a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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
