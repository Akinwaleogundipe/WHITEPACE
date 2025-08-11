import logo from "../assets/Logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const NavLinks = () => {
  return (
    <nav className="flex flex-col  bg-[#043873]  w-full h-full items-center  z-10 ">
      <ul>
        <li className="border-b">
          <a href="#" className="flex  items-center   ">
            Products
          </a>
        </li>
        <li className="border-b">
          <a href="#" className="flex items-center gap-1  ">
            Solutions
          </a>
        </li>
        <li className="border-b">
          <a href="#" className="flex  items-center gap-1 ">
            Resources
          </a>
        </li>
        <li className="border-b">
          <a href="#" className="flex  items-center gap-1 ">
            Pricing
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default function Header() {
  const [click, setClick] = useState(false);
  return (
    <>
      <header className="bg-[#043873]  w-full flex items-center justify-between   p-4 2xl:px-55  text-white ">
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
              <a href="#pricing" className="flex  items-center gap-1">
                Pricing
                <RiArrowDropDownLine className="text-4xl" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex gap-8  ">
          <button className="w-fit px-10 py-3 bg-[#FFE492] rounded-[8px] text-black hidden lg:block">
            Login
          </button>
          <button className="w-fit px-10 py-5 bg-[#4F9CF9]  rounded-[10px] hidden lg:flex items-center gap-2 text-lg" >
            Try Whitepace free <GoArrowRight/>
          </button>
          <button
            className="nav-btn block xl:hidden "
            onClick={() => setClick(!click)}
          >
            {click ? (
              <MdClose className="text-3xl" />
            ) : (
              <VscMenu className="text-3xl" />
            )}
            {click && (
              <div className=" w-full">
                <NavLinks />
              </div>
            )}
          </button>
        </div>
      </header>
    </>
  );
}
