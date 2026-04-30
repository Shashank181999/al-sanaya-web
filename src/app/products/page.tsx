import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { MediaCard } from "@/components/MediaCard";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/Reveal";
import { catalogs, products } from "@/lib/content";

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

function PdfIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h4" />
    </svg>
  );
}

function ViewIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

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

      <section className="py-16 md:py-24 bg-white">
        <div className="container-x">
          <Reveal className="max-w-3xl mb-10 md:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900">
              Product Catalogues
            </h2>
            <p className="mt-5 text-slate-600 leading-relaxed">
              Browse the full Megaduct range — from sandwich-type trunking to
              mission-critical data centre and cast-resin systems.
            </p>
          </Reveal>
          <StaggerGroup className="flex flex-col gap-6 md:gap-8">
            {catalogs.map((c, i) => {
              const flip = i % 2 === 1;
              return (
                <StaggerItem
                  key={c.name}
                  direction={flip ? "right" : "left"}
                  distance={24}
                  className={`group relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-2xl hover:border-navy-900/30 hover:-translate-y-1 transition-[box-shadow,border-color,transform] duration-500 overflow-hidden flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"}`}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-navy-900/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  />
                  <a
                    href={c.file}
                    target="_blank"
                    rel="noreferrer"
                    className="relative block md:w-[42%] lg:w-[38%] shrink-0 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100"
                    aria-label={`View ${c.name} catalogue`}
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 dot-pattern opacity-50"
                    />
                    <div className="relative h-64 md:h-full md:min-h-[320px] flex items-center justify-center px-6 py-8 md:p-10">
                      <Image
                        src={c.cover}
                        alt={`${c.name} cover`}
                        width={360}
                        height={468}
                        sizes="(max-width: 768px) 80vw, 340px"
                        className={`relative z-10 h-full max-h-[260px] md:max-h-[300px] w-auto object-contain rounded-md ring-1 ring-slate-200/70 shadow-[0_24px_50px_-18px_rgba(33,63,126,0.45)] transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.04] ${flip ? "group-hover:-rotate-2" : "group-hover:rotate-2"}`}
                      />
                    </div>
                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-navy-900 font-semibold ring-1 ring-slate-200 shadow-sm">
                      <PdfIcon /> PDF
                    </span>
                  </a>

                  <div className="relative flex flex-col flex-1 min-w-0 p-6 sm:p-8 md:p-10 lg:p-12 justify-center">
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-navy-900/70 font-semibold">
                      {c.tagline}
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-navy-900 leading-tight">
                      {c.name}
                    </h3>
                    <span
                      aria-hidden
                      className={`mt-4 block h-[3px] w-12 rounded-full bg-navy-900 transition-all duration-500 ease-out group-hover:w-24`}
                    />
                    <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                      {c.overview}
                    </p>
                    <div className="mt-7 flex items-center gap-4 flex-wrap">
                      <a
                        href={c.file}
                        target="_blank"
                        rel="noreferrer"
                        className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-navy-800 hover:shadow-lg hover:gap-3"
                      >
                        <ViewIcon />
                        <span>View Catalogue</span>
                        <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-0.5">
                          →
                        </span>
                      </a>
                      <span className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                        Opens in new tab
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
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

      <section className="py-12 md:py-16">
        <div className="container-x flex justify-center">
          <Reveal>
            <a
              href="/files/Sanaya-Company-Profile.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-4 bg-navy-900 text-white rounded-xl px-5 py-4 hover:bg-navy-800 hover:-translate-y-0.5 transition-all shadow-sm hover:shadow-lg"
            >
              <Image
                src="/images/sanayate-pdf.webp"
                alt=""
                width={44}
                height={44}
                className="rounded-md shrink-0"
              />
              <div className="min-w-0">
                <p className="text-slate-300 text-[10px] uppercase tracking-[0.18em] font-semibold">
                  PDF — Download
                </p>
                <p className="text-base font-semibold mt-0.5">Company Profile</p>
              </div>
              <span aria-hidden className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}

