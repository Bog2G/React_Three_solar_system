import { useRef, memo, useMemo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader, DoubleSide, RingGeometry } from "three";
import { MutableRefObject } from "react";

interface SaturnRingProps {
  parentRef: MutableRefObject<Mesh>;
  innerRadius: number;
  outerRadius: number;
}

function SaturnRing({ parentRef, innerRadius, outerRadius }: SaturnRingProps) {
  const ringRef = useRef<Mesh>(null!);
  const ringTexture = useLoader(TextureLoader, "2k_saturn_ring_alpha.png");

  // Create custom ring geometry with proper UVs for the ring texture
  const ringGeometry = useMemo(() => {
    const geometry = new RingGeometry(innerRadius, outerRadius, 64);

    // Fix UVs for ring - map texture radially
    const pos = geometry.attributes.position;
    const uv = geometry.attributes.uv;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const distance = Math.sqrt(x * x + y * y);

      // Map UV based on distance from center (radial mapping)
      const normalizedDist = (distance - innerRadius) / (outerRadius - innerRadius);
      uv.setXY(i, normalizedDist, 0.5);
    }

    return geometry;
  }, [innerRadius, outerRadius]);

  useFrame(() => {
    const ring = ringRef.current;
    const parent = parentRef.current;
    if (!ring || !parent) return;

    // Follow Saturn's position
    ring.position.copy(parent.position);
  });

  return (
    <mesh ref={ringRef} geometry={ringGeometry} rotation={[Math.PI / 2, 0, 0]}>
      <meshBasicMaterial
        map={ringTexture}
        side={DoubleSide}
        transparent
        alphaTest={0.1}
        opacity={0.85}
        color="#C9B896"
      />
    </mesh>
  );
}

export default memo(SaturnRing);
