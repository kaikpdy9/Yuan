import React from "react";
import MusicSection from "./musicSection";
import dance1 from '../image/dance1.png';
import dance2 from '../image/dance2.png';
import dance3 from '../image/dance3.png';
import dance4 from '../image/dance4.png';
import PlayGuitar from "./playGuitar";

const DarkSide=()=>{
    return(
    <div className="bg-dark-one text-dark">

        <div className="text-center pt-10">
            <h5 className="m-6">Lower me down...</h5>
            <h5 className="m-6">I know it's endless darkness soon</h5>
            <h5 className="m-6">All the memories of the past</h5>
            <h5 className="m-6">Emerge</h5>
        </div>
        <div className="grid grid-cols-12">
            <div className="col-span-3"></div>
            <div className="col-span-6 flex justify-center">
                <PlayGuitar/>
            </div>
            <div className="col-span-3"></div>
        </div>
        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance1">
                <img src={dance1}/>
            </div>
            <div className="col-span-4 text-center">
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Dance Till Reach The Moon </h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance2">
                <img src={dance2}/>
            </div>
            <div className="col-span-1">

            </div>
        </div>

        <div className="pb-10 pt-10">
            <p className="text-8xl Megrim">1232132131321312312</p>
        </div>

        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance3">
                <img src={dance3}/>
            </div>
            <div className="col-span-4 text-center">
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Lower me down...</h5>
                <h5 className="m-6">Dance Till Reach The Moon </h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance4">
                <img src={dance4}/>
            </div>
            <div className="col-span-1">

            </div>
        </div>

        <MusicSection/>
    </div>)
}

export default DarkSide