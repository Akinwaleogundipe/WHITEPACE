import "./index.css";
import { GoArrowRight } from "react-icons/go";
import { useMediaQuery } from "react-responsive";
import SponsorMobile from "./Mobileviews/SponsorMobile";



function DataSponsor(){
const  isMobile = useMediaQuery({ maxWidth: 767 })

return (
  <>
    {isMobile ? (
      <SponsorMobile />
    ) : (
      <>
        <main className="h-[1199px] pt-[140px] pl-[220px] pr-[220px] pb-[140px]  max-[1700px]:pl-[100px]  max-[1700px]:pr-[50px]   max-xl:pl-[32px] max-xl:pr-[32px]   ">
          <section className=" relative h-[661px] flex pt-[100px] ">
            <div className=" relative  flex flex-col gap-10">
              <img
                src="/Landing page V1/desktop/Element10.png"
                alt=""
                className="absolute z-0 pt-[70px] pl-[200px]"
              />
              <p className="text-[#212529] font-[700] text-[72px] relative z-10 ">
                100% your data
              </p>

              <p className="text-nowrap">
                The app is open source and your notes are saved to an open
                format, so you'll always have access <br /> to them. Uses
                End-To-End Encryption (E2EE) to secure your notes and ensure
                no-one but <br /> yourself can access them.
              </p>

              <button className="w-[197px] h-[63px] bg-[#4F9CF9] text-white flex place-content-center items-center rounded-[8px]">
                Read more <GoArrowRight />
              </button>
            </div>

            <div className="mt-1">
              <img src="/Landing page V1/desktop/keys.png" alt="" />
            </div>
          </section>
          <section className=" h-[538px] text-center flex flex-col   gap-24">
            <img
              src="/public/Landing page V1/desktop/Element10.png"
              alt=""
              className="absolute z-0 2xl:pl-[700px]  xl:pl-[700px] pt-[70px] lg:pl-[300px] "
            />
            <p className="relative z-10 font-[700] text-[72px]">Our sponsors</p>
            <div className="flex justify-between  items-center ">
              <img src="/Landing page V1/desktop/Apple.png" alt="" />
              <img src="/Landing page V1/desktop/Microsoft.png" alt="" />
              <img src="/Landing page V1/desktop/Slack.png" alt="" />
              <img src="/Landing page V1/desktop/Google.png" alt="" />
            </div>
          </section>
        </main>
      </>
    )}
  </>
);

}
export default DataSponsor;