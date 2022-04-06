import React, {useEffect, useRef} from "react";
import MusicSection from "./musicSection";
import dance1 from '../image/dance1.png';
import dance2 from '../image/dance2.png';
import dance3 from '../image/dance3.png';
import dance4 from '../image/dance4.png';
import PlayGuitar from "./playGuitar";
import {gsap} from "gsap/dist/gsap";
import {ScrollTrigger} from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const DarkSide=()=>{

    const textRef=useRef();
    const fixedRef=useRef();

    useEffect(()=>{
        console.log(textRef,'width')
        gsap.to([textRef.current], {
            scrollTrigger:{
                trigger:[textRef.current],
                start:"top 50%",
                end:"bottom 50%",
                scrub:true,
                pin:true,
            },
            xPercent:-100,
        })
    },[])

    return(
    <div className="bg-dark-one text-dark">
        <div className="text-center pt-10">
            <h3 className="mx-6 my-6 mb-10">Melody</h3>
            <h5 className="m-6">The heart beats in time with the sounds of piano</h5>
            <h5 className="m-6">The hand swaying to the guitar chord</h5>
            <h5 className="m-6">Each note is remembered, thought about and adored</h5>
            <h5 className="mt-6">As every soul in the darkness joins to the music and hums</h5>
        </div>
        <div className="grid grid-cols-12 text-dark-three" ref={fixedRef}>
            <div className="col-span-3">
                <h5 className="my-20 text-center text-dark-three">La Vie An Rose</h5>
                <h5  className="my-20 text-center text-dark-two">Wonderful U</h5>
                <h5 className="my-20 text-center text-dark-four">Bubble Gum</h5>
                <h5 className="my-20 text-center">The Fools Who Dream</h5>
            </div>
            <div className="col-span-6 flex justify-center">
                <PlayGuitar/>
            </div>
            <div className="col-span-3">
                <h5 className="my-20 text-center">L-O-V-E</h5>
                <h5 className="my-20 text-center text-dark-two">Say So</h5>
                <h5 className="my-20 text-center text-teal-100">A Step You Can’t Take Back</h5>
                <h5 className="my-20 text-center text-dark-five">Coffee</h5>
            </div>
        </div>


        <div className=" my-20">
            <p className="text-6xl Megrim whitespace-nowrap text-dark-five bg-dark-four" ref={textRef}>
                Each sliver of sound buzzing in the brain
                The melody that returns to bring my life back again :)</p>
        </div>

        <div className="text-center">
            <h3 className="mx-6 mb-10">Beats</h3>
            <h5 className="m-6">The dancer quarrels with solid air</h5>
            <h5 className="m-6">For that one foot of surface where she stood</h5>
            <h5 className="m-6">By the bold knife blade of her slashing arm</h5>
            <h5 className="m-6">She carves herself as from a block of wood</h5>
        </div>

        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance1">
                <img src={dance1}/>
            </div>
            <div className="col-span-4 text-center self-center">
                <h5 className="m-6">Pity the poor proud dancer who can give</h5>
                <h5 className="m-6">Death to her ease, so that the dance may live</h5>
                <h5 className="m-6">Who makes, with pain to every body part</h5>
                <h5 className="m-6">From perfect will power her imperfect art</h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance2">
                <img src={dance2}/>
            </div>
            <div className="col-span-1">

            </div>
        </div>

        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="col-span-1">

            </div>
            <div className="col-span-3 text-center" id="homeDance3">
                <img src={dance3}/>
            </div>
            <div className="col-span-4 text-center self-center">
                <h5 className="m-6">Pity the poor rain that only falls</h5>
                <h5 className="m-6">Down from the cloud-caressing sky, then crawls</h5>
                <h5 className="m-6">Through dirt and over street. The dancer falls </h5>
                <h5 className="m-6">Then rises like an oriole over walls</h5>
            </div>
            <div className="col-span-3 text-center" id="homeDance4">
                <img src={dance4}/>
            </div>
            <div className="col-span-1">

            </div>
        </div>

        <MusicSection/>
    </div>)
}

export default DarkSide