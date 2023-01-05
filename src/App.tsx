import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three';


function App() {
    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <OrbitControls maxDistance={55} />
            <Stars radius={240} speed={0} saturation={1} />
            <Sun name="sun" />
        </Canvas>


  );
}

export default App;
