import { Html } from "@react-three/drei"
import "./popup.css"

export default function Popup(props: any){
    const { planet } = props;
    return (
        <Html>
            <div className={"popup"}>
                <p>
                    Planet info for {planet}
                </p>
            </div>
        </Html>

    )
}