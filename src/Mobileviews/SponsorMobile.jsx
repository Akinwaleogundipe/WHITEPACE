
import { GoArrowRight } from "react-icons/go";



function SponsorMobile() {
return (
  <>
    <>
      <main className=" min-h-[2000px] min-w-[100vw]  pt-[140px] pb-[140px] pr-[20px] pl-[20px] border flex flex-col gap-[300px] relative">
        <section className=" relative  flex flex-col-reverse  items-center gap-18">
          <div className=" relative  flex flex-col gap-10">
            <img
              src="/Landing page V1/desktop/Element10.png"
              alt=""
              className="absolute z-0 pl-[300px] pt-[50px]"
            />
            <p className="text-[#212529] font-[700] text-[54px] relative z-10 text-center">
              100% your data
            </p>

            <p className=" text-center">
              The app is open source and your notes are saved to an open format,
              so you'll always <br /> have access  to them. Uses End-To-End
              Encryption (E2EE) to secure your notes and <br /> ensure no-one but
              yourself can access them.
            </p>

            <button className="w-[197px] h-[63px] bg-[#4F9CF9] text-white flex place-content-center items-center rounded-[8px] self-center">
              Read more <GoArrowRight />
            </button>
          </div>
          <div className="w-[452px] h-[226px]">
            <img src="/Landing page V1/desktop/keys.png" alt="" />
          </div>
        </section>
        <section className=" h-[538px] text-center flex flex-col  pb-[100px] gap-24">
          <img
            src="/public/Landing page V1/desktop/Element10.png"
            alt=""
            className="absolute z-0 pl-[280px] pt-[70px]"
          />
          <p className="relative z-10 font-[700] text-[72px]">Our sponsors</p>
          <div className="flex flex-col gap-[100px]  items-center ">
            <img src="/Landing page V1/desktop/Apple.png" alt="" />
            <img src="/Landing page V1/desktop/Microsoft.png" alt="" />
            <img src="/Landing page V1/desktop/Slack.png" alt="" />
            <img src="/Landing page V1/desktop/Google.png" alt="" />
          </div>
        </section>
      </main>
    </>
  </>
);


}

export default SponsorMobile;