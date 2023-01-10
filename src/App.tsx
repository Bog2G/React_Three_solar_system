import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'
import Planet from "./components/Planet2";


function App() {
    return (
        <Canvas camera={{position:[40, 0, 5]}} >
            <OrbitControls maxDistance={600} enablePan={false}/>
            <Stars radius={400} speed={0} saturation={1} />
            <Planet name="mercury" orbitSpeed={0.0478} radius={9.5} size={[2.53, 32, 32]} x={Math.random()}/>
            <Planet name="venus" orbitSpeed={0.038} radius={17.5} size={[4, 32, 32]} x={Math.random()}/>
            <Planet name="earth" orbitSpeed={0.032} radius={28.5} size={[5.3, 32, 32]} x={Math.random()}/>
            <Planet name="mars" orbitSpeed={0.031} radius={40.5} size={[4.4, 32, 32]} x={Math.random()}/>
            <Planet name="jupiter" orbitSpeed={0.0087} radius={57.5} size={[14, 32, 32]} x={Math.random()}/>
            <Planet name="saturn" orbitSpeed={0.0095} radius={68.5} size={[13.5, 32, 32]} x={Math.random()}/>
            <Planet name="uranus" orbitSpeed={0.0084} radius={79.5} size={[7.4, 32, 32]} x={Math.random()}/>
            <Planet name="neptune" orbitSpeed={0.0078} radius={90.5} size={[8.1, 32, 32]} x={Math.random()}/>
            <Sun name="sun" />
        </Canvas>

  );
}

export default App;
