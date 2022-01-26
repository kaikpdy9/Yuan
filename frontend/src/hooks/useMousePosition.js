import {useEffect,useState} from "react";

export default function useMousePosition(){
    const [mousePosition,setMousePosition]=useState({x:null,y:null})

    useEffect(()=>{
        const mouseMoveHandler=(event)=>{
            setMousePosition({x:event.clientX,y:event.clientY})
        }

        document.addEventListener("mousemove",mouseMoveHandler);

        return()=>{
            document.removeEventListener("mousemove",mouseMoveHandler)
        }
    })

    return mousePosition
}