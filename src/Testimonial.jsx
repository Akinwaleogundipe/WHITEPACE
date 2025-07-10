import "./index.css";
import { GoArrowRight } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import { GrApple } from "react-icons/gr";
import { GrWindows } from "react-icons/gr";
import Logo from "../src/assets/desktop/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


function Testimonial(){

 
    return (
      <>
        <main className="h-full w-full bg-[#043873] flex flex-col py-20 px-8 items-center md:items-start lg:items-center   gap-8">
          <p className="font-bold text-4xl lg:text-7xl relative text-white ">
            Try Whitepace today
          </p>
          <p className="text-white font-light text-2xl">Get started for free</p>
          <p className="text-white font-light text-2xl">
            Add your whole team as your needs grow.
          </p>

          <button className="bg-[#4F9CF9]  w-56.5 h-15   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
            Try Taskey free <GoArrowRight />
          </button>
          <p className="text-white font-light text-2xl">
            On a big team?Contact sales
          </p>
          <div className="flex gap-12">
            <GrApple className="text-white text-7xl" />
            <GrWindows className="text-white text-7xl" />
            <GrAndroid className="text-white text-7xl" />
          </div>
        </main>
        <main className="flex flex-col h-full w-full bg-[#043873] border-t   justify-center items-center md:items-start   text-center md:text-start  gap-20 text-white pt-35  pb-10 lg:py-20 lg:px-8 px-8">
          <section className="flex flex-col items-center  md:items-start justify-center text-center md:text-start  gap-15 w-1/2">
            <img src={Logo} alt="" />
            <p className="font-light text-lg ">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>

            <ul className="flex flex-col gap-4">
              <li className="font-bold  text-lg hover:text-[#FFE492] ">
                Product
              </li>
              <li className="hover:text-[#FFE492]">Overview</li>
              <li className="hover:text-[#FFE492]">Pricing</li>
              <li className="hover:text-[#FFE492]">Customer stories</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold text-lg hover:text-[#FFE492]">
                Resources
              </li>
              <li className="hover:text-[#FFE492]">Blog</li>
              <li className="hover:text-[#FFE492]">Guides & tutorials </li>
              <li className="hover:text-[#FFE492]">Help center</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold text-lg hover:text-[#FFE492]">
                Company
              </li>
              <li className="hover:text-[#FFE492]">About us</li>
              <li className="hover:text-[#FFE492]">Careers</li>
              <li className="hover:text-[#FFE492]">Media</li>
            </ul>

            <div className="flex flex-col items-center md:items-start gap-5">
              <p className="font-bold text-2xl">Try it Today</p>
              <p>
                Get started for free. Add your whole team as your needs grow.
              </p>

              <button className="bg-[#4F9CF9]  w-[186px] h-[60px]   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
                Start today <GoArrowRight className="text-3xl" />
              </button>
            </div>
          </section>

          <footer className=" flex-none">
            <div className="border-b w-full h-full  ">
              <ul className="flex flex-col md:flex-row  gap-5 md:gap-8 justify-center items-center ">
                <li className="flex items-center font-light  text-xl gap-1.5">
                  <TfiWorld className="text-4xl" /> English
                  <RiArrowDropDownLine className="text-5xl" />
                </li>
                <li>Terms & Privacy</li>
                <li>Security</li>
                <li>Status</li>
                <li>
                  <span className="text-base  font-normal">
                    ©2021 Whitepace LLC.
                  </span>
                </li>
              </ul>
            </div>
            <div className="flex  gap-4 items-center justify-center text-3xl">
              <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />
            </div>
          </footer>
        </main>
      </>
    );
       

    



}

export default Testimonial