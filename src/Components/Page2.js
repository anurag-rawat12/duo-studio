import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page2 = () => {

    const wrapper = document.querySelector("#wrapper");

    gsap.registerPlugin(ScrollTrigger);
    var width = window.innerWidth;
    

    useGSAP(() => {

        gsap.to("#page2", {

            backgroundColor: "white",

            scrollTrigger: {
                trigger: "#page2",
                scroller: "body",
                // markers: true,
                start: `${width < 720 ? "top 50%" : "top 30%"}`,
                end: "top 0%",
                scrub: true,

            },

        })

    })



    return (
        <div id='page2' className=' bg-[#0f0d0d] border-b-2 border-[#6C6C6C] pb-[4vw] w-[100%] px-[5vw] pt-[13vw] mx-auto  flex flex-col'>


            <div className=' text-8xl' id='we'>
                We are Duo Studio,
            </div>

            <div className='flex justify-between mt-[8vw] h-fit'>
                <p className=' w-[40%] text-[4.3vw] leading-[1] ' id='creative'>
                    A CREATIVE COLLECTIVE MADE TO UNLOCK YOUR BRAND’S POTENTIAL
                </p>

                <div className='w-[24%] flex flex-col gap-6' id='aboutbox'>
                    <div className=' text-[2.2vw] -mt-[4vw] leading-[1] ' id='about'>
                        We weave together bold strategy and creative execution to produce thought-provoking digital experiences.
                        We take a highly personalized approach to delivering branding, web design,
                        and content marketing solutions. Born in the DC area - now serving clients worldwide.
                    </div>

                    <div className=' bg-[#EDBFFF] w-[100%] text-[1.7vw] cursor-pointer font-normal py-[@mevw] rounded-full flex justify-center
                     items-center hover:bg-black hover:text-gray-200 transition duration-600 ' id='aboutbtn'>
                        About us
                    </div>

                </div>
            </div>



        </div>
    )
}

export default Page2
