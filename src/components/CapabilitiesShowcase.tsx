"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { StaggerGroup, StaggerItem } from "@/components/Reveal";

type Capability = {
  title: string;
  body: string;
  tags: string[];
  badge: string;
  featured?: boolean;
  icon: ReactNode;
  lead: string;
  delivers: string[];
  items: string[];
  sectors: string[];
  stats?: { label: string; value: string }[];
};

const capabilities: Capability[] = [
  {
    title: "Industrial & Oilfield Equipment",
    body: "Procurement of equipment and spares for the oil, gas and general industry — on-shore and off-shore.",
    tags: ["Procurement", "Spares", "On-shore", "Off-shore"],
    badge: "Oil · Gas · Industry",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V9l6-4v16" />
        <path d="M11 21V11l8-3v13" />
        <path d="M9 9h.01M9 13h.01M9 17h.01M15 13h.01M15 17h.01" />
      </svg>
    ),
    lead: "Manufacturer-direct procurement of equipment and spares for the oil, gas and general industry — supplied across on-shore facilities and off-shore platforms throughout the GCC and the wider MENA region.",
    delivers: [
      "Manufacturer-direct sourcing",
      "Industrial and oilfield spare parts",
      "Pressure vessels and piping packages",
      "Specialty valves and fittings",
      "Instrumentation and controls",
      "Procurement consulting & expediting",
    ],
    items: ["Pressure Vessels", "Piping", "Valves", "Fittings", "Instruments", "Spares"],
    sectors: ["Oil & Gas — Onshore", "Oil & Gas — Offshore", "Petrochemical", "Refineries", "Utilities"],
    stats: [
      { value: "20+", label: "Years sourcing" },
      { value: "GCC · MENA", label: "Coverage" },
      { value: "ISO", label: "QMS certified" },
    ],
  },
  {
    title: "Electrical Components & Spares",
    body: "Switchgear, distribution gear, cabling and electrical spares for industrial and commercial sites.",
    tags: ["Switchgear", "Distribution", "Cabling", "Panels"],
    badge: "Industrial · Commercial",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L4.5 13.5h7L9 22l8.5-11.5h-7L13 2z" />
      </svg>
    ),
    lead: "Low-voltage and medium-voltage switchgear, distribution boards, power cabling and control gear — sized to industrial and commercial site requirements.",
    delivers: [
      "LV and MV switchgear",
      "Distribution boards & panels",
      "Power and control cabling",
      "Protection devices (MCB, MCCB, ACB)",
      "Transformers and isolators",
      "Cable management & accessories",
    ],
    items: ["LV / MV Switchgear", "Distribution Panels", "Cables", "MCB / MCCB", "Transformers", "Cable Tray"],
    sectors: ["Industrial Plants", "Commercial Towers", "Hospitals", "Data Centres", "Utilities"],
    stats: [
      { value: "LV · MV", label: "Voltage range" },
      { value: "GCC · MENA", label: "Inventory" },
      { value: "Industrial", label: "Grade" },
    ],
  },
  {
    title: "Mechanical Equipment & Spares",
    body: "Pumps, valves, fittings and mechanical spares for utilities, process plants and oilfields.",
    tags: ["Pumps", "Valves", "Fittings", "Process"],
    badge: "Utilities · Plants",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h.1a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8v.1a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
    lead: "Pumps, valves, fittings and mechanical spares — for utilities, process plants and oilfield installations across the region.",
    delivers: [
      "Centrifugal and positive-displacement pumps",
      "Gate, globe, ball and butterfly valves",
      "Pipe fittings and flanges",
      "Gaskets, seals and bolting",
      "Pressure regulators",
      "Strainers and steam traps",
    ],
    items: ["Pumps", "Valves", "Fittings", "Gaskets", "Seals", "Strainers"],
    sectors: ["Process Plants", "Utilities", "Oil & Gas Facilities", "Water Treatment"],
    stats: [
      { value: "Industrial", label: "Grade" },
      { value: "Direct", label: "Sourcing" },
      { value: "GCC", label: "Stocked" },
    ],
  },
  {
    title: "Busduct Trunking — Linkk & Megaduct",
    body: "Authorized partner for the flagship sandwich-type and cast-resin busbar systems engineered in Malaysia.",
    tags: ["Sandwich-type", "Cast-resin", "Up to 6300 A"],
    badge: "Authorized Partner",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="18" height="12" rx="1" />
        <path d="M3 10h18M3 14h18" />
      </svg>
    ),
    lead: "Authorized GCC and MENA partner for the Linkk and Megaduct busduct trunking platform — sandwich-type, copper, data-centre and cast-resin busbar systems engineered in Malaysia. Ratings up to 6300 A continuous, IP54–IP66.",
    delivers: [
      "LMC Series sandwich-type busduct",
      "P1 Series 100% IACS copper busduct",
      "Sentinel data-centre busduct",
      "Cast-resin / encapsulated busbar",
      "Edgewise / flatwise elbows, tees, transposition units",
      "Tap-off boxes, plug-in units and feeder cable boxes",
    ],
    items: ["Sandwich-Type", "Cast-Resin", "Tap-Off Units", "Joint Sets", "Elbows", "Plug-Ins"],
    sectors: ["Commercial Towers", "Hospitals", "Data Centres", "Industrial Plants", "Hotels"],
    stats: [
      { value: "6300 A", label: "Up to continuous" },
      { value: "IP54–IP66", label: "Enclosure" },
      { value: "ASTA · KEMA · UL", label: "Tested" },
    ],
  },
  {
    title: "Testing & Commissioning",
    body: "Documented electrical and mechanical testing and commissioning, on-shore and off-shore, to international standards.",
    tags: ["Electrical", "Mechanical", "On / Off-shore"],
    badge: "IEC · BS Compliant",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
    lead: "Documented electrical and mechanical testing and commissioning — on-shore and off-shore — to international standards across oil, gas, utilities and construction projects.",
    delivers: [
      "Pre-commissioning checks and inspection",
      "Insulation, continuity & polarity testing",
      "Functional and performance verification",
      "Protection relay testing",
      "Mechanical commissioning",
      "Final acceptance testing & reports",
    ],
    items: ["Pre-Comm", "IR Testing", "Functional", "Protection", "Mechanical", "FAT"],
    sectors: ["Oil & Gas", "Power Plants & Substations", "Utility Networks", "Industrial Construction"],
    stats: [
      { value: "IEC · BS", label: "Standards" },
      { value: "On / Off-shore", label: "Capability" },
      { value: "Documented", label: "Reporting" },
    ],
  },
  {
    title: "Engineering & Installation",
    body: "Specification, layout, custom engineering and turn-key contracting from delivery through final handover.",
    tags: ["Specification", "Layout", "Turn-key"],
    badge: "End-to-End",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a4 4 0 015.66 5.66l-9.19 9.19a2 2 0 01-1.41.59H6v-3.76a2 2 0 01.59-1.41z" />
        <path d="M13 8l3 3" />
      </svg>
    ),
    lead: "Specification, layout, custom engineering and turn-key contracting — from delivery through installation and final handover, with full coordination on-site across the GCC and MENA region.",
    delivers: [
      "Project specification & technical evaluation",
      "Layout, routing and load-profile engineering",
      "CAD drawings and single-line diagrams",
      "Turn-key contracting and site delivery",
      "On-site installation by trained crews",
      "Final handover with full documentation",
    ],
    items: ["Specification", "Layout", "CAD", "Contracting", "Installation", "Handover"],
    sectors: ["Commercial Towers", "Industrial Plants", "Hospitals", "Hotels", "Public Infrastructure"],
    stats: [
      { value: "14+", label: "Landmark projects" },
      { value: "Turn-key", label: "Delivery" },
      { value: "GCC · MENA", label: "Reach" },
    ],
  },
];

function CapabilityCard({
  c,
  index,
  onOpen,
}: {
  c: Capability;
  index: number;
  onOpen: () => void;
}) {
  const featured = !!c.featured;
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    el.style.setProperty("--rx", `${(py - 0.5) * -6}deg`);
    el.style.setProperty("--ry", `${(px - 0.5) * 6}deg`);
  };

  const resetTilt = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  const baseStyle: CSSProperties = {
    transform:
      "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
    transformStyle: "preserve-3d",
    transition: "transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease-out",
  };

  return (
    <button
      type="button"
      ref={ref}
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      style={baseStyle}
      className={`group relative h-full overflow-hidden rounded-2xl border hover:-translate-y-1 hover:shadow-xl flex flex-col text-left w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
        featured
          ? "bg-navy-900 text-white border-navy-900 hover:shadow-[0_30px_70px_-25px_rgba(33,63,126,0.7)] focus-visible:ring-white"
          : "bg-white border-slate-200 hover:border-navy-900 focus-visible:ring-navy-900"
      }`}
    >
      {/* corner glow */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-20 -right-20 h-40 w-40 rounded-full blur-3xl transition-opacity duration-500 ${
          featured ? "bg-white/15 opacity-60" : "bg-navy-900/[0.04] opacity-100"
        }`}
      />

      {/* cursor-following spotlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: featured
            ? "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.10), transparent 45%)"
            : "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(33,63,126,0.10), transparent 45%)",
        }}
      />

      {/* sweeping shine */}
      <span
        aria-hidden
        className={`pointer-events-none absolute top-0 -left-[60%] h-full w-1/3 skew-x-[-18deg] -translate-x-full group-hover:translate-x-[460%] transition-transform duration-1000 ease-out ${
          featured
            ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/70 to-transparent"
        }`}
      />

      {/* bottom hairline reveal */}
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-transform duration-500 origin-center scale-x-0 group-hover:scale-x-100 ${
          featured
            ? "bg-gradient-to-r from-transparent via-white/40 to-transparent"
            : "bg-gradient-to-r from-transparent via-navy-900/60 to-transparent"
        }`}
      />

      <div className="relative p-6 sm:p-7 flex-1 flex flex-col">
        <div
          className={`relative h-12 w-12 rounded-xl flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:-rotate-6 group-hover:-translate-y-0.5 ${
            featured
              ? "bg-white/15 text-white ring-1 ring-white/20 group-hover:bg-white group-hover:text-navy-900"
              : "bg-navy-900 text-white group-hover:shadow-[0_8px_20px_-6px_rgba(33,63,126,0.6)]"
          }`}
        >
          <span className="h-6 w-6 block">{c.icon}</span>
        </div>

        <h3
          className={`text-lg sm:text-xl font-bold mt-5 leading-tight transition-colors ${
            featured ? "text-white" : "text-navy-900"
          }`}
        >
          {c.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-sm ${
            featured ? "text-slate-200" : "text-slate-600"
          }`}
        >
          {c.body}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {c.tags.map((t, ti) => (
            <span
              key={t}
              style={{ transitionDelay: `${ti * 50}ms` }}
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-medium transition-all duration-300 ease-out group-hover:-translate-y-0.5 ${
                featured
                  ? "bg-white/10 text-slate-200 ring-1 ring-white/15 group-hover:bg-white group-hover:text-navy-900 group-hover:ring-white"
                  : "bg-slate-100 text-slate-700 group-hover:bg-navy-900 group-hover:text-white"
              }`}
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6" />
      </div>

      <div
        className={`relative flex items-center justify-between gap-3 px-6 sm:px-7 py-3.5 border-t transition-colors duration-300 ${
          featured
            ? "bg-white/[0.04] border-white/10 group-hover:bg-white/[0.08]"
            : "bg-slate-50/70 border-slate-100 group-hover:bg-navy-900 group-hover:border-navy-900"
        }`}
      >
        <span
          className={`text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300 ${
            featured ? "text-white/80" : "text-navy-900/70 group-hover:text-white/80"
          }`}
        >
          {c.badge}
        </span>
        <span
          className={`inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] font-semibold transition-colors duration-300 ${
            featured ? "text-white" : "text-navy-900 group-hover:text-white"
          }`}
        >
          <span>View</span>
          <svg
            viewBox="0 0 24 24"
            width="16"
            height="16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            className="transition-transform duration-500 ease-out group-hover:translate-x-2"
          >
            <path d="M5 12h14" />
            <path d="M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </button>
  );
}

function CapabilityModal({
  c,
  index,
  onClose,
}: {
  c: Capability;
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
      aria-labelledby="capability-modal-title"
    >
      <motion.div
        className="absolute inset-0 bg-navy-900/70 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />
      <motion.div
        className="relative w-full max-w-4xl max-h-[92vh] bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden flex flex-col"
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="overflow-y-auto">
          <div className="relative bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 text-white px-6 sm:px-10 md:px-12 pt-12 md:pt-14 pb-10 md:pb-12 overflow-hidden">
            <span aria-hidden className="absolute inset-0 grid-pattern opacity-25" />
            <span aria-hidden className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />
            <span aria-hidden className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/[0.05] blur-3xl" />

            <div className="relative flex items-start gap-5">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-2xl bg-white/15 ring-1 ring-white/20 flex items-center justify-center shrink-0">
                <span className="h-8 w-8 block">{c.icon}</span>
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-xs uppercase tracking-[0.22em] font-semibold text-white/70">
                  What we supply · {String(index + 1).padStart(2, "0")}
                </p>
                <h2
                  id="capability-modal-title"
                  className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight"
                >
                  {c.title}
                </h2>
              </div>
            </div>

            {c.stats && (
              <div className="relative mt-7 grid grid-cols-3 gap-3 max-w-2xl">
                {c.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-white/[0.06] ring-1 ring-white/10 px-3 py-3"
                  >
                    <p className="text-sm sm:text-base font-bold text-white leading-tight">
                      {s.value}
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/60 uppercase tracking-[0.18em] mt-1.5">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-3xl">
              {c.lead}
            </p>

            <div className="mt-8 md:mt-10 grid md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                  What we deliver
                </p>
                <ul className="space-y-3">
                  {c.delivers.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-slate-700"
                    >
                      <span className="mt-1 h-5 w-5 rounded-full bg-navy-900/10 text-navy-900 flex items-center justify-center shrink-0">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                  Items handled
                </p>
                <div className="flex flex-wrap gap-2 mb-7">
                  {c.items.map((it) => (
                    <span
                      key={it}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-medium"
                    >
                      {it}
                    </span>
                  ))}
                </div>

                <p className="text-navy-900 text-xs font-semibold uppercase tracking-[0.22em] mb-4">
                  Sectors we serve
                </p>
                <div className="flex flex-wrap gap-2">
                  {c.sectors.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center px-3 py-1.5 rounded-full bg-navy-900/5 ring-1 ring-navy-900/10 text-navy-900 text-xs font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <p className="text-sm text-slate-600 max-w-md">
                Looking for this on your project? Our team will respond within
                one business day.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">
                  Request a quote
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14" />
                    <path d="M13 6l6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/products"
                  className="text-navy-900 font-semibold text-sm hover:opacity-80 inline-flex items-center gap-2"
                >
                  All products
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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

export function CapabilitiesShowcase() {
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
      <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {capabilities.map((c, i) => (
          <StaggerItem
            key={c.title}
            direction={i % 3 === 0 ? "left" : i % 3 === 2 ? "right" : "up"}
          >
            <CapabilityCard c={c} index={i} onOpen={() => setOpenIndex(i)} />
          </StaggerItem>
        ))}
      </StaggerGroup>

      <AnimatePresence>
        {openIndex !== null && (
          <CapabilityModal
            c={capabilities[openIndex]}
            index={openIndex}
            onClose={() => setOpenIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
