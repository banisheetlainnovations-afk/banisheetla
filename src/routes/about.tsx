import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Lightbulb, Users, Award, ShieldCheck, HandshakeIcon } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import aboutImg from "@/assets/about.jpg";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Banisheetla Innovations" },
      { name: "description", content: "Learn about Banisheetla Innovations: our mission, vision, and core values driving technology and construction excellence." },
      { property: "og:title", content: "About Banisheetla Innovations" },
      { property: "og:description", content: "Our mission, vision, and the values that guide our work." },
      { property: "og:url", content: absUrl("/about") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/about") }],
  }),
  component: AboutPage,
});

const values = [
  { icon: ShieldCheck, label: "Integrity" },
  { icon: Lightbulb, label: "Innovation" },
  { icon: HandshakeIcon, label: "Customer Success" },
  { icon: Award, label: "Excellence" },
  { icon: Heart, label: "Accountability" },
  { icon: Users, label: "Collaboration" },
];

function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Bridging business challenges with practical solutions" description="Banisheetla Innovations Private Limited is committed to delivering innovative technology and construction solutions that create measurable business value." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Company Overview</h2>
            <p className="mt-5 text-muted-foreground">
              Banisheetla Innovations Private Limited is committed to delivering innovative technology and construction solutions that create measurable business value.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to bridge the gap between business challenges and practical solutions through technology, expertise, and execution excellence.
            </p>
          </div>
          <img src={aboutImg} alt="Team collaboration" width={1280} height={896} loading="lazy" className="rounded-2xl shadow-elegant" />
        </div>
      </section>

      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl border border-border bg-card p-10 shadow-card">
            <Target className="h-10 w-10 text-primary-glow" />
            <h3 className="mt-5 font-display text-2xl font-bold">Mission</h3>
            <p className="mt-3 text-muted-foreground">To empower organisations through innovation, technology, and reliable project delivery.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-10 shadow-card">
            <Eye className="h-10 w-10 text-primary-glow" />
            <h3 className="mt-5 font-display text-2xl font-bold">Vision</h3>
            <p className="mt-3 text-muted-foreground">To become a globally trusted partner in digital transformation and infrastructure development.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-glow">Core Values</div>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">The principles that guide every project</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.label} className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:shadow-card">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
                <v.icon className="h-5 w-5" />
              </div>
              <span className="font-display text-lg font-semibold">{v.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
