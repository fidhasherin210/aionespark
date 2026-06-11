import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/page-shell";
import aboutTeam from "@/assets/aione.jpeg";
import {
  Target, Sparkles, Users, Award, Rocket,
  Globe, ShieldCheck, Zap, Code2, BarChart3, Smartphone,
  CheckCircle2, ArrowRight, Star, Quote,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
 meta: [
  { title: "Aione Spark — Modern Web Design & Digital Growth" },
  { name: "description", content: "Aione Spark builds modern, high-performance websites and digital solutions to grow your business online." },
  { property: "og:title", content: "Aione Spark — Modern Web Design & Digital Growth" },
  { property: "og:description", content: "We create fast, responsive and scalable websites for startups and businesses." },
],
  }),
  component: AboutPage,
});

const stats = [
  { value: "50+", label: "Projects shipped" },
  { value: "98%",  label: "Client satisfaction" },
  { value: "2+",  label: "Years of craft" },
  { value: "10+",  label: "Team members" },
];
const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    text: "We develop tailor-made software solutions designed to fit your business requirements and scale with growth.",
    color: "sky",
  },
  {
    icon: BarChart3,
    title: "Education Software Solutions",
    text: "Smart and efficient software systems for schools, colleges, and educational institutions to simplify management.",
    color: "sky",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    text: "Modern, responsive web applications and cross-platform mobile apps built for performance and user experience.",
    color: "sky",
  },
  {
    icon: Globe,
    title: "Digital Advertising Solutions",
    text: "Boost your brand visibility with targeted digital marketing and advertising strategies.",
    color: "sky",
  },
  {
    icon: Sparkles,
    title: "UI/UX Design",
    text: "Creative and user-friendly interface designs focused on engagement and smooth user experience.",
    color: "sky",
  },
  {
    icon: Users,
    title: "IT Career Support",
    text: "Guidance, training, and support for building successful careers in the IT industry.",
    color: "sky",
  },
];
const colorMap: Record<string, { bg: string; text: string; border: string; glow: string }> = {
  sky:     { bg: "bg-sky-500/10",     text: "text-sky-400",     border: "border-sky-500/20",     glow: "from-sky-500/15 to-sky-500/0" },
  violet:  { bg: "bg-violet-500/10",  text: "text-violet-400",  border: "border-violet-500/20",  glow: "from-violet-500/15 to-violet-500/0" },
  pink:    { bg: "bg-pink-500/10",    text: "text-pink-400",    border: "border-pink-500/20",    glow: "from-pink-500/15 to-pink-500/0" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", glow: "from-emerald-500/15 to-emerald-500/0" },
  amber:   { bg: "bg-amber-500/10",   text: "text-amber-400",   border: "border-amber-500/20",   glow: "from-amber-500/15 to-amber-500/0" },
  rose:    { bg: "bg-rose-500/10",    text: "text-rose-400",    border: "border-rose-500/20",    glow: "from-rose-500/15 to-rose-500/0" },
};

const whyUs = [
  {
    icon: Zap,
    title: "Fast & Reliable Delivery",
    text: "We deliver projects on time without compromising quality, ensuring smooth and efficient execution.",
  },
  {
    icon: Target,
    title: "Business-Focused Solutions",
    text: "Every solution we build is aligned with your business goals and long-term growth strategy.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    text: "A skilled and dedicated team of developers and designers focused on building high-quality digital products.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    text: "We follow best practices and testing standards to ensure reliable and scalable solutions.",
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



function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Our Story"
        title="Built for"
        accent="Growth"
        subtitle="A studio of designers and engineers shaping the future of business online."
      />

      {/* ── 1. HERO ── */}
      <section className="relative z-10 mx-auto mt-10 max-w-5xl px-4">
  <div className="grid gap-6 md:grid-cols-2 md:gap-8 md:items-center">

    {/* Text */}
    <div className="space-y-4">
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Who We Are
        </span>

        <h2
          className="mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          WE PROVIDE{" "}
          <span className="bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent block">
            INNOVATIVE IT SOLUTIONS
          </span>
        </h2>

        <h3 className="mt-1 text-xl font-semibold text-muted-foreground md:text-2xl">
          FOR YOUR BUSINESS
        </h3>
      </div>

      <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">
        Aione Spark is a dedicated IT company providing innovative and reliable technology solutions.
        We help businesses succeed with customized services — including software development,
        web applications, and mobile app solutions — built on quality, efficiency, and customer satisfaction.
      </p>
    </div>

    {/* Image */}
    <div className="relative">
      <div
        className="pointer-events-none absolute -inset-3 -z-20 rounded-2xl opacity-25 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, #7c3aed 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #0ea5e9 0%, transparent 60%)",
        }}
      />

      <div className="relative overflow-hidden rounded-xl">
        <img
          src={aboutTeam}
          alt="Aione Spark team"
          width={800}
          height={520}
          loading="lazy"
          className="w-full rounded-xl border border-white/10 object-cover transition-transform duration-700 hover:scale-105"
          style={{
            boxShadow:
              "0 20px 50px -10px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        />

        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 rounded-b-xl bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      {/* Badge 1 */}
      <div className="absolute -bottom-3 -right-3 rounded-lg border border-brand/30 bg-surface-elevated/95 p-2 backdrop-blur shadow-md md:-bottom-4 md:-right-4 md:p-3">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-brand/20 p-1.5">
            <Rocket className="h-3.5 w-3.5 text-brand md:h-4 md:w-4" />
          </div>
          <div>
            <div className="text-base font-bold md:text-lg">Reliable</div>
            <div className="text-[10px] text-muted-foreground whitespace-nowrap md:text-xs">
              IT Solutions Partner
            </div>
          </div>
        </div>
      </div>

      {/* Badge 2 */}
      {/* <div className="absolute -top-3 -left-3 rounded-full bg-brand/90 px-2 py-1 text-[10px] font-semibold text-white shadow-md backdrop-blur md:-top-4 md:-left-4 md:px-2.5 md:py-1 md:text-[11px]">
        <div className="flex items-center gap-1">
          <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
          Trusted IT Services Company
        </div>
      </div> */}
    </div>

  </div>
</section>

      {/* ── 2. STORY ── */}
      <section className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">Our Story</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            A decade of building the{" "}
            <span className="bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">web's future</span>
          </h2>
         <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
  Aione Spark is a dedicated IT company providing innovative and reliable technology solutions.
  We started with a simple goal — to help businesses grow through technology.
  Today, we deliver custom software, web applications, and mobile solutions for clients
  by focusing on quality, efficiency, and long-term value.
</p>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center bg-background/80 px-6 py-7 text-center backdrop-blur">
              <span className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-bold tracking-tight text-transparent">{s.value}</span>
              <span className="mt-1 text-xs font-medium tracking-wide text-muted-foreground/70 uppercase">{s.label}</span>
            </div>
          ))}
        </div>
      </section>


{/* ── 7. FOUNDER'S MESSAGE ── */}
<section className="relative z-10 mx-auto mt-14 max-w-3xl px-4">
  <div className="mb-8 text-center">
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
      <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
      Founder's Message
    </span>

    <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
      A word from our{" "}
      <span className="bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">
        Founder
      </span>
    </h2>
  </div>

  <div className="group relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-brand/30 bg-surface-elevated p-8 transition-all duration-300 hover:border-brand/50">
    <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl" />

    <div className="relative space-y-4">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/40 bg-brand/10 text-sm font-bold text-brand">
          M
        </div>

        <div>
          <p className="text-sm font-semibold leading-none">Munavar Busthan</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Founder & CEO, Aione Spark TechHive LLP
          </p>
        </div>

       
      </div>

      <div className="border-t border-white/[0.06]" />

      {/* Quote */}
      <div className="flex items-center gap-2">
        <div className="h-px w-6 bg-gradient-to-r from-brand to-transparent" />
        <Quote className="h-4 w-4 text-brand/60" />
      </div>

      <blockquote className="border-l-2 border-brand/40 pl-3 text-sm italic leading-relaxed text-foreground/90">
        "Technology is not just about software and systems; it's about creating opportunities, solving problems, and helping businesses achieve their full potential."
      </blockquote>

      {/* Text */}
      <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
       <p>
When I started Aione Spark, I had a simple vision in mind — technology should not be limited to large corporations; it should be accessible and beneficial to businesses of all sizes. I noticed that many organizations struggled to find solutions that were reliable, practical, and tailored to their specific needs. Those experiences became the foundation of what Aione Spark is today.
</p>

<p>
 We view every project we undertake not merely as a task, but as a responsibility. By understanding each client's goals and challenges, we strive to deliver solutions that create real value for their business. Rather than offering one-size-fits-all products, our approach is to build systems that are carefully designed to meet the unique requirements of every client.
</p>

<p>
  As Aione Spark continues to grow, our core values remain unchanged — integrity, reliability, quality, and customer satisfaction. I would like to sincerely thank all our clients for the trust they place in us. Our greatest goal is to remain a dependable technology partner, supporting your journey toward growth and success.
</p>
      </div>

    </div>
  </div>
</section>






      {/* ── 3. MISSION / VISION ── */}
     <section className="relative z-10 mx-auto mt-14 max-w-5xl px-6">
  <div className="mb-8 text-center">
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
      What Drives Us
    </span>
    <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
      Mission &amp; Vision
    </h2>
  </div>

  <div className="grid gap-5 md:grid-cols-2">

    {/* Mission */}
    <div className="group relative overflow-hidden rounded-2xl border border-brand/30 bg-surface-elevated p-8 transition-all duration-300 hover:border-brand/50">
      <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:bg-brand/20" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Mission
        </span>

        <h3 className="mt-4 text-xl font-bold tracking-tight">Our Mission</h3>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          Our mission is to deliver innovative, reliable, and scalable IT solutions that help businesses grow.
          We focus on building high-quality software, web applications, and mobile solutions that improve efficiency,
          enhance performance, and create long-term value for our clients.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="group relative overflow-hidden rounded-2xl border border-brand/30 bg-surface-elevated p-8 transition-all duration-300 hover:border-brand/50">
      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand/10 blur-2xl transition-all duration-500 group-hover:bg-brand/20" />

      <div className="relative">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Vision
        </span>

        <h3 className="mt-4 text-xl font-bold tracking-tight">Our Vision</h3>

        <p className="mt-3 leading-relaxed text-muted-foreground">
          To become a trusted global IT partner delivering world-class digital solutions.
          We aim to empower every business—regardless of size—with modern technology,
          helping them transform digitally and achieve sustainable growth.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* ── 4. SERVICES ── */}
      <section className="relative z-10 mx-auto mt-14 max-w-5xl px-6">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">What we do</span>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">Our services</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            End-to-end digital expertise under one roof — so you never have to coordinate a dozen vendors.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {services.map((s) => {
            const c = colorMap[s.color];
            return (
              <div key={s.title} className={`group relative overflow-hidden rounded-2xl border ${c.border} bg-surface/40 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-surface/70`}>
                <div className={`pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${c.glow}`} />
                <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text} transition-transform duration-300 group-hover:scale-110`}>
                  <s.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold">{s.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 5. WHY CHOOSE US ── */}
     <section className="relative z-10 mx-auto mt-14 max-w-5xl px-6">
  <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-surface-elevated">
    <div className="grid md:grid-cols-2">

      {/* Left Side */}
      <div className="border-b border-white/[0.07] p-8 md:border-b-0 md:border-r">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
          Why Us
        </span>

        <h2 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">
          Why choose{" "}
          <span className="bg-gradient-to-r from-brand to-brand/70 bg-clip-text text-transparent">
            Aione Spark?
          </span>
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          We are committed to delivering high-quality IT solutions that help businesses grow digitally.
          Our focus is on innovation, reliability, and long-term value rather than just project delivery.
        </p>

        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-brand cursor-pointer hover:underline">
          <span>Explore our services</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Right Side */}
      <div className="divide-y divide-white/[0.06]">
        {whyUs.map((item) => (
          <div
            key={item.title}
            className="group flex items-start gap-4 p-6 transition-colors duration-200 hover:bg-white/[0.02]"
          >
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform duration-200 group-hover:scale-110">
              <item.icon className="h-4 w-4" strokeWidth={1.75} />
            </div>

            <div>
              <h3 className="text-sm font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
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


    </PageShell>
  );
}