import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const serviceLinks = [
  "Road Construction", "Building Construction", "JCB Services",
  "Transport Services", "Website Development", "Mobile Apps", "Cloud & Data",
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[oklch(0.14_0.05_255)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img
                src="/bsi-logo.png"
                alt="BSI"
                className="h-11 w-11 rounded-md object-contain"
              />
              <div>
                <div className="font-display text-lg font-bold">Banisheetla Innovations</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Innovate • Build • Elevate</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              Construction, transport and IT solutions — delivered end-to-end by one accountable partner.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[var(--color-gold)]/60 hover:bg-white/5">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li><Link to="/about" className="hover:text-[var(--color-gold)]">About</Link></li>
              <li><Link to="/services" className="hover:text-[var(--color-gold)]">Services</Link></li>
              <li><Link to="/projects" className="hover:text-[var(--color-gold)]">Projects</Link></li>
              <li><Link to="/careers" className="hover:text-[var(--color-gold)]">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {serviceLinks.map((s) => <li key={s}><Link to="/services" className="hover:text-[var(--color-gold)]">{s}</Link></li>)}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><a href="tel:+919301103436" className="hover:text-[var(--color-gold)]">+91 9301103436</a></li>
              <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><a href="https://wa.me/919301103436" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">WhatsApp</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><a href="mailto:banisheetlainnovations@gmail.com" className="break-all hover:text-[var(--color-gold)]">banisheetlainnovations@gmail.com</a></li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><span>Kunkuri Khurd, Mainpat, Surguja (C.G.) 497114</span></li>
            </ul>

            <form
              onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed", { description: "Thanks — we'll be in touch." }); (e.target as HTMLFormElement).reset(); }}
              className="mt-6"
            >
              <label className="text-xs font-medium text-white/70">Newsletter</label>
              <div className="mt-2 flex gap-2">
                <Input type="email" required placeholder="you@example.com" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                <Button type="submit" variant="hero">Join</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <div>© 2026 Banisheetla Innovations Private Limited. All Rights Reserved.</div>
          <div className="font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Innovate • Build • Elevate</div>
        </div>
      </div>
    </footer>
  );
}
