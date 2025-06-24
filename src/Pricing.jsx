import "./index.css";
import { GoArrowRight } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";
import { useMediaQuery } from "react-responsive";
import PricingMobile from "./Mobileviews/PricingMobile";

 


function Pricing(){

  const isMobile = useMediaQuery({maxWidth:767})
return (
  <>
    {isMobile ? (
      <PricingMobile />
    ) : (
      <>
        <main className="max-h-[1845px] relative flex flex-col  ">
          <section className="h-[1272px] z-10 pt-[100px] pb-[100px] pr-[200px] pl-[200px] justify-between  place-content-center">
            <div className="flex flex-col text-[#212529] items-center pb-[90px] place-content-center">
              <img
                src="/Landing page V1/desktop/Element7.png"
                alt=""
                className="absolute top-[190px] left-1/2"
              />
              <h1 className="font-[700] text-[72px]  relative  tracking-[-2%] z-10 ">
                Choose Your Plan
              </h1>
              <p className="text-[18px] font-[300] leading-[30px] text-center">
                Whether you want to get organized, keep your personal life on
                track, or boost workplace productivity, Evernote has the <br />{" "}
                right plan for you.
              </p>
            </div>

            <section className="h-[761px] w-full flex   items-center  gap-6 ">
              <div className=" w-[470px] h-[630px] border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
                <span className="font-[500] text-[24px]">Free</span>
                <span className="font-[700] text-[36px]">$0</span>
                <span className="font-[400] text-[18px] ">
                  Capture ideas and find them quickly
                </span>
                <ul className="font-[400] text-[16px] flex flex-col  gap-4 ">
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>Sync unlimited devices</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>10 GB monthly uploads</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>200 MB max. note size</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>
                      Customize Home dashboard and access <br />
                      extra widgets
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>Connect primary Google Calendar account</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>
                      Add due dates, reminders, and <br /> notifications to your
                      tasks
                    </span>
                  </li>
                </ul>
                <button className=" border border-[#FFE492] w-[166px] h-[51px]  rounded-[10px]">
                  Get Started
                </button>
              </div>
              <div className="bg-[#043873] w-[470px] h-[761px] rounded-[10px]  pt-[80px] pb-[60px] pr-[44px] pl-[44px] flex flex-col text-white gap-8 place-content-center">
                <span className="text-[24px] font-[600]">Personal</span>
                <span className="text-[36px] font-[700] text-[#FFE492]">
                  $11.99
                </span>
                <span className="text-[18px] font-[500]">
                  Keep home and family on track
                </span>

                <ul className="font-[500] text-[18px] flex flex-col  gap-4 ">
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl " />
                    <span>Sync unlimited devices</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl " />
                    <span>10 GB monthly uploads</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl " />
                    <span>200 MB max. note size</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl mt-1" />
                    <span>
                      Customize Home dashboard and access <br />
                      extra widgets
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl mt-1" />
                    <span>Connect primary Google Calendar account</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#FFE492] text-xl mt-1" />
                    <span>
                      Add due dates, reminders, and <br /> notifications to your
                      tasks
                    </span>
                  </li>
                </ul>

                <button className="bg-[#4F9CF9] w-[166px] h-[51px]  rounded-[10px]">
                  Get Started
                </button>
              </div>
              <div className=" w-[470px] h-[630px] border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
                <span className="font-[500] text-[24px]">Organization</span>
                <span className="font-[700] text-[36px]">$49.99</span>
                <span className="font-[400] text-[18px] ">
                  Capture ideas and find them quickly
                </span>
                <ul className="font-[400] text-[16px] flex flex-col  gap-4 ">
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>Sync unlimited devices</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>10 GB monthly uploads</span>
                  </li>
                  <li className="flex items-center gap-4 ">
                    <LuCircleCheckBig className="text-[#212529] text-xl " />
                    <span>200 MB max. note size</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>
                      Customize Home dashboard and access <br />
                      extra widgets
                    </span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>Connect primary Google Calendar account</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <LuCircleCheckBig className="text-[#212529] text-xl mt-1" />
                    <span>
                      Add due dates, reminders, and <br /> notifications to your
                      tasks
                    </span>
                  </li>
                </ul>
                <button className=" border border-[#FFE492] w-[166px] h-[51px]  rounded-[10px]">
                  Get Started
                </button>
              </div>
            </section>
          </section>

          <section className="bg-[#043873] h-[574px] relative flex flex-col items-center text-white text-center  pt-[140px] pb-[100px] pr-[220px] pl-[220px] gap-16">
            <img
              src="/Landing page V1/desktop/Element9.png"
              alt=""
              className="absolute pt-[70px] pl-[755px] z-0"
            />
            <div className="relative z-10">
              <p className="text-[72px] font-[700]">
                Your work, everywhere you are
              </p>
              <p className="font-[300]  ">
                Access your notes from your computer, phone or tablet by
                synchronising with various services, including whitepace,
                Dropbox and <br />
                OneDrive. The app is available on Windows, macOS, Linux, Android
                and iOS. A terminal app is also available!
              </p>
            </div>
            <button className="bg-[#4F9CF9] w-[195px] h-[63px] relative rounded-[10px] gap-[10px]  flex items-center place-content-center">
              Try Taskey <GoArrowRight className="text-xl"></GoArrowRight>
            </button>
          </section>

          <div className=" absolute z-0 inset-0 mt-[1090px]">
            <img
              src="/Landing page V1/desktop/BACKGROUND2.png"
              alt=""
              className=""
            />
          </div>
        </main>
      </>
    )}
  </>
);


}


export  default Pricing;