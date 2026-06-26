import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { absUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Banisheetla Innovations" },
      { name: "description", content: "Get in touch with Banisheetla Innovations Private Limited. Service inquiries, partnerships, and general questions." },
      { property: "og:title", content: "Contact Banisheetla Innovations" },
      { property: "og:description", content: "Reach our team for service inquiries and consultations." },
      { property: "og:url", content: absUrl("/contact") },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: absUrl("/contact") }],
  }),
  component: ContactPage,
});

const services = ["Website / App Development", "IT Consulting", "Road Construction", "Building Construction", "Other"];

function ContactPage() {
  const [sending, setSending] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Build Something Great Together" description="Tell us about your project — construction, equipment or technology. Our team typically responds within one business day." />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="space-y-6 lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-8 shadow-card">
              <h2 className="font-display text-xl font-bold">Head Office</h2>
              <p className="mt-2 text-sm text-muted-foreground">Banisheetla Innovations Private Limited</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-start gap-3"><Phone className="mt-0.5 h-5 w-5 text-accent" /><a href="tel:+919301103436" className="hover:text-primary">+91 9301103436</a></li>
                <li className="flex items-start gap-3"><Mail className="mt-0.5 h-5 w-5 text-accent" /><a href="mailto:info@banisheetla.com" className="break-all hover:text-primary">info@banisheetla.com</a></li>
                <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-5 w-5 text-accent" /><span>H.N. 61, Kunkuri Khurd, Kotchhal, Pratapgarh, Mainpat, Surguja (C.G.), Ambikapur, India 497114</span></li>
              </ul>
              <a
                href="https://wa.me/919301103436?text=Hi%20BSI%2C%20I%27d%20like%20a%20quote."
                target="_blank" rel="noopener noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                WhatsApp Now
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="BSI Location"
                src="https://www.google.com/maps?q=Mainpat,+Surguja,+Chhattisgarh&output=embed"
                width="100%" height="260" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </aside>

          <form
            className="rounded-2xl border border-border bg-card p-8 shadow-card lg:col-span-2"
            onSubmit={(e) => {
              e.preventDefault();
              setSending(true);
              setTimeout(() => {
                setSending(false);
                toast.success("Message sent", { description: "We'll get back to you shortly." });
                (e.target as HTMLFormElement).reset();
              }, 800);
            }}
          >
            <h2 className="font-display text-2xl font-bold">Request a Quote</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div><Label htmlFor="c-name">Name</Label><Input id="c-name" required className="mt-2" /></div>
              <div><Label htmlFor="c-phone">Phone</Label><Input id="c-phone" type="tel" required className="mt-2" /></div>
              <div><Label htmlFor="c-email">Email</Label><Input id="c-email" type="email" required className="mt-2" /></div>
              <div><Label htmlFor="c-company">Company (optional)</Label><Input id="c-company" className="mt-2" /></div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-service">Service Required</Label>
                <select id="c-service" required className="mt-2 flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="c-msg">Message</Label>
                <Textarea id="c-msg" rows={5} required className="mt-2" placeholder="Tell us about your project, scope and timeline…" />
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" size="lg" variant="hero" disabled={sending}>{sending ? "Sending…" : "Request Quote"}</Button>
              <a
                href="https://wa.me/919301103436?text=Hi%20BSI%2C%20I%27d%20like%20a%20quote."
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
