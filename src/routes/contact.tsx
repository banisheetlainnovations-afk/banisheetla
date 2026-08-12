import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY } from "@/lib/constants";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Banisheetla Innovations" },
      { name: "description", content: "Get in touch with Banisheetla Innovations Private Limited. Product demos, service inquiries, and general questions." },
      { property: "og:title", content: "Contact Banisheetla Innovations" },
      { property: "og:description", content: "Reach our team for a Jan Mitra demo, service inquiries, or a consultation." },
      { property: "og:url", content: absUrl("/contact") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/contact") }],
  }),
  component: ContactPage,
});

const services = ["Jan Mitra Demo", "ServiceNow Consulting", "AI Solutions", "Software Development", "IT Consulting", "Other"];

function ContactPage() {
  const [sending, setSending] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Build Something Great Together"
        description="Tell us about your workflow challenge or project. Our team typically responds within one business day."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h2 className="font-display text-xl font-bold">Head Office</h2>
              <p className="mt-2 text-sm text-muted-foreground">{COMPANY.name}</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-accent" />
                  <a href={COMPANY.emailHref} className="break-all hover:text-primary">{COMPANY.email}</a>
                </li>
              </ul>
              <a
                href={COMPANY.whatsapp}
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                WhatsApp Now
              </a>
            </div>
          </aside>

          <form
            className="rounded-2xl border border-border bg-card p-8 shadow-card lg:col-span-2"
            onSubmit={async (e) => {
              e.preventDefault();
              setSending(true);
              const fd = new FormData(e.currentTarget);
              try {
                const { supabase } = await import("@/integrations/supabase/client");
                const { error } = await supabase.from("contact_submissions").insert({
                  name:    String(fd.get("name") ?? ""),
                  phone:   String(fd.get("phone") ?? ""),
                  email:   String(fd.get("email") ?? ""),
                  service: String(fd.get("service") ?? ""),
                  message: String(fd.get("message") ?? ""),
                });
                if (error) throw error;
                toast.success("Message sent", { description: "We'll get back to you shortly." });
                (e.target as HTMLFormElement).reset();
              } catch {
                toast.error("Something went wrong", { description: "Please try WhatsApp or email us directly." });
              } finally {
                setSending(false);
              }
            }}
          >
            <h2 className="font-display text-2xl font-bold">Request a Quote</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor="c-name">Name</Label><Input id="c-name" name="name" required className="mt-2" /></div>
              <div><Label htmlFor="c-phone">Phone</Label><Input id="c-phone" name="phone" type="tel" required className="mt-2" /></div>
              <div><Label htmlFor="c-email">Email</Label><Input id="c-email" name="email" type="email" required className="mt-2" /></div>
              <div><Label htmlFor="c-company">Company (optional)</Label><Input id="c-company" name="company" className="mt-2" /></div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-service">Service Required</Label>
                <select id="c-service" name="service" required className="mt-2 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" name="message" rows={5} required className="mt-2" placeholder="Tell us about your project, scope and timeline…" />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" size="lg" variant="hero" disabled={sending}>{sending ? "Sending…" : "Request Quote"}</Button>
              <a
                href={COMPANY.whatsapp}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                WhatsApp Now
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
