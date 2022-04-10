import React from "react";
import Mountain from "./mountain";
import scrollDown from '../image/scrollDown.png'

const MiddleLayer=()=>{
    return(
        <div className="md:mt-20 mt-10">
            <div>
                <div className="grid-cols-12 grid">
                    <div className="col-span-4 text-center">
                    </div>
                    <div className="col-span-4 text-right">
                        <div className="grid grid-cols-12  md:mb-12 mb-6">
                            <div className="md:col-span-8 col-span-10 md:text-3xl">scroll down</div>
                            <div className="md:col-span-4 col-span-2">
                            <svg className="md:h-8 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="expand_more">
                                    <path id="Vector" d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="#020202"/>
                                </g>
                            </svg>
                            </div>
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
