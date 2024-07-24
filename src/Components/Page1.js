import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';


const Page1 = () => {


    const wrapper = document.querySelector("#wrapper")

    const digitalref = useRef();
    const brandref = useRef();

    gsap.registerPlugin(ScrollTrigger);

    var width = window.innerWidth;

    useGSAP(() => {

        var tl = gsap.timeline({

            scrollTrigger: {
                trigger: ".word",
                scroller: wrapper,
                // markers: true,
                start: "top 27%",
                end: " top 0",
                scrub: 3,
            },

        })
        tl.to(digitalref.current,
            {

                transform: ` ${width < 720 ? "translateX(-50%)" : "translateX(-20%)"}`,


            }, "anim"
        )

        tl.to(brandref.current,
            {
                transform: ` ${width < 720 ? "translateX(50%)" : "translateX(20%)"}`,

            }, "anim"
        )
        tl.to("#video",
            {
                width: "90%",
            }, "anim"
        )

    })


    return (
        <div className=' flex flex-col lg:min-h-[100vh] bg-[#0f0d0d]' id='page1'>
            <div className='text-white text-[8.5vw] mt-[10vw] flex flex-col'>

                <p className=' w-fit  ml-[8vw] bg-transparent word' ref={digitalref}
                >
                    Digitally crafted
                </p>
                <p className=' w-fit ml-[22vw] bg-transparent -mt-[2vw] word' ref={brandref}>

                    brand experiences
                </p>

            </div>

            <div className=' mx-auto w-[50%] mt-[7vw] relative' id='video'
                onMouseEnter={() => {
                    var crsr = document.querySelector("#cursor");

                    crsr.innerHTML = "sound on"
                    crsr.style.width = "fit-content"
                    crsr.style.padding = "2px 1vw"

                }}
                onMouseLeave={() => {
                    var crsr = document.querySelector("#cursor");
                    crsr.innerHTML = ""
                    crsr.style.width = ""
                    crsr.style.padding = ""


                }}
            >
                <div className=' bg-transparent absolute w-[100%] h-[100%] z-[50]'>

                </div>
                <video autoPlay muted loop src='https://duo-studio-v2.netlify.app/images/page1-video.mp4'
                    className='w-[100%] h-[100%]' >
                </video>
            </div>
        </div>
    )
}

export default Page1
