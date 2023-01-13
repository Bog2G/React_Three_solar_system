import React, {useEffect, useRef} from 'react';
import {Canvas, useLoader, useThree} from '@react-three/fiber';
import './App.css';
import Sun from "./components/sun";
import {Bounds, OrbitControls} from '@react-three/drei'
import Planet from "./components/Planet2";
import SkyBox from "./components/SkyBox";
import Zoom from "./components/Zoom";
import * as THREE from "three";



function App() {
   const [earth, mars, venus, mercury, saturn, jupiter, uranus, neptune] = useLoader(THREE.TextureLoader, [ "2k_earth_daymap.jpg","2k_mars.jpg","2k_venus_surface.jpg","2k_mercury.jpg","2k_saturn.jpg","2k_jupiter.jpg","2k_uranus.jpg","2k_neptune.jpg"]);

    return (
        <Canvas>
            <OrbitControls maxDistance={600} enablePan={false} makeDefault={true} position={[50, 20, 100]}/>
            <SkyBox />
            <Bounds fit observe clip damping={6} margin={1.6}>
                <Zoom>
                    <Planet name="mercury" orbitSpeed={0.0478} radius={9.5} size={[2.53, 32, 32]} x={Math.random()} texture={mercury}/>
                    <Planet name="venus" orbitSpeed={0.038} radius={17.5} size={[4, 32, 32]} x={Math.random()} texture={venus}/>
                    <Planet name="earth" orbitSpeed={0.042} radius={28.5} size={[5.3, 32, 32]} x={Math.random()} texture={earth}/>
                    <Planet name="mars" orbitSpeed={0.031} radius={40.5} size={[4.4, 32, 32]} x={Math.random()} texture={mars}/>
                    <Planet name="jupiter" orbitSpeed={0.0087} radius={57.5} size={[14, 32, 32]} x={Math.random()} texture={jupiter}/>
                    <Planet name="saturn" orbitSpeed={0.0095} radius={68.5} size={[13.5, 32, 32]} x={Math.random()} texture={saturn}/>
                    <Planet name="uranus" orbitSpeed={0.0084} radius={79.5} size={[7.4, 32, 32]} x={Math.random()} texture={uranus}/>
                    <Planet name="neptune" orbitSpeed={0.0078} radius={90.5} size={[8.1, 32, 32]} x={Math.random()} texture={neptune}/>
                    <Sun name="sun" />
                </Zoom>
            </Bounds>


        </Canvas>

  );
}

export default App;
