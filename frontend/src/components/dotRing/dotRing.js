import useMousePosition from "../../hooks/useMousePosition";
import './dotRing.css'
import {MouseContext} from "../../context/mouseContext";
import {useContext} from "react";

const DotRing=()=>{

    const {x,y}=useMousePosition()
    const {cursorType,setCursorType}=useContext(MouseContext)

    return(
        <div>
            <div style={{left:`${x}px`,top:`${y}px`}}
            className={"dotRing " + cursorType}>
            </div>
            <div style={{left:`${x}px`,top:`${y}px`}}
            className={"dot " + cursorType}>
            </div>
        </div>
    )
}

export default DotRing