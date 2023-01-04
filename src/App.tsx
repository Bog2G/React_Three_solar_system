import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import { Stars } from "@react-three/drei";


function App() {

    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <Stars />
            <Sun name="Sun"/>
        </Canvas>


  );
}

export default App;
