import * as THREE from "three";
import {useLoader, useThree} from "@react-three/fiber";

function SkyBox() {
    const {scene} = useThree();
    const texture = useLoader(THREE.TextureLoader, "./galaxy.jpg");
    console.log(texture);
    texture.encoding = THREE.sRGBEncoding;
    scene.background = texture;
    return null;
}
export default SkyBox;