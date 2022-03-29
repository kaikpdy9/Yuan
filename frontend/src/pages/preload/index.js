import React, {useEffect, useRef} from "react";
import createjs from "preload-js"
//import './index.css'

const Preload=()=>{
    const progressRef=useRef();
    const galleryRef=useRef();
    const queue= new createjs.LoadQueue(false);
    const handleFileComplete=(event)=>{
        const type=event.type;
        console.log(createjs.Types)
        if (type=="fileload"){
            galleryRef.current.appendChild(event.result);
        };
    }

    useEffect(()=>{
        console.log(progressRef.current,'progress');
        queue.on("fileload",handleFileComplete);
        queue.on("progress",event=>{
            let progress=Math.floor(event.progress*100);
            console.log(progress,'progress')
            progressRef.current.style.width=progress+'%';
            if (progress==100){
                console.log('all down');
                document.querySelector('body').style.background='white';
            }
        })
        queue.on('complete',event=>{
            galleryRef.current.classList.add('fadeIn');
            setTimeout(()=>{
                progressRef.current.classList.add('expand')
            },500)
        });
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/mountains-clouds.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/adventure-alpine-alps-714258.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220921-07-iconic-mountains-pitons-restricted.jpg');
        queue.loadFile('https://s3.amazonaws.com/coursetro/stuff/170407220916-04-iconic-mountains-matterhorn-restricted.jpg');
    },[])

    return(
        <div>
            <div id="progress" ref={progressRef}>

            </div>
            <div id="gallery" ref={galleryRef}>
            </div>
        </div>
    )
}

export default Preload
