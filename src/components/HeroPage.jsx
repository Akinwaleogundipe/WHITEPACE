
import Background from "../assets/desktop/Element1.png";
import { GoArrowRight } from "react-icons/go";
import  illustrating  from "../assets/desktop/illustrating.png";



function HeroPage() {
	

	return (
    <>
     
      <main className="bg-[#043873] flex flex-col  lg:flex-row items-center gap-20 lg:gap-0 text-white    text-center  relative  lg:text-start py-20 px-6  lg:py-35 lg:px-9 2xl:px-50">
        <div className="absolute inset-0 flex items-center ">
          <img
            className=" object-cover w-full h-full "
            src={Background}
            alt=""
          />
        </div>

        <section className="flex flex-col gap-15 lg:flex-row h-full w-full  relative ">
          <div className="flex flex-col relative gap-8 ">
            <p className="font-bold  text-4xl lg:text-6xl">
              Get More Done with whitepace
            </p>
            <p className="font-light text-lg leading-8 text-wrap">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>
            <button className="bg-[#4F9CF9]  w-fit p-5  rounded-[10px] flex self-center lg:self-start items-center text-xl gap-2">
              Try Whitepace free <GoArrowRight />
            </button>
          </div>
        </section>
        <div className="w-full h-full flex place-content-center lg:place-content-end ">
          <img src={illustrating} alt="" className="" />
        </div>
      </main>
    </>
  );
}

export default HeroPage; // export the component
