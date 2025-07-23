import { GoArrowRight } from "react-icons/go";
import WorkTogether from "../assets/desktop/WorkTogetherImage.png";
import discussing from "../assets/desktop/discussing.png";
import mobileBackground from "../assets/tablet/tabletelement2.png";
// lg:justify-center  lg:flex-row  gap-15 py-20 px-4  lg:py-35  relative

function WorkManagement() {
	return (
    <>
      <main className=" flex flex-col justify-center items-center gap-25 relative w-full h-full text-center border lg:justify-center lg:text-start py-20 px-6  lg:py-35 lg:px-9  2xl:px-50">
        <div className="absolute inset-0 w-full h-full">
          <img src={mobileBackground} alt="" className=" pt-25" />
        </div>

        <section className="flex flex-col gap-15 lg:flex-row h-full w-full  relative   ">
          <div className=" flex flex-col relative gap-8  ">
            <p className=" font-bold text-4xl lg:text-5xl text-[#212529] relative  z-10 ">
              Project Management
            </p>
            {/* <img src={Element3} alt="" className="flex  self-center absolute  z-0 " /> */}
            <p className="text-lg font-light  leading-8 ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <button className="bg-[#4F9CF9] w-50 h-17.5 rounded-lg flex items-center justify-center gap-4 text-white self-center lg:self-start">
              Get Started <GoArrowRight className="text-2xl" />
            </button>
          </div>

          <div className=" w-full h-full flex place-content-center lg:place-content-end">
            <img src={discussing} alt="" className="self-center" />
          </div>
        </section>

        <section className=" flex flex-col-reverse lg:flex-row h-full w-full justify-center items-center relative  gap-25 ">
          <div>
            <img src={WorkTogether} alt="" />
          </div>

          <div className="flex flex-col  gap-20 text-[#212529] relative ">
            <p className=" font-bold text-4xl lg:text-6xl relative   z-10 ">
              Work together
            </p>
            {/* <img
                src={Underline}
                alt=""
                className="absolute  left-[30%] top-[37%]"
              /> */}
            <p className="text-lg font-light leading-[30px]">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>

            <button className="bg-[#4F9CF9] w-50 h-17.5 rounded-lg flex items-center justify-center gap-4 text-white self-center lg:self-start">
              Try it now <GoArrowRight className="text-2xl" />
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default WorkManagement; // export the component
