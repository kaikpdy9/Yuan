import React, {useEffect, useState} from "react";
import {register} from "../../../api/sign/user";
import {useHistory} from "react-router-dom";

const Register=()=>{
    const [registerValues,setRegisterValues]=useState({
        name:"",
        email:"",
        password:"",
    })
    const [empty,setEmpty]=useState(false);
    const [userExists,setExists]=useState(false);
    const [loading,setLoading]=useState(false);

    const router=useHistory()

    useEffect(()=>{
        const name=sessionStorage.getItem('name');
        const email=sessionStorage.getItem('email');
        console.log(email)
        if(email==null || name==null){
            router.push('/404')
        }else {
            setRegisterValues({...registerValues,name,email})
        }
    },[])


    const onChange=event=>{
        setEmpty(false);
        setRegisterValues({...registerValues,password:event.target.value})
    }

    const registerUser=()=>{
        const query=registerValues;
        register(query).then((res)=>{
            console.log(res.status,'status')
            if(res.status===201){
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                setLoading(false)
                localStorage.setItem('userName',res.data.name);
                localStorage.setItem('isLogin','true');
                router.push('/')
            }
        }).catch(err=>{
            console.log(err.response.status,'err');
            if(err.response.status){
                setLoading(false);
                setExists(true);
            }
        })
    }

    const onSubmit=event=>{
        event.preventDefault();
        if(registerValues.password==""){
            setEmpty(true);
        }else {
            setLoading(true);
            registerUser();
        }
    }

    return(
        <div className="Ceviche bg-dark-five">
            <div className="mx-auto pt-40 flex justify-center pb-10">
                <form className="w-full max-w-sm" onSubmit={onSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label  className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="password" value={registerValues.password} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                        </div>
                    </div>
                    {empty?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-6"                                       >
                        * Please Enter Something :(
                    </div>:null}
                    {userExists?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-6"                                       >
                        * User already exists :(
                    </div>:null}
                    {loading?<div className="md:text-center">loading...</div>:
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3 flex md:justify-start justify-center">
                                <button
                                    className="shadow bg-dark-one text-dark-five hover:bg-dark-two focus:shadow-outline focus:outline-none py-2 px-4"
                                    type="submit">
                                    Register
                                </button>
                            </div>
                        </div>}
                </form>
            </div>
        </div>
    )
}

export default Register
