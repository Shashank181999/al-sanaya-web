"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  PerspectiveCamera,
} from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const STEEL = { color: "#b6c2d2", metalness: 0.75, roughness: 0.35 };
const ALUMINIUM = { color: "#e6ecf3", metalness: 0.85, roughness: 0.32 };
const NAVY = { color: "#3658a3", metalness: 0.45, roughness: 0.45 };
const NAVY_DARK = { color: "#2a3f72", metalness: 0.5, roughness: 0.5 };
const COPPER = { color: "#d4843e", metalness: 1, roughness: 0.25 };
const RUBBER = { color: "#404a64", metalness: 0.55, roughness: 0.6 };
const PLINTH_BASE = { color: "#3a4f7a", metalness: 0.55, roughness: 0.4 };
const PLINTH_TOP = { color: "#4a64a0", metalness: 0.65, roughness: 0.32 };

function Plinth() {
  return (
    <group>
      <mesh position={[0, -0.06, 0]} receiveShadow>
        <cylinderGeometry args={[0.88, 0.92, 0.1, 32]} />
        <meshStandardMaterial {...PLINTH_BASE} />
      </mesh>
      <mesh position={[0, -0.005, 0]} receiveShadow>
        <cylinderGeometry args={[0.84, 0.84, 0.012, 32]} />
        <meshStandardMaterial {...PLINTH_TOP} />
      </mesh>
      <mesh position={[0, 0.002, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.84, 0.008, 8, 64]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
    </group>
  );
}

function Switchgear() {
  return (
    <group>
      <Plinth />
      <mesh position={[0, 0.85, 0]} castShadow>
        <boxGeometry args={[0.7, 1.55, 0.42]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      <mesh position={[0, 0.85, 0.215]} castShadow>
        <boxGeometry args={[0.6, 1.4, 0.02]} />
        <meshStandardMaterial color="#cfd6df" metalness={0.78} roughness={0.4} />
      </mesh>
      <mesh position={[0.2, 0.78, 0.235]} castShadow>
        <boxGeometry args={[0.04, 0.18, 0.03]} />
        <meshStandardMaterial {...RUBBER} />
      </mesh>
      <mesh position={[-0.18, 1.42, 0.225]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#dc2626"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[-0.08, 1.42, 0.225]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#f59e0b"
          emissiveIntensity={1}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0.02, 1.42, 0.225]}>
        <sphereGeometry args={[0.025, 12, 12]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={1.2}
          toneMapped={false}
        />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0, 0.18 + i * 0.06, 0.226]}>
          <boxGeometry args={[0.4, 0.025, 0.005]} />
          <meshStandardMaterial color="#3d4a66" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}
      <mesh position={[0, 1.66, 0]} castShadow>
        <boxGeometry args={[0.76, 0.06, 0.46]} />
        <meshStandardMaterial {...NAVY_DARK} />
      </mesh>
    </group>
  );
}

function Pump() {
  return (
    <group>
      <Plinth />
      <mesh position={[0, 0.13, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.55, 0.1, 0.7]} />
        <meshStandardMaterial color="#3e5b95" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh
        position={[-0.4, 0.5, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.32, 0.32, 0.45, 24]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      <mesh
        position={[0.45, 0.5, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.24, 0.24, 0.7, 20]} />
        <meshStandardMaterial {...STEEL} />
      </mesh>
      <mesh
        position={[0, 0.5, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.13, 0.13, 0.22, 16]} />
        <meshStandardMaterial {...RUBBER} />
      </mesh>
      <mesh position={[-0.4, 0.92, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.13, 0.08, 16]} />
        <meshStandardMaterial {...ALUMINIUM} />
      </mesh>
      <mesh position={[-0.4, 1.12, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.07, 0.4, 16]} />
        <meshStandardMaterial {...COPPER} />
      </mesh>
      <mesh
        position={[-0.4, 0.5, 0.34]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <cylinderGeometry args={[0.14, 0.14, 0.06, 16]} />
        <meshStandardMaterial {...ALUMINIUM} />
      </mesh>
      <mesh
        position={[0.85, 0.5, 0]}
        rotation={[0, 0, Math.PI / 2]}
        castShadow
      >
        <cylinderGeometry args={[0.18, 0.18, 0.06, 16]} />
        <meshStandardMaterial {...NAVY_DARK} />
      </mesh>
    </group>
  );
}

function BusductSection() {
  return (
    <group>
      <Plinth />
      <mesh position={[0, 0.55, 0]} castShadow>
        <boxGeometry args={[1.4, 0.5, 0.4]} />
        <meshStandardMaterial color="#dde3ec" metalness={0.82} roughness={0.38} />
      </mesh>
      <mesh position={[-0.72, 0.55, 0]} castShadow>
        <boxGeometry args={[0.05, 0.62, 0.5]} />
        <meshStandardMaterial {...ALUMINIUM} />
      </mesh>
      <mesh position={[0.72, 0.55, 0]} castShadow>
        <boxGeometry args={[0.05, 0.62, 0.5]} />
        <meshStandardMaterial {...ALUMINIUM} />
      </mesh>
      {[
        [0.27, 0.22],
        [0.27, -0.22],
        [-0.27, 0.22],
        [-0.27, -0.22],
      ].flatMap(([dy, dz]) =>
        [-0.72, 0.72].map((x) => (
          <mesh
            key={`${x}-${dy}-${dz}`}
            position={[x, 0.55 + dy, dz]}
            rotation={[0, 0, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.045, 0.045, 0.04, 6]} />
            <meshStandardMaterial color="#202734" metalness={0.85} roughness={0.45} />
          </mesh>
        ))
      )}
      {[0.16, 0.05, -0.05, -0.16].map((y, i) => (
        <mesh key={i} position={[0, 0.55 + y, 0.205]} castShadow>
          <boxGeometry args={[1.2, 0.07, 0.04]} />
          <meshStandardMaterial {...COPPER} />
        </mesh>
      ))}
      <mesh
        position={[0.25, 0.55, 0.205]}
        castShadow
      >
        <boxGeometry args={[0.3, 0.32, 0.04]} />
        <meshStandardMaterial
          color="#213f7e"
          metalness={0.4}
          roughness={0.55}
          emissive="#213f7e"
          emissiveIntensity={0.3}
        />
      </mesh>
    </group>
  );
}

function Valve() {
  return (
    <group>
      <Plinth />
      <mesh position={[0, 0.13, 0]} receiveShadow>
        <boxGeometry args={[0.7, 0.06, 0.7]} />
        <meshStandardMaterial {...NAVY_DARK} />
      </mesh>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial {...NAVY} />
      </mesh>
      {[-0.35, 0.35].map((x, i) => (
        <mesh
          key={i}
          position={[x, 0.5, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.26, 0.26, 0.08, 24]} />
          <meshStandardMaterial {...ALUMINIUM} />
        </mesh>
      ))}
      {[-0.6, 0.6].map((x, i) => (
        <mesh
          key={i}
          position={[x, 0.5, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <cylinderGeometry args={[0.16, 0.16, 0.32, 16]} />
          <meshStandardMaterial color="#cfd6df" metalness={0.7} roughness={0.45} />
        </mesh>
      ))}
      <mesh position={[0, 0.95, 0]} castShadow>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 12]} />
        <meshStandardMaterial color="#cfd6df" metalness={0.8} roughness={0.35} />
      </mesh>
      <mesh
        position={[0, 1.22, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        castShadow
      >
        <torusGeometry args={[0.2, 0.025, 8, 24]} />
        <meshStandardMaterial color="#dc2626" metalness={0.4} roughness={0.5} />
      </mesh>
      {[0, Math.PI / 3, (2 * Math.PI) / 3].map((a, i) => (
        <mesh
          key={i}
          position={[0, 1.22, 0]}
          rotation={[Math.PI / 2, 0, a]}
          castShadow
        >
          <boxGeometry args={[0.4, 0.022, 0.022]} />
          <meshStandardMaterial color="#dc2626" metalness={0.4} roughness={0.5} />
        </mesh>
      ))}
      <mesh position={[0, 1.22, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial {...RUBBER} />
      </mesh>
    </group>
  );
}

function Spinner({
  speed = 0.4,
  children,
}: {
  speed?: number;
  children: React.ReactNode;
}) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  return <group ref={ref}>{children}</group>;
}

const ITEMS = [
  { x: -4.5, model: <Switchgear />, speed: 0.35 },
  { x: -1.5, model: <Pump />, speed: 0.4 },
  { x: 1.5, model: <BusductSection />, speed: 0.45 },
  { x: 4.5, model: <Valve />, speed: 0.5 },
];

export default function EquipmentShowcase3DScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      shadows
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault position={[0, 0.6, 12]} fov={32} />

      <hemisphereLight args={["#f5f8ff", "#5a6b8a", 0.85]} />
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[5, 9, 5]}
        intensity={2.1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-9}
        shadow-camera-right={9}
        shadow-camera-top={5}
        shadow-camera-bottom={-3}
      />
      <directionalLight position={[-5, 4, -3]} intensity={0.85} color="#cdd9f5" />
      <pointLight position={[0, 6, 5]} intensity={0.7} color="#ffe6c2" />
      <pointLight position={[0, 2, 4]} intensity={0.45} color="#fff4e1" />

      <Suspense fallback={null}>
        {ITEMS.map((it, i) => (
          <group key={i} position={[it.x, 0, 0]}>
            <Spinner speed={it.speed}>{it.model}</Spinner>
          </group>
        ))}
        <ContactShadows
          position={[0, -0.06, 0]}
          opacity={0.28}
          scale={20}
          blur={2.6}
          far={2}
          color="#1c2c54"
        />
      </Suspense>
    </Canvas>
  );
}
