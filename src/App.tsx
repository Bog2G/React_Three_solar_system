import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'
import Planet from "./components/Planet2";


function App() {
    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <OrbitControls maxDistance={200} />
            <Stars radius={240} speed={0} saturation={1} />
            <Planet name="mercury" orbitSpeed={0.2} radius={2.5} size={[0.53, 32, 32]}/>
            <Planet name="venus" orbitSpeed={0.135} radius={4.5} size={[1, 32, 32]}/>
            <Planet name="earth" orbitSpeed={0.128} radius={6.5} size={[1.4, 32, 32]}/>
            <Planet name="mars" orbitSpeed={0.134} radius={8.5} size={[1.1, 32, 32]}/>
            <Planet name="jupiter" orbitSpeed={0.0187} radius={10.5} size={[2.7, 32, 32]}/>
            <Planet name="saturn" orbitSpeed={0.0195} radius={12.5} size={[2.2, 32, 32]}/>
            <Planet name="uranus" orbitSpeed={0.0314} radius={14.5} size={[1.7, 32, 32]}/>
            <Planet name="neptune" orbitSpeed={0.0378} radius={16.5} size={[1.6, 32, 32]}/>
            <Sun name="sun" />
        </Canvas>

  );
}

export default App;
