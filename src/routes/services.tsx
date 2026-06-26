import { createFileRoute, Link } from "@tanstack/react-router";
import { Globe, Construction, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import { services } from "@/lib/services-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Construction, Web & Software Development | BSI" },
      { name: "description", content: "Road & building construction, equipment hire, website development, mobile apps, software, IT consulting, ServiceNow, AI, and cloud & data services — all from one accountable team." },
      { property: "og:title", content: "Services — Banisheetla Innovations" },
      { property: "og:description", content: "Explore BSI's construction and technology service lines, from road building to ServiceNow and AI." },
      { property: "og:url", content: absUrl("/services") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/services") }],
  }),
  component: ServicesPage,
});

const groups = [
  { icon: Globe, title: "IT Services" as const },
  { icon: Construction, title: "Construction Services" as const },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovate • Build • Elevate"
        title="One company. Endless solutions."
        description="From roads and high-rises to full-stack technology — BSI delivers across every domain you need."
      />

      <section className="mx-auto max-w-7xl space-y-20 px-4 py-20 sm:px-6 lg:px-8">
        {groups.map((g) => {
          const items = services.filter((s) => s.category === g.title);
          return (
            <div key={g.title}>
              <div className="flex items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                    <g.icon className="h-7 w-7" />
                  </div>
                  <h2 className="font-display text-2xl font-bold sm:text-3xl">{g.title}</h2>
                </div>
              </div>
              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((it) => (
                  <div key={it.slug} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                      <it.icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{it.tagline}</p>
                    <Link to="/services/$slug" params={{ slug: it.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <div className="rounded-3xl bg-gradient-hero p-10 text-center text-white sm:p-14">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Have a project in mind?</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">Tell us your scope and timeline — we'll get back with a free, itemized quote.</p>
          <div className="mt-7">
            <Button asChild size="lg" variant="hero"><Link to="/contact">Request a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
