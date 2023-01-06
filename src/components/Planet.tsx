import {useRef} from "react";
import { useFrame } from "@react-three/fiber";
import {Object3D} from "three";

export default function Planet(props: any) {
    const planetRef = useRef<Object3D>(null!);


    useFrame((state, delta) => {
        planetRef.current.rotation.y += 0.15 * delta;
        planetRef.current.rotation.x += 0.15 * delta;
    });
    return (
        <mesh {...props} ref={planetRef}>
            <sphereGeometry attach="geometry" args={[0.4,32,32]} />
            <meshBasicMaterial color={"red"} />
        </mesh>


    );

}