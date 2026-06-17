import { Link } from "@tanstack/react-router";
import { Hexagon } from "lucide-react";
import aioneSparkLogo from "@/assets/aionespark.png";
export function SiteFooter() {
  return (
    <footer className="relative z-10 mt-20 border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">
        <div>
       <Link to="/" className="flex items-center">
  <img
    src={aioneSparkLogo}
    alt="Aione Spark"
    className="h-8 w-auto object-contain"
  />
</Link>
   <p className="mt-3 text-sm text-muted-foreground">
  Empowering businesses with innovative technology solutions that drive growth, efficiency, and digital transformation.

</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/home" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Services</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Custom Web Development</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <li>Software Solutions</li>
          </ul>
        </div>
       <div>
  <h4 className="text-sm font-semibold">Contact</h4>
  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
    <li>
      <a href="mailto:info@aionespark.com" className="hover:underline">
        info@aionespark.com
      </a>
    </li>
    <li>
      <a href="tel:+919744494677" className="hover:underline">
        +91 9744494677
      </a>
    </li>
<li>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Elettil+Calicut"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline"
  >
    Elettil, Calicut
  </a>
</li>
  </ul>
</div>
      </div>
 <p className="text-sm text-muted-foreground text-center leading-relaxed pb-4">
  Designed and developed by{" "}
  <a
    href="https://www.aionespark.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline font-medium"
  >
    Aione Spark TechHive LLP
  </a>{" "}
  © 2026
</p>
    </footer>
  );
}
