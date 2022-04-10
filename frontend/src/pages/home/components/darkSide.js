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


    return(
    <div className="bg-dark-one text-dark">
        <div className="text-center pt-10">
            <p className="mx-6 md:my-6 md:mb-10 md:text-3xl text-xl">Melody</p>
            <p className="m-6 md:text-base text-xs">The heart beats in time with the sounds of piano</p>
            <p className="m-6 md:text-base text-xs">The hand swaying to the guitar chord</p>
            <p className="m-6 md:text-base text-xs">Each note is remembered, thought about and adored</p>
            <p className="mt-6 md:text-base text-xs">As every soul in the darkness joins to the music and hums</p>
        </div>

        <div className="grid grid-cols-12 text-dark-three">
            <div className="md:col-span-3 col-span-1">
                {/*<h5 className="my-20 text-center text-dark-three">La Vie An Rose</h5>*/}
                {/*<h5  className="my-20 text-center text-dark-two">Wonderful U</h5>*/}
                {/*<h5 className="my-20 text-center text-dark-four">Bubble Gum</h5>*/}
                {/*<h5 className="my-20 text-center">The Fools Who Dream</h5>*/}
            </div>
            <div className="md:col-span-6 col-span-10 flex justify-center">
                <PlayGuitar/>
            </div>
            <div className="md:col-span-3 col-span-1">
                {/*<h5 className="my-20 text-center">L-O-V-E</h5>*/}
                {/*<h5 className="my-20 text-center text-dark-two">Say So</h5>*/}
                {/*<h5 className="my-20 text-center text-teal-100">A Step You Can’t Take Back</h5>*/}
                {/*<h5 className="my-20 text-center text-dark-five">Coffee</h5>*/}
            </div>
        </div>


        <div className="md:my-20 my-9">
            <p className="md:text-6xl text-xl Megrim text-dark-five bg-dark-four text-center md:p-4 p-2" >
                Each sliver of sound buzzing in the brain
                The melody that returns to bring my life back again :)</p>
        </div>

        <div className="text-center">
            <p className="mx-6 mb-10 md:text-3xl text-xl">Beats</p>
        </div>

        <div className="grid-cols-12 grid pb-10 ">
            <div className="md:col-span-1 col-span-12">

            </div>
            <div className="md:col-span-3 col-start-4 col-end-10 text-center" id="homeDance1">
                {/*<img src={dance1}/>*/}
            </div>
            <div className="md:col-span-4 col-span-12 text-center self-center">
                <p className="m-6 md:text-base text-xs">The dancer quarrels with solid air</p>
                <p className="m-6 md:text-base text-xs">For that one foot of surface where she stood</p>
                <p className="m-6 md:text-base text-xs">By the bold knife blade of her slashing arm</p>
                <p className="m-6 md:text-base text-xs">She carves herself as from a block of wood</p>
            </div>
            <div className="md:col-span-3  col-start-4 col-end-10 text-center" id="homeDance2">
                {/*<img src={dance2}/>*/}
            </div>
            <div className="md:col-span-1 col-span-12">

            </div>
        </div>

        <div className="text-center">
            <p className="m-6 md:text-base text-xs">Pity the poor proud dancer who can give</p>
            <p className="m-6 md:text-base text-xs">Death to her ease, so that the dance may live</p>
            <p className="m-6 md:text-base text-xs">Who makes, with pain to every body part</p>
            <p className="m-6 md:text-base text-xs">From perfect will power her imperfect art</p>
        </div>



        <div className="grid-cols-12 grid pb-10 pt-10">
            <div className="md:col-span-1 col-span-12">

            </div>
            <div className="md:col-span-3 col-start-4 col-end-10 cil text-center" id="homeDance3">
                {/*<img src={dance3}/>*/}
            </div>
            <div className="md:col-span-4 col-span-12 text-center self-center">
                <p className="m-6 md:text-base text-xs">Pity the poor rain that only falls</p>
                <p className="m-6 md:text-base text-xs">Down from the cloud-caressing sky, then crawls</p>
                <p className="m-6 md:text-base text-xs">Through dirt and over street. The dancer falls </p>
                <p className="m-6 md:text-base text-xs">Then rises like an oriole over walls</p>
            </div>
            <div className="md:col-span-3 col-start-4 col-end-10 text-center" id="homeDance4">
                {/*<img src={dance4}/>*/}
            </div>
            <div className="md:col-span-1">

            </div>
        </div>

        <MusicSection/>
    </div>)
}

export default DarkSide