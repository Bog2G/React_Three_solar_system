import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";

function Sun(props: any) {
    const ref = useRef();
    useEffect(() => {
    console.log(ref);
    });

    useFrame((state, delta) => {
        // @ts-ignore
        ref.current.rotation.y += delta;
        // @ts-ignore
        ref.current.rotation.x += 0.5 * delta;
        // @ts-ignore
        //ref.current.position.y += Math.sin(state.clock.getElapsedTime()) / 200;
    });
  return (
    <>
      <mesh {...props} ref = {ref} >
        <sphereGeometry attach="geometry" args={[0.4,32,32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
    </>
  );
}

export default Sun;