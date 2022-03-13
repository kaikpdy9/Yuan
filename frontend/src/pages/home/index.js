import React from "react";
import './index.css'
import DarkSide from "./components/darkSide";

const HomePage=()=>{
    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto pt-40">
                    <div className="outsideOne h-banner w-full">
                            <p className="text-banner Megrim text-center leading-banner">Whisper words of</p>
                        <div className="flex justify-center"><p className="text-9xl text-center leading-banner">Wisdom</p> <span className="text-xl leading-6 ml-9"> <p className="mt-10">I wish everything always</p><p>seems to work in</p><p>your favor</p></span>
                            </div>
                            <p className="text-banner Megrim leading-banner text-center ml-40">Let it <span className="Ceviche leading-banner text-9xl"> be</span></p>
                    </div>
                    <DarkSide/>
        </div>
    </div>)
}

export default HomePage