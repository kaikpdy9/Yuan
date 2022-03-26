import React from "react";
import Mountain from "./mountain";

const MiddleLayer=()=>{
    return(
        <div className="mt-20">
            <div>
                <div className="grid-cols-12 grid">
                    <div className="col-span-4 text-center">
                    </div>
                    <div className="col-span-4 text-center">
                        <h3>scroll down</h3>
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
