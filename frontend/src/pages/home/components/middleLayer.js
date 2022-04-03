import React from "react";
import Mountain from "./mountain";
import scrollDown from '../image/scrollDown.png'

const MiddleLayer=()=>{
    return(
        <div className="mt-20">
            <div>
                <div className="grid-cols-12 grid">
                    <div className="col-span-4 text-center">
                    </div>
                    <div className="col-span-4 text-right">
                        <div className="grid grid-cols-12  mb-12">
                            <div className="col-span-8"><h3>scroll down</h3></div>
                            <div className="col-span-2"><img src={scrollDown} className="w-12"/></div>
                            <div className="col-span-2"> </div>
                        </div>
                    </div>
                    <div className="col-span-4 text-center">
                        </div>
                </div>

            </div>
            <div>
                <Mountain/>
            </div>
        </div>
    )
}

export default MiddleLayer
