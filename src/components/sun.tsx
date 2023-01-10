import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import {EffectComposer, Outline, SelectiveBloom} from "@react-three/postprocessing";
import THREE, {Object3D} from "three";
function Sun( props: any) {
    const ref = useRef<Object3D>(null!);
    useEffect(() => {
    console.log(ref);
    });

    useFrame((state, delta) => {
        ref.current.rotation.y += 0.15 * delta;
        //ref.current.rotation.x += 2 * delta;
        //ref.current.position.y += Math.sin(state.clock.getElapsedTime()) / 2;
    });
  return (
    <>
        <EffectComposer >
            <SelectiveBloom selection={ref}  luminanceThreshold={0.467} intensity={5.5} luminanceSmoothing={0.5} />
            <Outline  visibleEdgeColor={0xf48037} edgeStrength={5}  />
        </EffectComposer>
        <mesh  {...props} ref = {ref} >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <sphereGeometry attach="geometry" args={[25,32,32]} />
            <meshBasicMaterial color={"yellow"} />
        </mesh>


    </>
  );
}

export default Sun;