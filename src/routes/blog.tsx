import { createFileRoute } from "@tanstack/react-router";
import { Calendar, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Banisheetla Innovations" },
      { name: "description", content: "Latest insights on digital transformation, construction trends, ServiceNow, AI and project management." },
      { property: "og:title", content: "Insights — Banisheetla Innovations" },
      { property: "og:description", content: "Trends and analysis across technology and construction." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const categories = ["Digital Transformation", "ServiceNow", "Cloud Computing", "Artificial Intelligence", "Project Management", "Construction Trends"];
const articles = [
  { title: "The Future of Digital Transformation", category: "Digital Transformation", date: "Jun 5, 2026", excerpt: "How automation, AI and cloud-native architectures are reshaping enterprise operations across industries." },
  { title: "Modern Construction Technology Trends", category: "Construction Trends", date: "May 22, 2026", excerpt: "From BIM to prefab to IoT-enabled sites — the technologies transforming how we build." },
];

function BlogPage() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Latest Insights" description="Ideas, perspectives and lessons from our work across technology and construction." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <span key={c} className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">{c}</span>
          ))}
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {articles.map((a) => (
            <article key={a.title} className="group rounded-2xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-accent/15 px-2.5 py-1 font-semibold uppercase tracking-wider text-accent-foreground">{a.category}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {a.date}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug transition group-hover:text-primary">{a.title}</h2>
              <p className="mt-3 text-muted-foreground">{a.excerpt}</p>
              <div className="mt-5 inline-flex items-center text-sm font-semibold text-primary">Read article <ArrowRight className="ml-1 h-4 w-4 transition group-hover:translate-x-1" /></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
