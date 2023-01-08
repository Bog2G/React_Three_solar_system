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
            <OrbitControls maxDistance={130} />
            <Stars radius={240} speed={0} saturation={1} />
            <Planet name="saturn" orbitSpeed={0.5} radius={2.5}/>
            <Planet name="saturn" orbitSpeed={0.7} radius={4.5}/>
            <Planet name="saturn" orbitSpeed={0.9} radius={6.5}/>
            <Planet name="saturn" orbitSpeed={1} radius={8.5}/>
            <Planet name="saturn" orbitSpeed={0.3} radius={10.5}/>
            <Planet name="saturn" orbitSpeed={0.4} radius={12.5}/>
            <Planet name="saturn" orbitSpeed={1.3} radius={14.5}/>
            <Sun name="sun" />
        </Canvas>

  );
}

export default App;
