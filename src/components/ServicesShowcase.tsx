"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from "@/components/Reveal";
import { RevealText } from "@/components/RevealText";

type Service = {
  title: string;
  image: string;
  imageAlt: string;
  shortBody: string;
  lead: string;
  capabilities: string[];
  sectors: string[];
  stats: { label: string; value: string }[];
};

const services: Service[] = [
  {
    title: "Supply & Trading",
    image: "/images/services/supply.jpg",
    imageAlt: "Industrial supply warehouse",
    shortBody:
      "Industrial and oilfield equipment, electrical and mechanical spares, and authorized Linkk & Megaduct busduct trunking — backed by full GCC and MENA inventory.",
    lead: "Authorized procurement and supply of industrial and oilfield equipment, electrical and mechanical spares, and the flagship Linkk & Megaduct busduct platform — backed by inventory across the GCC and the wider MENA region.",
    capabilities: [
      "Industrial and oilfield equipment procurement",
      "Electrical components and spares — switchgear, distribution, cabling",
      "Mechanical spares — pumps, valves, fittings",
      "Authorized Linkk & Megaduct busduct supply",
      "Direct-from-manufacturer sourcing",
      "Regional inventory and rapid dispatch",
    ],
    sectors: [
      "Oil & Gas — Onshore",
      "Oil & Gas — Offshore",
      "Utilities & Power",
      "Construction & Towers",
      "Industrial Plants",
      "Hospitals & Data Centres",
    ],
    stats: [
      { value: "20+", label: "Years of supply" },
      { value: "GCC · MENA", label: "Coverage" },
      { value: "ISO", label: "Certified QMS" },
    ],
  },
  {
    title: "Testing & Commissioning",
    image: "/images/services/testing.jpg",
    imageAlt: "Engineer testing electrical equipment",
    shortBody:
      "On-shore and off-shore electrical and mechanical commissioning for oil, gas and utility projects.",
    lead: "Documented electrical and mechanical testing and commissioning — on-shore and off-shore — to international standards across oil, gas, utilities and construction.",
    capabilities: [
      "Electrical testing & commissioning",
      "Mechanical commissioning",
      "On-shore project support",
      "Off-shore platform commissioning",
      "Functional and acceptance testing",
      "Compliance documentation and reporting",
    ],
    sectors: [
      "Oil & Gas Facilities",
      "Power Plants & Substations",
      "Utility Networks",
      "Industrial Construction",
    ],
    stats: [
      { value: "ASTA · KEMA · UL", label: "Standards" },
      { value: "IEC 61439", label: "Compliant" },
      { value: "On / Off-shore", label: "Capability" },
    ],
  },
  {
    title: "Engineering Services",
    image: "/images/services/engineering.jpg",
    imageAlt: "Engineering plans and blueprints",
    shortBody:
      "Specification, layout and custom engineering tailored to commercial and industrial installations.",
    lead: "Specification, layout and custom engineering tailored to your load profile and site conditions — for commercial and industrial installations across the region.",
    capabilities: [
      "Project specification & technical evaluation",
      "Layout and load-profile engineering",
      "Custom configuration design",
      "CAD documentation and drawings",
      "Single-line and routing diagrams",
      "Site coordination with consultants & contractors",
    ],
    sectors: [
      "Commercial Towers",
      "Industrial Plants",
      "Hospitals & Healthcare",
      "Data Centres",
      "Hotels & Hospitality",
    ],
    stats: [
      { value: "Since 1992", label: "Megaduct heritage" },
      { value: "14+", label: "Landmark projects" },
      { value: "Custom", label: "Engineered solutions" },
    ],
  },
  {
    title: "Installation & Contracting",
    image: "/images/services/installation.jpg",
    imageAlt: "Tower under construction",
    shortBody:
      "Turn-key contracting from delivery through installation and final handover, across the GCC and MENA region.",
    lead: "Turn-key contracting from delivery through installation and final handover — across the GCC and the wider MENA region — with full coordination on-site.",
    capabilities: [
      "Site preparation and survey",
      "Equipment delivery and logistics",
      "On-site installation by trained crews",
      "Functional testing prior to handover",
      "Final handover with full documentation",
      "Post-handover technical support",
    ],
    sectors: [
      "High-rise Construction",
      "Oil & Gas Facilities",
      "Utility Infrastructure",
      "Hospitality & Retail",
      "Public Infrastructure",
    ],
    stats: [
      { value: "Turn-key", label: "Contracting" },
      { value: "Marina 101 · Atria", label: "References" },
      { value: "GCC · MENA", label: "Reach" },
    ],
  },
];

function ServiceCard({
  service,
  index,
  onOpen,
}: {
  service: Service;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group relative h-full bg-white border border-slate-200 hover:border-navy-900 rounded-2xl overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl flex flex-col text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-navy-900 focus-visible:ring-offset-2"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-navy-900">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/20 to-transparent" />
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 text-white text-[10px] uppercase tracking-[0.2em] font-semibold">
          <span className="h-1 w-6 bg-white" />
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="absolute bottom-4 left-4 right-4 text-white text-lg sm:text-xl font-bold leading-tight">
          {service.title}
        </h3>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-slate-600 leading-relaxed text-sm">
          {service.shortBody}
        </p>
        <span className="mt-5 inline-flex items-center gap-2 text-navy-900 font-semibold text-sm group-hover:translate-x-1 transition-transform">
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function ServiceModal({
  service,
  index,
  onClose,
}: {
  service: Service;
  index: number;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <motion.div
        className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative w-full max-w-5xl max-h-[92vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-3 right-3 md:top-5 md:right-5 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-navy-900 flex items-center justify-center shadow-md ring-1 ring-slate-200 transition"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/8] bg-navy-900">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
              <div className="inline-flex items-center gap-2 text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold mb-3">
                <span className="h-px w-8 bg-white/70" />
                What we do · {String(index + 1).padStart(2, "0")}
              </div>
              <h2
                id="service-modal-title"
                className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight max-w-2xl"
              >
                {service.title}
              </h2>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
              {service.lead}
            </p>

            <div className="mt-6 md:mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              {service.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-slate-200 bg-slate-50/60 px-4 py-3"
                >
                  <p className="text-base sm:text-lg font-bold text-navy-900 leading-tight">
                    {s.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.18em] mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-8 md:gap-10">
              <div>
                <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                  What we deliver
                </p>
                <ul className="space-y-3">
                  {service.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-navy-900 shrink-0" />
                      <span className="leading-relaxed">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                  Sectors we serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.sectors.map((sec) => (
                    <span
                      key={sec}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <p className="text-sm text-slate-600 max-w-md">
                Need this on your next project? Talk to our team across the
                GCC and MENA region.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Get a quote
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesShowcase() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [openIndex]);

  return (
    <>
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
              Four pillars of service across the GCC and MENA region.
            </RevealText>
            <p className="mt-5 text-slate-600 leading-relaxed text-base md:text-lg">
              From product specification to final commissioning — we deliver
              every stage of an electrical project under one roof.
            </p>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {services.map((s, i) => {
              const dirs = ["left", "up", "up", "right"] as const;
              return (
                <StaggerItem key={s.title} direction={dirs[i]}>
                  <ServiceCard
                    service={s}
                    index={i}
                    onOpen={() => setOpenIndex(i)}
                  />
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      <AnimatePresence>
        {openIndex !== null && (
          <ServiceModal
            service={services[openIndex]}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
