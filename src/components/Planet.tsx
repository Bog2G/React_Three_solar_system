import { useRef, useState, useCallback, memo } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { Texture } from "three";
import { PlanetData, ORBIT_SCALE } from "../data/planets";
import SaturnRing from "./SaturnRing";
import Moon from "./Moon";

interface PlanetProps {
  name: string;
  orbitSpeed: number;
  radius: number;
  size: number;
  rotationSpeed: number;
  initialAngle: number;
  texture: Texture;
  hasMoon?: boolean;
  hasRing?: boolean;
  planetData: PlanetData;
  onPlanetClick?: (planetData: PlanetData) => void;
}

function Planet({
  name,
  orbitSpeed,
  radius,
  size,
  rotationSpeed,
  initialAngle,
  texture,
  hasMoon = false,
  hasRing = false,
  planetData,
  onPlanetClick,
}: PlanetProps) {
  const meshRef = useRef<Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  const handleClick = useCallback(() => {
    if (onPlanetClick) {
      onPlanetClick(planetData);
    }
  }, [onPlanetClick, planetData]);

  const handlePointerOver = useCallback(() => {
    setHovered(true);
    document.body.style.cursor = "pointer";
  }, []);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    document.body.style.cursor = "auto";
  }, []);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;

    // Rotate the planet on its axis
    mesh.rotation.y += rotationSpeed * delta;

    // Calculate orbital position
    const time = state.clock.getElapsedTime() * orbitSpeed + initialAngle * Math.PI * 2;
    const orbitRadius = radius * ORBIT_SCALE;
    mesh.position.x = orbitRadius * Math.sin(time);
    mesh.position.z = orbitRadius * Math.cos(time);
  });

  return (
    <group>
      <mesh
        ref={meshRef}
        onClick={handleClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          map={texture}
          emissive={hovered ? "#333333" : "#000000"}
        />
        {hasMoon && <Moon orbitSpeed={0.1} orbitRadius={10} size={0.8} />}
      </mesh>
      {hasRing && (
        <SaturnRing
          parentRef={meshRef}
          innerRadius={size * 1.2}
          outerRadius={size * 1.8}
        />
      )}
    </group>
  );
}

export default memo(Planet);
