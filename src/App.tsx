import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three';
import Mars from "./components/Planet";


function App() {
    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <OrbitControls maxDistance={55} />
            <Stars radius={240} speed={0} saturation={1} />
            <Sun name="sun" />
            <Mars name="mars" position={[5, 1, 1]}/>
        </Canvas>

  );
}

export default App;
