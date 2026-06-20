import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Construction, Wrench, Home, Building2, Factory, Hammer,
  Globe, Smartphone, Code2, Cpu, BarChart3, Cloud, ArrowRight, CheckCircle2,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Construction & IT | BSI" },
      { name: "description", content: "Road & building construction plus website, app and software development." },
      { property: "og:title", content: "Services — Banisheetla Innovations" },
      { property: "og:description", content: "Construction and IT solutions under one roof." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const groups = [
  {
    icon: Globe, title: "IT Services",
    items: [
      { icon: Globe, t: "Website Development", d: "Marketing sites, portals, ecommerce." },
      { icon: Smartphone, t: "Mobile App Development", d: "Native and cross-platform apps." },
      { icon: Code2, t: "Software Development", d: "Custom internal tools and platforms." },
      { icon: Cpu, t: "IT Consulting", d: "Architecture, strategy and audits." },
      { icon: BarChart3, t: "Digital Marketing & SEO", d: "Performance marketing and SEO." },
      { icon: Cloud, t: "Cloud & Data Management", d: "Cloud migration and data ops." },
    ],
  },
  {
    icon: Construction, title: "Construction Services",
    items: [
      { icon: Construction, t: "Road Construction", d: "Highways, rural roads and resurfacing." },
      { icon: Wrench, t: "Repair & Maintenance", d: "Patchwork, structural repair, upkeep." },
      { icon: Home, t: "Residential Construction", d: "Homes, villas and apartment blocks." },
      { icon: Building2, t: "Commercial Construction", d: "Offices, retail and mixed-use buildings." },
      { icon: Factory, t: "Industrial Projects", d: "Factories, warehouses and access works." },
    ],
  },
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
        {groups.map((g) => (
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
              {g.items.map((it) => (
                <div key={it.t} className="group rounded-2xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                    <it.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{it.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                  <Link to="/contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}

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
