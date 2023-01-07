import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Object3D } from "three";

export default function Planet2(props: any) {
    const planet2Ref = useRef<Object3D>(null!);


    useFrame((state, delta) => {
        planet2Ref.current.rotation.y += 0.5 * delta;
        planet2Ref.current.rotation.x += 0.5 * delta;
    });
    return (
        <mesh {...props} ref={planet2Ref} >
            <sphereGeometry attach="geometry" args={[0.4,32,32]} />
            <meshBasicMaterial color={"gray"} />
        </mesh>


    );

}
