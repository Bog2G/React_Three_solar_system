import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import {EffectComposer, Outline, SelectiveBloom} from "@react-three/postprocessing";
import {Object3D} from "three";
import Mars from "./Planet";
import Saturn from "./Planet2";

function Sun(props: any) {
    const ref = useRef<Object3D>(null!);
    useEffect(() => {
    console.log(ref);
    });

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.15 * delta;
        //ref.current.rotation.x += 2 * delta;
        //ref.current.position.y += Math.sin(state.clock.getElapsedTime()) / 200;
    });
  return (
    <>
        <EffectComposer >
            <SelectiveBloom selection={ref}  luminanceThreshold={0.6} intensity={1.8} />
            <Outline  visibleEdgeColor={0xf48037} edgeStrength={5}  />
        </EffectComposer>
        <mesh {...props} ref = {ref} >
            <Mars name="mars" position={[3, 0, 0]} />
            <Mars name="mars" position={[8, 0, 0]} />
            <Mars name="mars" position={[13, 0, 0]} />
            <Mars name="mars" position={[17, 0, 0]} />
            <Mars name="mars" position={[25, 0, 0]} />
            <Saturn name="Saturn" position={[31, 0, 0]} />
            <Mars name="mars" position={[37, 0, 0]} />
            <Mars name="mars" position={[44, 0, 0]} />
            <Mars name="mars" position={[50, 0, 0]} />



            <sphereGeometry attach="geometry" args={[0.5,32,32]} />
            <meshBasicMaterial color={"yellow"} />
        </mesh>


    </>
  );
}

export default Sun;