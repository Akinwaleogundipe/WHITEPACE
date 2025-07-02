import { GoArrowRight } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";


 


function Pricing(){

return (
  <>
    <main className="w-full h-full relative flex flex-col border gap-15 ">
      <section className=" w-full h-full flex flex-col  justify-between  place-content-center py-20 px-4 gap-15  lg:py-35 lg:px-8">
        <div className="flex flex-col text-center lg:text-start text-[#212529] items-center gap-4  place-content-center border">
          {/* <img
                src="/Landing page V1/desktop/Element7.png"
                alt=""
                className="absolute top-[190px] left-1/2"
              /> */}
          <h1 className="text-4xl lg:text-7xl font-bold ">Choose Your Plan</h1>
          <p className="text-lg font-light leading-[30px]">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan
            for you.
          </p>
        </div>

        <section className="h-full w-full flex   items-center  gap-6 overflow-hidden ">
          <div className=" w-full h-full border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
            <span className="font-medium text-2xl">Free</span>
            <span className="font-bold text-4xl">$0</span>
            <span className="font-normal text-lg ">
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
          <div className="bg-[#043873] w-full h-full rounded-[10px]  pt-[80px] pb-[60px] pr-[44px] pl-[44px] flex flex-col text-white gap-8 place-content-center">
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
          <div className=" w-full h-full border border-[#FFE492] rounded-[10px] flex flex-col text-[#212529] pt-[40px] pb-[40px] pr-[44px] pl-[44px] gap-4 place-content-center">
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

      <section className="bg-[#043873] h-full w-full  relative flex flex-col justify-center lg:items-center text-white lg:text-center gap-15 py-25 px-4 ">
        <img
          src="/Landing page V1/desktop/Element9.png"
          alt=""
          className="absolute pt-[70px] pl-[755px] z-0"
        />
        <div className="flex flex-col relative z-10 gap-8">
          <p className="text-4xl lg:text-7xl font-bold">
            Your work, everywhere you are
          </p>
          <p className="font-[300]  ">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and <br />
            OneDrive. The app is available on Windows, macOS, Linux, Android and
            iOS. A terminal app is also available!
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
);


}


export  default Pricing;