import * as THREE from "three";


export default function SaturnRing({position, props}: any) {
    const loader = new THREE.TextureLoader();
    const ringTexture = loader.load("2k_saturn_ring_alpha.png");
    return (
        <mesh position={position}>
            <ringGeometry args={[10, 20, 32, 64, Math.PI * 2]} />
            <meshStandardMaterial color={"gray"} side={THREE.DoubleSide} map={ringTexture} />
        </mesh>
    );
}