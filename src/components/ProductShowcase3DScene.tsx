"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Float,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

const ALUMINIUM = { color: "#e6ecf3", metalness: 0.85, roughness: 0.32 };
const COPPER = { color: "#d4843e", metalness: 1, roughness: 0.25 };
const NAVY = { color: "#3658a3", metalness: 0.45, roughness: 0.45 };
const NAVY_DARK = { color: "#2a3f72", metalness: 0.5, roughness: 0.5 };
const STEEL = { color: "#b6c2d2", metalness: 0.75, roughness: 0.35 };
const HUB_BASE = { color: "#3a4f7a", metalness: 0.55, roughness: 0.4 };
const HUB_TOP = { color: "#4a64a0", metalness: 0.65, roughness: 0.32 };
const ACCENT = { color: "#5b8cd6", metalness: 0.4, roughness: 0.35 };
const GLASS = {
  color: "#a3bce3",
  metalness: 0.55,
  roughness: 0.14,
  emissive: "#6e9bdf",
  emissiveIntensity: 0.28,
};

function Skyscraper() {
  const floors = useMemo(() => Array.from({ length: 14 }, (_, i) => i), []);
  const FLOOR_H = 0.18;
  const W = 0.7;
  const D = 0.7;
  return (
    <group>
      {floors.map((i) => (
        <group key={i} position={[0, i * FLOOR_H + FLOOR_H / 2, 0]}>
          <mesh castShadow receiveShadow>
            <boxGeometry args={[W, FLOOR_H * 0.18, D]} />
            <meshStandardMaterial {...NAVY_DARK} />
          </mesh>
          <mesh position={[0, FLOOR_H * 0.4, 0]} castShadow>
            <boxGeometry args={[W * 0.94, FLOOR_H * 0.6, D * 0.94]} />
            <meshStandardMaterial {...GLASS} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, floors.length * FLOOR_H + 0.16, 0]} castShadow>
        <boxGeometry args={[W * 0.5, 0.18, D * 0.5]} />
        <meshStandardMaterial {...NAVY_DARK} />
      </mesh>
      <mesh position={[0, floors.length * FLOOR_H + 0.55, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.6, 6]} />
        <meshStandardMaterial {...ALUMINIUM} />
      </mesh>
    </group>
  );
}

function StorageTank() {
  return (
    <group>
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.6, 0.6, 1, 32]} />
        <meshStandardMaterial color="#dde3ec" metalness={0.7} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.07, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.6, 0.06, 32]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      <mesh position={[0, 1.18, 0]} castShadow>
        <coneGeometry args={[0.6, 0.18, 32]} />
        <meshStandardMaterial color="#c8d0db" metalness={0.6} roughness={0.5} />
      </mesh>
      <mesh position={[0.62, 0.55, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 16]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
      <mesh position={[0.92, 0.55, 0]} castShadow>
        <boxGeometry args={[0.16, 0.22, 0.18]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      <group position={[0, 0.5, 0]}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[0, -0.25 + i * 0.25, 0]}>
            <torusGeometry args={[0.605, 0.012, 6, 32]} />
            <meshStandardMaterial color="#202734" metalness={0.6} roughness={0.5} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function PowerPylon() {
  const H = 2.2;
  const baseW = 0.55;
  const topW = 0.18;
  const legs: [number, number][] = [
    [-1, -1],
    [1, -1],
    [1, 1],
    [-1, 1],
  ];
  return (
    <group>
      {legs.map(([sx, sz], i) => {
        const x1 = (sx * baseW) / 2;
        const z1 = (sz * baseW) / 2;
        const x2 = (sx * topW) / 2;
        const z2 = (sz * topW) / 2;
        const dx = x2 - x1;
        const dy = H;
        const dz = z2 - z1;
        const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const mid = new THREE.Vector3(
          (x1 + x2) / 2,
          H / 2,
          (z1 + z2) / 2
        );
        const dir = new THREE.Vector3(dx, dy, dz).normalize();
        const q = new THREE.Quaternion().setFromUnitVectors(
          new THREE.Vector3(0, 1, 0),
          dir
        );
        return (
          <mesh
            key={i}
            position={[mid.x, mid.y, mid.z]}
            quaternion={q}
            castShadow
          >
            <boxGeometry args={[0.045, len, 0.045]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
        );
      })}
      {[0.55, 1.05, 1.55].map((y) => (
        <group key={y}>
          <mesh position={[0, y, 0]} castShadow>
            <boxGeometry args={[baseW * 0.8, 0.025, 0.025]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
          <mesh position={[0, y, 0]} castShadow>
            <boxGeometry args={[0.025, 0.025, baseW * 0.8]} />
            <meshStandardMaterial {...STEEL} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, H + 0.05, 0]} castShadow>
        <boxGeometry args={[1.4, 0.05, 0.06]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      <mesh position={[0, H + 0.25, 0]} castShadow>
        <boxGeometry args={[1, 0.05, 0.06]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      {[-0.6, 0, 0.6].map((x) => (
        <mesh key={x} position={[x, H + 0.08, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.16, 12]} />
          <meshStandardMaterial color="#e6e9ee" metalness={0.2} roughness={0.4} />
        </mesh>
      ))}
      {[-0.45, 0.45].map((x) => (
        <mesh key={x} position={[x, H + 0.28, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.16, 12]} />
          <meshStandardMaterial color="#e6e9ee" metalness={0.2} roughness={0.4} />
        </mesh>
      ))}
    </group>
  );
}

function FlareFlame() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const s = 1 + Math.sin(t * 8) * 0.08;
    ref.current.scale.set(s, 1 + Math.sin(t * 6) * 0.12, s);
    const mat = ref.current.material as THREE.MeshStandardMaterial;
    mat.emissiveIntensity = 2 + Math.sin(t * 9) * 0.6;
  });
  return (
    <mesh ref={ref} position={[0, 0.16, 0]}>
      <coneGeometry args={[0.07, 0.32, 12]} />
      <meshStandardMaterial
        color="#ffb347"
        emissive="#ff7a1f"
        emissiveIntensity={2}
        toneMapped={false}
      />
    </mesh>
  );
}

function OffshorePlatform() {
  const legs: [number, number][] = [
    [-0.5, -0.5],
    [0.5, -0.5],
    [0.5, 0.5],
    [-0.5, 0.5],
  ];
  return (
    <group>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <cylinderGeometry args={[1.05, 1.05, 0.04, 32]} />
        <meshStandardMaterial
          color="#3e5b95"
          metalness={0.3}
          roughness={0.4}
          emissive="#4a72c4"
          emissiveIntensity={0.3}
        />
      </mesh>
      {legs.map(([x, z], i) => (
        <mesh key={i} position={[x, 0.55, z]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 1, 12]} />
          <meshStandardMaterial {...STEEL} />
        </mesh>
      ))}
      <mesh position={[0, 1.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.25, 0.08, 1.25]} />
        <meshStandardMaterial color="#dde3ec" metalness={0.7} roughness={0.45} />
      </mesh>
      <mesh position={[-0.3, 1.34, 0]} castShadow>
        <boxGeometry args={[0.45, 0.4, 0.5]} />
        <meshStandardMaterial color="#cfd6df" metalness={0.6} roughness={0.5} />
      </mesh>
      <mesh position={[0.3, 1.4, 0.2]} castShadow>
        <boxGeometry args={[0.3, 0.5, 0.3]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      <group position={[0.45, 1.5, -0.35]}>
        <mesh castShadow>
          <cylinderGeometry args={[0.04, 0.04, 0.5, 12]} />
          <meshStandardMaterial {...STEEL} />
        </mesh>
        <FlareFlame />
      </group>
      <mesh position={[0, 1.16, -0.55]} castShadow>
        <boxGeometry args={[0.6, 0.04, 0.04]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
    </group>
  );
}

function Hub() {
  return (
    <group>
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <cylinderGeometry args={[3.45, 3.5, 0.32, 64]} />
        <meshStandardMaterial {...HUB_BASE} />
      </mesh>
      <mesh position={[0, 0.115, 0]} receiveShadow>
        <cylinderGeometry args={[3.42, 3.42, 0.02, 64]} />
        <meshStandardMaterial {...HUB_TOP} />
      </mesh>
      <mesh
        position={[0, 0.13, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[3.36, 0.025, 12, 96]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
      <mesh
        position={[0, 0.13, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[2.55, 0.012, 8, 96]} />
        <meshStandardMaterial
          color="#3a5fa8"
          metalness={0.4}
          roughness={0.4}
          emissive="#3a5fa8"
          emissiveIntensity={0.45}
          toneMapped={false}
        />
      </mesh>
      <mesh
        position={[0, 0.13, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[1.65, 0.008, 6, 96]} />
        <meshStandardMaterial
          color="#3a5fa8"
          emissive="#3a5fa8"
          emissiveIntensity={0.35}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.6, 0.7, 0.3, 24]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      <mesh position={[0, 0.46, 0]} castShadow>
        <cylinderGeometry args={[0.62, 0.62, 0.04, 24]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
      <mesh position={[0, 0.62, 0]} castShadow>
        <boxGeometry args={[0.42, 0.32, 0.42]} />
        <meshStandardMaterial color="#dde3ec" metalness={0.88} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.86, 0]}>
        <coneGeometry args={[0.12, 0.18, 8]} />
        <meshStandardMaterial
          color="#ffd28a"
          emissive="#ffb347"
          emissiveIntensity={1.4}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
}

function AutoOrbit({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.18;
    const py = state.pointer.y * 0.04;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      0.22 - py,
      0.05
    );
  });
  return <group ref={group}>{children}</group>;
}

function IndustriesDiorama() {
  const radius = 2.45;
  const positions: [number, number, number][] = [
    [0, 0.09, -radius],
    [radius, 0.09, 0],
    [0, 0.09, radius],
    [-radius, 0.09, 0],
  ];
  return (
    <group>
      <Hub />
      <group position={positions[0]} rotation={[0, Math.PI, 0]}>
        <Skyscraper />
      </group>
      <group position={positions[1]} rotation={[0, -Math.PI / 2, 0]}>
        <PowerPylon />
      </group>
      <group position={positions[2]} rotation={[0, 0, 0]}>
        <StorageTank />
      </group>
      <group position={positions[3]} rotation={[0, Math.PI / 2, 0]}>
        <OffshorePlatform />
      </group>
    </group>
  );
}

export default function ProductShowcase3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={28} />

      <hemisphereLight args={["#f5f8ff", "#5a6b8a", 0.85]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[6, 9, 5]}
        intensity={2.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-7}
        shadow-camera-right={7}
        shadow-camera-top={7}
        shadow-camera-bottom={-5}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.85} color="#cdd9f5" />
      <pointLight position={[0, 6, 5]} intensity={0.7} color="#ffe6c2" />
      <pointLight position={[3, 2, 3]} intensity={0.4} color="#fff4e1" />

      <Suspense fallback={null}>
        <Float
          speed={1}
          rotationIntensity={0.06}
          floatIntensity={0.18}
          floatingRange={[-0.04, 0.04]}
        >
          <AutoOrbit>
            <Center>
              <group scale={0.62}>
                <IndustriesDiorama />
              </group>
            </Center>
          </AutoOrbit>
        </Float>
        <ContactShadows
          position={[0, -1.4, 0]}
          opacity={0.32}
          scale={12}
          blur={2.8}
          far={4}
          color="#1c2c54"
        />
      </Suspense>
    </Canvas>
  );
}
