import React from "react";
import BirthdayCard from "./birthdayCard";

const Birthday=()=>{
    return(
        <div className="m-6 pb-20">
        <div className="grid grid-cols-12">
            <div className="col-span-2"></div>
            <div className="col-span-8 justify-center flex">
                <BirthdayCard/>
            </div>
            <div className="col-span-2"></div>
        </div>
        </div>
    )
}

export default Birthday