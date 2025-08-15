import { GoArrowRight } from "react-icons/go";
import save from "../assets/desktop/save.jpg";
import underline from "../assets/desktop/Element.png";
function Extension() {
	return (
    <>
      <main className="bg-[#043873] flex flex-col lg:flex-row gap-10  text-center lg:text-start justify-center   px-4 py-20 md:py-25 md:px-8   h-full w-full   text-white">
        <div className="flex flex-col gap-15 ">
          <div className="">
            <p className=" font-bold text-4xl md:text-[54px] lg:text-[64px] xl:text-7xl  relative ">
              Use as Extension
            </p>
            <img src={underline} alt="" className="w-[177px] md:w-[326px] lg:w-[370px]  ml-auto -mt-4 md:mr-25 lg:mr-40 " />
          </div>

          <p className="text-normal font-light leading-7.5 self-center lg:self-start">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>

          <button className="bg-[#4F9CF9]  w-58  h-17.5  rounded-xl flex place-content-center items-center text-xl gap-2 self-center lg:self-start">
            Let's Go <GoArrowRight className="text-2xl" />
          </button>
        </div>

        <div className="w-full h-full">
          <img src={save} alt="" />
        </div>
      </main>
    </>
  );
}

export default Extension;
