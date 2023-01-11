import * as THREE from "three";
import {useLoader, useThree} from "@react-three/fiber";

function SkyBox() {
    const {scene} = useThree();
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load(["/space_ft.png", "/space_bk.png", "/space_up.png", "/space_dn.png", "/space_rt.png", "/space_lf.png"]);
    console.log(texture);
    scene.background = texture;
    return null;
}
export default SkyBox;