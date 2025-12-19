import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader, DoubleSide } from "three";
import { MutableRefObject } from "react";

interface SaturnRingProps {
  parentRef: MutableRefObject<Mesh>;
  innerRadius: number;
  outerRadius: number;
}

function SaturnRing({ parentRef, innerRadius, outerRadius }: SaturnRingProps) {
  const ringRef = useRef<Mesh>(null!);
  const ringTexture = useLoader(TextureLoader, "2k_saturn_ring_alpha.png");

  useFrame(() => {
    const ring = ringRef.current;
    const parent = parentRef.current;
    if (!ring || !parent) return;

    // Follow Saturn's position
    ring.position.copy(parent.position);
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[innerRadius, outerRadius, 64]} />
      <meshStandardMaterial
        map={ringTexture}
        side={DoubleSide}
        transparent
        opacity={0.9}
      />
    </mesh>
  );
}

export default memo(SaturnRing);
