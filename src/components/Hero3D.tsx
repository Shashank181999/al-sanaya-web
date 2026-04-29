"use client";

import dynamic from "next/dynamic";

const InteriorScene = dynamic(() => import("./Hero3DScene"), {
  ssr: false,
  loading: () => null,
});

const HomeScene = dynamic(() => import("./HomeHero3DScene"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  className?: string;
  variant?: "interior" | "home";
};

export function Hero3D({ className, variant = "interior" }: Props) {
  return (
    <div className={className} aria-hidden>
      {variant === "home" ? <HomeScene /> : <InteriorScene />}
    </div>
  );
}
