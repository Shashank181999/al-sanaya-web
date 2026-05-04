"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./ProductShowcase3DScene"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  className?: string;
};

export function ProductShowcase3D({ className }: Props) {
  return (
    <div className={className} aria-hidden>
      <Scene />
    </div>
  );
}
