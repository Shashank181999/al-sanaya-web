"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

type Trace = {
  start: [number, number];
  end: [number, number];
};

function PCBPlane() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.06;
    }
  });

  const traces: Trace[] = useMemo(
    () => [
      { start: [-1.8, 1.2], end: [-0.4, 1.2] },
      { start: [-0.4, 1.2], end: [-0.4, 0.2] },
      { start: [-0.4, 0.2], end: [1.2, 0.2] },
      { start: [1.2, 0.2], end: [1.2, -0.9] },
      { start: [1.2, -0.9], end: [-0.6, -0.9] },
      { start: [-1.6, -0.4], end: [-1.6, -1.4] },
      { start: [-1.6, -1.4], end: [0.4, -1.4] },
      { start: [0.6, 1.5], end: [1.6, 1.5] },
      { start: [1.6, 1.5], end: [1.6, 0.7] },
      { start: [-1.4, 0.4], end: [-0.8, 0.4] },
    ],
    []
  );

  return (
    <group ref={ref} rotation={[0.2, 0.4, 0]}>
      <mesh>
        <planeGeometry args={[4.2, 3.4]} />
        <meshBasicMaterial
          color="#0a1426"
          transparent
          opacity={0.4}
          side={THREE.DoubleSide}
        />
      </mesh>

      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array(
                traces.flatMap((t) => [
                  t.start[0],
                  t.start[1],
                  0.01,
                  t.end[0],
                  t.end[1],
                  0.01,
                ])
              ),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#ffffff" transparent opacity={0.55} />
      </lineSegments>

      {traces.flatMap((t, i) => [
        <mesh key={`s${i}`} position={[t.start[0], t.start[1], 0.02]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
        </mesh>,
        <mesh key={`e${i}`} position={[t.end[0], t.end[1], 0.02]}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshBasicMaterial color="#ffffff" transparent opacity={0.85} />
        </mesh>,
      ])}

      <PulsingChip position={[-1.2, 1.2, 0.1]} size={0.55} />
      <PulsingChip position={[0.4, -0.9, 0.1]} size={0.4} />
      <PulsingChip position={[1.2, 1.5, 0.1]} size={0.35} />
    </group>
  );
}

function PulsingChip({
  position,
  size,
}: {
  position: [number, number, number];
  size: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const phase = (state.clock.elapsedTime * 0.6 + position[0]) % 2;
    const mat = ref.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.35 + Math.sin(phase * Math.PI) * 0.4;
  });
  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={[size, size * 0.6, 0.05]} />
      <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.5} />
    </mesh>
  );
}

function FloatingResistor({
  position,
  scale = 0.4,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.5;
      ref.current.rotation.z += delta * 0.3;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1}>
      <mesh ref={ref} position={position} scale={scale}>
        <cylinderGeometry args={[0.18, 0.18, 0.9, 16]} />
        <meshBasicMaterial color="#cbd5e1" wireframe transparent opacity={0.7} />
      </mesh>
    </Float>
  );
}

function FloatingTransistor({
  position,
  scale = 0.4,
}: {
  position: [number, number, number];
  scale?: number;
}) {
  return (
    <Float speed={0.9} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh position={position} scale={scale}>
        <octahedronGeometry args={[0.6, 0]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.65} />
      </mesh>
    </Float>
  );
}

function MouseParallax({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const x = state.pointer.x * 0.3;
    const y = state.pointer.y * 0.2;
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

export default function Hero3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <MouseParallax>
          <PCBPlane />
          <FloatingResistor position={[2.6, 1.3, 0.4]} scale={0.5} />
          <FloatingResistor position={[-2.5, -1.1, 0.6]} scale={0.4} />
          <FloatingTransistor position={[2.4, -1.2, -0.2]} scale={0.45} />
          <FloatingTransistor position={[-2.4, 1.4, -0.4]} scale={0.4} />
        </MouseParallax>
      </Suspense>
    </Canvas>
  );
}
