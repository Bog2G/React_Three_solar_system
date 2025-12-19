import { useRef, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { Mesh, AdditiveBlending } from "three";

interface SunProps {
  size?: number;
  rotationSpeed?: number;
}

function Sun({ size = 25, rotationSpeed = 0.05 }: SunProps) {
  const meshRef = useRef<Mesh>(null!);
  const coronaRef = useRef<Mesh>(null!);
  const flareRef = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }
    // Animate corona
    if (coronaRef.current) {
      coronaRef.current.rotation.z += 0.02 * delta;
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.02;
      coronaRef.current.scale.setScalar(scale);
    }
    // Subtle flare pulse
    if (flareRef.current) {
      const pulse = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.1;
      flareRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <>
      <EffectComposer>
        <SelectiveBloom
          selection={meshRef}
          luminanceThreshold={0}
          intensity={3}
          luminanceSmoothing={0.4}
          radius={0.8}
        />
      </EffectComposer>

      {/* Main sun sphere */}
      <mesh ref={meshRef}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2} color="#FDB813" decay={0.5} />
        <sphereGeometry args={[size, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Corona / outer glow layer */}
      <mesh ref={coronaRef}>
        <sphereGeometry args={[size * 1.15, 32, 32]} />
        <meshBasicMaterial
          color="#FF6B00"
          transparent
          opacity={0.15}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Solar flare rings */}
      <mesh ref={flareRef} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[size * 1.2, size * 1.8, 64]} />
        <meshBasicMaterial
          color="#FFD700"
          transparent
          opacity={0.08}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Vertical flare */}
      <mesh rotation={[0, 0, 0]}>
        <ringGeometry args={[size * 1.2, size * 1.6, 64]} />
        <meshBasicMaterial
          color="#FF8C00"
          transparent
          opacity={0.06}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

export default memo(Sun);
