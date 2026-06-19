import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Briefcase, GraduationCap, TrendingUp, Clock4, Upload } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Join Banisheetla Innovations" },
      { name: "description", content: "Explore career opportunities at Banisheetla Innovations. We hire across technology, construction, and project management." },
      { property: "og:title", content: "Careers at Banisheetla Innovations" },
      { property: "og:description", content: "Great people create great solutions. Join our team." },
      { property: "og:url", content: "/careers" },
    ],
    links: [{ rel: "canonical", href: "/careers" }],
  }),
  component: CareersPage,
});

const roles = ["Project Manager", "Business Analyst", "Construction Project Engineer"];
const benefits = [
  { icon: TrendingUp, title: "Competitive Compensation" },
  { icon: GraduationCap, title: "Learning & Development" },
  { icon: Briefcase, title: "Career Growth" },
  { icon: Clock4, title: "Flexible Work Environment" },
];

function CareersPage() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <>
      <PageHero eyebrow="Careers" title="Join Our Team" description="At Banisheetla Innovations, we believe great people create great solutions." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Current Opportunities</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r) => (
            <div key={r} className="rounded-xl border border-border bg-card p-6 shadow-card transition hover:border-primary/40 hover:shadow-elegant">
              <Briefcase className="h-6 w-6 text-primary-glow" />
              <h3 className="mt-4 font-display text-lg font-semibold">{r}</h3>
              <p className="mt-1 text-sm text-muted-foreground">Full-time · Hybrid</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-subtle py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold sm:text-4xl">Benefits</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl border border-border bg-card p-6">
                <b.icon className="h-7 w-7 text-accent" />
                <p className="mt-4 font-semibold">{b.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-4xl">Apply Now</h2>
        <p className="mt-2 text-muted-foreground">Submit your details and our team will reach out to qualified candidates.</p>
        <form
          className="mt-8 grid gap-5 rounded-2xl border border-border bg-card p-8 shadow-card"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              toast.success("Application received", { description: "We'll be in touch soon." });
              (e.target as HTMLFormElement).reset();
            }, 800);
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div><Label htmlFor="name">Name</Label><Input id="name" required className="mt-2" /></div>
            <div><Label htmlFor="email">Email</Label><Input id="email" type="email" required className="mt-2" /></div>
            <div><Label htmlFor="phone">Phone</Label><Input id="phone" type="tel" required className="mt-2" /></div>
            <div>
              <Label htmlFor="position">Position</Label>
              <select id="position" required className="mt-2 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>
          </div>
          <div>
            <Label htmlFor="resume">Resume Upload</Label>
            <label htmlFor="resume" className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-input bg-background px-4 py-6 text-sm text-muted-foreground hover:border-primary/40">
              <Upload className="h-4 w-4" /> Click to upload PDF/DOC
            </label>
            <input id="resume" type="file" accept=".pdf,.doc,.docx" className="sr-only" />
          </div>
          <div><Label htmlFor="message">Message</Label><Textarea id="message" rows={4} className="mt-2" /></div>
          <Button type="submit" variant="hero" size="lg" disabled={submitting}>{submitting ? "Submitting…" : "Submit Application"}</Button>
        </form>
      </section>
    </>
  );
}
