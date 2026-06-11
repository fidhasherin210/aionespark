import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Monitor, TrendingUp, ShoppingCart, Headphones, Star, Quote,Megaphone,Globe,
  ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Award, Users, BookOpen, GraduationCap
} from "lucide-react";
import heroLaptop from "@/assets/aionespark-04.jpeg";
import heroTeam from "@/assets/aionespark-02.jpg";
import heroAnalytics from "@/assets/aionespark-03.jpg";
import edusafaLogo from "@/assets/edu-white.png";
import edusafaDashboard from "@/assets/dashboard.png";
import { PageShell, PageHeader } from "@/components/page-shell";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
  type Variants,
} from "framer-motion";


import ehhospitalLogo from "@/assets/ehhospital.png";
import emboloLogo from "@/assets/Embolo.png";
import flynestLogo from "@/assets/flynest.png";
import airemarahLogo from "@/assets/airemarah.png";
import navicoreLogo from "@/assets/navicorebim.png";
import punathilLogo from "@/assets/punathil.png";
import rrcakeLogo from "@/assets/rrcake.png";
import safariworldLogo from "@/assets/safariworld.png";
import vilageoLogo from "@/assets/vilageo.png";
import voraLogo from "@/assets/vora .png";
import airmaratLogo from "@/assets/airemarah.png";
import bizwayLogo from "@/assets/bizway.png";
import mediversityLogo from "@/assets/Mediversity .png";
import edusafa01Logo from "@/assets/edusafa-01.png";
import edusafa02Logo from "@/assets/edusafa-02.png";
import edusafa03Logo from "@/assets/edusafa-03.png";
import edusafa04Logo from "@/assets/edusafa-04.png";
import edusafa05Logo from "@/assets/edusafa-05.png";
import edusafa06Logo from "@/assets/edusafa-06.png";
import ppcollectionsLogo from "@/assets/ppcollections.png";
import mixmaxLogo from "@/assets/mixmax.png";

const companyLogos = [
 
  { name: "EH Hospital", logo: ehhospitalLogo },
  { name: "Embolo Sanitary", logo: emboloLogo },
  { name: "Flynest", logo: flynestLogo },
  {name:"Edusafa02", logo:edusafa02Logo },
  { name: "Air Emarah", logo:airemarahLogo },
  { name: "Navicore BIM", logo: navicoreLogo },
   {name:"Edusafa03", logo:edusafa03Logo },
  { name: "Punathil", logo: punathilLogo },
  { name: "RR Cake & Sweets", logo: rrcakeLogo },
  {name:"Edusafa04", logo:edusafa04Logo },
  { name: "Safari World", logo: safariworldLogo },
  { name: "Vilageo Holidays", logo: vilageoLogo },
    {name:"Edusafa05", logo:edusafa05Logo },
  { name: "Vora", logo: voraLogo },
  { name: "Air Emarat", logo: airmaratLogo },
   {name:"Edusafa06", logo:edusafa06Logo },
  { name: "Bizway", logo: bizwayLogo },
  {name:"Mediversity", logo:mediversityLogo },
  {name:"Edusafa01", logo:edusafa01Logo },
  {name:"ppcollections", logo:ppcollectionsLogo},
  {name:"mixmax", logo:mixmaxLogo}
];




export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
  { title: "Aione Spark — Modern Web Design & Digital Growth" },
  { name: "description", content: "Aione Spark builds modern, high-performance websites and digital solutions to grow your business online." },
  { property: "og:title", content: "Aione Spark — Modern Web Design & Digital Growth" },
  { property: "og:description", content: "We create fast, responsive and scalable websites for startups and businesses." },
],
  }),
  component: Index,
});

// ─── Animation Variants ────────────────────────────────────────────────────

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Scroll Reveal Wrapper ──────────────────────────────────────────────────

function RevealSection({
  children,
  variants = fadeUp,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ─── Data ───────────────────────────────────────────────────────────────────

const services = [
  { icon: Monitor, label: "Website Design", active: true },
  { icon: GraduationCap, label: "Education Software", active: true },
  { icon: ShoppingCart, label: "E-Commerce Solutions", active: true },
  { icon: Globe, label: "Web Applications", active: true },
];
const stats = [
  { value: "50+", label: "Projects" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support" },
];

const testimonials = [
 {
    name: "Rashid",
    role: "Business Owner",
    content:
     "I had a great experience working with this team. They understood my requirements clearly and delivered the project on time.  I'm really satisfied with the results and would gladly work with them again.",
    rating: 5,
  },
  {
    name: "Anas ",
    role: "Airemarat",
    content:
     "I'm very happy with the service I received. The team was friendly, professional, and quick to respond. They delivered exactly what I needed, and the final product works perfectly. I would definitely recommend them to others.",
    rating: 5,
  },
  {
    name: "Kabeer",
    role: "Business",
    content:
      "The service was excellent from start to finish. The team was knowledgeable, helpful, and easy to work with. They created a solution that fits our business perfectly. I highly recommend them for any IT needs.",
    rating: 5,
  },
];

const slides = [
  {
    image: heroLaptop,
    eyebrow: "Innovative Digital Solutions",
    headline: <>Transforming Ideas Into{" "}
      <em className="italic text-white/65">Digital Success</em>
    </>,
    sub: "Custom software, modern websites, and scalable digital solutions designed to help businesses grow and succeed.",
    cta: { label: "Get Started", to: "/contact" },
    secondary: { label: "Our Services", to: "/services" },
  },
  {
    image: heroTeam,
    eyebrow: "Your Technology Partner",
    headline: <>Building Future-Ready{" "}
      <em className="italic text-white/65">Business Solutions</em>
    </>,
    sub: "From concept to deployment, we create innovative technology solutions that drive efficiency, growth, and customer engagement.",
    cta: { label: "Learn More", to: "/about" },
    secondary: { label: "View Portfolio", to: "/portfolio" },
  },
  {
    image: heroAnalytics,
    eyebrow: "Growth Through Innovation",
    headline: <>Empowering Businesses With{" "}
      <em className="italic text-white/65">Smart Technology</em>
    </>,
    sub: "Combining strategy, creativity, and technology to deliver measurable results and lasting digital impact.",
    cta: { label: "Contact Us", to: "/contact" },
    secondary: { label: "Success Stories", to: "/portfolio" },
  },
];
// ─── Company Logos ──────────────────────────────────────────────────────────



// ─── HeroSlider ─────────────────────────────────────────────────────────────

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  const startAuto = () => {
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4000);
  };

  useEffect(() => {
    startAuto();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const nav = (dir: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    goTo(current + dir);
    startAuto();
  };

  return (
    <RevealSection variants={scaleIn} className="relative z-10 mx-auto mt-4 max-w-3xl px-4">
      <div className="relative h-[400px] md:h-[450px] overflow-hidden rounded-2xl">
        <div
          className="absolute inset-0 -z-10 rounded-3xl opacity-40 blur-3xl"
          style={{ background: "var(--gradient-brand)" }}
        />

        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
         {slides.map((slide, idx) => (
  <div
    key={idx}
    className="relative h-full min-w-full flex-shrink-0 overflow-hidden"
  >
    <img
      src={slide.image}
      alt=""
      className="absolute inset-0 h-full w-full object-cover object-center"
    />

    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 45%, transparent 75%)",
      }}
    />

    <AnimatePresence mode="wait">
      {current === idx && (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-white/70" />
            {slide.eyebrow}
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-snug text-white md:text-3xl">
            {slide.headline}
          </h2>

         

          <div className="mt-5 flex items-center gap-4">
            <Link
              to={slide.cta.to}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-gray-900 transition hover:bg-white/90"
            >
              {slide.cta.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>

           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
))}
        </div>

        <div className="absolute bottom-3.5 right-7 flex items-center gap-1.5">
          {slides.map((_, i) => (
            <button key={i}
              onClick={() => { if (timerRef.current) clearInterval(timerRef.current); goTo(i); startAuto(); }}
              className={`h-1 rounded-full bg-white transition-all duration-300 ${i === current ? "w-5 opacity-100" : "w-2 opacity-40"}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}

// ─── Company Logos Strip ────────────────────────────────────────────────────

function LogosSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const logoRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const duplicatedLogos = [...companyLogos, ...companyLogos];

  useEffect(() => {
    let frameId;

    const updateCenterLogo = () => {
      const viewportCenter = window.innerWidth / 2;

      let closest = 0;
      let minDistance = Infinity;

      logoRefs.current.forEach((el, index) => {
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const logoCenter = rect.left + rect.width / 2;

        const distance = Math.abs(viewportCenter - logoCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closest = index;
        }
      });

      setActiveIndex(closest);

      frameId = requestAnimationFrame(updateCenterLogo);
    };

    updateCenterLogo();

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section
      ref={ref}
      className="relative z-10 mx-auto mt-16 max-w-6xl px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center"
      >
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by Our Clients
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        {/* Center Highlight Line
        <div className="pointer-events-none absolute left-1/2 top-0 z-10 h-full w-px -translate-x-1/2 bg-brand/20" /> */}

        <motion.div
          className="flex items-center gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {duplicatedLogos.map((company, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={`${company.name}-${index}`}
                ref={(el) => (logoRefs.current[index] = el)}
                className="flex items-center justify-center"
                style={{ minWidth: 220 }}
              >
                <div className="flex h-24 w-56 items-center justify-center">
                  <img
                    src={company.logo}
                    alt={company.name}
                    loading="lazy"
                    className={`
                      object-contain transition-all duration-500
                      ${
                        isActive
                          ? "max-h-20 opacity-100 grayscale-0 scale-110"
                          : "max-h-16 opacity-40 grayscale scale-90"
                      }
                    `}
                    style={
                      isActive
                        ? {
                            filter:
                              "drop-shadow(0 0 20px rgba(59,130,246,.25))",
                          }
                        : {}
                    }
                  />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


// ─── Services Section ────────────────────────────────────────────────────────

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
   <section ref={ref} className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
 
  {/* Section label */}
 <div className="mb-8 text-center">
  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
    What We Offer
  </span>
</div>
 
  {/* Service cards */}
  <div className="grid grid-cols-2 gap-3 md:grid-cols-4 text-2xl">
    {services.map((s) => (
      <GlassCard key={s.label} s={s} />
    ))}
  </div>
 
  {/* Stats bar */}
 <motion.div
  initial={{ opacity: 0, y: 24 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ delay: 0.45, duration: 0.6 }}
  className="mt-13 flex justify-center rounded-2xl border border-border bg-surface/60 p-5 md:px-8"
>
  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
    {stats.map((s, i) => (
      <motion.div
        key={s.label}
        className="text-center"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{
          delay: 0.55 + i * 0.1,
          duration: 0.45,
          type: "spring",
        }}
      >
        <div className="text-2xl font-extrabold leading-none md:text-3xl">
          {s.value}
        </div>
        <div className="mt-1 text-[11px] tracking-wide text-muted-foreground">
          {s.label}
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>
 
  {/* Tags */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={isInView ? { opacity: 1 } : {}}
    transition={{ delay: 0.85, duration: 0.5 }}
    className="mt-12 flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
  >
    {["Modern", "Fast", "Secure", "Scalable"].map((tag, i, arr) => (
      <span key={tag} className="flex items-center gap-3">
        <span className="h-px w-5 bg-brand/60" />
        <span className="text-xs font-medium tracking-wide text-muted-foreground">{tag}</span>
        {i < arr.length - 1 && (
          <span className="h-1 w-1 rounded-full bg-brand/60" />
        )}
      </span>
    ))}
  </motion.div>
</section>
);
}

// ─── Glass Card with mouse-tracking spotlight ──────────────────────────────────

function GlassCard({ s }) {
  const cardRef  = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
 
  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
 
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -5 }}

      transition={{ duration: 0.25 }}
      className={`group relative overflow-hidden rounded-2xl border p-5 text-center cursor-pointer transition-all duration-300 ${
        s.active        
          ? "border-brand/50 bg-brand/5"
          : "border-border bg-surface/60 hover:border-brand/30"
      }`}
      style={s.active ? { boxShadow: "var(--shadow-brand)" } : undefined}
    >
      {/* ── Mouse-tracking spotlight ── */}
      {hovered && (
        <span
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(280px circle at ${pos.x}px ${pos.y}px, var(--tw-gradient-spotlight, rgba(var(--brand-rgb, 99 102 241) / 0.18)), transparent 70%)`,
          }}
        />
      )}
 
      {/* ── Glassmorphism shine layer (removed backdrop-filter) ── */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.03) 50%, transparent 100%)",
        }}
      />
 
      {/* ── Static glow (active only) ── */}
      {s.active && (
        <div
          className="absolute inset-0 -z-10 opacity-20"
          style={{ background: "var(--gradient-brand)" }}
        />
      )}
 
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 320 }}
        className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${
          s.active
            ? "bg-brand text-brand-foreground"
            : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground"
        }`}
      >
        <s.icon className="h-5 w-5" />
      </motion.div>
 
      {/* Label */}
    <p
  className={`text-sm tracking-wide transition-colors duration-300 ${
    s.active ? "text-foreground" : "text-foreground group-hover:text-brand"
  }`}
>
  {s.label}
</p>
 
      {/* Dots */}
      <div className="mt-3 flex justify-center gap-1">
        {[0, 1, 2].map((d) => (
          <span
            key={d}
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              s.active
                ? "bg-brand"
                : "bg-muted-foreground/30 group-hover:bg-brand group-hover:scale-110"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}



// ─── About Section ───────────────────────────────────────────────────────────

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur md:p-12"
      >
        <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          {/* Text */}
<motion.div
  variants={slideLeft}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  transition={{ delay: 0.15 }}
>
  <h2 className="text-2xl  tracking-tight">
    About Aione Spark
  </h2>

  <div className="mt-2 h-1 w-20 rounded-full bg-brand" />

  <p className="mt-6 text-muted-foreground leading-relaxed">
    We are a dedicated IT company delivering innovative and reliable
    technology solutions for businesses of all sizes. From custom software
    development to web applications and accounting solutions, we help
    organizations streamline operations, improve efficiency, and achieve
    sustainable growth through technology.
  </p>

  <motion.ul
    className="mt-8 space-y-4"
    variants={staggerContainer}
    initial="hidden"
    animate={isInView ? "visible" : "hidden"}
  >
    {[
      "Custom Software Development",
      "Web & Mobile App Development",
      "Education Software Solutions",
      "Reliable Support & Long-Term Partnership",
      "IT Career Support"
    ].map((item) => (
      <motion.li
        key={item}
        variants={fadeUp}
        className="flex items-start gap-3"
      >
        <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/20 text-brand">
          <span className="h-2 w-2 rounded-full bg-brand" />
        </div>
        <span className="text-sm">{item}</span>
      </motion.li>
    ))}
  </motion.ul>

  <div className="mt-8">
    <Link
      to="/about"
      className="text-sm font-semibold text-brand hover:underline"
    >
      Discover Our Story →
    </Link>
  </div>
</motion.div>

          {/* Image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.25 }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl opacity-30 blur-2xl" style={{ background: "var(--gradient-brand)" }} />
            <motion.div
              className="aspect-square md:aspect-[4/3] rounded-2xl border border-border bg-surface-elevated/80 flex flex-col justify-center items-center p-6 text-center shadow-lg relative overflow-hidden"
              style={{
                backgroundImage: "url('https://i.pinimg.com/736x/d6/db/18/d6db18f379c4d7aa326f998cf69aae32.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10">
                <motion.div
                  className="text-5xl font-bold text-white"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5, type: "spring", stiffness: 150 }}
                >
                  2+
                </motion.div>
                <div className="mt-2 text-sm font-medium text-white/90 uppercase tracking-wider">Years of Excellence</div>
                <p className="mt-4 text-xs text-white/80 max-w-[200px]">Empowering businesses with modern web solutions</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}



// ─── Edusafa Section ─────────────────────────────────────────────────────────

function EdusafaSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="relative z-10 mx-auto mt-16 max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-2xl border border-brand/30 bg-gradient-to-br from-surface/90 to-surface-elevated/90 p-6 backdrop-blur md:p-8"
      >
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-brand/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-brand/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
          >
            {/* Badges — moved here, inside left column */}
          {/* Badges */}
<div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1">
  <Sparkles className="h-3 w-3 text-brand animate-pulse" />
  <span className="text-[10px] font-semibold uppercase tracking-wider text-brand">
    Our Flagship Product
  </span>
</div>



<img
  src={edusafaLogo}
  alt="Edusafa"
  className="h-12 w-auto md:h-28"
/>

<div className="mt-1.5 h-0.5 w-12 rounded-full bg-gradient-to-r from-brand to-brand-light" />

<h3 className="mt-4 text-2xl font-bold">
  The Complete Digital Solution for Madrasa Management
</h3>

<p className="mt-2 text-sm text-muted-foreground">
  Empowering madrasas with modern technology to simplify administration,
  enhance communication, and improve educational management.
</p>

<p className="mt-4 text-sm leading-relaxed text-muted-foreground">
  Edusafa is a comprehensive madrasa management software designed to connect
  administrators, teachers, students, and parents through a single digital
  platform. From attendance tracking and student records to fee management,
  academic progress monitoring, and parent communication, Edusafa streamlines
  daily operations and helps madrasas deliver a more organized and efficient
  learning experience.
</p>

<div className="mt-5 grid grid-cols-3 gap-3">
  {[
    { v: "50+", l: "Madrasas" },
    { v: "5k+", l: "Students" },
    { v: "200+", l: "Teachers" },
  ].map((s, i) => (
    <motion.div
      key={s.l}
      className="text-center"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{
        delay: 0.4 + i * 0.1,
        type: "spring",
        stiffness: 200,
      }}
    >
      <div className="text-xl font-bold text-brand">{s.v}</div>
      <div className="mt-0.5 text-[10px] text-muted-foreground">
        {s.l}
      </div>
    </motion.div>
  ))}
</div>

<motion.div
  className="mt-5 space-y-2.5"
  variants={staggerFast}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {[
   
  "Student & Parent Portal",
  "Attendance Management System",
  "Fee Collection & Tracking",
  "Academic Progress Reports",
  "Teacher & Staff Management",
  "Digital Certificates & Documents",
  "Student ID Card Generation & Download",
  ].map((feature) => (
    <motion.div
      key={feature}
      variants={fadeUp}
      className="flex items-center gap-2.5 group/feature"
    >
      <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/20 transition-all group-hover/feature:scale-110 group-hover/feature:bg-brand">
        <CheckCircle2 className="h-2.5 w-2.5 text-brand transition-all group-hover/feature:text-white" />
      </div>
      <span className="text-xs text-foreground/85 transition-colors group-hover/feature:text-foreground">
        {feature}
      </span>
    </motion.div>
  ))}
</motion.div>

<div className="mt-6 flex flex-wrap gap-3">
  <Link
    to="/contact"
    className="group inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold text-brand-foreground transition-all hover:scale-105 hover:shadow-xl"
    style={{
      background: "var(--gradient-brand)",
      boxShadow: "var(--shadow-brand)",
    }}
  >
    Explore Edusafa
    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
  </Link>

  <Link
    to="https://docs.google.com/forms/d/e/1FAIpQLSd9G8L6WILAs4ut_jFZCDjmswr9ocdDsHtIVo0FJLKzoEV2AQ/viewform?usp=publish-editor"
    className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/5 px-4 py-2 text-xs font-semibold text-brand transition-all hover:bg-brand/10 hover:shadow-lg"
  >
    Request a Demo
  </Link>
</div>
          </motion.div>

         {/* Right */}
<motion.div
  variants={slideRight}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  transition={{ delay: 0.3 }}
  className="flex items-center justify-center"
>
  <motion.div
    whileHover={{
      scale: 1.03,
      y: -5,
    }}
    transition={{ duration: 0.3 }}
    className="relative w-fit mx-auto"
  >
    {/* Glow */}
    <div className="absolute -inset-4 rounded-3xl bg-brand/20 blur-3xl" />

  

    {/* Image */}
   <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSd9G8L6WILAs4ut_jFZCDjmswr9ocdDsHtIVo0FJLKzoEV2AQ/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="relative overflow-hidden rounded-3xl border border-brand/30 shadow-2xl">
    <img
      src={edusafaDashboard}
      alt="Edusafa Dashboard"
      className="w-[320px] h-[650px] object-cover mx-auto cursor-pointer"
    />
  </div>
</a>
  </motion.div>
</motion.div>
        </div>
      </motion.div>
    </section>
  );
}




// ─── Testimonials Section ─────────────────────────────────────────────────────

function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative z-10 mx-auto my-20 max-w-6xl px-4 sm:px-6"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Client Reviews
        </h2>

        <div className="mx-auto mt-2 h-1 w-20 rounded-full bg-brand" />

        <p className="mt-4 text-sm text-muted-foreground sm:text-base">
          Don&apos;t just take our word for it. See what our partners have to
          say.
        </p>
      </motion.div>

      {/* Mobile Slider */}
      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-1 pb-4 md:hidden scrollbar-hide">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 }}
            className="group relative min-w-[95%] snap-center rounded-2xl border border-border bg-surface/60 p-5 backdrop-blur"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute -right-3 -top-3 text-brand/20">
              <Quote className="h-10 w-10" />
            </div>

            <div className="mb-4 flex gap-1">
              {[...Array(testimonial.rating)].map((_, j) => (
                <Star
                  key={j}
                  className="h-4 w-4 fill-brand text-brand"
                />
              ))}
            </div>

            <p className="relative z-10 text-sm leading-7 text-foreground/90">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="mt-6 border-t border-border/50 pt-4">
              <div className="text-sm font-semibold">
                {testimonial.name}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {testimonial.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop Grid */}
      <motion.div
        className="mt-12 hidden gap-6 md:grid md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            variants={scaleIn}
            whileHover={{
              y: -6,
              scale: 1.02,
              transition: { duration: 0.25 },
            }}
            className="group relative rounded-2xl border border-border bg-surface/60 p-6 backdrop-blur transition-colors hover:border-brand/40"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="absolute -right-3 -top-3 text-brand/20 transition-colors group-hover:text-brand/40">
              <Quote className="h-12 w-12" />
            </div>

            <div className="mb-4 flex gap-1">
              {[...Array(testimonial.rating)].map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.3 + i * 0.1 + j * 0.06,
                    type: "spring",
                  }}
                >
                  <Star className="h-4 w-4 fill-brand text-brand" />
                </motion.div>
              ))}
            </div>

            <p className="relative z-10 text-sm leading-relaxed text-foreground/90">
              &quot;{testimonial.content}&quot;
            </p>

            <div className="mt-6 border-t border-border/50 pt-4">
              <div className="text-sm font-semibold">
                {testimonial.name}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">
                {testimonial.role}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
// ─── Page ─────────────────────────────────────────────────────────────────────

function Index() {
  return (
    <PageShell>
     <PageHeader
  eyebrow="Innovative Solutions"
  title="Transforming"
  accent="Digital Futures"
  subtitle="Empowering Businesses with Future-Ready Technology"
/>

      <HeroSlider />
      <LogosSection />
      <ServicesSection />
      <AboutSection />
      <EdusafaSection />
      
      <TestimonialsSection />
    </PageShell>
  );
}

export default Index;