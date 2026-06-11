import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[600px] w-[1200px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-brand)" }}
      />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent?: string; subtitle: string }) {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-6 pt-10 text-center md:pt-16">
      <div className="mb-4 flex items-center justify-center gap-3 text-brand-glow">
        <span className="h-px w-12 bg-brand-glow/60" />
        <span className="font-serif text-xl italic">{eyebrow}</span>
        <span className="h-px w-12 bg-brand-glow/60" />
      </div>
      <h1 className="text-balance text-3xl font-bold leading-[1.01] tracking-tight md:text-5xl">
        {title}
        {accent && (
          <>
            {" "}
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-text)" }}>
              {accent}
            </span>
          </>
        )}
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{subtitle}</p>
      <div className="mx-auto mt-6 flex items-center justify-center gap-2">
        <span className="h-px w-20 bg-border" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="h-px w-20 bg-border" />
      </div>
    </section>
  );
}
