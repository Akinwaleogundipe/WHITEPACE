import { GoArrowRight } from "react-icons/go";
import WorkTogether from "../assets/desktop/WorkTogetherImage.png";
import discussing from "../assets/desktop/discussing.png";
import background from "../assets/desktop/BACKGROUND.png";
import underline from "../assets/desktop/Element10.png";
import element from "../assets/desktop/Element6.png";

function WorkManagement() {
	return (
    <>
      <div
        className="absolute bg-no-repeat w-full h-full bg-[190px_auto] md:bg-[300px_auto] xl:bg-[500px_auto] xl:bg-[0%_7%]  md:bg-[-20%_2%] bg-[-40%_2%] "
        style={{ backgroundImage: `url(${background})` }}
      ></div>
      <main className=" flex flex-col w-full h-full relative gap-25 container text-center lg:text-start mx-auto py-20 md:px-5 ">
        {/* <div className=" absolute inset-0 w-[165px] h-[270px] flex  ">
          <img src={background} alt="" className="" />
        </div> */}

        <section className="flex flex-col gap-15 lg:flex-row h-full w-full  relative   ">
          <div className=" flex flex-col relative ">
            <div className="mb-4  ">
              <p className=" font-bold text-4xl md:text-[54px] lg:text-[64px] xl:text-7xl text-[#212529] relative   ">
                Project Management
              </p>
              <img
                src={element}
                alt=""
                className=" w-[228px] md:w-[341px] lg:w-[420px]  mx-auto max-md:ml-10 -mt-3  max-lg:mr-24  md:-mt-4  lg:mx-auto "
              />
            </div>

            <p className="text-lg font-light  leading-8 mb-15 ">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <button className="bg-[#4F9CF9] w-fit px-8 py-6 rounded-lg flex items-center justify-center gap-4 text-white self-center lg:self-start">
              Get Started <GoArrowRight className="text-2xl" />
            </button>
          </div>

          <div className=" w-full h-full flex place-content-center lg:place-content-end">
            <img src={discussing} alt="" className="" />
          </div>
        </section>

        <section className=" flex flex-col-reverse lg:flex-row h-full w-full justify-center items-center relative  gap-25 ">
          <div>
            <img src={WorkTogether} alt="" />
          </div>

          <div className="flex flex-col  gap-20 text-[#212529] relative ">
            <div>
              <p className="  font-bold text-4xl md:text-[54px] lg:text-[64px] xl:text-7xl text-[#212529] relative ">
                Work together
              </p>
              <img
                src={underline}
                alt=""
                className="w-[228px] md:w-[341px] lg:w-[420px]  max-md:mx-auto  max-lg:ml-auto max-lg:mr-20 -mt-3    md:-mt-4  lg:mx-auto "
              />
            </div>

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
