import React, {useContext, useState} from "react";
import {signIn} from "../../../api/sign/user";
import {useHistory} from "react-router-dom";

const SignIn=()=>{

    const [signValues,setSignValue]=useState({
        email:"",
        password:""
    })
    const [tip,setTip]=useState(false);
    const [empty,setEmpty]=useState(false);
    const router=useHistory()

    const signAccount=()=>{
        const query=signValues;
        signIn(query).then((res)=>{
            if(res.status===200){
                localStorage.setItem('userName',res.data.name);
                localStorage.setItem('isLogin','true');
                router.push('/')
            }
        })
            .catch((err)=>{
                if(err.response.status===401){
                    setTip(true)
                }
            })
    }

    const onSubmit=event=>{
        event.preventDefault();
        if(signValues.email==""||signValues.password==""){
            setEmpty(true);
        }else {
            signAccount();
        }
    }

    const onChange=event=>{
        setEmpty(false);
        setTip(false);
        setSignValue({...signValues,[event.target.name]:event.target.value})
    }


    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto pt-40 flex justify-center pb-10">
            <form className="w-full max-w-sm" onSubmit={onSubmit}>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                        <label  className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                htmlFor="inline-full-name">
                            Email
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input name="email" value={signValues.email} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
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
                        <input name="password" value={signValues.password} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one  w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                    </div>
                </div>
                {empty?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-6"                                       >
                    * Please Enter Something :(
                </div>:null}
                {tip?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-6"                                       >
                    * Invalid email or password :(
                </div>:null}
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3 flex md:justify-start justify-center">
                        <button
                            className="shadow bg-dark-one text-dark-five hover:bg-dark-two focus:shadow-outline focus:outline-none py-2 px-4 "
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