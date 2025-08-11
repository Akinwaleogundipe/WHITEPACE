import underline from "../assets/desktop/Group.png";
import Avatar1 from "../assets/desktop/Avatar1.png";
import Avatar2 from "../assets/desktop/Avatar2.png";
import Avatar3 from "../assets/desktop/Avatar3.png";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FreeTrial() {
	const testimonials = [
    {
      description:
        "Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgcolor: "bg-white",
      textcolor: "white",
      iconcolor: "#043873",
      img: Avatar1,
      namecolor: "#212529",
    },
    {
      description:
        "Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgcolor: "#4F9CF9",
      textcolor: "#FFFFFF",
      iconcolor: "white",
      img: Avatar2,
      namecolor: "#212529",
    },
    {
      description:
        "Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgcolor: "#4F9CF9",
      textcolor: "#212529",
      iconcolor: "#FFFFFF",
      img: Avatar3,
      namecolor: "#212529",
    },
    {
      description:
        "Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgcolor: "#4F9CF9",
      textcolor: "#212529",
      iconcolor: "#043873",
      img: Avatar3,
      namecolor: "#212529",
    },
    {
      description:
        "Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
      name: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      bgcolor: "#4F9CF9",
      textcolor: "#212529",
      iconcolor: "#043873",
      img: Avatar3,
      namecolor: "#212529",
    },
  ];

	return (
    <>
      <main className="flex flex-col relative py-25 px-4 md:py-35 md:px-5 gap-20 container mx-auto">
        <img src={underline} alt="#" className="  " />
        <p className="z-10 text-4xl lg:text-7xl font-bold text-[#212529] text-center">
          What Our Clients Says
        </p>

        <div className="grid grid-flow-col auto-cols-max overflow-auto scroll-smooth gap-8 ">
          {testimonials.map((opt) => (
            <div key={opt?.name} className="max-w-[471.6px]">
              <div
                className={` py-14 px-10 rounded-lg flex flex-col justify-between gap-10 shadow-2xl bg-[${opt.bgcolor}] `}
              >
                <div className={`flex flex-col   border-b gap-2 ${opt.bgcolor === "#4F9CF9" ? "text-white" :"text-black"}`}>
                  <FontAwesomeIcon
                    icon={faQuoteLeft}
                    className={`text-8xl flex self-start  text-[${opt.iconcolor}]`}
                  />
                  <p className=" font-normal text-lg">{opt.description}</p>
                </div>

                <div className="flex gap-6 items-center ">
                  <img src={opt.img} alt="" className="h-[95px] w-[95px]" />
                  <div className="flex flex-col gap-6">
                    <p
                      className={`text-2xl font-medium text-[${opt.namecolor}]`}
                    >
                      {opt.name}
                    </p>
                    <p className="font-light text-[16px]">{opt.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default FreeTrial;
