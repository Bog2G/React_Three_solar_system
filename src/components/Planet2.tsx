import {useRef, useState} from "react";
import {useFrame} from "@react-three/fiber";
import { Object3D } from "three";
import * as THREE from "three";
import SaturnRing from "./Saturn_ring";
import Moon from "./Moon";
import Popup from "./Popup";

export default function Planet2(props: any) {
    const planet2Ref = useRef<Object3D>(null!);
    const [planetPosition, setPlanetPosition] = useState([0, 0, 0]);
    const [popupOpen, setPopupOpen] = useState(false);

    const handleClick = (e: any) => {
        setPopupOpen(!popupOpen);
    }


    useFrame((state, delta) => {
        planet2Ref.current.rotation.y += 0.2 * delta;
        const time = state.clock.getElapsedTime() * props.orbitSpeed + (props.x * Math.PI * 2) ;
        const x = props.radius * 4 * Math.sin(time);
        const z = props.radius * 4 * Math.cos(time);
        planet2Ref.current.position.x = x;
        planet2Ref.current.position.z = z;
        setPlanetPosition([x, planet2Ref.current.position.y, z]);
        //planet2Ref.current.position.y += Math.cos(state.clock.getElapsedTime()) / 2;
    });
    return (
        <>
            <mesh {...props} ref={planet2Ref} onClick={handleClick} >
                <sphereGeometry attach="geometry" args={props.size} />
                <meshStandardMaterial color={"gray"} map={props.texture}/>
                {props.name === "earth" && <Moon position={[planetPosition[0], planetPosition[1], planetPosition[2]]} orbitSpeed = {0.1} />}
            </mesh>
            {props.name === "saturn" && <SaturnRing position={planetPosition}/>}

        </>

    );

}
