import { GoArrowRight } from "react-icons/go";
import extension from "../assets/desktop/extension.jpg";
import underline from "../assets/desktop/Group.png";

function Customise() {
	return (
		<>
			<main className="flex flex-col lg:flex-row container mx-auto  text-[#212529] items-center justify-center text-center lg:text-start   py-25 px-4 lg:py-32 lg:px-16 h-full w-full  gap-15 ">
				<div className="">
					<img src={extension} alt="" />
				</div>

				<div className="flex flex-col  gap-15">
					<div>
						<p className="font-bold text-[40px] md:text-[54px] lg:text-[64px] xl:text-7xl  relative ">
							Customise it to your needs
						</p>
						<img
							src={underline}
							alt=""
							className=" w-[171px] md:w-[210px]  md:h-[19px]  lg:w-[357px] lg:h-[29px] max-lg:-mt-8 ml-auto lg:mr-30 xl:-ml-5  -mt-5"
						/>
						<p className="font-light text-[18px] pt-4">
							Customise the app with plugins, custom themes and multiple text
							editors (Rich Text or Markdown). Or create your own scripts and
							plugins using the Extension API
						</p>
					</div>
					<button className="bg-[#4F9CF9]  w-58  h-17.5  rounded-xl flex text-white place-content-center items-center text-xl gap-2 self-center lg:self-start">
						Let's Go <GoArrowRight className="text-2xl" />
					</button>
				</div>
			</main>
		</>
	);
}

export default Customise;
