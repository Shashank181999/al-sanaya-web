"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Variant = "product" | "project" | "certificate";
type ProjectStyle = "overlay" | "below" | "minimal";

type Props = {
  image: string;
  title: string;
  subtitle?: string;
  variant?: Variant;
  imageSizes?: string;
  fillHeight?: boolean;
  projectStyle?: ProjectStyle;
};

export function MediaCard({
  image,
  title,
  subtitle,
  variant = "product",
  imageSizes,
  fillHeight = false,
  projectStyle = "overlay",
}: Props) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      {variant === "certificate" ? (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-navy-900 transition cursor-zoom-in w-full"
        >
          <div className="relative w-full aspect-[4/5] max-w-[260px]">
            <Image
              src={image}
              alt={title}
              fill
              sizes={imageSizes ?? "260px"}
              className="object-contain group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-2 right-2 h-8 w-8 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ZoomIcon />
            </span>
          </div>
          <p className="mt-5 font-semibold text-navy-900 text-base">{title}</p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
          )}
        </button>
      ) : variant === "project" ? (
        <ProjectCard
          image={image}
          title={title}
          subtitle={subtitle}
          imageSizes={imageSizes}
          fillHeight={fillHeight}
          projectStyle={projectStyle}
          onOpen={() => setOpen(true)}
        />
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-slate-300 hover:shadow-md transition text-left w-full cursor-zoom-in"
        >
          <div className="relative aspect-square bg-slate-50">
            <Image
              src={image}
              alt={title}
              fill
              sizes={imageSizes ?? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"}
              className="object-contain p-5 group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-3 right-3 h-8 w-8 rounded-full bg-navy-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <ZoomIcon />
            </span>
          </div>
          <div className="p-4 border-t border-slate-100">
            <p className="text-sm font-semibold text-navy-900">{title}</p>
            {subtitle && (
              <p className="text-xs text-slate-500 mt-1">{subtitle}</p>
            )}
          </div>
        </button>
      )}

      {open && (
        <Lightbox
          image={image}
          title={title}
          subtitle={subtitle}
          variant={variant}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  );
}

function ProjectCard({
  image,
  title,
  subtitle,
  imageSizes,
  fillHeight,
  projectStyle,
  onOpen,
}: {
  image: string;
  title: string;
  subtitle?: string;
  imageSizes?: string;
  fillHeight?: boolean;
  projectStyle: ProjectStyle;
  onOpen: () => void;
}) {
  const heightClass = fillHeight ? "h-full" : "aspect-[4/5]";
  const sizes =
    imageSizes ?? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  if (projectStyle === "below") {
    return (
      <button
        type="button"
        onClick={onOpen}
        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-navy-900 hover:shadow-xl transition-[box-shadow,border-color] duration-300 text-left w-full cursor-zoom-in"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes={sizes}
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-navy-900/85 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-md">
            <ZoomIcon />
          </span>
        </div>
        <div className="px-5 sm:px-6 py-4 border-t border-slate-100">
          {subtitle && (
            <p className="text-[10px] uppercase tracking-[0.22em] text-slate-500 font-semibold">
              {subtitle}
            </p>
          )}
          <p className="text-lg sm:text-xl font-bold text-navy-900 mt-1">
            {title}
          </p>
        </div>
      </button>
    );
  }

  if (projectStyle === "minimal") {
    return (
      <button
        type="button"
        onClick={onOpen}
        className={`group ${heightClass} flex flex-col text-left w-full cursor-zoom-in`}
      >
        <div className="relative flex-1 min-h-0 rounded-2xl overflow-hidden bg-slate-100">
          <Image
            src={image}
            alt={title}
            fill
            sizes={sizes}
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out grayscale group-hover:grayscale-0"
          />
          <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-white/90 text-navy-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition shadow-md">
            <ZoomIcon />
          </span>
        </div>
        <div className="pt-3 px-1">
          <p className="text-base font-bold text-navy-900 truncate">{title}</p>
          {subtitle && (
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
          )}
        </div>
      </button>
    );
  }

  // overlay (default)
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative ${heightClass} rounded-2xl overflow-hidden bg-slate-100 text-left w-full cursor-zoom-in`}
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes={sizes}
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
      <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <ZoomIcon />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {subtitle && (
          <p className="text-xs uppercase tracking-[0.2em] text-slate-200">
            {subtitle}
          </p>
        )}
        <p className="text-xl font-semibold mt-1">{title}</p>
      </div>
    </button>
  );
}

function Lightbox({
  image,
  title,
  subtitle,
  variant,
  onClose,
}: {
  image: string;
  title: string;
  subtitle?: string;
  variant: Variant;
  onClose: () => void;
}) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-navy-900/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 md:p-10 animate-[fadeIn_0.2s_ease-out]"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl flex flex-col overflow-hidden shadow-2xl"
        style={{
          maxHeight: "calc(100dvh - 1.5rem)",
          maxWidth: "min(95vw, 1280px)",
        }}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white text-navy-900 shadow-md flex items-center justify-center transition"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <path d="M6 6l12 12" />
            <path d="M18 6L6 18" />
          </svg>
        </button>

        <div className="relative bg-slate-50 flex items-center justify-center min-h-0 flex-1 overflow-hidden">
          {!loaded && (
            <div
              aria-hidden
              className="absolute h-9 w-9 rounded-full border-2 border-slate-300 border-t-navy-900 animate-spin"
            />
          )}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={title}
            decoding="async"
            onLoad={() => setLoaded(true)}
            className={`block transition-opacity duration-300 ${
              loaded ? "opacity-100" : "opacity-0"
            } ${variant === "project" ? "" : "p-4 sm:p-6"}`}
            style={{
              width: "auto",
              height: "auto",
              maxWidth: "min(95vw, 1280px)",
              maxHeight: "calc(100dvh - 8rem)",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="px-5 sm:px-7 py-4 sm:py-5 border-t border-slate-100 flex-shrink-0">
          <div className="min-w-0">
            {subtitle && (
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-navy-900 font-semibold truncate">
                {subtitle}
              </p>
            )}
            <h3 className="text-lg sm:text-2xl font-bold text-navy-900 mt-1 truncate">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

function ZoomIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}
