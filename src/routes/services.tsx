import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/services-data";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Banisheetla Innovations" },
      { name: "description", content: "ServiceNow consulting, AI solutions, custom software development, and IT consulting from Banisheetla Innovations." },
      { property: "og:title", content: "Services — Banisheetla Innovations" },
      { property: "og:description", content: "Cloud-native SaaS and IT services for enterprise and government." },
      { property: "og:url", content: absUrl("/services") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/services") }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovate • Build • Elevate"
        title="Cloud-native SaaS and IT services"
        description="From workflow automation to enterprise integrations — we deliver the technology your organization needs to modernize."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold sm:text-3xl">IT & SaaS Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.slug} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-gradient-subtle p-10 text-center">
          <h3 className="text-xl font-bold">Have a project in mind?</h3>
          <p className="mt-2 text-muted-foreground">Tell us your scope and timeline — we'll get back with a free, itemized quote.</p>
          <Button asChild size="lg" variant="hero" className="mt-6">
            <Link to="/contact">Request a Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
