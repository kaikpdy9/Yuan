import React, {useContext, useEffect, useRef, useState} from "react";
import createjs from "preload-js";
import Logo from "../../components/Logo";
import HomePage from "../home";
import Layout from "../../components/layout";
import {PreloadContext} from "../../context/preloadContext";

const AnimationSvg=()=>{

    const processRef=useRef()
    const {preloadStatus,setPreloadStatus}=useContext(PreloadContext)
    const queue = new createjs.LoadQueue(false);
    const [processWidth,setProcessWidth]=useState(0)
    const handleFileComplete=(event)=>{
        console.log(event,'event');
        const imgId=event.item.id;
        console.log(imgId);
        const image=queue.getResult(event.item.id);
        document.getElementById(imgId).appendChild(image);
    }

    useEffect(()=>{
        queue.loadFile({id:"homeDance1",src:'http://r9y4w62r2.hn-bkt.clouddn.com/beta2/dance1.png'});
        queue.loadFile({id:'homeDance2',src:'http://r9y4w62r2.hn-bkt.clouddn.com/beta2/dance2.png'});
        queue.loadFile({id:'homeDance3',src:'http://r9y4w62r2.hn-bkt.clouddn.com/beta2/dance3.png'});
        queue.loadFile({id:'homeDance4',src:'http://r9y4w62r2.hn-bkt.clouddn.com/beta2/dance4.png'});
        queue.on("fileload",handleFileComplete);
        queue.on("progress",event=>{
            let progress=Math.floor(event.progress*100);
            console.log(progress,'progress')
            setProcessWidth(1.12*progress)
            if(progress==100){
                console.log('Image all down')
            }
        })
        queue.on("complete",event=>{
            console.log(event,'complete');
            setPreloadStatus(false);
        })
        console.log('hi')
    },[])

    return(
        <>
        <div className={`${preloadStatus?"":"hidden"} h-screen bg-dark-one`}  id="preload">
            <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
            <Logo width={400} height={400} />
            <div className="mt-10 flex justify-center">
                <svg width="254" height="34" viewBox="0 0 127 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Loading">
                        <rect id="Rectangle 1" x="0.5" y="0.5" width="126" height="16" stroke="#EFEFEF"/>
                        <g id="process">
                            <rect id="Rectangle 2" x="7.4706" ref={processRef}  y="6" width={processWidth} height="5" fill="#EEEEEE"/>
                        </g>
                    </g>
                </svg>

            </div>
            <h3 className="text-dark-five text-xl">loading</h3>
            </div>
        </div>
        <div className={preloadStatus?"hidden":""} id="homepage">
            <Layout>
            <HomePage/>
            </Layout>
        </div>
        </>
    )
}

export default AnimationSvg