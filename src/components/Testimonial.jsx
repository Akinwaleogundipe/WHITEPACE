import { GoArrowRight } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import { GrApple } from "react-icons/gr";
import { GrWindows } from "react-icons/gr";
import Logo from "../assets/desktop/Logo.png";

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
      <main className="h-full w-full bg-[#043873] flex flex-col py-25 px-8 items-center gap-8">
        <p className="font-bold text-4xl lg:text-7xl relative text-white ">
          Try Whitepace today
        </p>
        <p className="text-white font-light text-[24px]">
          Get started for free. Add your whole team as your needs grow.
        </p>

        <button className="bg-[#4F9CF9]  w-56.5 h-15   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
          Try Taskey free <GoArrowRight />
        </button>
        <p className="text-white font-[300] text-[24px]">
          On a big team?Contact sales
        </p>
        <div className="flex gap-12">
          <GrApple className="text-white text-7xl" />
          <GrWindows className="text-white text-7xl" />
          <GrAndroid className="text-white text-7xl" />
        </div>
      </main>
      <footer className="flex flex-col h-full w-full bg-[#043873] border-t   justify-center items-center text-center text-white">
        <section className="flex flex-col items-center justify-center text-center gap-30">
          <img src={Logo} alt="" />
          <p className="font-light text-[18px] ">
            whitepace was created for the new ways we live and work. We make a
            better workspace around the world
          </p>

          {links.map((link) => (
            <ul key={link.title}>
			<li className="font-bold hover:text-[#FFE492]">{link.title}</li>
			{link.options.map((option) => 
				<li key={link.title} className="hover:text-[#FFE492]">
					{option.content}
				</li>
			)}
            
            </ul>
          ))}

      

          <div className="flex flex-col gap-3 items-center">
            <p className="bold text-3xl">Try it Today</p>
            <p>Get started for free. Add your whole team as your needs grow.</p>

            <button className="bg-[#4F9CF9]  w-fit px-12  py-5  text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
              Start today <GoArrowRight className="text-xl" />
            </button>
          </div>
        </section>

        <div></div>
      </footer>
    </>
  );
}

export default Testimonial;
