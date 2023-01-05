import React from 'react';
import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import {Select} from "@react-three/postprocessing";

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
      <Select>
          <mesh {...props} ref = {ref} >
              <ambientLight />
              <pointLight />
              <sphereGeometry attach="geometry" args={[0.4,32,32]} />
              <meshBasicMaterial color="yellow" />
          </mesh>
      </Select>

    </>
  );
}

export default Sun;