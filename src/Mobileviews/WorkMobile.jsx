import { GoArrowRight } from "react-icons/go";

function WorkMobile() {
  return (
    <>
      <main className=" border flex flex-col  gap-[40px] relative  pt-[100px] pb-[100px] pr-[40px] pl-[40px]    w-[100vw] items-center text-center  ">
        <div className="absolute inset-0  pt-[40px] ">
          <img src="/Landing page V1/tablet/tabletelement2.png" alt="" />
        </div>
        <section className="  relative  flex  flex-col    gap-14">
          <div className=" flex flex-col relative  z-10 gap-6 ">
            <span className="flex flex-col font-[700] text-[54px] text-[#212529] relative   z-10 ">
              Project Management
            </span>
            <img
              src="public/Landing page V1/tablet/Element3.png"
              alt=""
              className="absolute  pl-[300px] pt-[50px] z-0"
            />
            <p className="text-[18px] font-[300]  pb-[50px] ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and <br />
              diagrams directly from the app. Take photos with the mobile app
              and save them to a <br /> note.
            </p>

            <button className="bg-[#4F9CF9] w-[190px] h-[59px] rounded-[6px] flex items-center gap-2 text-white place-content-center self-center text-nowrap">
              Get Started <GoArrowRight className="text-2xl" />
            </button>
          </div>

          <div className="w-[561px] h-[349px] bg-[#A7CEFC] self-center"></div>
        </section>

        <section className=" relative pt-[20px] gap-[100px] flex  flex-col items-center">
          <div className="flex flex-col text-[#212529] relative pt-[100px] pb-[100px]">
            <p className="flex flex-col font-[700] text-[72px]  relative  tracking-[-2%] z-10 pt-[30px] pb-[30px]">
              Work together
            </p>
            <img
              src="public/Landing page V1/tablet/Element4.png"
              alt=""
              className="absolute pt-[100px] pl-[310px]"
            />
            <p className="text-[18px] font-[300] leading-[30px] pb-[50px] ">
              With whitepace, share your notes with your colleagues and
              collaborate on them. <br /> You can also publish a note to the
              internet and share the URL with others.
            </p>

            <button className="bg-[#4F9CF9] w-[186px] h-[63px] rounded-[6px]  self-center flex items-center text-white pt-[20px] pb-[20px] pr-[40px] pl-[40px] gap-2">
              Try it now <GoArrowRight className="2xl" />
            </button>
          </div>

          <div>
            <img
              src="/Landing page V1/desktop/Work Together Image.png"
              alt=""
            />
          </div>
        </section>
      </main>
    </>
  );
}

export default WorkMobile;
