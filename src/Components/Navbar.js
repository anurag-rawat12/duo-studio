import React from 'react'


const Navbar = () => {

    return (
        <div id='navbar' className=' h-[50px] w-[100%] z-[70] fixed bg-transparent mix-blend-difference mx-auto flex justify-around items-center'>

            <div className='w-10 h-10 mt-4' id='duoimg'>
                <img src='https://duo-studio-v2.netlify.app/images/logo.svg' height={100} width={100}></img>
            </div>

            <div id='navtext' className=' w-[40%] text-white flex justify-between font-mono'>
                <p className=' bg-transparent tracking-widest cursor-pointer hover:border-b hover:border-b-white'>
                    HOME
                </p>
                <p className=' tracking-widest cursor-pointer hover:border-b hover:border-b-white'
                    onMouseEnter={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlaytext.innerHTML += 'WORK '
                        overlay.style = "background-color: #EDBFFF"
                        overlay.style.display = "block"
                    }}
                    onMouseLeave={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlay.style = "background-color: "
                        overlaytext.innerHTML = ' '
                    }}
                >
                    WORK
                </p>
                <p className=' tracking-widest cursor-pointer hover:border-b hover:border-b-white'
                    onMouseEnter={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlaytext.innerHTML += 'STUDIO '
                        overlay.style = "background-color: #EDBFFF"
                        overlay.style.display = "block"
                    }}
                    onMouseLeave={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlay.style = "background-color: "
                        overlaytext.innerHTML = ' '
                    }}
                >
                    STUDIO
                </p>
                <p className=' tracking-widest cursor-pointer hover:border-b hover:border-b-white'
                    onMouseEnter={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlaytext.innerHTML += 'CONTACT '
                        overlay.style = "background-color: #EDBFFF"
                        overlay.style.display = "block"

                    }}
                    onMouseLeave={() => {
                        const overlay = document.querySelector("#overlay");
                        const overlaytext = document.querySelector("#overlaytext");
                        overlay.style = "background-color: "
                        overlaytext.innerHTML = ' '
                    }}
                >
                    CONTACT
                </p>
            </div>

            <div id='dot' className=' h-4 w-4 rounded-full cursor-pointer bg-white'>

            </div>

        </div>

    )
}

export default Navbar

