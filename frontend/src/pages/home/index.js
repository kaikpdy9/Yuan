import React from "react";
import bannerJpg from './image/banner.jpg'
import fakeFill1 from './image/fakeFill1.png'
import './index.css'

const HomePage=()=>{
    return(
    <div className="Ceviche bg-dark-five">
        <div className="container mx-auto pt-40">
                    <div className="outsideOne h-160 w-full">
                        <div className="textCenter">
                            <p className="text-6xl font-bold">How time flies</p>
                        </div>
                    </div>
            <div className="grid-cols-12 grid">
                <div className="col-span-1"></div>
                <div className="col-span-4">
                    123
                </div>
                <div className="col-span-2"></div>
                <div className="col-span-4">
                    213
                </div>
                <div className="col-span-1"></div>

            </div>
        </div>
    </div>)
}

export default HomePage