import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { MediaCard } from "@/components/MediaCard";

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
    body: "To be the leading supplier of industrial equipment, electrical components and busduct systems across the GCC, the wider MENA region and beyond.",
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
    body: "We assess your project requirements and engineer the right busduct configuration for your load profile.",
  },
  {
    n: "02",
    title: "Sourcing & Supply",
    body: "Direct partnership with Linkk Busway Systems guarantees authentic Megaduct technology, on-time delivery.",
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
              We&apos;ve grown steadily into a workforce of more than 50
              specialists serving prestigious construction and industrial
              clients across the region.
            </p>
            <div className="mt-8 flex flex-wrap items-start gap-x-8 gap-y-5 max-w-lg">
              <div>
                <p className="text-3xl font-bold text-navy-900 leading-none">20+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-2">Years</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-navy-900 leading-none">50+</p>
                <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider mt-2">Team</p>
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

      <section className="py-16 md:py-24">
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
