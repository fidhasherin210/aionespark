import { Link } from "@tanstack/react-router";
import { ArrowRight, Hexagon, Menu } from "lucide-react";
import { useState } from "react";
import aioneSparkLogo from "@/assets/aionespark.png";
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="relative z-20 mx-auto flex max-w-4xl items-center justify-between px-6 py-6">
    <Link to="/" className="flex items-center">
  <img
    src={aioneSparkLogo}
    alt="Aione Spark"
    className="h-8 w-auto object-contain "
  />
</Link>
<button
  onClick={() => setOpen(!open)}
  className="flex items-center justify-center rounded-lg border border-border p-2 md:hidden"
  aria-label="Toggle Menu"
>
  <Menu className="h-5 w-5" />
</button>
      <nav className="hidden items-center gap-8 md:flex">
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            className="group relative text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:font-semibold"
          >
            {l.label}
            <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-brand transition-all group-data-[status=active]:w-6" />
          </Link>
        ))}
      </nav>
     
      {open && (
        <div className="absolute left-4 right-4 top-20 z-30 rounded-2xl border border-border bg-surface p-4 backdrop-blur md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-surface-elevated hover:text-foreground data-[status=active]:bg-surface-elevated data-[status=active]:text-foreground"
              >
                {l.label}
              </Link>
            ))}
           
          </nav>
        </div>
      )}
    </header>
  );
}
