import * as THREE from "three";
import {useFrame, useLoader} from "@react-three/fiber";
import {useRef} from "react";
import {Object3D} from "three";


export default function SaturnRing({position, props}: any) {
    const ringRef = useRef<Object3D>(null!);
    const ringTexture = useLoader(THREE.TextureLoader, "2k_saturn_ring_alpha.png");
    useFrame((state) => {
        ringRef.current.rotation.x = Math.PI / 2;
    });

    return (
        <mesh position={position} {...props} ref = {ringRef}>
            <ringGeometry args={[16.2, 24, 32, 64, Math.PI * 2]}  />
            <meshStandardMaterial side={THREE.DoubleSide} map={ringTexture}  />
        </mesh>
    );
}