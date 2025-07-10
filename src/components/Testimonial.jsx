import { GoArrowRight } from "react-icons/go";
import { GrAndroid } from "react-icons/gr";
import { GrApple } from "react-icons/gr";
import { GrWindows } from "react-icons/gr";
import Logo from "../assets/desktop/Logo.png";

function Testimonial() {
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
				<section className="flex flex-col items-center justify-center text-center gap-50">
					<img src={Logo} alt="" />
					<p className="font-[300] text-[18px] ">
						whitepace was created for the new ways we live and work. We make a
						better workspace around the world
					</p>

					<ul>
						<li className="font-[700] hover:text-[#FFE492] ">Product</li>
						<li className="hover:text-[#FFE492]">Overview</li>
						<li className="hover:text-[#FFE492]">Pricing</li>
						<li className="hover:text-[#FFE492]">Customer stories</li>
					</ul>
					<ul>
						<li className="font-[700] hover:text-[#FFE492]">Resources</li>
						<li className="hover:text-[#FFE492]">Blog</li>
						<li className="hover:text-[#FFE492]">Guides & tutorials </li>
						<li className="hover:text-[#FFE492]">Help center</li>
					</ul>
					<ul>
						<li className="font-[700] hover:text-[#FFE492]">Company</li>
						<li className="hover:text-[#FFE492]">About us</li>
						<li className="hover:text-[#FFE492]">Careers</li>
						<li className="hover:text-[#FFE492]">Media</li>
					</ul>

					<div className="flex flex-col gap-3">
						<p className="bold text-3xl">Try it Today</p>
						<p>Get started for free. Add your whole team as your needs grow.</p>

						<button className="bg-[#4F9CF9]  w-[186px] h-[60px]   text-white rounded-md flex  items-center place-content-center gap-3 text-nowrap">
							Start today <GoArrowRight className="text-3xl" />
						</button>
					</div>
				</section>

				<div></div>
			</footer>
		</>
	);
}

export default Testimonial;
