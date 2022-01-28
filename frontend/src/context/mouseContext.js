import React,{createContext,useState} from "react";

export const MouseContext=createContext({
    cursorType:"",
    setCursorType:()=>{}
})

const MouseProvider=(props)=>{
    const [cursorType,setCursorType]=useState("")

    const cursorChangeHandler=(cursor)=>{
        setCursorType(cursor)
    }


    return(
    <MouseContext.Provider value={{
        cursorType: cursorType,
        setCursorType:cursorChangeHandler
    }}>
        {props.children}
    </MouseContext.Provider>)
}

export default MouseProvider
