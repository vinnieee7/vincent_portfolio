import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Terrain() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mesh2Ref = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const geo = new THREE.PlaneGeometry(60, 120, 80, 160);
    const pos = geo.attributes.position as THREE.BufferAttribute;
    const original = new Float32Array(pos.array.length);
    original.set(pos.array);
    (geo as unknown as { _original: Float32Array })._original = original;
    return geo;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    [meshRef, mesh2Ref].forEach((ref, idx) => {
      const mesh = ref.current;
      if (!mesh) return;
      const geo = mesh.geometry as THREE.PlaneGeometry;
      const pos = geo.attributes.position as THREE.BufferAttribute;
      const orig = (geo as unknown as { _original: Float32Array })._original;
      for (let i = 0; i < pos.count; i++) {
        const x = orig[i * 3];
        const y = orig[i * 3 + 1];
        const wave =
          Math.sin(x * 0.25 + t * 0.6) * 0.8 +
          Math.cos(y * 0.18 + t * 0.4) * 0.9 +
          Math.sin((x + y) * 0.12 + t * 0.3) * 0.5;
        pos.setZ(i, wave);
      }
      pos.needsUpdate = true;
      // scroll terrain forward
      const offset = ((t * 2) % 60) + idx * 60;
      mesh.position.y = -offset + 30;
    });
  });

  return (
    <>
      <mesh
        ref={meshRef}
        geometry={geometry}
        rotation={[-Math.PI / 2.4, 0, 0]}
        position={[0, 0, -8]}
      >
        <meshBasicMaterial color="#00FF88" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh
        ref={mesh2Ref}
        geometry={geometry.clone()}
        rotation={[-Math.PI / 2.4, 0, 0]}
        position={[0, 0, -8]}
      >
        <meshBasicMaterial color="#00CC6A" wireframe transparent opacity={0.18} />
      </mesh>
    </>
  );
}

export function WireframeBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 bg-[#050505]" />
      <Canvas
        camera={{ position: [0, 4, 10], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <fog attach="fog" args={["#050505", 8, 32]} />
        <Terrain />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_85%)]" />
    </div>
  );
}