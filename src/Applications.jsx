import "./index.css";
import ApplicationsMobile from "./Mobileviews/ApplicationsMobile";
import bgelem from "./assets/desktop/bgelem.png";
import Apps from "./assets/desktop/Apps.png";

function Applications() {
	return (
		<>
			<main className=" flex flex-col  mx-auto  relative bg-[#043873] text-white">
				<img
					src={bgelem}
					alt=""
					className="absolute object-cover inset-0 w-full h-full "
				/>

				<section className="flex flex-col md:flex-row justify-center items-center z-10 gap-18 my-20 md:my-35">
					<div className=" ">
						<img src={Apps} alt="" className=" w-full h-full " />
					</div>
					<div className="w-full lg:w-2/5 text-center md:text-start">
						<p className=" font-bold text-4xl md:text-6xl lg:text-7xl leading-[100%]">
							Work with Your Favorite Apps Using whitepace
						</p>
						<p className=" mt-6 text-lg">
							Whitepace teams up with your favorite software. Integrate with
							over 1000+ apps with Zapier to have all the tools you need for
							your project success
						</p>
					</div>
				</section>
			</main>
		</>
	);
}

export default Applications;
