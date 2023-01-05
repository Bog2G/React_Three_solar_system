import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import {EffectComposer, SelectiveBloom} from "@react-three/postprocessing";

function Sun(props: any) {
    const ref = useRef();
    useEffect(() => {
    console.log(ref);
    });

    useFrame((state, delta) => {
        // @ts-ignore
        ref.current.rotation.y += 0.15 * delta;
        // @ts-ignore
        ref.current.rotation.x += 0.15 * delta;
        // @ts-ignore
        //ref.current.position.y += Math.sin(state.clock.getElapsedTime()) / 200;
    });
  return (
    <>
        <EffectComposer>
            <SelectiveBloom selection={ref}  luminanceThreshold={0}/>
        </EffectComposer>
        <mesh {...props} ref = {ref} >
            <sphereGeometry attach="geometry" args={[0.4,32,32]} />
            <meshBasicMaterial color={"yellow"} />
        </mesh>


    </>
  );
}

export default Sun;