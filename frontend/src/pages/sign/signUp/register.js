import React, {useEffect, useState} from "react";
import {register} from "../../../api/sign/user";
import {useHistory} from "react-router-dom";

const Register=()=>{
    const [registerValues,setRegisterValues]=useState({
        name:"",
        email:"",
        password:"",
    })

    useEffect(()=>{
        const name=sessionStorage.getItem('name');
        const email=sessionStorage.getItem('email');
        setRegisterValues({...registerValues,name,email})
    },[])

    const router=useHistory()

    const onChange=event=>{
        setRegisterValues({...registerValues,password:event.target.value})
    }

    const registerUser=()=>{
        const query=registerValues;
        register(query).then((res)=>{
            if(res.status===201){
                sessionStorage.removeItem('name');
                sessionStorage.removeItem('email');
                router.push('/')
            }
        })
    }

    const onSubmit=event=>{
        event.preventDefault();
        registerUser();
    }

    return(
        <div className="Ceviche bg-dark-five">
            <div className="mx-auto pt-40 flex justify-center">
                <form className="w-full max-w-sm" onSubmit={onSubmit}>
                    <div className="md:flex md:items-center mb-6">
                        <div className="md:w-1/3">
                            <label  className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                   htmlFor="inline-full-name">
                                Password
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input name="password" value={registerValues.password} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                        </div>
                    </div>
                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button
                                className="shadow bg-dark-two text-dark-five hover:bg-dark-one focus:shadow-outline focus:outline-none py-2 px-4 rounded"
                                type="submit">
                                Register
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
