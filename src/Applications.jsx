
import { GoArrowRight } from "react-icons/go"; 
import "./index.css";

import bgelem from "./assets/desktop/bgelem.png";
import Apps from "./assets/desktop/Apps.png";


export default function Applications() {
	return (
    <>
      <main className=" flex flex-col  mx-auto  relative bg-[#043873] text-white">
        <img
          src={bgelem}
          alt=""
          className="absolute object-cover inset-0 w-full h-full "
        />

        <section className="flex flex-col md:flex-row justify-center items-center z-10 gap-18 my-20 mx-4 md:mx-8 md:my-35">
          <div className=" ">
            <img src={Apps} alt="" className="  " />
          </div>
          <div className=" flex flex-col w-full lg:w-2/5 text-center md:text-start gap-8 ">
            <p className=" font-bold text-4xl md:text-6xl lg:text-7xl lg:leading-20">
              Work with Your Favorite Apps Using whitepace
            </p>
            <p className=" mt-6 text-lg">
              Whitepace teams up with your favorite software. Integrate with
              over 1000+ apps with Zapier to have all the tools you need for
              your project success
            </p>
            <button className="bg-[#4F9CF9] self-center md:self-start  w-40  h-16 rounded-xl flex place-content-center items-center text-xl gap-2 ">
              Read More <GoArrowRight />
            </button>
          </div>
        </section>
      </main>
    </>
  );}