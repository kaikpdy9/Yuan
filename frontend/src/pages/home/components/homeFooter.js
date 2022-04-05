import React from "react"
import footer from "../image/translateBottom.png"

const HomeFooter=()=>{
    return(
        <div className="bg-dark-one">
            <div className="w-full">
                <img src={footer}/>
            </div>
            <div className="grid grid-cols-12 text-dark-five py-10">
                <div className="col-span-4 text-center"><h5>Code By kaikpdy9</h5></div>
                <div className="col-span-4 text-center"><h5>Design By kaikpdy9</h5></div>
                <div className="col-span-4 text-center"><h5>@Yuan</h5></div>
            </div>
        </div>
    )
}
export default HomeFooter