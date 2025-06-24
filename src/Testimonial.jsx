import "./index.css";
import { GoArrowRight } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import { GrApple } from "react-icons/gr";
import { GrWindows } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";
import TestimonialMobile from "./Mobileviews/TestimonialMobile";

function Testimonial(){

  const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
      <>
        {isMobile ? (
          <TestimonialMobile />
        ) : (
          <>
            <main className="h-[750px] bg-[#043873] flex flex-col text-center place-content-center items-center gap-8">
              <p className="font-[700] text-[72px]  relative text-white ">
                Try Whitepace <br /> today{" "}
              </p>
              <p className="text-white font-[300] text-[24px]">
                Get started for free. <br /> Add your whole team as your needs
                grow.
              </p>

              <button className="bg-[#4F9CF9]  w-[218px] h-[59px]   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
                Try Taskey free <GoArrowRight />
              </button>
              <p className="text-white font-[300] text-[24px]">
                On a big team?Contact sales
              </p>
              <div className="flex gap-12">
                <GrApple className="text-white text-7xl" />
                <GrWindows className="text-white text-7xl" />
                <GrAndroid className="text-white text-7xl" />
              </div>
            </main>
            <footer className="h-[474px] bg-[#043873] border-t pt-[140px] pb-[32px] pr-[220px] pl-[220px]     max-xl:pl-[32px] max-xl:pr-[32px] flex flex-col text-white">
              <main className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <img src="Logo.png" alt="" />
                  <p className="font-[300] text-[18px] text-nowrap">
                    whitepace was created for <br /> the new ways we live and{" "}
                    <br />
                    work. We make a better <br />
                    workspace around the world
                  </p>
                </div>
                <ul>
                  <li className="font-[700] hover:text-[#FFE492] ">Product</li>
                  <li className="hover:text-[#FFE492]">Overview</li>
                  <li className="hover:text-[#FFE492]">Pricing</li>
                  <li className="hover:text-[#FFE492]">Customer stories</li>
                </ul>
                <ul>
                  <li className="font-[700] hover:text-[#FFE492]">Resources</li>
                  <li className="hover:text-[#FFE492]">Blog</li>
                  <li className="hover:text-[#FFE492]">Guides & tutorials </li>
                  <li className="hover:text-[#FFE492]">Help center</li>
                </ul>
                <ul>
                  <li className="font-[700] hover:text-[#FFE492]">Company</li>
                  <li className="hover:text-[#FFE492]">About us</li>
                  <li className="hover:text-[#FFE492]">Careers</li>
                  <li className="hover:text-[#FFE492]">Media</li>
                </ul>

                <div className="flex flex-col gap-3">
                  <p className="font-[700] text-[28px]">Try it Today</p>
                  <p>
                    Get started for free. Add your <br /> whole team as
                    yourneeds grow.
                  </p>

                  <button className="bg-[#4F9CF9]  w-[186px] h-[60px]   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
                    Start today <GoArrowRight className="text-3xl" />
                  </button>
                </div>
              </main>

              <div></div>
            </footer>
          </>
        )}
      </>
    );
       

    



}

export default Testimonial