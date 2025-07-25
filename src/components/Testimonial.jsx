import { GoArrowRight } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import { GrApple } from "react-icons/gr";
import { GrWindows } from "react-icons/gr";
import Logo from "../assets/desktop/Logo.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import { TiSocialFacebook } from "react-icons/ti";
import { LiaTwitter } from "react-icons/lia";
import { TiSocialLinkedin } from "react-icons/ti";



function Testimonial() {
  const links = [
    {
      title: "Product",
      options: [
        { content: "Overview" },
        { content: "Pricing" },
        { content: "Customer stories" },
      ],
    },

    {
      title: "Resources",
      options: [
        { content: "Blog" },
        { content: "Guides & tutorials" },
        { content: "Help Center" },
      ],
    },

    {
      title: "Company",
      options: [
        { content: "About us" },
        { content: "Careers" },
        { content: "Media" },
      ],
    },
  ];

  return (
    <>
      <main className="h-full w-full bg-[#043873] flex flex-col pt-25 px-4 md:py-35 md:px-5 lg:items-center  lg:text-center gap-10">
        <div className="xl:w-[50%] flex flex-col gap-5">
          <p className="font-bold text-[40px]  md:text-[54px] lg:text-7xl text-white ">
            Try Whitepace today
          </p>
          <p className="text-white font-light text-2xl ">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>
        </div>

        <button className="bg-[#4F9CF9]  w-fit px-14 py-5   text-white rounded-md flex   lg:place-content-center gap-3 text-nowrap">
          Try Taskey free <GoArrowRight />
        </button>
        <p className="text-white font-light text-[24px]">
          On a big team?Contact sales
        </p>
        <div className="flex gap-12 text-[40px] text-white md:text-[54px] ">
          <GrApple />
          <GrWindows />
          <GrAndroid />
        </div>
      </main>

      <main className=" h-full w-full bg-[#043873] flex flex-col gap-5  text-white pt-35 pb-6 px-6 md:max-lg:px-8 md:max-lg:py-10 lg:py-35">
        <section className="flex flex-col lg:flex-row items-center md:items-start text-center md:text-start gap-25 h-full w-full border-b-[0.5px]">
          <div className="flex flex-col items-center  md:items-start gap-4  w-[70%]">
            <img src={Logo} alt="" />
            <p className="font-light text-lg ">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
            </p>
          </div>

          {links.map((link) => (
            <ul key={link.title}>
              <li className="font-bold hover:text-[#FFE492] ">{link.title}</li>
              {link.options.map((option) => (
                <li key={link.title} className="hover:text-[#FFE492]">
                  {option.content}
                </li>
              ))}
            </ul>
          ))}

          <div className="flex flex-col gap-5 items-center  w-[75%] md:w-[30%]">
            <p className="font-bold  text-3xl ">Try it Today</p>
            <p className="font-light text-lg  self-start">
              Get started for free. Add your whole team as your needs grow.
            </p>

            <button className="bg-[#4F9CF9]  w-fit px-12  py-5  text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
              Start today <GoArrowRight className="text-xl" />
            </button>
          </div>

          <ul className="flex  flex-col items-center font-extralight  gap-3 pb-4 ">
            <li className="flex items-center gap-2">
              <CiGlobe />
              English
              <MdKeyboardArrowDown className="text-2xl" />
            </li>
            <li>Terms & Privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>©2021 Whitepace LLC.</li>
          </ul>
        </section>
        <ul className="flex items-center text-center  place-content-center text-2xl gap-4">
          <li>
            <TiSocialFacebook />
          </li>
          <li>
            <LiaTwitter />
          </li>
          <li>
            <TiSocialLinkedin />
          </li>
        </ul>
      </main>
    </>
  );
}

export default Testimonial;
