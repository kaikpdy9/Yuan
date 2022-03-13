import React from "react";

const DarkSide=()=>{
    return(
    <div className="bg-dark-one text-dark" onClick={()=>{console.log('hi')}}>
        <div className="text-center pt-10">
            <h5 className="m-6">Crash ...</h5>
            <h5 className="m-6">I know it's endless darkness soon</h5>
            <h5 className="m-6">All the memories of the past</h5>
            <h5 className="m-6">Emerge</h5>

        </div>
        <div className="grid-cols-12 grid h-136 pt-10">
            <div className="col-span-1">
                123
            </div>
            <div className="col-span-3 text-center">
                123
            </div>
            <div className="col-span-4 text-center">
                1232
            </div>
            <div className="col-span-3 text-center">
                123123</div>
            <div className="col-span-1">
                123
            </div>
        </div>
    </div>)
}

export default DarkSide