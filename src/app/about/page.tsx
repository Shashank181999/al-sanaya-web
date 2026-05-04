import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { MediaCard } from "@/components/MediaCard";
import { JourneyTimeline } from "@/components/JourneyTimeline";

export const metadata = {
  title: "About",
  description:
    "Al Sanaya Technical Equipment LLC — implementing a Quality Management System for procurement of equipment and spares for the oil, gas and general industry.",
};

const values = [
  {
    title: "Mission",
    body: "To provide competitive, high-quality products using the very best resources available — exceeding our customers' expectations on every project.",
  },
  {
    title: "Vision",
    body: "To be the leading supplier of industrial and oilfield equipment, electrical and mechanical components — including busduct systems — across the GCC, the wider MENA region and beyond.",
  },
  {
    title: "Quality",
    body: "Implementing a Quality Management System for procurement of equipment and spares for the oil, gas and general industry.",
  },
];

const process = [
  {
    n: "01",
    title: "Specification & Engineering",
    body: "We assess project requirements across electrical and mechanical scope — from busduct risers to oilfield equipment — and engineer the right configuration for your site.",
  },
  {
    n: "02",
    title: "Sourcing & Supply",
    body: "Procurement of equipment and spares for oil, gas and general industry — including authorized Linkk & Megaduct busduct, with on-time delivery across the GCC.",
  },
  {
    n: "03",
    title: "Installation Support",
    body: "Our technical team supports installations across the GCC and MENA region from our Dubai office, with full coordination on-site.",
  },
  {
    n: "04",
    title: "Testing & Commissioning",
    body: "Documented testing and commissioning to international standards — on-shore and off-shore.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Implementing quality, engineering trust."
        description="Al Sanaya Technical Equipment LLC has been a trusted supplier and contractor for the oil & gas, utilities and construction sectors across the GCC and the wider MENA region for over 20 years."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal direction="left">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3 md:mb-4">
              Who We Are
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              A regional partner, built on engineering integrity.
            </h2>
            <p className="mt-5 md:mt-6 text-slate-600 leading-relaxed">
              Al Sanaya implements a Quality Management System for the
              procurement of equipment and spares for the oil, gas and general
              industry. From our Dubai office we deliver supply, testing and
              commissioning services for electrical and mechanical projects
              across the GCC and the wider MENA region — on-shore and off-shore.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We&apos;ve grown steadily into a trusted partner serving
              prestigious construction and industrial clients across the region.
            </p>
            <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-5 max-w-lg">
              <div>
                <p className="text-3xl font-bold text-navy-900 leading-none">20+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-2">Years</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-navy-900 leading-none whitespace-nowrap tracking-tight">
                  GCC <span className="text-slate-400 font-medium">·</span> MENA
                </p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-2">Coverage</p>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-navy-900 group">
              <Image
                src="/images/Products.jpg"
                alt="Linkk and Megaduct busduct systems"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-300">
                  Authorized Partner
                </p>
                <p className="font-bold text-lg mt-1">Linkk · Megaduct</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative py-20 md:py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 40% at 50% -10%, rgba(255,255,255,0.10), transparent), radial-gradient(ellipse 60% 60% at 100% 110%, rgba(212,132,62,0.10), transparent)",
          }}
        />
        <div
          aria-hidden
          className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white/[0.05] blur-3xl pointer-events-none"
        />
        <div
          aria-hidden
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-white/[0.05] blur-3xl pointer-events-none"
        />

        <div className="container-x relative">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-white/50" />
              <p className="text-slate-300 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em]">
                At a glance
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]">
              The numbers behind two decades of regional supply.
            </h2>
            <div
              aria-hidden
              className="mt-6 h-[3px] w-20 rounded-full bg-gradient-to-r from-amber-400/80 via-amber-500/60 to-transparent"
            />
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              { kind: "num", to: 20, suffix: "+", label: "Years operating" },
              { kind: "num", to: 14, suffix: "+", label: "Landmark projects" },
              { kind: "num", to: 4, suffix: "", label: "Service pillars" },
              { kind: "num", to: 7, suffix: "", label: "Testing authorities" },
              { kind: "text", value: "GCC · MENA", label: "Regional coverage" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`group relative px-5 md:px-6 py-7 md:py-8 ${
                  i > 0 ? "lg:border-l lg:border-white/10" : ""
                }`}
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute top-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-amber-400/70 via-white/30 to-transparent transition-all duration-500"
                />
                <div className="min-h-[60px] md:min-h-[72px] flex items-end">
                  {s.kind === "num" ? (
                    <p className="font-bold leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl">
                      <AnimatedCounter
                        to={s.to as number}
                        suffix={s.suffix as string}
                      />
                    </p>
                  ) : (
                    <p className="font-bold leading-tight tracking-tight text-lg sm:text-xl md:text-2xl">
                      {s.value as string}
                    </p>
                  )}
                </div>
                <p className="mt-4 text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.22em] leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 md:mt-12 flex items-center gap-3 text-[10px] sm:text-xs text-slate-400 uppercase tracking-[0.22em]">
            <span className="h-px flex-1 bg-white/10" />
            <span>Trading · Contracting · Supply · Testing · Commissioning</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl mb-10 md:mb-14">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Foundations
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Mission, vision and quality.
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {values.map((v, i) => (
              <StaggerItem
                key={v.title}
                direction={i === 0 ? "left" : i === 1 ? "up" : "right"}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-100 hover:border-navy-900 hover:shadow-xl transition-[box-shadow,border-color] duration-300 h-full"
              >
                <div className="h-12 w-12 rounded-xl bg-navy-900 text-white flex items-center justify-center font-bold text-xl">
                  {v.title[0]}
                </div>
                <h3 className="mt-5 text-xl font-bold text-navy-900">
                  {v.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {v.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              From a single Abu Dhabi office to GCC &amp; MENA reach.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-base md:text-lg">
              Two decades of steady growth, partnerships and landmark projects
              — built on consistent quality and direct manufacturer
              relationships.
            </p>
          </Reveal>

          <JourneyTimeline />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              How we deliver every project.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((step, i) => (
              <StaggerItem
                key={step.n}
                direction={i % 2 === 0 ? "left" : "right"}
              >
                <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-7 hover:border-navy-900 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-navy-900 font-mono">
                      {step.n}
                    </span>
                    <span className="h-px flex-1 bg-slate-200" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-12 md:mb-16">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Six reasons clients keep coming back.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                title: "Authorized partner",
                body: "Direct, authorized supply of the Linkk and Megaduct busduct platform — backed by manufacturer-grade documentation and warranty.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l9 4v6c0 5-3.8 9.4-9 10-5.2-.6-9-5-9-10V6l9-4z" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                ),
              },
              {
                title: "GCC & MENA coverage",
                body: "Project deliveries across UAE, KSA, Bahrain, Qatar, Jordan, Syria and the wider MENA region — coordinated from our Dubai office.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20" />
                  </svg>
                ),
              },
              {
                title: "Quality-certified processes",
                body: "ISO-certified Quality Management System for procurement of equipment and spares for oil, gas and general industry.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                  </svg>
                ),
              },
              {
                title: "Multi-discipline scope",
                body: "Electrical and mechanical equipment under one roof — switchgear, busduct, pumps, valves and oilfield spares.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1" />
                    <rect x="14" y="3" width="7" height="7" rx="1" />
                    <rect x="3" y="14" width="7" height="7" rx="1" />
                    <rect x="14" y="14" width="7" height="7" rx="1" />
                  </svg>
                ),
              },
              {
                title: "On-shore & off-shore",
                body: "Crews and procurement experience for both on-shore facilities and off-shore platforms — oil, gas, utilities and construction.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 18c2 0 2-1 4-1s2 1 4 1 2-1 4-1 2 1 4 1 2-1 4-1" />
                    <path d="M4 14h16" />
                    <path d="M6 14V8a2 2 0 012-2h8a2 2 0 012 2v6" />
                    <path d="M12 6V3" />
                  </svg>
                ),
              },
              {
                title: "20+ years of experience",
                body: "Two decades of steady operation, partnerships and project deliveries — trusted on the GCC's most demanding installations.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
              },
            ].map((d) => (
              <StaggerItem
                key={d.title}
                direction="up"
                className="group h-full bg-white border border-slate-200 hover:border-navy-900 rounded-2xl p-7 transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-12 w-12 rounded-xl bg-navy-900 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="h-6 w-6 block">{d.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-navy-900 mt-5">
                  {d.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed text-sm">
                  {d.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-x">
          <Reveal className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Certified
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Quality you can verify.
            </h2>
            <p className="mt-4 md:mt-5 text-slate-600">
              Our processes are certified to international standards — backing
              every supply, install and commissioning with documented quality.
            </p>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <StaggerItem direction="left">
              <MediaCard
                image="/images/iso.webp"
                title="ISO Certified"
                subtitle="Click to view"
                variant="certificate"
              />
            </StaggerItem>
            <StaggerItem direction="right">
              <MediaCard
                image="/images/quality-policy.webp"
                title="Quality Policy"
                subtitle="Click to view"
                variant="certificate"
              />
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      <section className="relative py-16 md:py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-50" />
        <Reveal className="container-x relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
            Want to work with us?
          </h2>
          <p className="mt-4 md:mt-5 text-slate-600 text-base md:text-lg">
            Reach out and our regional team will get back to you within one
            business day.
          </p>
          <div className="mt-8 md:mt-10">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
