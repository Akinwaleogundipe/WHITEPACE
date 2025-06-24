import { GoArrowRight } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";




function PricingMobile(){
return (
  <>
    <main className=" w-[100vw] border relative flex flex-col  ">
      <section className="z-10 pt-[100px] pb-[100px] pr-[20px] pl-[20px] justify-between  place-content-center">
        <div className="flex flex-col text-[#212529] items-center pb-[90px] place-content-center">
          <img
            src="/Landing page V1/desktop/Element7.png"
            alt=""
            className="absolute top-[165px] left-1/2"
          />
          <h1 className="font-[700] text-[72px]  relative  tracking-[-2%] z-10 ">
            Choose Your Plan
          </h1>
          <p className="text-[18px] font-[300] leading-[30px] text-center">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the <br /> right plan
            for you.
          </p>
        </div>

        <section className="h-[711px]  text-nowrap flex flex-col  items-center  justify-between overflow-x-scroll ">
          <div className=" min-w-[470px] h-[630px] border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
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
          <div className="bg-[#043873] min-w-[470px] h-[761px] rounded-[10px]  pt-[80px] pb-[60px] pr-[44px] pl-[44px] flex flex-col text-white gap-8 place-content-center">
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
          <div className=" min-w-[470px] h-[630px] border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
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
                <LuCircleCheckBig className="text-[#212529] text-xl mt-1 text-nowrap" />
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

      <section className="bg-[#043873] h-[673px] relative flex flex-col  text-white   pt-[140px] pb-[140px] pr-[20px] pl-[20px] gap-16">
        <img
          src="/Landing page V1/tablet/Element7.png"
          alt=""
          className="absolute inset-0 z-0"
        />

        <div className="relative ">
          <img
            src="/Landing page V1/tablet/Vector1.png"
            alt=""
            className="absolute pt-[120px]  z-0 "
          />
          <p className="text-[54px] relative font-[700] z-10  pb-[10px]">
            Your work, everywhere <br />
            you are
          </p>
          <p className="font-[300]  ">
            Access your notes from your computer, phone or tablet by
            synchronising <br />with various services, including whitepace, Dropbox
            and 
            OneDrive. The <br /> app is available on Windows, macOS, Linux, Android and
            iOS. A terminal <br /> app is also available!
          </p>
        </div>
        <button className="bg-[#4F9CF9] w-[195px] h-[63px] relative rounded-[10px] gap-[10px]  flex items-center place-content-center">
          Try Taskey <GoArrowRight className="text-xl"></GoArrowRight>
        </button>
      </section>
    </main>
  </>
);

}


export default PricingMobile;  //export the component