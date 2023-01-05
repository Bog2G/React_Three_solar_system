import {
    Bloom,
    DepthOfField,
    EffectComposer,
    Noise,
    Selection,
    SelectiveBloom,
    Vignette
} from '@react-three/postprocessing';
import sun from "./sun";
import Sun from "./sun";

export default function Effects() {
    return (
        <Selection>
            <EffectComposer>
                <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} />
                <Sun name="Sun"/>
            </EffectComposer>
        </Selection>

    );
}
