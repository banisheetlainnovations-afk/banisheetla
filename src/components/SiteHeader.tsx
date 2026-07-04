import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Internal navigation links ───────────────────────────────────────────────
const nav = [
  { to: "/",         label: "Home" },
  { to: "/about",    label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/careers",  label: "Careers" },
  { to: "/blog",     label: "Blog" },
  { to: "/contact",  label: "Contact" },
] as const;

// ─── Products dropdown entries ────────────────────────────────────────────────
// Each product is an external website — new tab, noopener.
const products = [
  {
    label: "Jan Mitra",
    href: "https://jan-mitra-mu.vercel.app",
    tagline: "Citizen-first governance platform",
  },
] as const;

// ─── Products Dropdown (desktop) ─────────────────────────────────────────────
function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handler(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger — styled exactly like every other nav link */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded-sm"
      >
        Products
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-50 mt-2 min-w-[220px] rounded-xl border border-border bg-background shadow-elegant animate-fade-in"
        >
          {/* Arrow pointer */}
          <div className="absolute -top-1.5 left-4 h-3 w-3 rotate-45 border-l border-t border-border bg-background" aria-hidden="true" />
          <div className="py-2">
            {products.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="group flex items-start gap-3 px-4 py-3 transition-colors hover:bg-muted focus-visible:outline-none focus-visible:bg-muted"
              >
                {/* Product icon dot */}
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary text-[10px] font-bold">
                  JM
                </span>
                <span className="flex-1">
                  <span className="flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-primary">
                    {p.label}
                    <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
                  </span>
                  <span className="mt-0.5 block text-[11px] text-muted-foreground">
                    {p.tagline}
                  </span>
                </span>
              </a>
            ))}
            {/* "A product by BSI" badge at the bottom */}
            <div className="mx-4 mt-1 border-t border-border pt-2 pb-1">
              <p className="text-[10px] text-muted-foreground">
                A product by <span className="font-semibold text-primary">Banisheetla Innovations</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Products Accordion (mobile) ─────────────────────────────────────────────
function ProductsAccordion({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-products-menu"
        className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-foreground/80 hover:bg-muted"
      >
        Products
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div id="mobile-products-menu" className="ml-3 mt-1 border-l-2 border-primary/20 pl-3">
          {products.map((p) => (
            <a
              key={p.href}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onNavigate}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-foreground/75 hover:bg-muted hover:text-primary"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded bg-primary/10 text-[9px] font-bold text-primary shrink-0">
                JM
              </span>
              {p.label}
              <ExternalLink className="ml-auto h-3 w-3 opacity-40" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Main Header ─────────────────────────────────────────────────────────────
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Insert "Products" after "Services" in desktop — its position in the nav
  // array is handled by rendering it manually between Services and Projects.
  const navBefore = nav.filter((n) => ["Home", "About", "Services"].includes(n.label));
  const navAfter  = nav.filter((n) => !["Home", "About", "Services"].includes(n.label));

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group" onClick={() => setOpen(false)}>
          <img src="/bsi-logo.png" alt="BSI logo" className="h-9 w-9 rounded-md object-contain" />
          <div className="leading-tight">
            <div className="font-display text-sm font-bold tracking-tight text-primary">Banisheetla</div>
            <div className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">Innovations</div>
          </div>
        </Link>

        {/* ── Desktop Navigation ── */}
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navBefore.map((item) => (
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

          {/* Products dropdown sits between Services and Projects */}
          <ProductsDropdown />

          {navAfter.map((item) => (
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
        </nav>

        <div className="hidden lg:block">
          <Button asChild size="sm" variant="hero">
            <Link to="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
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
            {navBefore.map((item) => (
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

            {/* Products accordion sits between Services and Projects in mobile too */}
            <ProductsAccordion onNavigate={() => setOpen(false)} />

            {navAfter.map((item) => (
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

            <Button asChild className="mt-2" variant="hero">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
