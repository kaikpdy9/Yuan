import React, {useState} from "react";
import {sendMail} from "../../../api/sign/user";
import SendSuccess from "./components/sendSuccess";

const SignUp=()=>{
    const [values,setValues]=useState({
        name:"",
        email:"",
    })
    const [successShow,setSuccessShow]=useState(false)
    const [loading,setLoading]=useState(false);
    const [emailRex,setEmailRex]=useState(false);
    const [empty,setEmpty]=useState(false);

    const onChange= event=>{
        setEmpty(false);
        if(event.target.name=='email') {
            console.log(event.target.value, 'value')
            const emailValue=event.target.value;
            if(!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(emailValue))) {
               setEmailRex(true);
            }else {
                setEmailRex(false);
            }
        }
        setValues({...values,[event.target.name]: event.target.value})
    }

    const sendRegisterMail=()=>{
        const query=values;
        sendMail(query).then((res)=>{
            if(res.status===200){
                setSuccessShow(true)
            }
        })
    }

    const onSubmit= event=>{
        event.preventDefault()
        if(values.name==""||values.email==""){
            setEmpty(true);
        }else {
            console.log(values.name,'name')
            setLoading(true);
            sendRegisterMail()
        }
    }

    return(
        <div className="Ceviche bg-dark-five">
            <div className="mx-auto flex justify-center pt-40 pb-10">
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
                                <input name="name" value={values.name} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one  w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
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
                                <input name="email" value={values.email} onChange={onChange} className="bg-dark-four text-dark-five appearance-none border-2 border-dark-one w-full py-2 px-4 focus:outline-none focus:bg-dark-five focus:text-dark-one  focus:border-dark-one"/>
                            </div>
                        </div>
                        {emailRex?<div className="block text-dark-two md:text-right text-red-600 text-sm pr-4 mb-6"                                       >
                            * Please Enter A Valid Email Address :(
                        </div>:null}
                        {empty?<div className="block text-dark-two md:text-center text-red-600 text-sm pr-4 mb-6"                                       >
                            * Please Enter Something :(
                        </div>:null}
                        {loading?<div className="md:text-center">loading ...</div> :<div className="md:flex md:items-center">
                            <div className="md:w-1/3"></div>
                            <div className="md:w-2/3 flex md:justify-start justify-center">
                                <button
                                    className="shadow bg-dark-one text-dark-five hover:bg-dark-two focus:shadow-outline focus:outline-none py-2 px-4" disabled={emailRex?true:false}
                                    type="submit">
                                    Sign Up
                                </button>
                            </div>
                        </div>
                        }
                    </form>}
            </div>
        </div>
            )
}

export default SignUp