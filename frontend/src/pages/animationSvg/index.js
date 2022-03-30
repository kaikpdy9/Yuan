import React, {useEffect, useState} from "react";
import createjs from "preload-js";
import Logo from "../../components/Logo";
import HomePage from "../home";

const AnimationSvg=()=>{

    const [preloadStatus,setPreloadStatus]=useState(true)
    const queue = new createjs.LoadQueue(false);
    queue.setMaxConnections(1);
    const handleFileComplete=(event)=>{
        console.log(event,'event');
        const imgId=event.item.id;
        console.log(imgId);
    }

    useEffect(()=>{
        queue.loadFile({id:"dance1",src:'https://s3.amazonaws.com/coursetro/stuff/170407220916-04-iconic-mountains-matterhorn-restricted.jpg'});
        queue.loadFile({id:'dance2',src:'https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg'});
        queue.loadFile({id:'dance3',src:'https://s3.amazonaws.com/coursetro/stuff/mountains-clouds.jpg'});
        queue.loadFile({id:'dance4',src:'https://s3.amazonaws.com/coursetro/stuff/170407220921-07-iconic-mountains-pitons-restricted.jpg'});
        queue.on("fileload",handleFileComplete);
        queue.on("progress",event=>{
            let progress=Math.floor(event.progress*100);
            if(progress==100){
                console.log('Image all down')
            }
        })
        queue.on("complete",event=>{
            console.log(event,'complete');
        })
        console.log('hi')
    },[])

    return(
        <>
        <div className="h-screen bg-dark-one" id="preload">
            <div className="fixed top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 text-center">
            <Logo width={400} height={400} load={preloadStatus}/>
            <h3 className="text-dark-five mt-12">To Be Continue ...</h3>
            </div>
        </div>
        <div className="hidden" id="homepage">
            <HomePage/>
        </div>
        </>
    )
}

export default AnimationSvg