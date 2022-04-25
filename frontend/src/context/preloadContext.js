import React,{useContext,useState,createContext} from "react";

export const PreloadContext=createContext();

const PreloadContextProvider=(props)=>{

    const [preloadStatus,setPreloadStatus]=useState(true)

    return(
        <PreloadContext.Provider value={{preloadStatus,setPreloadStatus}}>
            {props.children}
        </PreloadContext.Provider>
    )
}

export default PreloadContextProvider