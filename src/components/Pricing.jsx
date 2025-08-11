import { GoArrowRight } from "react-icons/go";
import { LuCircleCheckBig } from "react-icons/lu";
import background from "../assets/desktop/BACKGROUND2.png";
import underline from "../assets/desktop/Element6.png";

function Pricing() {
  const plans = [
    {
      type: "Free",
      price: "$0",
      objective: "Capture ideas and find them quickly",
      bordercolor: "#FFE492",
      textcolor: "#212529",
      action: "Get Started",
      bgcolor: "none",
      content: [
        { purpose: "Sync Unlimited devices" },
        { purpose: "10 GB monthly uploads" },
        { purpose: "200 MB max. note size" },
        { purpose: "Customize Home dashboard and access extra widgets" },
        { purpose: "Connect primary Google Calender account" },
        { purpose: "Add due dates,reminders, and reminders to your tasks" },
      ],
    },
    {
      type: "Personal",
      price: "$11.99",
      objective: "keep home and family on track",
      bordercolor: "none",
      textcolor: "#212529",
      action: "Get Started",
      bgcolor: "#043873",
      content: [
        { purpose: "Sync Unlimited devices" },
        { purpose: "10 GB monthly uploads" },
        { purpose: "200 MB max. note size" },
        { purpose: "Customize Home dashboard and access extra widgets" },
        { purpose: "Connect primary Google Calender account" },
        { purpose: "Add due dates,reminders, and reminders to your tasks" },
      ],
    },
    {
      type: "Organization",
      price: "$11.99",
      objective: "keep home and family on track",
      bordercolor: "#FFE492",
      textcolor: "#212529",
      action: "Get Started",
      bgcolor: "none",
      content: [
        { purpose: "Sync Unlimited devices" },
        { purpose: "10 GB monthly uploads" },
        { purpose: "200 MB max. note size" },
        { purpose: "Customize Home dashboard and access extra widgets" },
        { purpose: "Connect primary Google Calender account" },
        { purpose: "Add due dates,reminders, and reminders to your tasks" },
      ],
    },
  ];

  return (
    <>
      <main
        id="#pricing"
        className="relative flex flex-col  gap-15 container mx-auto "
      >
        <section className=" flex flex-col  justify-between  place-content-center py-20 px-4 gap-15  lg:py-35 lg:px-8">
          <div className="flex flex-col text-center lg:text-start text-[#212529] items-center gap-4  place-content-center ">
            <div>
              <p className="font-bold  text-4xl md:text-6xl lg:text-7xl ">
                Choose Your Plan
              </p>
              <img
                src={underline}
                alt=""
                className="w-[106px] h-[29px] mx-auto -mt-3"
              />
            </div>
            <p className="text-lg font-light leading-[30px">
              Whether you want to get organized, keep your personal life on
              track, or boost workplace productivity, Evernote has the right
              plan for you.
            </p>
          </div>

          <div className="flex justify-center  items-center overflow-auto scroll-smooth gap-4">
            {plans.map((plan) => (
              <div key={plan.type} className="">
                <div
                  className={`w-full h-full rounded-[10px] flex flex-col text-[#212529] p-10 gap-4 place-content-center
						
             ${
               plan.bordercolor === "none"
                 ? "border-none"
                 : `border border-[${plan.bordercolor}]`
             } 
				
			 ${
         plan.bgcolor === "none"
           ? "bg-transparent"
           : `bg-[${plan.bgcolor}] text-white py-16`
       }

            `}
                >
                  <span
                    className={`font-medium text-2xl
				  `}
                  >
                    {plan.type}
                  </span>
                  <span
                    className={`font-bold text-4xl
					${plan.type === "Personal" ? "text-[#FFE492]" : "text-[#212529]"}`}
                  >
                    {plan.price}
                  </span>
                  <span className="font-normal text-lg ">{plan.objective}</span>
                  {plan.content.map((content) => {
                    return (
                      <ul
                        key={plan.type}
                        className={`font-normal text-[16px] flex flex-col  gap-4 
			  
			  `}
                      >
                        <li className="flex items-center gap-4 ">
                          <LuCircleCheckBig
                            className={`shrink-0 
				 ${plan.type === "Personal" ? "text-[#FFE492]" : "text-[#212529]"}	
				`}
                          />
                          <span>{content.purpose}</span>
                        </li>
                      </ul>
                    );
                  })}

                  <button
                    className={`rounded-[10px] w-fit   py-4 px-10 
					${plan.type != "Personal" ? "border border-[#FFE492]" : "bg-[#4F9CF9]"}
					`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <section className="bg-[#043873] h-full w-full  relative flex flex-col justify-center xl:items-center text-white xl:text-center gap-15 2xl:px-50 ">
        <img src={underline} alt="" className="" />
        <div className="absolute xl:hidden">
          <img src={background} alt="" className="" />
        </div>
        <div className="flex flex-col relative z-10 gap-8 w-[75%] my-25 mx-4">
          <p className="text-4xl lg:text-7xl font-bold">
            Your work, everywhere you are
          </p>
          <p className="font-light  ">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="bg-[#4F9CF9] w-[195px] h-[63px] relative rounded-[10px] gap-[10px]  flex items-center place-content-center">
            Try Taskey <GoArrowRight className="text-xl"></GoArrowRight>
          </button>
        </div>
      </section>
    </>
  );
}

export default Pricing;
