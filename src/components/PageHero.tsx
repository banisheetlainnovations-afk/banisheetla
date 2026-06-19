import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 80% 60%, rgba(120,200,220,0.18), transparent 45%)",
      }} />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
        {eyebrow && <div className="text-xs font-semibold uppercase tracking-[0.25em] text-accent animate-fade-in">{eyebrow}</div>}
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl animate-fade-up">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80 animate-fade-up" style={{ animationDelay: "0.1s" }}>{description}</p>}
        {children && <div className="mt-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>{children}</div>}
      </div>
    </section>
  );
}
