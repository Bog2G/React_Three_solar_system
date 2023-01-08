import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import  { Object3D } from "three";
import * as THREE from 'three';
import Sun from "./sun";

export default function Planet2(props: any) {
    const planet2Ref = useRef<Object3D>(null!);

    useFrame((state, delta) => {
        planet2Ref.current.rotation.y += 0.5 * delta;
        const t = state.clock.getElapsedTime() * 0.5 + Math.PI * 2 ;
        const x = 2.5 * 4 * Math.sin(t);
        const z = 2.5 * 4 * Math.cos(t);
        planet2Ref.current.position.x = x;
        planet2Ref.current.position.z = z;
        //planet2Ref.current.position.y += Math.cos(state.clock.getElapsedTime()) / 2;
    });
    return (
        <mesh {...props} ref={planet2Ref} >
            <sphereGeometry attach="geometry" args={[0.4,32,32]} />
            <meshBasicMaterial color={"gray"} />
        </mesh>


    );

}
