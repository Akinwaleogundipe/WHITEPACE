import { GoArrowRight } from "react-icons/go";

function CustomiseMobile() {
  return (
    <>
      <main className=" border h-[1009px]   w-[100vw] pt-[140px] pb-[140px] pr-[20px] pl-[20px] items-center flex  flex-col  text-center">
        <div className="h-[397px] w-[534px] bg-[#A7CEFC] "></div>

        <div className=" flex flex-col items-center ">
          <img
            src="/Landing page V1/desktop/Element6.png"
            alt=""
            className="absolute pt-[80px] pl-[530px]"
          />
          <h3 className="font-[700] text-[54px]  relative  tracking-[-2%] z-10 pt-[30px] pb-[30px]">
            Customise it to your needs
          </h3>
          <p className="pb-[60px]">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or  create your own scripts and
            plugins using the Extension API
          </p>
          <button className="bg-[#4F9CF9]  w-[186px] h-[63px]    text-white rounded-md flex  items-center place-content-center gap-2">
            Let's Go <GoArrowRight className="text-xl" />
          </button>
        </div>
      </main>
    </>
  );
}

export default CustomiseMobile;
