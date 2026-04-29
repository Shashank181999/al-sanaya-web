"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const BAR_LENGTH = 5.6;

function Busbar({ y }: { y: number }) {
  return (
    <mesh position={[0, y, 0]}>
      <boxGeometry args={[BAR_LENGTH, 0.16, 0.16]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function JointBlock({ x }: { x: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.x += delta * 0.4;
  });
  return (
    <mesh ref={ref} position={[x, 0, 0]}>
      <boxGeometry args={[0.4, 1.7, 0.5]} />
      <meshBasicMaterial color="#cbd5e1" wireframe transparent opacity={0.55} />
    </mesh>
  );
}

function Pulse({ y, delay = 0 }: { y: number; delay?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  const half = BAR_LENGTH / 2;
  useFrame((state) => {
    if (!ref.current) return;
    const t = ((state.clock.elapsedTime + delay) % 3.2) / 3.2;
    ref.current.position.x = -half + t * BAR_LENGTH;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = Math.sin(t * Math.PI) * 0.95;
  });
  return (
    <mesh ref={ref} position={[-half, y, 0]}>
      <sphereGeometry args={[0.09, 16, 16]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0} />
    </mesh>
  );
}

function MountClip({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <torusGeometry args={[0.25, 0.025, 8, 32]} />
      <meshBasicMaterial color="#94a3b8" transparent opacity={0.6} />
    </mesh>
  );
}

function BusbarBundle() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.18;
    }
  });
  return (
    <group ref={group} rotation={[0.25, 0, 0]}>
      <Busbar y={-0.7} />
      <Busbar y={-0.23} />
      <Busbar y={0.23} />
      <Busbar y={0.7} />

      <JointBlock x={-1.4} />
      <JointBlock x={1.4} />

      <MountClip position={[-2.2, 0, 0]} />
      <MountClip position={[0, 0, 0]} />
      <MountClip position={[2.2, 0, 0]} />

      <Pulse y={-0.7} delay={0} />
      <Pulse y={-0.23} delay={0.8} />
      <Pulse y={0.23} delay={1.6} />
      <Pulse y={0.7} delay={2.4} />
    </group>
  );
}

function CircuitNode({
  position,
  delay,
}: {
  position: [number, number, number];
  delay: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const phase = (state.clock.elapsedTime + delay) % 2;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.4 + Math.sin(phase * Math.PI) * 0.5;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
    </mesh>
  );
}

function MouseParallax({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.25;
    const y = state.pointer.y * 0.18;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      x,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -y,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
}

function CircuitNodes() {
  const nodes = useMemo(() => {
    const seeded = (n: number) => {
      const x = Math.sin(n * 9301 + 49297) * 233280;
      return x - Math.floor(x);
    };
    const arr: { p: [number, number, number]; d: number }[] = [];
    for (let i = 0; i < 14; i++) {
      arr.push({
        p: [
          (seeded(i + 1) - 0.5) * 5.5,
          (seeded(i + 2) - 0.5) * 3.5,
          (seeded(i + 3) - 0.5) * 1.5,
        ],
        d: seeded(i + 4) * 2,
      });
    }
    return arr;
  }, []);
  return (
    <>
      {nodes.map((n, i) => (
        <CircuitNode key={i} position={n.p} delay={n.d} />
      ))}
    </>
  );
}

export default function HomeHero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <MouseParallax>
          <BusbarBundle />
          <CircuitNodes />
        </MouseParallax>
      </Suspense>
    </Canvas>
  );
}
