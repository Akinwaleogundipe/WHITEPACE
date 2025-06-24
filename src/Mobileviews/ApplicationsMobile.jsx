import { useMediaQuery } from 'react-responsive';
import { GoArrowRight } from "react-icons/go";



function ApplicationsMobile() {

return (
  <>
    <main className="h-[1200px] relative flex flex-col bg-[#043873] pt-[140px]  pr-[20px] pl-[20px] z-0 ">
      <img
        src="public/Landing page V1/tablet/Element8.png"
        alt=""
        className="absolute inset-0"
      />

      <section className=" flex  flex-col z-10 gap-18 items-center">
        <div>
          <img src="/Landing page V1/desktop/Apps.png" alt="" />
        </div>
        <div className='flex flex-col gap-4'>
          <p className="text-white font-[700] text-[54px] text-center">
            Work with Your Favorite Apps Using whitepace
          </p>
          <p className="text-white font-[200] text-[18px] text-center">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for
            your project success
          </p>
        </div>
      </section>

      <button className="bg-[#4F9CF9] w-[190px] h-[59px] rounded-[6px] flex items-center gap-2 text-white place-content-center self-center text-nowrap shadow-md mt-[50px]">
        Read More <GoArrowRight className="text-2xl" />
      </button>
    </main>
  </>
);

}

export default ApplicationsMobile;