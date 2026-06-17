import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PageShell, PageHeader } from "@/components/page-shell";
import {
  Code2, Calculator, Layers, Megaphone, Palette, GraduationCap,
  ArrowRight, Plus, Minus, ExternalLink, CheckCircle2,
} from "lucide-react";

import ehLogo from "@/assets/ehhospital.png";
import emboloLogo from "@/assets/embolo-logo-white.png";
import voraLogo from "@/assets/vora .png";

export const Route = createFileRoute("/services")({
  head: () => ({
    title: "Aione Spark — Modern Web Design & Digital Growth",
    meta: [
      { name: "description", content: "Aione Spark builds modern, high-performance websites and digital solutions to grow your business online." },
      { property: "og:title", content: "Aione Spark — Modern Web Design & Digital Growth" },
      { property: "og:description", content: "We create fast, responsive and scalable websites for startups and businesses." },
    ],
  }),
  component: ServicesPage,
});

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "Tailor-made software solutions designed to streamline operations, improve efficiency, and address unique business requirements.",
    
  },
  {
    icon: Calculator,
    title: "Education Software Solutions",
    text: "Comprehensive educational platforms including school management systems, learning portals, and digital tools for modern institutions.",
   
  },
  {
    icon: Layers,
    title: "Web & Mobile App Development",
    text: "Responsive websites and powerful mobile applications built to deliver seamless user experiences across all devices.",
   
  },
  {
    icon: Megaphone,
    title: "Digital Advertising Solutions",
    text: "Strategic digital marketing campaigns, social media promotions, and performance-driven advertising to grow your brand online.",
   
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    text: "Modern, intuitive, and visually engaging interfaces crafted to enhance user satisfaction and boost conversions.",
    
  },
  {
    icon: GraduationCap,
    title: "IT Career Support",
    text: "Professional training, mentorship, and career guidance to help aspiring IT professionals build successful careers in technology.",
    
  },
];

const stats = [
  { value: "200+", label: "Projects delivered" },
  { value: "6",    label: "Service verticals"  },
  { value: "98%",  label: "Client retention"   },
];

const projects = [
  {
    title: "Vora Creative",
    category: "Business Website",
    desc: "A modern corporate website designed to showcase creative services, strengthen brand identity, and provide a seamless user experience across devices.",
    tag: "Creative Agency",
    year: "2025",
    logo: voraLogo,
  },
  {
    title: "Embolo Sanitary",
    category: "Sanitary Products Website",
    desc: "Professional product-focused website developed for a sanitaryware brand, featuring product showcases, company information, and a responsive design experience.",
    tag: "Business",
    year: "2025",
    logo: emboloLogo,
  },
  {
    title: "EH Hospital",
    category: "Healthcare Platform",
    desc: "A professional healthcare website built to showcase medical services, specialist departments, doctor information, and patient-focused digital experiences.",
    tag: "Healthcare",
    year: "2025",
    logo: ehLogo,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Requirement Analysis",
    text: "We understand your business goals, technical needs, and project scope in detail before starting development.",
  },
  {
    num: "02",
    title: "Planning & Strategy",
    text: "We define system architecture, technology stack, and project roadmap to ensure a smooth development process.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    text: "We create modern, user-friendly designs focused on better user experience and engagement.",
  },
  {
    num: "04",
    title: "Development & Testing",
    text: "We build scalable applications with continuous testing to ensure performance, security, and reliability.",
  },
  {
    num: "05",
    title: "Deployment & Support",
    text: "We deploy your application and provide ongoing support, maintenance, and improvements.",
  },
];


// ─── FAQ accordion item ────────────────────────────────────────────────────────


// ─── Sticky CTA ────────────────────────────────────────────────────────────────

function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
        >
          <div className="flex items-center gap-3 rounded-full border border-border bg-surface/80 px-4 py-2.5 shadow-xl backdrop-blur-md">
            <span className="hidden text-sm font-medium text-muted-foreground sm:block">
              Ready to build something great?
            </span>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-brand-foreground transition-all duration-300 hover:scale-105"
              style={{ background: "var(--gradient-brand)", boxShadow: "var(--shadow-brand)" }}
            >
              Get Free Quote
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

function ServicesPage() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <PageShell>
      <PageHeader
        eyebrow="What we do"
        title="Services to"
        accent="Transform"
        subtitle="From custom software to career support — a complete suite of technology services for modern businesses."
      />

      {/* ── Services Grid ──────────────────────────────────────── */}
      <section ref={ref} className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
        <div className="grid gap-3 md:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-xl"
            >
              <div
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-10"
                style={{ background: "var(--gradient-brand)" }}
              />

              <div className="mb-5 flex items-start justify-between">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground"
                >
                  <s.icon className="h-5 w-5" />
                </motion.div>
               
              </div>

              <h3 className="text-base font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
{/* 
              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-muted-foreground transition-all duration-300 group-hover:text-brand">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </div> */}
            </motion.div>
          ))}
        </div>

        {/* Stats + CTA bar */}
      
      </section>

      {/* ── Featured Projects ───────────────────────────────────── */}
      <section className="relative z-10 mx-auto mt-20 max-w-5xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-1 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground"
            >
              Our work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.45 }}
              className="text-2xl font-bold"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-all duration-300 hover:gap-2.5"
            >
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface/60 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/25 hover:shadow-xl"
            >
              {/* Image placeholder strip */}
              <div className="relative h-36 overflow-hidden bg-brand/5">
  <div
    className="absolute inset-0 opacity-20 transition-opacity duration-300 group-hover:opacity-35"
    style={{ background: "var(--gradient-brand)" }}
  />

  <div className="absolute inset-0 flex items-center justify-center">
    <img
      src={p.logo}
      alt={p.title}
      className="h-20 w-20 object-contain transition-transform duration-300 group-hover:scale-110"
    />
  </div>

  <span className="absolute left-3 top-3 rounded-full border border-border bg-surface/80 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground backdrop-blur">
    {p.year}
  </span>
</div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {p.category}
                    </p>
                    <h3 className="mt-0.5 text-base font-bold leading-tight">{p.title}</h3>
                  </div>
                  <span className="mt-0.5 shrink-0 rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">
                    {p.tag}
                  </span>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
               
              </div>
            </motion.div>
          ))}
        </div>
      </section>

{/* ── 6. PROCESS ── */}
     <section className="relative z-10 mx-auto mt-14 max-w-5xl px-6">
  <div className="mb-8 text-center">
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
      How We Work
    </span>

    <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
      Our Process
    </h2>

    <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
      A simple and transparent workflow to turn your ideas into powerful digital solutions.
      We ensure clarity, speed, and quality at every stage.
    </p>
  </div>

  <div className="relative">

    {/* Timeline line */}
    <div className="absolute left-[18px] top-0 hidden h-full w-px bg-gradient-to-b from-brand/40 via-brand/20 to-transparent md:block" />

    <div className="space-y-4">
      {processSteps.map((step) => (
        <div key={step.num} className="group relative flex gap-5">

          {/* Step number */}
          <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-background text-xs font-bold text-brand ring-4 ring-background transition-all duration-200 group-hover:border-brand group-hover:bg-brand/10">
            {step.num}
          </div>

          {/* Content */}
          <div className="flex-1 rounded-2xl border border-white/[0.06] bg-surface/40 p-5 backdrop-blur transition-all duration-200 group-hover:border-brand/20 group-hover:bg-surface/60">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold">{step.title}</h3>
              <CheckCircle2
                className="h-4 w-4 text-brand/30 transition-colors duration-200 group-hover:text-brand"
                strokeWidth={1.75}
              />
            </div>

            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </div>

        </div>
      ))}
    </div>
  </div>
</section>


      {/* ── Sticky CTA ──────────────────────────────────────────── */}
      <StickyCta />
    </PageShell>
  );
}