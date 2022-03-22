import React, {useContext, useEffect} from "react";
import {MouseContext} from "../../context/mouseContext";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";
import YButton from "../button";
import Logo from "../Logo";
import {Link} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

const Header=()=>{
    const {cursorType,setCursorType}=useContext(MouseContext);

    // useEffect(()=>{
    //     ScrollTrigger.create({
    //         start:'top -80px',
    //         end:99999,
    //         markers:true
    //     })
    // })

    return(
        <div>
            <div className="header-style Ceviche grid-cols-12 grid">
                <div className="col-span-12 md:col-span-3 flex justify-center items-center W-40"><Logo/></div>
                <div className="md:col-span-2"></div>
                <div className="col-span-12 md:col-span-1 flex justify-center items-center"><Link to={'/'}><h5>Homepage</h5></Link></div>
                <div className="col-span-12 md:col-span-1 flex justify-center items-center"><h5 onMouseEnter={()=>setCursorType("hovered")}
                                                                                   onMouseLeave={()=>setCursorType("")}>Present</h5></div>
                <div className="col-span-12 md:col-span-1 flex justify-center items-center"><h5>Notes</h5></div>
                <div className="md:col-span-1"></div>
                <div className="col-span-12 md:col-span-3 flex justify-center items-center">
                    <div className="px-4">
                        <h5>Sign in</h5>
                    </div>
                    <div>
                        <Link to="/signUp">
                        <a className="bg-dark-one text-dark-five text-center py-2 px-4 rounded text-xl">
                            Sign Up
                        </a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="h-20">&#xa0;</div>
        </div>
    )
}

export default Header