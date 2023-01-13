import { useRef } from "react";
import {useFrame, useLoader} from "@react-three/fiber";
import { Object3D } from "three";
import * as THREE from "three";

export default function Planet2(props: any) {
    const planet2Ref = useRef<Object3D>(null!);

    useFrame((state, delta) => {
        planet2Ref.current.rotation.y += 0.5 * delta;
        const time = state.clock.getElapsedTime() * props.orbitSpeed + (props.x * Math.PI * 2) ;
        const x = props.radius * 4 * Math.sin(time);
        const z = props.radius * 4 * Math.cos(time);
        planet2Ref.current.position.x = x;
        planet2Ref.current.position.z = z;
        //planet2Ref.current.position.y += Math.cos(state.clock.getElapsedTime()) / 2;
    });
    return (
        <mesh {...props} ref={planet2Ref} >
            <sphereGeometry attach="geometry" args={props.size} />
            <meshStandardMaterial color={"gray"} map={props.texture} />
        </mesh>


    );

}
