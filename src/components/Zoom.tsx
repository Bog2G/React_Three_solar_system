import {useBounds} from "@react-three/drei";

// @ts-ignore
export default function Zoom({ children }) {
    const api = useBounds()
    return (
        <group onClick={(e) => (e.stopPropagation(), e.delta <= 2 && api.refresh(e.object).fit()) && e.object} onPointerMissed={(e) => e.button === 0 && api.refresh().fit()}>
            {children}
        </group>
    )
}