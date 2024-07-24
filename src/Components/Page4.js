import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page4 = () => {
    gsap.registerPlugin(ScrollTrigger);
    var width = window.innerWidth;

    useGSAP(() => {
        gsap.to("#page4", {
            backgroundColor: "#0f0d0d",

            scrollTrigger: {
                trigger: "#page4",
                scroller: "body",
                // markers: true,
                start: `${width < 720 ? "top 40%" : "top 83%"}`,
                end: "top 63%",
                scrub: 3,
            }
        })
    })
    return (
        <div className=' flex flex-col z-[60] text-1vw border-b-2 border-[#6C6C6C] pb-[4vw] bg-white text-white
         justify-center items-center
        ' id='page4'>
            <div id='page4heading' className=' text-gray-300 mt-[10vw] text-[0.98vw] font-semibold leading-[1vw] px-[43vw] text-center'>
                DESIGNED TO BRING OUT
                THE TRUTH OF YOUR BRAND
            </div>

            <div id='page4subheading' className=' flex flex-col leading-[8vw] mt-[3vw] relative text-gray-200 justify-center items-center text-[8vw]'>

                <div className=' cursor-pointer flex px-[10vw] group'>


                    <div id='strategyimg1' className=' w-[25vw] absolute transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 -left-[18vw] -top-[15vw] transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img1.webp'
                            className=' object-cover w-[100%] h-[100%] '>
                        </img>
                    </div>

                    <div id='strategy' className='h-[130px] overflow-hidden z-30 '>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Strategy</p>
                        <br></br>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Strategy</p>
                    </div>

                    <div className=' w-[30vw] absolute -top-[1vw] -right-[22vw] transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img2.webp'
                            className=' object-cover w-[100%] h-[100%] '>

                        </img>
                    </div>


                </div>

                <div className=' cursor-pointer flex px-[10vw] group'>


                    <div className=' w-[25vw] absolute transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 -left-[18vw] -top-[4vw] transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img3.webp'
                            className=' object-cover w-[100%] h-[100%] '></img>
                    </div>

                    <div id='identity' className='h-[125px] overflow-hidden z-30 '>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Identity</p>
                        <br></br>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Identity</p>
                    </div>

                    <div id='identityimg2' className=' w-[30vw] absolute -top-[16vw] -right-[22vw] transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img4.webp'
                            className=' object-cover w-[100%] h-[100%] '></img>
                    </div>

                </div>

                <div className=' cursor-pointer flex px-[10vw] group'>


                    <div id='experienceimg1'  className=' w-[25vw] absolute transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 -left-[18vw] -top-[15vw] transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img5.webp'
                            className=' object-cover w-[100%] h-[100%] '></img>
                    </div>

                    <div id='experience' className='h-[120px] overflow-hidden z-30 '>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Experience</p>
                        <br></br>
                        <p className=' transition duration-500 group-hover:translate-y-[-200%] hover:text-[#EDBFFF]'>Experience</p>
                    </div>

                    <div className=' w-[30vw] absolute z-10 -top-[7.3vw] -right-[15vw] transition duration-400 ease-in opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:rotate-0 transform translate-y-[10%] rotate-2 '>
                        <img src='https://duo-studio-v2.netlify.app/images/page4-img6.webp'
                            className=' object-cover w-[100%] h-[100%] '></img>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Page4
