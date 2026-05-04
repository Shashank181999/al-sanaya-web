"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./EquipmentShowcase3DScene"), {
  ssr: false,
  loading: () => null,
});

type Props = {
  className?: string;
};

export function EquipmentShowcase3D({ className }: Props) {
  return (
    <div className={className} aria-hidden>
      <Scene />
    </div>
  );
}
