import logo from "../assets/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import Background from "../assets/desktop/Element1.png";
import { GoArrowRight } from "react-icons/go";
import  illustrating  from "../assets/desktop/illustrating.png";

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
      <header className="bg-[#043873] h-17 w-full flex items-center  justify-between px-6   text-white lg:py-11 lg:px-6">
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

      <main className="bg-[#043873] flex flex-col  lg:flex-row items-center text-white  gap-25 lg:gap-0   relative w-full h-full text-center   lg:text-start py-20 px-6  lg:py-35 lg:px-9 2xl:px-50">
        <div className="absolute inset-0 flex items-center  ">
          <img
            className=" object-cover z-0 w-full h-full "
            src={Background}
            alt=""
          />
        </div>

        <section className="flex flex-col gap-15 lg:flex-row h-full w-full  relative ">
          <div className="flex flex-col relative gap-8 ">
            <p className="font-extrabold  text-4xl lg:text-5xl">
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
