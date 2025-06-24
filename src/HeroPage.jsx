import logo from "/Logo.png";
import "./index.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import NavBar from "./Mobileviews/MobileHero";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";

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
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [click, setClick] = useState(false); 

  return (
    <>
      {!isMobile ? (
        <>
          <header className="bg-[#043873] h-[92px] w-full flex   justify-between pt-[16px] pb-[16px] pl-[200px] pr-[200px]  max-xl:pr-[32px] max-xl:pl-[32px] items-center text-white ">
            <img className="" src={logo} alt="Whitepace-logo" />
            <nav className="2xl:block  max-[1152px]:hidden">
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

            <div className="flex gap-8  place-self-end">
              <button className="w-[126px] h-[60px] bg-[#FFE492] rounded-[7px] text-black">
                Login
              </button>
              <button className="w-[227px] h-[60px] bg-[#4F9CF9] rounded-[10px]">
                Try Whitepace free
              </button>
              <button
                className="nav-btn hidden max-[1152px]:block "
                onClick={() => setClick(!click)}
              >
                {click ? <MdClose /> : <VscMenu />}
                {click && (
                  <div className=" w-full">
                    <NavLinks />
                  </div>
                )}
              </button>
            </div>
          </header>

          <main className="bg-[#043873]  w-full  bg-cover  relative pt-[140px] pb-[140px] pl-[180px] pr-[180px]    max-xl:pr-[32px]  max-xl:pl-[32px]">
            <div>
              <img
                className="absolute inset-0 m-auto object-center object-cover"
                src="/Landing page V1/desktop/Element1.png"
                alt=""
              />
            </div>

            <section className="relative z-10 inset-0 flex gap-12">
              <div className="text-white">
                <p className="font-[700] text-[64px]">
                  Get More Done with <br />
                  whitepace
                </p>
                <p className="font-[300] text-[18px] whitespace-nowrap">
                  Project management software that enables your teams to
                  collaborate, plan, <br /> analyze and manage everyday tasks
                </p>
                <button className="w-[219px] h-[63px] mt-[70px] rounded-[8px] bg-[#4F9CF9]">
                  Try Whitepace free
                </button>
              </div>

              <div className="bg-[#A7CEFC] w-[824px] h-[549px]"></div>
            </section>
          </main>
        </>
      ) : (
        <NavBar />
      )}
    </>
  );
}

export default HeroPage; // export the component
