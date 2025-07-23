import { GoArrowRight } from "react-icons/go";
import save from "../assets/desktop/save.jpg";

function Extension() {
	return (
		<>
			<main className="bg-[#043873] flex flex-col gap-10 items-center overflow-hidden justify-center text-center  py-20 px-4 lg:py-35 lg:px-10 lg:flex-row lg:text-start h-full w-full  text-white">
				<div className="flex flex-col gap-15 ">
					<img
						src="/Landing page V1/desktop/Element.png"
						alt=""
						className="absolute z-0 pt-[65px] pl-[250px]"
					/>
					<p className="font-bold text-4xl  relative   z-10 ">
						Use as Extension
					</p>

					<p className="text-normal font-light leading-7.5 w-[60%] self-center lg:self-start">
						Use the web clipper extension, available on Chrome and Firefox, to
						save web pages or take screenshots as notes.
					</p>

					<button className="bg-[#4F9CF9]  w-58  h-17.5  rounded-xl flex place-content-center items-center text-xl gap-2 self-center lg:self-start">
						Let's Go <GoArrowRight className="text-2xl" />
					</button>
				</div>

				<div className="w-full h-full">
					<img src={save} alt="" />
				</div>
			</main>
		</>
	);
}

export default Extension;
