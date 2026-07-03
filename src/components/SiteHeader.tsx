import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers", label: "Careers" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

// Jan Mitra is a separate website — kept as an external constant so the URL
// can be updated in one place if the domain ever changes.
const JAN_MITRA_URL = "https://jan-mitra-mu.vercel.app";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <img
            src="/bsi-logo.png"
            alt="BSI logo"
            className="h-9 w-9 rounded-md object-contain"
          />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight text-primary">Banisheetla</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Innovations</div>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          {/* Jan Mitra — external link, same font/size/hover as internal nav items */}
          <a
            href={JAN_MITRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jan Mitra (opens in new tab)"
            className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary"
          >
            Jan Mitra
            <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
          </a>
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="hero">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile Navigation ── */}
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted"
                activeProps={{ className: "text-primary bg-muted" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            {/* Jan Mitra — external link in mobile menu, same style as internal items */}
            <a
              href={JAN_MITRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              aria-label="Jan Mitra (opens in new tab)"
              className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted"
            >
              Jan Mitra
              <ExternalLink className="h-4 w-4 opacity-60" aria-hidden="true" />
            </a>
            <Button asChild className="mt-2" variant="hero">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
