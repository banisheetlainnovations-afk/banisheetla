import { Link } from "@tanstack/react-router";
import { Linkedin, Instagram, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { COMPANY } from "@/lib/constants";

const serviceLinks = [
  { label: "ServiceNow Consulting", slug: "servicenow-consulting" },
  { label: "AI Solutions", slug: "ai-solutions" },
  { label: "Software Development", slug: "software-development" },
  { label: "IT Consulting", slug: "it-consulting" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[oklch(0.14_0.05_255)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src="/bsi-logo.png" alt="BSI" className="h-11 w-11 rounded-md object-contain" />
              <div>
                <div className="font-display text-lg font-bold">Banisheetla Innovations</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)]">Innovate • Build • Elevate</div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm text-white/70">
              Cloud-native SaaS for government and enterprise workflow automation.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { Icon: Linkedin, href: COMPANY.linkedin, label: "LinkedIn" },
                { Icon: Instagram, href: COMPANY.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition hover:border-[var(--color-gold)]/60 hover:bg-white/5">
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
              <li><Link to="/jan-mitra" className="hover:text-[var(--color-gold)]">Jan Mitra</Link></li>
              <li><Link to="/pricing" className="hover:text-[var(--color-gold)]">Pricing</Link></li>
              <li><Link to="/careers" className="hover:text-[var(--color-gold)]">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--color-gold)]">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Services</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              {serviceLinks.map((s) => (
                <li key={s.slug}>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="hover:text-[var(--color-gold)]">{s.label}</Link>
                </li>
              ))}
            </ul>
            <h4 className="mt-6 text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-white/75">
              <li><Link to="/privacy" className="hover:text-[var(--color-gold)]">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[var(--color-gold)]">Terms of Service</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2"><MessageCircle className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><a href={COMPANY.whatsappBase} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-gold)]">WhatsApp</a></li>
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-[var(--color-gold)]" /><a href={COMPANY.emailHref} className="break-all hover:text-[var(--color-gold)]">{COMPANY.email}</a></li>
            </ul>
            <form onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed", { description: "Thanks — we'll be in touch." }); (e.target as HTMLFormElement).reset(); }} className="mt-6">
              <label htmlFor="footer-newsletter" className="text-xs font-medium text-white/70">Newsletter</label>
              <div className="mt-2 flex gap-2">
                <Input id="footer-newsletter" type="email" required placeholder="you@example.com" className="border-white/20 bg-white/5 text-white placeholder:text-white/40" />
                <Button type="submit" variant="hero">Join</Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row">
          <div>© {COMPANY.copyrightYear()} {COMPANY.name}. All Rights Reserved.</div>
          <div className="font-semibold uppercase tracking-[0.22em] text-[var(--color-gold)]">Innovate • Build • Elevate</div>
        </div>
        <div className="mt-3 flex flex-col items-center justify-center gap-1 text-center text-[11px] text-white/40 sm:flex-row sm:gap-4">
          <span>CIN: {COMPANY.cin}</span>
          <span className="hidden sm:inline">•</span>
          <span>GSTIN: {COMPANY.gstin}</span>
        </div>
      </div>
    </footer>
  );
}
