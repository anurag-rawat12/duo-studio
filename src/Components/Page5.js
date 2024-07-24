import React, { useState } from 'react'

const Page5 = () => {

  var width = window.innerWidth;



  return (
    <div id='page5' className=' bg-[#0f0d0d] min-h-[100vh]  w-[100%]  px-20 overflow-hidden text-[#5F5E5E] pt-[6vw] '
      onMouseEnter={() => {

        var crsr = document.querySelector("#cursor");
        crsr.style = "mix-blend-mode: normal"


      }}
      onMouseLeave={() => {

        var crsr = document.querySelector("#cursor");

        crsr.style = "mix-blend-mode: difference"


      }}
    >


      <div className='text-[4vw] cursor-pointer text-gray-100 border-b-2 flex justify-between items-center border-[#e4e0e0]'>
        <p >
          <span className='text-[#EDBFFF]'>MENTIONS</span> CLIENTS
        </p>

        <p id='page4viewclient' className=' cursor-pointer text-[1vw] font-medium'>
          VIEW CLIENTS
        </p>
      </div>

      <div className='text-[1.2vw] cursor-pointer flex justify-between items-center py-5 border-b-2 border-[#e4e0e0]'

        onMouseEnter={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "20px"
          crsr.style.width = `${width < 720 ? " 300px" : "400px"}`
          crsr.style.height = `${width < 720 ? " 200px" : "300px"}`
          crsr.style.backgroundImage = `url(https://duo-studio-v2.netlify.app/images/home-mentions-verizon.webp)`
          crsr.style.translate = " 10vw -10vw"

        }}

        onMouseLeave={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "50%"
          crsr.style.height = "20px"
          crsr.style.width = "20px"
          crsr.style.transiton = " ease 0.5s"
          crsr.style.backgroundImage = `none`
          crsr.style.translate = " 0px 0px"

        }}
      >
        <p id='leftText' className='leftText text-[1.5vw] font-medium'>
          Verizon
        </p>

        <div id='rightText' className=' flex text-[1.2vw] justify-between flex-wrap items-center font-medium gap-14'>
          <p>
            Small Business Feature
          </p>
          <p>
            2021
          </p>
        </div>

      </div>

      <div className='text-[1.2vw] cursor-pointer flex justify-between items-center py-5 border-b-2 border-[#e4e0e0]'

        onMouseEnter={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "20px"
          crsr.style.width = `${width < 720 ? " 300px" : "400px"}`
          crsr.style.height = `${width < 720 ? " 200px" : "300px"}`
          crsr.style.backgroundImage = `url(https://duo-studio-v2.netlify.app/images/home-mentions-awwwards-honorablemention.webp)`
          crsr.style.translate = " 10vw -10vw"

        }}

        onMouseLeave={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "50%"
          crsr.style.height = "20px"
          crsr.style.width = "20px"
          crsr.style.transiton = " ease 0.5s"
          crsr.style.backgroundImage = `none`
          crsr.style.translate = " 0px 0px"

        }}>
        <p id='leftText' className=' text-[1.5vw] font-medium '>
          Awwards
        </p>
        <div id='rightText' className=' flex justify-between items-center font-medium gap-14'>
          <p>
            Honorable mention
          </p>
          <p>
            2023
          </p>
        </div>
      </div>

      <div className='text-[1.2vw] cursor-pointer flex justify-between items-center py-5 border-b-2 border-[#e4e0e0]'

        onMouseEnter={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "20px"
          crsr.style.width = `${width < 720 ? " 300px" : "400px"}`
          crsr.style.height = `${width < 720 ? " 200px" : "300px"}`
          crsr.style.backgroundImage = `url(https://duo-studio-v2.netlify.app/images/home-mentions-awwwards-mobile.webp)`
          crsr.style.translate = " 10vw -10vw"

        }}

        onMouseLeave={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "50%"
          crsr.style.height = "20px"
          crsr.style.width = "20px"
          crsr.style.transiton = " ease 0.5s"
          crsr.style.backgroundImage = `none`
          crsr.style.translate = " 0px 0px"

        }}>
        <p id='leftText' className=' text-[1.5vw] font-medium '>
          Awwards
        </p>
        <div id='rightText' className=' flex justify-between items-center font-medium gap-14'>
          <p>
            Mobile Excellence
          </p>
          <p>
            2020
          </p>
        </div>
      </div>

      <div className='text-[1.2vw] cursor-pointer flex justify-between items-center py-5 border-b-2 border-[#e4e0e0]'
        onMouseEnter={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "20px"
          crsr.style.width = `${width < 720 ? " 300px" : "400px"}`
          crsr.style.height = `${width < 720 ? " 200px" : "300px"}`
          crsr.style.backgroundImage = `url(https://duo-studio-v2.netlify.app/images/home-mentions-orpetron.webp)`
          crsr.style.translate = " 10vw -10vw"

        }}

        onMouseLeave={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "50%"
          crsr.style.height = "20px"
          crsr.style.width = "20px"
          crsr.style.transiton = " ease 0.5s"
          crsr.style.backgroundImage = `none`
          crsr.style.translate = " 0px 0px"

        }}>


        <p id='leftText' className=' text-[1.5vw] font-medium '>
          Mindsparkle Mag
        </p>

        <div id='rightText' className=' flex justify-between items-center font-medium gap-14'>
          <p>
            Site of the day
          </p>
          <p>
            2020
          </p>
        </div>

      </div>

      <div className='text-[1.2vw] cursor-pointer flex justify-between items-center py-5 border-b-2 border-[#e4e0e0]'

        onMouseEnter={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "20px"
          crsr.style.width = `${width < 720 ? " 300px" : "400px"}`
          crsr.style.height = `${width < 720 ? " 200px" : "300px"}`
          crsr.style.backgroundImage = `url(https://duo-studio-v2.netlify.app/images/home-mentions-mindsparkle.webp)`
          crsr.style.translate = " 10vw -10vw"

        }}

        onMouseLeave={() => {

          var crsr = document.querySelector("#cursor");
          crsr.style.borderRadius = "50%"
          crsr.style.height = "20px"
          crsr.style.width = "20px"
          crsr.style.transiton = " ease 0.5s"
          crsr.style.translate = " 0px 0px"

          crsr.style.backgroundImage = `none`

        }}>
        <p id='leftText' className=' text-[1.5vw] font-medium '>
          Orpetron
        </p>

        <div id='rightText' className=' flex justify-between items-center font-medium gap-14'>
          <p>
            Site of the day
          </p>
          <p>
            2020
          </p>
        </div>

      </div>


    </div >
  )
}

export default Page5
