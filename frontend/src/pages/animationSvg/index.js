import React from "react";
import Logo from "../../components/Logo";

const AnimationSvg=()=>{

    return(
        <div className="h-screen bg-dark-one">
            <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
            <Logo width={400} height={400} load={true}/>
            <h3 className="text-dark-five mt-12">To Be Continue ...</h3>
            </div>
        </div>
    )
}

export default AnimationSvg