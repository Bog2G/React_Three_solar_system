import React from 'react';
import {Canvas} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import SKyBox from "./components/SkyBox";


function App() {

    return (
        <Canvas camera={{position:[0, 0, 5]}} >
            <SKyBox />
            <Sun name="Sun"/>
        </Canvas>


  );
}

export default App;
