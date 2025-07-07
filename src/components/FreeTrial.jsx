import Card from "./NameCard";
import Avatar1 from "../assets/desktop/Avatar1.png";
import Avatar2 from "../assets/desktop/Avatar2.png";
import Avatar3 from "../assets/desktop/Avatar3.png";

function FreeTrial() {
	const testimonials = [
		{
			description:
				"Whitepace is designed as a collaboration tool for businesses that is a full project management solution",
			name: "Oberon Shaw, MCH",
			position: "Head of Talent Acquisition, North America",
			bgcolor: "bg-white",
			textcolor: "#212529",
			iconcolor: "#043873",
		},
	];

	return (
		<>
			<main className="h-full w-full flex flex-col relative py-25 px-4 md:py-35 md:px-5 gap-20 border">
				<img
					src="../assets/desktop/Group.png"
					alt="#"
					className=" top-[20%] "
				/>
				<p className="z-10 text-4xl lg:text-7xl font-bold text-[#212529] text-center">
					What Our Clients Says
				</p>

				<div className="flex justify-center gap-14 overflow-x-scroll  ">
					<Card
						img={Avatar1}
						description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
						name="Oberon Shaw, MCH"
						position="Head of Talent Acquisition, North America"
						bgcolor="bg-white"
						textcolor="#212529"
						iconcolor="#043873"
					/>

					<Card
						img={Avatar2}
						description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
						name="Will Smith, AB"
						position="Head of Public Relations, North America"
						bgcolor="#4F9CF9"
						textcolor="white"
						iconcolor="white"
						namecolor="#212529"
					/>

					<Card
						img={Avatar3}
						description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
						name="John Stone, MA"
						position="Head of Talent Acquisition, South America"
						bgcolor="#4F9CF9"
						textcolor="white"
						iconcolor="white"
						namecolor="#212529"
					/>
				</div>
				<div>
					{testimonials.map((opt) => (
						<div key={opt?.name}>{opt?.description}HELLO</div>
					))}
				</div>
			</main>
		</>
	);
}

export default FreeTrial;
