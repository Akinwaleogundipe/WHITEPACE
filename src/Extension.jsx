import './index.css';
import { GoArrowRight } from "react-icons/go";
import ExtensionMobile from './Mobileviews/ExtensionMobile';
import { useMediaQuery } from 'react-responsive';

function Extension(){
  const isMobile = useMediaQuery({maxWidth:767})

    return (
      <>
        {isMobile ? (
          <ExtensionMobile />
        ) : (
          <>
            <main className="bg-[#043873] flex  h-[759px]  pt-[140px] pb-[140px] pr-[220px] pl-[220px] gap-[98px] max-xl:pr-[32px] max-xl:pl-[32px] text-white">
              <div className="h-[294px]   w-[697px] pt-[60px]">
                <img
                  src="/Landing page V1/desktop/Element.png"
                  alt=""
                  className="absolute z-0 pt-[65px] pl-[250px]"
                />
                <p className="font-[700] text-[72px]  relative  tracking-[-2%] z-10 ">
                  Use as Extension
                </p>

                <p className="text-[18px] font-[300] leading-[30px] pb-[50px] whitespace-nowrap">
                  Use the web clipper extension, available on Chrome and
                  Firefox, to save web pages <br /> or take screenshots as
                  notes.
                </p>

                <button className="bg-[#4F9CF9]  w-[186px] h-[63px]  rounded-md flex  items-center place-content-center gap-2">
                  Let's Go <GoArrowRight className="text-xl" />
                </button>
              </div>

              <div className="h-[479px] w-[686px] bg-[#A7CEFC] flex"></div>
            </main>
          </>
        )}
      </>
    );
}



export default Extension;
