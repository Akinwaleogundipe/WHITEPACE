import {FaBars, FaTimes} from 'react-icons/fa';
import logo from "../assets/Logo.png"; 
import { useRef, useState } from 'react';
import { VscMenu } from "react-icons/vsc";
import { MdClose } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

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



function NavBar (){
    // const navRef = useRef();
    // const showNavBar = () =>{navRef.current.classList.toggle("responsive_nav");
    const[click, setClick] = useState(false);


   


    return (
      <>
        <header className="flex bg-[#043873] w-[100vw] text-white  h-[66px] items-center  justify-between pt-[16px] pb-[16px] pr-[32px] pl-[32px]">
          <img src={logo} alt="" />

          <button className="nav-btn" onClick={() => setClick(!click)}>
            {click ? <MdClose /> : <VscMenu />}
            {click && (
              <div className=" w-full">
                <NavLinks />
              </div>
            )}
          </button>
        </header>

        <main className="bg-[#043873]     bg-cover  relative pt-[140px] pb-[100px] pl-[20px] pr-[20px]  ">
          <div>
            <img
              className="absolute inset-0  pt-[130px] object-cover"
              src="/Landing page V1/tablet/element1bg.png"
              alt=""
            />
          </div>

          <section className="relative z-10 inset-0 flex flex-col gap-12 text-center items-center">
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

            <div className="bg-[#A7CEFC] w-[551px] h-[367px]"></div>
          </section>
        </main>
      </>
    );

  }


export default NavBar;