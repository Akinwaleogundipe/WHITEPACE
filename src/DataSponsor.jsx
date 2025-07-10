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
      <section className="flex  flex-col lg:flex-row-reverse  items-center justify-center text-center lg:text-start relative ">
        {/* <img
                src={Underline}
                alt=""
                className="absolute z-0 pt-[70px] pl-[200px]"
              /> */}
        <div>
          <img src={Keys} alt="" />
        </div>

        <div className="flex  flex-col justify-center relative lg:w-1/2 gap-15">
          <p className="text-[#212529] font-bold text-4xl lg:text-6xl relative  ">
            100% your data
          </p>

          <p className="font-light text-lg ">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>
          <button className="w-49 h-16 bg-[#4F9CF9] text-white flex  self-center lg:self-start place-content-center items-center rounded-lg">
            Read more <GoArrowRight />
          </button>
        </div>
      </section>
      <section className="flex flex-col gap-24">
        {/* <img
          src="/public/Landing page V1/desktop/Element10.png"
          alt=""
          className="absolute z-0 2xl:pl-[700px]  xl:pl-[700px] pt-[70px] lg:pl-[300px] "
        /> */}
        <p className="relative z-10 font-bold text-4xl text-center lg:text-6xl ">
          Our sponsors
        </p>
        <div className=" flex w-full flex-col justify-center items-center relative lg:flex-row  gap-25 lg:gap-18   ">
          <img src={Apple} alt="" />
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