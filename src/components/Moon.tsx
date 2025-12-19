import { useRef, memo } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Mesh, TextureLoader } from "three";

interface MoonProps {
  orbitSpeed: number;
  orbitRadius: number;
  size: number;
}

function Moon({ orbitSpeed, orbitRadius, size }: MoonProps) {
  const meshRef = useRef<Mesh>(null!);
  const moonTexture = useLoader(TextureLoader, "2k_moon.jpg");

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Rotate moon on its axis
    mesh.rotation.y += 0.1 * delta;

    // Orbit around parent (Earth)
    const time = state.clock.getElapsedTime() * orbitSpeed;
    mesh.position.x = orbitRadius * Math.sin(time);
    mesh.position.z = orbitRadius * Math.cos(time);
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
}

export default memo(Moon);
