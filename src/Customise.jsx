import "./index.css";
import { GoArrowRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import CustomiseMobile from "./Mobileviews/CustomiseMobile";


function Customise() {
  const isMobile =useMediaQuery({maxWidth:767})
  return (
    <>
      {isMobile ? (<CustomiseMobile/> ):(
        <>
          <main className="h-[812px] w-full pt-[140px] pb-[140px] pr-[220px] pl-[220px] max-xl:pr-[32px] max-xl:pl-[32px] gap-9 flex">
            <div className="h-[532px] w-[712px] bg-[#A7CEFC] flex text-[#212529]"></div>

            <div className=" h-[411px] ">
              <img
                src="/Landing page V1/desktop/Element5.png"
                alt=""
                className="absolute pt-[170px]"
              />
              <h1 className="font-[700] text-[72px]  relative  tracking-[-2%] z-10 pt-[30px] pb-[30px]">
                Customise it to your needs
              </h1>
              <p className="pb-[60px]">
                Customise the app with plugins, custom themes and multiple text
                editors (Rich Text or Markdown). Or create your own scripts and
                plugins using the Extension API
              </p>
              <button className="bg-[#4F9CF9]  w-[186px] h-[63px]   text-white rounded-md flex  items-center place-content-center gap-2">
                Let's Go <GoArrowRight className="text-xl" />
              </button>
            </div>
          </main>
        </>
      ) 
      }

    </>
  );
}

export default Customise;
