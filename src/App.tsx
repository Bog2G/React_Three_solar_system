import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";
import {Bloom, DepthOfField, EffectComposer, Noise, Vignette} from '@react-three/postprocessing';
import { OrbitControls } from '@react-three/drei'


function App() {

    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <OrbitControls />
            <Stars radius={240} speed={0.3} saturation={1}/>
            <Sun name="Sun"/>
        </Canvas>


  );
}

export default App;
