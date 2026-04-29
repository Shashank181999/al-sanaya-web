import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { MediaCard } from "@/components/MediaCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { products } from "@/lib/content";

export const metadata = {
  title: "Products",
  description:
    "Linkk and Megaduct busduct trunking systems — designed for commercial and industrial electrical distribution with certified short-circuit protection.",
};

const features = [
  {
    title: "Sandwich-Type Construction",
    body: "High-density sandwich-type busbar offers superior heat dissipation and mechanical strength.",
  },
  {
    title: "Short-Circuit Protection",
    body: "Engineered to international short-circuit protection ratings for safe industrial distribution.",
  },
  {
    title: "Modular Configuration",
    body: "Full range of elbows, joints, plug-ins and tap-offs for flexible site layouts.",
  },
  {
    title: "Decades of Heritage",
    body: "Linkk Busway Systems carries forward Megaduct technology since 1992.",
  },
];

const applications = [
  "Commercial Towers",
  "Hospitals & Healthcare",
  "Hotels & Hospitality",
  "Data Centers",
  "Industrial Plants",
  "Oil & Gas Facilities",
  "Power Distribution",
  "Public Infrastructure",
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Busduct trunking, engineered for performance."
        description="The Linkk and Megaduct busduct systems — designed for commercial and industrial electrical distribution with certified short-circuit protection."
      />

      <section className="py-16 md:py-24">
        <div className="container-x grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal direction="left">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3 md:mb-4">
              Our Brands
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">
              Linkk &amp; Megaduct.
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Developed by Linkk Busway Systems (M) SDN BHD — successor to
              Megaduct Technology SDN BHD (established 1992, formerly Mayduct
              Technology SDN BHD) — our busduct systems carry forward decades
              of production expertise and proprietary technology.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Designed for commercial and industrial electrical distribution
              applications with rigorous short-circuit protection ratings.
            </p>
            <div className="mt-7 md:mt-8 flex flex-wrap gap-4 items-center">
              <a
                href="/files/Product-Catalogue-Sandwich-Type-Busbar.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <DownloadIcon /> Product Catalogue
              </a>
              <span className="text-xs text-slate-500 uppercase tracking-wider">
                PDF · 4.3 MB
              </span>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-white group">
              <Image
                src="/images/Products.jpg"
                alt="Linkk and Megaduct"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 text-white">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] text-slate-300">Authorized</p>
                    <p className="font-bold text-white text-sm leading-tight">GCC Distribution Partner</p>
                  </div>
                </div>
                <div className="hidden lg:flex items-center gap-2 text-[10px] text-slate-300 uppercase tracking-[0.18em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  Linkk · Megaduct
                </div>
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
              Engineering Highlights
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Built for the toughest installations.
            </h2>
          </Reveal>
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {features.map((f, i) => (
              <StaggerItem
                key={f.title}
                direction={i < 2 ? "left" : "right"}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-100 hover:border-navy-900 hover:shadow-xl transition-[box-shadow,border-color] duration-300 h-full"
              >
                <p className="text-2xl font-bold text-navy-900 font-mono">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-base font-bold text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {f.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-x">
          <Reveal className="mb-10 md:mb-12">
            <p className="text-navy-900 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Components
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900">
              Full system components
            </h2>
          </Reveal>
          <StaggerGroup
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            staggerChildren={0.05}
          >
            {products.map((p) => (
              <StaggerItem key={p.name}>
                <MediaCard
                  image={p.image}
                  title={p.name}
                  subtitle="Linkk · Megaduct"
                  variant="product"
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-25" />
        <div className="container-x relative">
          <Reveal className="max-w-3xl mb-10">
            <p className="text-slate-300 text-sm font-semibold uppercase tracking-[0.2em] mb-3">
              Application Sectors
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Where our systems power the load.
            </h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {applications.map((a, i) => (
              <StaggerItem
                key={a}
                direction={i % 2 === 0 ? "up" : "down"}
                className="border border-white/10 rounded-xl px-5 py-4 hover:border-white/30 hover:bg-white/[0.03] transition"
              >
                <p className="text-sm font-medium text-white">{a}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <StaggerGroup className="container-x grid md:grid-cols-2 gap-5 md:gap-8">
          <StaggerItem direction="left">
            <a
              href="/files/Sanaya-Company-Profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 sm:gap-6 bg-navy-900 text-white rounded-2xl p-6 sm:p-8 hover:bg-navy-800 hover:-translate-y-1 transition-all"
            >
              <Image
                src="/images/sanayate-pdf.png"
                alt=""
                width={64}
                height={64}
                className="rounded-md shrink-0"
              />
              <div className="min-w-0">
                <p className="text-slate-200 text-xs uppercase tracking-wider">
                  PDF — Download
                </p>
                <p className="text-lg sm:text-xl font-semibold mt-1">Company Profile</p>
                <p className="text-sm text-slate-300 mt-1">
                  Capabilities, certifications and references.
                </p>
              </div>
            </a>
          </StaggerItem>
          <StaggerItem direction="right">
            <a
              href="/files/Product-Catalogue-Sandwich-Type-Busbar.pdf"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-5 sm:gap-6 bg-white text-navy-900 rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-navy-900 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <Image
                src="/images/brochure3.png"
                alt=""
                width={64}
                height={64}
                className="rounded-md shrink-0"
              />
              <div className="min-w-0">
                <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">
                  PDF — Download
                </p>
                <p className="text-lg sm:text-xl font-semibold mt-1">
                  Sandwich-Type Busbar Catalogue
                </p>
                <p className="text-sm text-slate-600 mt-1">
                  Full Linkk product specifications.
                </p>
              </div>
            </a>
          </StaggerItem>
        </StaggerGroup>
      </section>
    </>
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
