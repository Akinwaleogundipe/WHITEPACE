import logo from "../src/assets/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import Background from "../src/assets/desktop/Element1.png";
import { GoArrowRight } from "react-icons/go"; 

const NavLinks = () => {
  return (
    <nav className="flex flex-col  bg-[#043873]   h-[10] w-[15em] border-l fixed z-10 ">
      <ul>
        <li>
          <a href="#" className="flex  items-center  w-[100%] ">
            Products
            {/* <RiArrowDropDownLine className="text-4xl" /> */}
          </a>
        </li>
        <li>
          <a href="#" className="flex items-center gap-1  w-[100%]">
            Solutions
            {/* <RiArrowDropDownLine className="text-4xl" /> */}
          </a>
        </li>
        <li>
          <a href="#" className="flex  items-center gap-1  w-[100%]">
            Resources
            {/* <RiArrowDropDownLine className="text-4xl" /> */}
          </a>
        </li>
        <li>
          <a href="#" className="flex  items-center gap-1 w-[100%]">
            Pricing
            {/* <RiArrowDropDownLine className="text-4xl" /> */}
          </a>
        </li>
      </ul>
    </nav>
  );
};




function HeroPage() {
  const [click, setClick] = useState(false); 

  return (
    <>
      <>
        <header className="bg-[#043873] h-17 w-full flex items-center  justify-between px-6   text-white border-b lg:py-11 lg:px-6">
          <img className="" src={logo} alt="Whitepace-logo" />
          <nav className="hidden  xl:block ">
            <ul className="w-full flex gap-8">
              <li>
                <a href="#" className="flex  items-center ">
                  Products
                  <RiArrowDropDownLine className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-1 ">
                  Solutions
                  <RiArrowDropDownLine className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#" className="flex  items-center gap-1 ">
                  Resources
                  <RiArrowDropDownLine className="text-4xl" />
                </a>
              </li>
              <li>
                <a href="#" className="flex  items-center gap-1">
                  Pricing
                  <RiArrowDropDownLine className="text-4xl" />
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-8  ">
            <button className="w-[126px] h-[60px] bg-[#FFE492] rounded-[7px] text-black hidden lg:block">
              Login
            </button>
            <button className="w-[227px] h-[60px] bg-[#4F9CF9] rounded-[10px] hidden lg:block">
              Try Whitepace free
            </button>
            <button
              className="nav-btn block xl:hidden "
              onClick={() => setClick(!click)}
            >
              {click ? <MdClose /> : <VscMenu className="text-3xl" />}
              {click && (
                <div className=" w-full">
                  <NavLinks />
                </div>
              )}
            </button>
          </div>
        </header>

        <main className="bg-[#043873] flex flex-col w-full h-full items-center lg:justify-center  lg:flex-row  gap-15 py-20 px-4    lg:py-35  relative     text-white  ">
          <div>
            <img
              className="absolute object-cover inset-0 w-full h-full "
              src={Background}
              alt=""
            />
          </div>

          <section className=" flex flex-col   relative  justify-center text-center lg:text-start items-center  gap-20    lg:flex-row">
            <div className="flex flex-col items-center lg:items-start gap-8 lg:w-full lg:h-full">
              <p className="font-extrabold text-5xl lg:text-6xl ">
                Get More Done with whitepace
              </p>
              <p className="font-light text-lg lg:leading-8 ">
                Project management software that enables your teams to
                collaborate, plan, analyze and manage everyday tasks
              </p>
              <button className="bg-[#4F9CF9]  w-58  h-17.5  rounded-xl flex place-content-center items-center text-xl gap-2">
                Try Whitepace free <GoArrowRight />
              </button>
            </div>
          </section>
          <div className="bg-[#A7CEFC] w-70 h-48  lg:w-150 lg:h-87 "></div>
        </main>
      </>
    </>
  );
}

export default HeroPage; // export the component
