import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import {EffectComposer, Outline, SelectiveBloom} from "@react-three/postprocessing";
import  {Object3D} from "three";
import * as THREE from "three";
function Sun( props: any) {
    const ref = useRef<Object3D>(null!);
    useEffect(() => {
    console.log(ref);
    });

    useFrame((state, delta) => {
        //ref.current.rotation.y += 0.15 * delta;
        //ref.current.rotation.x += 2 * delta;
        //ref.current.position.y += Math.sin(state.clock.getElapsedTime()) / 2;
    });
  return (
    <>
        <EffectComposer >
            <SelectiveBloom selection={ref}  luminanceThreshold={0.55} intensity={7} luminanceSmoothing={0.2} />
        </EffectComposer>
        <mesh  {...props} ref = {ref}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <sphereGeometry attach="geometry" args={[25,32,32]} />
            <meshBasicMaterial color={"yellow"}  />
        </mesh>


    </>
  );
}

export default Sun;