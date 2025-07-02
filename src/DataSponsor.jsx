import "./index.css";
import { GoArrowRight } from "react-icons/go";
import Apple from "../src/assets/desktop/Apple.png";
import Google from "../src/assets/desktop/Google.png";
import Slack from "../src/assets/desktop/Slack.png";
import Microsoft from "../src/assets/desktop/Microsoft.png";
import Underline from "../src/assets/desktop/Element10.png";
import Keys from "../src/assets/desktop/keys.png"


function DataSponsor(){

return (
  <>
    <main className="flex flex-col w-full h-full  border  gap-25 py-20 px-4 lg:py-35 lg:px-8">
      <section className="flex flex-col lg:flex-row-reverse gap-4 items-center justify-center text-center lg:text-start relative ">
        {/* <img
                src={Underline}
                alt=""
                className="absolute z-0 pt-[70px] pl-[200px]"
              /> */}

        <img src={Keys} alt="" />

        <div className="flex flex-col items-center justify-center relative gap-8  lg:w-full lg:h-full ">
          <span className="text-[#212529] font-bold text-4xl lg:text-6xl relative z-10 lg:text-nowrap">
            100% your data
          </span>

          <p className="font-light text-lg ">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="w-[197px] h-[63px] bg-[#4F9CF9] text-white flex  self-center lg:self-start place-content-center items-center rounded-[8px]">
            Read more <GoArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center  text-center   gap-24">
        {/* <img
          src="/public/Landing page V1/desktop/Element10.png"
          alt=""
          className="absolute z-0 2xl:pl-[700px]  xl:pl-[700px] pt-[70px] lg:pl-[300px] "
        /> */}
        <p className="relative z-10 font-bold text-4xl lg:text-6xl">Our sponsors</p>
        <div className=" flex flex-col lg:flex-row  gap-25 lg:gap-20 justify-between  items-center ">
          <img src={Apple} alt="" className="" />
          <img src={Microsoft} alt="" />
          <img src={Slack} alt="" />
          <img src={Google} alt="" />
        </div>
      </section>
    </main>
  </>
);

}
export default DataSponsor;