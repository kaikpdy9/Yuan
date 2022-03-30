import React from "react";
import MusicSection from "./musicSection";

const DarkSide=()=>{
    return(
    <div className="bg-dark-one text-dark">
        <div className="text-center pt-10">
            <h5 className="m-6">Lower me down...</h5>
            <h5 className="m-6">I know it's endless darkness soon</h5>
            <h5 className="m-6">All the memories of the past</h5>
            <h5 className="m-6">Emerge</h5>
        </div>
        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance1">

            </div>
            <div className="col-span-4 text-center">
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Dance Till Reach The Moon </h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance2">

            </div>
            <div className="col-span-1">

            </div>
        </div>

        <div className="pb-10 pt-10">
            <p className="text-9xl Megrim">1232132131212312321312312</p>
        </div>

        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance3">

            </div>
            <div className="col-span-4 text-center">
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Dance Till Reach The Moon </h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance4">

            </div>
            <div className="col-span-1">

            </div>
        </div>

        <MusicSection/>
    </div>)
}

export default DarkSide