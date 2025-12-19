import { useRef, memo, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { Mesh, AdditiveBlending, Group } from "three";

interface SunProps {
  size?: number;
  rotationSpeed?: number;
}

// Solar flare/eruption component
function SolarFlare({
  position,
  rotation,
  baseScale,
  speed,
  phase
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  baseScale: number;
  speed: number;
  phase: number;
}) {
  const flareRef = useRef<Mesh>(null!);

  useFrame((state) => {
    if (flareRef.current) {
      // Organic pulsing animation
      const time = state.clock.elapsedTime * speed + phase;
      const pulse = 0.6 + Math.sin(time) * 0.4 + Math.sin(time * 2.3) * 0.2;
      flareRef.current.scale.y = baseScale * pulse;
      flareRef.current.scale.x = baseScale * (0.8 + Math.sin(time * 1.5) * 0.2);
      flareRef.current.scale.z = baseScale * (0.8 + Math.cos(time * 1.7) * 0.2);
    }
  });

  return (
    <mesh ref={flareRef} position={position} rotation={rotation}>
      <coneGeometry args={[3, 15, 8]} />
      <meshBasicMaterial
        color="#FF4500"
        transparent
        opacity={0.25}
        blending={AdditiveBlending}
        depthWrite={false}
      />
    </mesh>
  );
}

function Sun({ size = 25, rotationSpeed = 0.05 }: SunProps) {
  const meshRef = useRef<Mesh>(null!);
  const corona1Ref = useRef<Mesh>(null!);
  const corona2Ref = useRef<Mesh>(null!);
  const corona3Ref = useRef<Mesh>(null!);
  const flaresGroupRef = useRef<Group>(null!);

  // Generate random flare positions around the sun
  const flares = useMemo(() => {
    const flareData = [];
    const numFlares = 8;

    for (let i = 0; i < numFlares; i++) {
      // Distribute flares around the sun surface
      const theta = (i / numFlares) * Math.PI * 2 + Math.random() * 0.5;
      const phi = Math.random() * Math.PI - Math.PI / 2;

      const x = Math.cos(theta) * Math.cos(phi) * (size + 5);
      const y = Math.sin(phi) * (size + 5);
      const z = Math.sin(theta) * Math.cos(phi) * (size + 5);

      // Point flare outward from center
      const rotX = phi + Math.PI / 2;
      const rotY = 0;
      const rotZ = -theta;

      flareData.push({
        position: [x, y, z] as [number, number, number],
        rotation: [rotX, rotY, rotZ] as [number, number, number],
        baseScale: 0.8 + Math.random() * 0.8,
        speed: 1.5 + Math.random() * 2,
        phase: Math.random() * Math.PI * 2,
      });
    }
    return flareData;
  }, [size]);

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;

    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed * delta;
    }

    // Animate corona layers with different speeds for organic feel
    if (corona1Ref.current) {
      const scale1 = 1 + Math.sin(time * 1.5) * 0.03 + Math.sin(time * 3.7) * 0.02;
      corona1Ref.current.scale.setScalar(scale1);
    }
    if (corona2Ref.current) {
      const scale2 = 1 + Math.sin(time * 2.1 + 1) * 0.04 + Math.cos(time * 2.9) * 0.02;
      corona2Ref.current.scale.setScalar(scale2);
    }
    if (corona3Ref.current) {
      const scale3 = 1 + Math.sin(time * 1.8 + 2) * 0.05 + Math.sin(time * 4.1) * 0.03;
      corona3Ref.current.scale.setScalar(scale3);
    }

    // Slowly rotate the flares group
    if (flaresGroupRef.current) {
      flaresGroupRef.current.rotation.y += 0.01 * delta;
    }
  });

  return (
    <>
      <EffectComposer>
        <SelectiveBloom
          selection={meshRef}
          luminanceThreshold={0}
          intensity={4}
          luminanceSmoothing={0.3}
          radius={0.9}
        />
      </EffectComposer>

      {/* Main sun sphere */}
      <mesh ref={meshRef}>
        <ambientLight intensity={0.4} />
        <pointLight position={[0, 0, 0]} intensity={2.5} color="#FDB813" decay={0.3} />
        <sphereGeometry args={[size, 64, 64]} />
        <meshBasicMaterial color="#FDB813" />
      </mesh>

      {/* Layered corona for depth - inner hot layer */}
      <mesh ref={corona1Ref}>
        <sphereGeometry args={[size * 1.08, 32, 32]} />
        <meshBasicMaterial
          color="#FFAA00"
          transparent
          opacity={0.2}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Mid corona layer */}
      <mesh ref={corona2Ref}>
        <sphereGeometry args={[size * 1.18, 32, 32]} />
        <meshBasicMaterial
          color="#FF6600"
          transparent
          opacity={0.12}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Outer corona layer */}
      <mesh ref={corona3Ref}>
        <sphereGeometry args={[size * 1.35, 32, 32]} />
        <meshBasicMaterial
          color="#FF3300"
          transparent
          opacity={0.06}
          blending={AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

      {/* Solar flares/eruptions */}
      <group ref={flaresGroupRef}>
        {flares.map((flare, index) => (
          <SolarFlare
            key={index}
            position={flare.position}
            rotation={flare.rotation}
            baseScale={flare.baseScale}
            speed={flare.speed}
            phase={flare.phase}
          />
        ))}
      </group>
    </>
  );
}

export default memo(Sun);
