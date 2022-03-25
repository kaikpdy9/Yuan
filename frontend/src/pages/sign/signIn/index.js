import React, {useContext, useState} from "react";
import {signIn} from "../../../api/sign/user";
import {useHistory} from "react-router-dom";
import {AuthContext} from "../../../context/authContext";

const SignIn=()=>{

    const {setUserName,setIsLogin}=useContext(AuthContext);

    const [signValues,setSignValue]=useState({
        email:"",
        password:""
    })
    const router=useHistory()

    const signAccount=()=>{
        const query=signValues;
        signIn(query).then((res)=>{
            if(res.status===200){
                console.log(res,'res')
                setIsLogin(true)
                setUserName(res.data.name)
                router.push('/')
            }
        })
    }

    const onSubmit=event=>{
        event.preventDefault();
        signAccount();
        console.log(signValues,'values')
    }

    const onChange=event=>{
        setSignValue({...signValues,[event.target.name]:event.target.value})
    }


    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto pt-40 flex justify-center">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label  className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="email" value={signValues.email} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label  className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            Password
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="password" value={signValues.password} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                    </div>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button
                            className="shadow bg-dark-two text-dark-five hover:bg-dark-one focus:shadow-outline focus:outline-none py-2 px-4 rounded"
                            type="submit">
                            Sign in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    )
}

export default SignIn