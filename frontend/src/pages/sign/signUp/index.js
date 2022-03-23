import React, {useState} from "react";
import {sendMail} from "../../../api/sign/user";
import SendSuccess from "./components/sendSuccess";

const SignUp=()=>{
    const [values,setValues]=useState({
        name:"",
        email:"",
    })
    const [successShow,setSuccessShow]=useState(false)

    const onChange= event=>{
        setValues({...values,[event.target.name]: event.target.value})
    }

    const sendRegisterMail=()=>{
        const query=values;
        sendMail(query).then((res)=>{
            if(res.status===200){
                console.log(res,'res')
                setSuccessShow(true)
            }
        })
    }

    const onSubmit= event=>{
        event.preventDefault()
        sendRegisterMail()
        console.log(values)
    }

    return(
        <div className="Ceviche bg-dark-five">
            <div className="mx-auto pt-40 flex justify-center">
                {successShow?
                <div><SendSuccess/>
                </div>:
                    <form className="w-full max-w-sm" onSubmit={onSubmit}>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Username
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name="name" value={values.name} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label className="block text-dark-two md:text-right mb-1 md:mb-0 pr-4"
                                       htmlFor="inline-full-name">
                                    Email
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input name="email" value={values.email} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one rounded w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                            </div>
                        </div>
                        <div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3">
                                <button
                                    className="shadow bg-dark-two text-dark-five hover:bg-dark-one focus:shadow-outline focus:outline-none py-2 px-4 rounded"
                                    type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    </form>}
            </div>
        </div>
            )
}

export default SignUp