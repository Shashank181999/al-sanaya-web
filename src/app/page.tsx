import Image from "next/image";
import Link from "next/link";
import { MediaCard } from "@/components/MediaCard";
import { FadeIn, Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { BrandMarquee } from "@/components/BrandMarquee";
import { Hero3D } from "@/components/Hero3D";
import { company, products, projects } from "@/lib/content";

const services = [
  {
    title: "Supply & Trading",
    body: "Authorized supply of Linkk and Megaduct busduct trunking systems with full GCC inventory backing.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 7l9-4 9 4-9 4-9-4z" />
        <path d="M3 12l9 4 9-4" />
        <path d="M3 17l9 4 9-4" />
      </svg>
    ),
  },
  {
    title: "Testing & Commissioning",
    body: "On-shore and off-shore electrical and mechanical commissioning for oil, gas and utility projects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
  {
    title: "Engineering Services",
    body: "Specification, layout and custom engineering tailored to commercial and industrial installations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 015.66 5.66l-9.19 9.19a2 2 0 01-1.41.59H6v-3.76a2 2 0 01.59-1.41z" />
        <path d="M13 8l3 3" />
      </svg>
    ),
  },
  {
    title: "Installation & Contracting",
    body: "Turn-key contracting from delivery through installation and final handover, across the GCC.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
];

const differentiators = [
  { value: 16, suffix: "+", label: "Years of Service" },
  { value: 5, suffix: "", label: "Regional Branches" },
  { value: 50, suffix: "+", label: "Skilled Personnel" },
  { value: 14, suffix: "+", label: "Landmark Projects" },
];

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);
  const homeProjects = projects
    .slice(0, projects.findIndex((p) => p.name === "Al Thuraya") + 1)
    .filter((p) => p.name !== "Escan Tower");

  return (
    <>
      <section className="relative h-[88vh] min-h-[560px] md:h-screen md:min-h-[640px] flex items-center text-white overflow-hidden bg-navy-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/files/Al-Sanaya-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/55 to-navy-900/0" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-transparent to-navy-900/40 md:hidden" />
        <Hero3D
          variant="home"
          className="absolute inset-y-0 right-0 hidden md:block md:w-[50%] lg:w-[45%] pointer-events-none opacity-25 mix-blend-screen"
        />
        <FadeIn delay={0.05} direction="none" className="container-x relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-white/40" />
            <p className="text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em]">
              Since 2004 — Engineering Power
            </p>
          </div>
          <RevealText
            as="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] block"
            stagger={0.07}
            delay={0.15}
            trigger="mount"
          >
            {company.tagline}
          </RevealText>
          <p className="mt-5 md:mt-6 text-base sm:text-lg md:text-xl text-slate-200 leading-relaxed max-w-xl">
            {company.blurb}
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap gap-3 sm:gap-4">
            <Link href="/products" className="btn-primary">
              Explore Products
              <ArrowRight />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to our team
            </Link>
          </div>
        </FadeIn>
        <FadeIn
          delay={0.4}
          direction="none"
          className="absolute bottom-8 left-0 right-0 z-10 hidden md:block"
        >
          <div className="container-x flex justify-between items-center text-sm text-slate-300">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-white/40" />
              <span className="uppercase tracking-[0.2em] text-xs">
                Linkk · Megaduct Authorized Partner
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em]">
              <span>Scroll</span>
              <span className="block h-8 w-px bg-white/30" />
            </div>
          </div>
        </FadeIn>
      </section>

      <BrandMarquee />

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              What We Do
            </p>
            <RevealText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 block"
            >
              Four pillars of service across the GCC.
            </RevealText>
            <p className="mt-5 text-slate-600 leading-relaxed text-base md:text-lg">
              From product specification to final commissioning — we deliver every stage of an electrical project under one roof.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s, i) => {
              const dirs = ["left", "up", "up", "right"] as const;
              return (
                <StaggerItem key={s.title} direction={dirs[i]}>
                  <div className="group relative h-full bg-white border border-slate-200 hover:border-navy-900 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                    <div className="h-12 w-12 rounded-xl bg-navy-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                      <span className="h-6 w-6 block">{s.icon}</span>
                    </div>
                    <p className="text-[10px] text-slate-400 font-mono mt-5">
                      {String(i + 1).padStart(2, "0")} / 04
                    </p>
                    <h3 className="text-xl font-bold text-navy-900 mt-2">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                      {s.body}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/[0.03] blur-3xl" />
        <StaggerGroup className="container-x relative grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {differentiators.map((d, i) => (
            <StaggerItem key={d.label} direction={i < 2 ? "left" : "right"}>
              <div className="border-l-2 border-white/20 pl-5">
                <p className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
                  <AnimatedCounter to={d.value} suffix={d.suffix} />
                </p>
                <p className="mt-3 text-xs sm:text-sm text-slate-400 uppercase tracking-[0.2em]">
                  {d.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="left">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-navy-900">
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                aria-label="Al Sanaya manufacturing"
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "contrast(1.15) saturate(1.2) brightness(0.92)" }}
              >
                <source src="/images/aboutSanaya.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 2v6l4 2" />
                      <circle cx="12" cy="14" r="8" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-300 uppercase tracking-[0.18em]">Established</p>
                    <p className="font-bold text-white text-lg leading-tight">2004</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-[10px] text-slate-300 uppercase tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Operations
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3 md:mb-4">
              Our Story
            </p>
            <RevealText
              as="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 block"
            >
              Powering the GCC for over 16 years.
            </RevealText>
            <p className="mt-5 md:mt-6 text-slate-600 leading-relaxed">
              Al Sanaya Technical Equipment LLC has grown into a trusted
              supplier and contractor for the oil &amp; gas, utilities and
              construction sectors. With branches across the UAE, Lebanon and
              Jordan, we deliver high-quality busduct, electrical and mechanical
              equipment built to perform.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We are the authorized partner for the{" "}
              <strong className="text-navy-900">Linkk</strong> and{" "}
              <strong className="text-navy-900">Megaduct</strong> busduct
              trunking systems — engineered in Malaysia and trusted on the
              region&apos;s most prestigious projects.
            </p>
            <div className="mt-7 md:mt-8 flex flex-wrap gap-4 items-center">
              <Link href="/about" className="btn-primary">
                Learn more about us <ArrowRight />
              </Link>
              <a
                href="/files/Sanaya-Company-Profile.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-navy-900 font-semibold text-sm hover:opacity-80 inline-flex items-center gap-2"
              >
                <DownloadIcon /> Company Profile (PDF)
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-60" />
        <div className="container-x relative">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-10 md:mb-12">
              <div>
                <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Our Catalogue
                </p>
                <RevealText
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 max-w-xl block"
                >
                  Busduct components for every installation.
                </RevealText>
              </div>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:opacity-80"
              >
                View all products <ArrowRight />
              </Link>
            </div>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {featuredProducts.map((p) => (
              <StaggerItem key={p.name} direction="up">
                <MediaCard
                  image={p.image}
                  title={p.name}
                  variant="product"
                  imageSizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-6 mb-10 md:mb-12">
              <div>
                <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
                  Selected Work
                </p>
                <RevealText
                  as="h2"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900 max-w-xl block"
                >
                  Trusted on landmark projects.
                </RevealText>
              </div>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-navy-900 font-semibold hover:opacity-80"
              >
                See all projects <ArrowRight />
              </Link>
            </div>
          </Reveal>
          <StaggerGroup
            className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] sm:auto-rows-[190px] md:auto-rows-[230px] grid-flow-dense gap-3 md:gap-4"
            staggerChildren={0.04}
          >
            {homeProjects.map((p, i) => {
              const span =
                i === 0
                  ? "col-span-2 row-span-2"
                  : i === 4
                    ? "row-span-2"
                    : i === 7
                      ? "col-span-2"
                      : "";
              return (
                <StaggerItem
                  key={p.name}
                  direction="up"
                  className={`h-full ${span}`}
                >
                  <MediaCard
                    image={p.image}
                    title={p.name}
                    subtitle={p.location}
                    variant="project"
                    projectStyle="overlay"
                    fillHeight
                    imageSizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-3xl" />
        <Reveal className="container-x relative text-center max-w-3xl mx-auto">
          <p className="text-slate-300 text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            Get in touch
          </p>
          <RevealText
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight block"
          >
            Ready to power your next project?
          </RevealText>
          <p className="mt-5 text-slate-300 text-base md:text-lg">
            From specification to commissioning — our team across the Middle
            East is ready to engineer the right solution for you.
          </p>
          <div className="mt-8 md:mt-10 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link href="/contact" className="btn-primary">
              Get a Quote
              <ArrowRight />
            </Link>
            <a
              href="/files/Sanaya-Company-Profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <DownloadIcon /> Company Profile
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <path d="M7 10l5 5 5-5" />
      <path d="M12 15V3" />
    </svg>
  );
}
