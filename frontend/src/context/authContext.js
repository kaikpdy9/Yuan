import React, {createContext, useState} from "react";

export const AuthContext= createContext();

const AuthContextProvider=(props)=>{

    const [userName,setUserName]=useState('');
    const [isLogin,setIsLogin]=useState(false)

    return(
        <AuthContext.Provider
        value={{userName,setUserName,isLogin,setIsLogin}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider