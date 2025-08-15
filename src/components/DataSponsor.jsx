import { GoArrowRight } from "react-icons/go";
import Apple from "../assets/desktop/Apple.png";
import Google from "../assets/desktop/Google.png";
import Slack from "../assets/desktop/Slack.png";
import Microsoft from "../assets/desktop/Microsoft.png";
import Underline from "../assets/desktop/Element10.png";
import Keys from "../assets/desktop/keys.png";
import underline from "../assets/desktop/Element10.png";

function DataSponsor() {
	return (
    <>
      <main className=" flex flex-col w-full h-full   mx-auto    container px-4 py-20 md:px-5  gap-20">
        <section className="flex flex-col lg:flex-row-reverse gap-25 lg:gap-0   items-center justify-center lg:justify-between  relative shrink-0  ">
          <div className=" lg:w-[40%] ">
            <img src={Keys} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start text-center lg:text-start lg:w-[60%] ">
            <div className=" w-fit mb-4 ">
              <p className="text-[#111315] font-bold  text-4xl md:text-6xl lg:text-7xl relative z-10 ">
                100% your data
              </p>
              <img
                src={Underline}
                alt=""
                className=" w-[193px] md:w-[296px]   -mt-2 ml-auto "
              />
            </div>

            <p className="font-light text-lg mb-20 ">
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
        <section className="flex flex-col justify-center items-center  text-center   gap-24 ">
          <div>

            <p className="relative z-10 font-bold text-4xl md:text-[54px] lg:text-[64px] xl:text-[72px]">Our sponsors</p>
          <img
            src={underline}
            alt=""
            className="relative  z-0 w-[191px] lg:w-[220px] ml-auto -mr-8 -mt-2 lg:-mt-5"
          />
          </div>
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
