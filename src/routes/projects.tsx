import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import enterpriseImg from "@/assets/project-enterprise.webp";
import constructionImg from "@/assets/project-construction.webp";
import digitalImg from "@/assets/project-digital.webp";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Banisheetla Innovations" },
      { name: "description", content: "Featured projects across enterprise technology, construction, and digital transformation." },
      { property: "og:title", content: "Featured Projects — Banisheetla Innovations" },
      { property: "og:description", content: "A selection of our work across technology and infrastructure." },
      { property: "og:url", content: absUrl("/projects") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/projects") }],
  }),
  component: ProjectsPage,
});

const projects = [
  { img: enterpriseImg, industry: "Technology", title: "Enterprise Service Management Transformation", desc: "Implemented workflow automation and enterprise service management solutions to streamline IT and business operations." },
  { img: constructionImg, industry: "Construction", title: "Commercial Building Project", desc: "Delivered modern commercial infrastructure with quality, safety standards, and efficient execution." },
  { img: digitalImg, industry: "Manufacturing", title: "Digital Transformation Initiative", desc: "Automated business processes that improve operational efficiency and create real-time visibility for leadership." },
];

function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Projects" title="Featured Projects" description="A glimpse into the outcomes we've delivered for clients across industries." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-elegant">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} width={1280} height={896} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{p.industry}</div>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
