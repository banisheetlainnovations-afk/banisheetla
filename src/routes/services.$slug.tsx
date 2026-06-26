import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug, services } from "@/lib/services-data";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getServiceBySlug(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const s = loaderData;
    const url = absUrl(`/services/${s.slug}`);
    return {
      meta: [
        { title: s.metaTitle },
        { name: "description", content: s.metaDescription },
        { property: "og:title", content: s.metaTitle },
        { property: "og:description", content: s.metaDescription },
        { property: "og:url", content: url },
        { property: "og:image", content: DEFAULT_OG_IMAGE },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            description: s.metaDescription,
            provider: { "@type": "Organization", name: "Banisheetla Innovations Private Limited", url: absUrl("/") },
            areaServed: "IN",
            serviceType: s.title,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absUrl("/") },
              { "@type": "ListItem", position: 2, name: "Services", item: absUrl("/services") },
              { "@type": "ListItem", position: 3, name: s.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: ServiceDetailPage,
  notFoundComponent: () => (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold">Service not found</h1>
      <p className="mt-3 text-muted-foreground">That service page doesn't exist — here's our full list instead.</p>
      <Button asChild size="lg" variant="hero" className="mt-7">
        <Link to="/services">View All Services</Link>
      </Button>
    </section>
  ),
});

function ServiceDetailPage() {
  const service = Route.useLoaderData();
  const related = services.filter((s) => s.category === service.category && s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-hero px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <nav className="flex items-center gap-1.5 text-sm text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to="/services" className="hover:text-white">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-white">{service.title}</span>
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10">
              <service.icon className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">{service.category}</div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">{service.title}</h1>
            </div>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-white/85">{service.tagline}</p>
          <div className="mt-8">
            <Button asChild size="lg" variant="hero">
              <Link to="/contact">Request a Free Quote <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-12 lg:col-span-2">
            <div>
              <h2 className="font-display text-2xl font-bold">Overview</h2>
              <p className="mt-4 text-muted-foreground">{service.overview}</p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">What's Included</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.whatsIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">Our Process</h2>
              <ol className="mt-4 space-y-5">
                {service.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-primary">{i + 1}</div>
                    <div>
                      <div className="font-semibold">{p.step}</div>
                      <p className="mt-0.5 text-sm text-muted-foreground">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold">FAQs</h2>
              <div className="mt-4 space-y-4">
                {service.faqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-border bg-card p-5">
                    <div className="font-semibold">{f.q}</div>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Who it's for</div>
              <p className="mt-3 text-sm">{service.whoItsFor}</p>
              <Button asChild size="lg" variant="hero" className="mt-6 w-full">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Related Services</div>
                <ul className="mt-4 space-y-3">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to="/services/$slug" params={{ slug: r.slug }} className="flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                        <r.icon className="h-4 w-4" /> {r.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
