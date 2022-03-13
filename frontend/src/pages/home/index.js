import React from "react";
import './index.css'
import DarkSide from "./components/darkSide";

const HomePage=()=>{
    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto pt-40">
                    <div className=" h-banner w-full">
                            <p className="text-banner Megrim text-center leading-banner">How time flies</p>
                            <p className="text-9xl text-center leading-banner">Yuan A bdad <span className="text-xl"> Yuan A bdad</span></p>
                            <p className="text-banner Megrim leading-banner text-center ml-40">How time flies</p>
                    </div>
                    <DarkSide/>
        </div>
    </div>)
}

export default HomePage