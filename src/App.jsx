import "./App.css";
import Navbar from "./Components/Navbar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";

function App() {

  
  useGSAP(() => {

    window.addEventListener('mousemove', e => {
      gsap.to("#cursor", {
        x: e.clientX + 20,
        y: e.clientY + 10,
        ease: "back.out",
        overwrite: "auto",
        duration: 3,
      });
    })
  })




  return (

    <div className="select-none w-[100%] max-h-full mx-auto overflow-x-hidden relative" id="wrapper" >

      <div className=" w-[100%] h-[100vh] z-[50] hidden pt-[20vw] fixed text-black font-medium text-[7vw] " id="overlay" >

        <div id="overlaytext" className=" w-fit mx-auto">

        </div>

      </div>


      <div className="h-[20px] z-[40] flex mix-blend-difference justify-center items-center w-[20px] rounded-full bg-[#EDBFFF] fixed  " id="cursor" >

      </div>

      <Navbar />

      <Page1 />

      <Page2 />

      <Page3 />

      <Page4 />

      <Page5 />

    </div>


  );
}

export default App;
