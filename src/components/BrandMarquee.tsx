"use client";

const items = [
  "LINKK BUSWAY",
  "MEGADUCT",
  "ISO 9001:2008",
  "DAS CERTIFIED",
  "GCC AUTHORIZED",
  "OIL & GAS",
  "UTILITIES",
  "CONSTRUCTION",
  "ON-SHORE",
  "OFF-SHORE",
];

function Divider() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      className="text-slate-300 shrink-0"
      aria-hidden
    >
      <path d="M12 2v20" />
      <path d="M5 12h14" />
    </svg>
  );
}

function Row() {
  return (
    <div className="flex items-center gap-8 px-4 shrink-0">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-8">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] uppercase whitespace-nowrap text-slate-500">
            {item}
          </span>
          <Divider />
        </div>
      ))}
    </div>
  );
}

export function BrandMarquee() {
  return (
    <div className="border-y border-slate-200 bg-white py-3 sm:py-3.5 overflow-hidden">
      <div className="flex animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
