import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Page3 = () => {

    gsap.registerPlugin(ScrollTrigger);
    var width = window.innerWidth;

    useGSAP(() => {

        var tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".image",
                scroller: "body",
                // markers: true,
                start: `${width < 600 ? "top 60%" : "top 50%"}`,
                end: "top 10%",
                scrub: 3,
            }
        })

        gsap.to("#page3", {
            backgroundColor: "#0f0d0d",

            scrollTrigger: {
                trigger: "#page3",
                scroller: "body",
                start: "top -70%",
                end: "top -90%",
                scrub: 3,
            }
        })

        tl.from("#image1", {

            transform: "translateX(-96px)"

        }, 'anim')
        tl.from("#image2", {

            transform: "translateX(96px)"

        }, 'anim')

    })



    return (
        <div className='flex flex-col pt-[3vw] bg-white border-b-2 border-[#6C6C6C] pb-[4vw]' id='page3'>

            <div className=' text-[7.5vw] font-medium ml-[5vw]'>
                Selected work
            </div>

            <div className='flex justify-evenly'>
                <div className=' w-[52vw] mt-[17vw] transform image' id='image1'>
                    <img src='https://duo-studio-v2.netlify.app/images/page3-image2.webp'

                        className=' object-cover w-[100%] h-[100%]'>
                    </img>
                </div>

                <div className=' w-[34vw] transform -mt-[12vw] image' id='image2'>
                    <img src='https://duo-studio-v2.netlify.app/images/page3-image1.webp'

                        className=' object-contain w-[100%] h-[100%]'>

                    </img>
                </div>
            </div>

        </div>
    )
}

export default Page3
