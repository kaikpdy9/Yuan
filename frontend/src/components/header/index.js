import React, {useContext, useEffect} from "react";
import {MouseContext} from "../../context/mouseContext";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Header=()=>{
    const {cursorType,setCursorType}=useContext(MouseContext);

    useEffect(()=>{
        ScrollTrigger.create({
            start:'top -80px',
            end:99999,
            markers:true
        })
    })

    return(
        <div>
            <div className="header-style">
                <div><h1>hiya</h1></div>
                <div>nihao</div>
                <div onMouseEnter={()=>setCursorType("hovered")}
                onMouseLeave={()=>setCursorType("")}>you</div>
            </div>
            <div className="h-20">&#xa0;</div>
        </div>
    )
}

export default Header