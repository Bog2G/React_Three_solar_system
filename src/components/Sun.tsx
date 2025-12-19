import { useRef, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { Mesh } from "three";

interface SunProps {
  size?: number;
  rotationSpeed?: number;
}

function Sun({ size = 25, rotationSpeed = 0.05 }: SunProps) {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
  });

  return (
    <>
      <EffectComposer>
        <SelectiveBloom
          selection={meshRef}
          luminanceThreshold={0.55}
          intensity={7}
          luminanceSmoothing={0.2}
        />
      </EffectComposer>
      <mesh ref={meshRef}>
        <ambientLight intensity={0.5} />
        <pointLight position={[0, 0, 0]} intensity={1.5} />
        <sphereGeometry args={[size, 32, 32]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>
    </>
  );
}

export default memo(Sun);
