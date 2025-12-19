import { useState, useCallback, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Html } from "@react-three/drei";
import { TextureLoader, Texture } from "three";

import Sun from "./components/Sun";
import Planet from "./components/Planet";
import SkyBox from "./components/SkyBox";
import Popup from "./components/Popup";
import { PLANETS, INITIAL_ANGLES, PlanetData } from "./data/planets";
import "./App.css";

// Loading component for Suspense fallback
function Loader() {
  return (
    <Html center>
      <div style={{ color: "white", fontSize: "1.5rem" }}>
        Loading Solar System...
      </div>
    </Html>
  );
}

// Component that loads textures and renders planets
function SolarSystem({
  onPlanetClick,
}: {
  onPlanetClick: (planet: PlanetData) => void;
}) {
  // Load all textures at once
  const textures = useLoader(
    TextureLoader,
    PLANETS.map((p) => p.textureFile)
  ) as Texture[];

  return (
    <>
      <SkyBox />
      <Sun />
      {PLANETS.map((planet, index) => (
        <Planet
          key={planet.name}
          name={planet.name}
          orbitSpeed={planet.orbitSpeed}
          radius={planet.radius}
          size={planet.size}
          rotationSpeed={planet.rotationSpeed}
          initialAngle={INITIAL_ANGLES[planet.name]}
          texture={textures[index]}
          hasMoon={planet.hasMoon}
          hasRing={planet.hasRing}
          planetData={planet}
          onPlanetClick={onPlanetClick}
        />
      ))}
    </>
  );
}

function App() {
  const [selectedPlanet, setSelectedPlanet] = useState<PlanetData | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handlePlanetClick = useCallback((planet: PlanetData) => {
    setSelectedPlanet(planet);
    setIsPopupOpen(true);
  }, []);

  const handleClosePopup = useCallback(() => {
    setIsPopupOpen(false);
  }, []);

  return (
    <>
      <Canvas>
        <PerspectiveCamera makeDefault position={[50, 40, 400]} />
        <OrbitControls
          maxDistance={750}
          minDistance={30}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
        />
        <Suspense fallback={<Loader />}>
          <SolarSystem onPlanetClick={handlePlanetClick} />
        </Suspense>
      </Canvas>
      <Popup
        planet={selectedPlanet}
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
      />
    </>
  );
}

export default App;
