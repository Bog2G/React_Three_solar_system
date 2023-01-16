import {useRef} from "react";
import {Object3D} from "three";
import {useFrame} from "@react-three/fiber";

export default function Moon(props: any) {
    const moonRef = useRef<Object3D>(null!);
    useFrame((state, delta) => {
        moonRef.current.rotation.y += 0.2 * delta;
        const time = state.clock.getElapsedTime() * props.orbitSpeed + (0.03 * Math.PI * 2) ;
        const x = 2.5 * 4 * Math.sin(time);
        const z = 2.5 * 4 * Math.cos(time);
        moonRef.current.position.x = x;
        moonRef.current.position.z = z;
    });
    return (
        <mesh {...props} ref = {moonRef}>
            <sphereGeometry args={[0.8, 32, 32]} />
            <meshStandardMaterial color={"gray"} />
        </mesh>
    );
}