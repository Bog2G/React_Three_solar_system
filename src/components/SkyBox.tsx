import { useEffect, memo } from "react";
import { CubeTextureLoader } from "three";
import { useThree } from "@react-three/fiber";

const SKYBOX_TEXTURES = [
  "/space_ft.png",
  "/space_bk.png",
  "/space_up.png",
  "/space_dn.png",
  "/space_rt.png",
  "/space_lf.png",
];

function SkyBox() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new CubeTextureLoader();
    const texture = loader.load(SKYBOX_TEXTURES);
    scene.background = texture;

    return () => {
      // Cleanup on unmount
      if (scene.background) {
        scene.background = null;
      }
    };
  }, [scene]);

  return null;
}

export default memo(SkyBox);
