"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const milestones = [
  {
    era: "2003 — Foundation",
    title: "Established in Abu Dhabi",
    body: "Al Sanaya Technical Equipment LLC is founded as a trading and contracting company implementing a Quality Management System for procurement of equipment and spares for the oil, gas and general industry.",
  },
  {
    era: "Early growth",
    title: "Authorized Linkk & Megaduct partnership",
    body: "Al Sanaya is appointed authorized GCC and MENA partner for the Linkk and Megaduct busduct trunking platform — engineered in Malaysia, tested by ASTA, KEMA, UL, CPRI and others.",
  },
  {
    era: "Regional expansion",
    title: "Across UAE, KSA, Qatar, Bahrain, Jordan and beyond",
    body: "Project deliveries extend across the wider MENA region — from commercial towers and hospitality projects in the UAE to power plants in Bahrain, hospitals in KSA and hotels in Jordan and Syria.",
  },
  {
    era: "Landmark deliveries",
    title: "Marina 101, Atria, MBR Library and more",
    body: "Linkk & Megaduct busduct platforms are specified and supplied for some of the region's most prestigious developments — including Marina 101, Atria, Sky Hills Residences, Bay Central Towers, Mohammad Bin Rashed Library and Al Ezzel Power Plant.",
  },
  {
    era: "Today",
    title: "Multi-discipline supplier and contractor",
    body: "20+ years on, Al Sanaya operates from a Dubai office as a multi-discipline trading and contracting partner — supplying, testing, commissioning and installing electrical and mechanical equipment, on-shore and off-shore, across the GCC and MENA region.",
  },
];

function Dot({ progress, threshold }: { progress: ReturnType<typeof useScroll>["scrollYProgress"]; threshold: number }) {
  const opacity = useTransform(progress, [threshold - 0.04, threshold], [0, 1]);
  const scale = useTransform(progress, [threshold - 0.04, threshold], [0.6, 1]);
  return (
    <span
      aria-hidden
      className="hidden md:block absolute left-1/2 top-2 -translate-x-1/2"
    >
      <span className="block h-3 w-3 rounded-full bg-navy-900/15 ring-4 ring-white" />
      <motion.span
        style={{ opacity, scale }}
        className="absolute inset-0 block h-3 w-3 rounded-full bg-navy-900 ring-4 ring-white origin-center"
      />
    </span>
  );
}

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 35%"],
  });

  const fillHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <span
        aria-hidden
        className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-navy-900/15 -translate-x-px"
      />
      <motion.span
        aria-hidden
        style={{ height: fillHeight }}
        className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-navy-900 via-navy-900 to-navy-900/40 -translate-x-1/2 origin-top rounded-full shadow-[0_0_12px_rgba(33,63,126,0.35)]"
      />

      <ol className="space-y-10 md:space-y-14">
        {milestones.map((m, i) => {
          const right = i % 2 === 1;
          const dotThreshold = (i + 1) / (milestones.length + 1);
          return (
            <li
              key={m.title}
              className="relative md:grid md:grid-cols-2 md:gap-12 lg:gap-16"
            >
              <Reveal
                direction={right ? "right" : "left"}
                className={
                  right
                    ? "md:col-start-2 md:pl-8"
                    : "md:col-start-1 md:row-start-1 md:flex md:justify-end md:pr-8"
                }
              >
                <div
                  className={`md:max-w-md ${right ? "" : "md:text-right"}`}
                >
                  <span className="text-[10px] sm:text-xs text-navy-900/70 font-semibold uppercase tracking-[0.22em]">
                    {m.era}
                  </span>
                  <h3 className="mt-3 text-xl sm:text-2xl font-bold text-navy-900 leading-tight">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed text-sm md:text-base">
                    {m.body}
                  </p>
                </div>
              </Reveal>
              <Dot progress={scrollYProgress} threshold={dotThreshold} />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
