import React from "react"
import footer from "../image/translateBottom.png"

const HomeFooter=()=>{
    return(
        <div className="bg-dark-one">
            <div className="w-full">
                <img src={footer}/>
            </div>
            <div className="grid grid-cols-12 text-dark-five py-10">
                <div className="md:col-span-4 col-span-5 text-center"><p className="md:text-3xl text-base">JOYEUX</p></div>
                <div className="md:col-span-4 col-span-2 text-center"></div>
                <div className="md:col-span-4 col-span-5 text-center"><p className="md:text-3xl text-base">ANNIVERSAIRE</p></div>
            </div>
        </div>
    )
}
export default HomeFooter