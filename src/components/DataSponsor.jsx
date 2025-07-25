import { GoArrowRight } from "react-icons/go";
import Apple from "../assets/desktop/Apple.png";
import Google from "../assets/desktop/Google.png";
import Slack from "../assets/desktop/Slack.png";
import Microsoft from "../assets/desktop/Microsoft.png";
import Underline from "../assets/desktop/Element10.png";
import Keys from "../assets/desktop/keys.png";

function DataSponsor() {
	return (
    <>
      <main className=" flex flex-col w-full h-full   border  gap-25 py-20 px-4 xl:py-35 xl:px-55">
        <section className="flex flex-col lg:flex-row-reverse gap-25 lg:gap-15 items-center justify-center text-center lg:text-start relative shrink-0  ">
          {/* <img src={Underline} alt="" className="absolute z-0 " /> */}

          <div className="xl:w-[82%] lg:w-[50%] ">
            <img src={Keys} alt="" />
          </div>
          <div className="flex flex-col gap-6 lg:w-[50%]">
            <p className="text-[#212529] font-bold text-4xl lg:text-5xl relative z-10 ">
              100% your data
            </p>

            <p className="font-light text-lg">
              The app is open source and your notes are saved to an open format,
              so you'll always have access to them. Uses End-To-End Encryption
              (E2EE) to secure your notes and ensure no-one but yourself can
              access them.
            </p>
            <button className="w-fit px-7 py-4 bg-[#4F9CF9] text-white flex  self-center lg:self-start place-content-center items-center rounded-[8px]">
              Read more <GoArrowRight />
            </button>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center  text-center   gap-24 lg:border">
          <img
            src="/public/Landing page V1/desktop/Element10.png"
            alt=""
            className="absolute z-0 2xl:pl-[700px]  xl:pl-[700px] pt-[70px] lg:pl-[300px] "
          />
          <p className="relative z-10 font-bold text-4xl">Our sponsors</p>
          <div className="w-fit flex flex-col lg:flex-row  gap-20  lg:gap-10 2xl:gap-20  items-center ">
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
