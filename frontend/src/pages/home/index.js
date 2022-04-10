import React, {useEffect} from "react";
import './index.css'
import DarkSide from "./components/darkSide";
import MiddleLayer from "./components/middleLayer";
import {useHistory} from "react-router-dom";
import {getQueryVariable} from "../../utils/utils";
import Birthday from "./components/birthday";
import HomeFooter from "./components/homeFooter";

const HomePage=()=>{

    const router=useHistory()

    useEffect(()=>{
        const search=router.location.search
        if(search.includes('redirect=register')){
        const email=getQueryVariable('email',search);
        const name=getQueryVariable('name',search);
        sessionStorage.setItem('name',name)
        sessionStorage.setItem('email',email)
        router.replace('/register')
        }
    },[])

    return(
    <div className="Ceviche bg-dark-five">
        <div className="mx-auto md:pt-32 pt-20">
                    <div className="outsideOne md:h-banner w-full mt-20">
                            <p className="md:text-banner Megrim text-center md:leading-banner text-4xl">Whisper words of</p>
                        <div className="flex justify-center"><p className="md:text-9xl text-center md:leading-banner text-4xl">Wisdom</p> <span className="md:text-sm md:leading-6 md:ml-9 ml-2 text-xs"><p className="md:mt-10">Que la force</p><p>soit avec</p><p>vous :)</p></span>
                            </div>
                            <p className="md:text-banner Megrim md:leading-banner text-center md:ml-40 ml-20 text-4xl">Let it <span className="Ceviche md:leading-banner md:text-9xl text-4xl"> be</span></p>
                    </div>
                    <MiddleLayer/>
                    <DarkSide/>
                    <Birthday/>
                    <HomeFooter/>
        </div>
    </div>)
}

export default HomePage