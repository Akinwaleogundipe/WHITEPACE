import { GoArrowRight } from "react-icons/go";
import extension from "../assets/desktop/extension.jpg";

function Customise() {
	return (
    <>
      <main className="flex flex-col lg:flex-row text-[#212529] items-center justify-center text-center lg:text-start py-25 px-4 lg:py-32 lg:px-16 h-full w-full  gap-15 ">
        <div className="w-full h-full ">
          <img src={extension} alt="" />
        </div>

        <div className="flex flex-col  gap-15">
          {/* <img
            src="/Landing page V1/desktop/Element5.png"
            alt=""
            className="absolute pt-[170px]"
          /> */}
          <h1 className="font-[700] text-5xl  relative ">
            Customise it to your needs
          </h1>
          <p className="">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API
          </p>
          <button className="bg-[#4F9CF9]  w-58  h-17.5  rounded-xl flex text-white place-content-center items-center text-xl gap-2 self-center lg:self-start">
            Let's Go <GoArrowRight className="text-2xl" />
          </button>
        </div>
      </main>
    </>
  );
}

export default Customise;
