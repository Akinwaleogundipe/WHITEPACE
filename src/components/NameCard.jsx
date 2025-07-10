import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Card = ({
	img,
	description,
	name,
	position,
	bgcolor,
	textcolor,
	iconcolor,
	namecolor,
}) => {
	return (
		<section
			className=" min-h-[458px] min-w-[288px]  pt-[60px] pb-[60px] pr-[40px] pl-[40px]  rounded-[10px] flex flex-col justify-between gap-10 shadow-2xl "
			style={{ backgroundColor: bgcolor, color: textcolor }}
		>
			<div className="flex flex-col   border-b gap-2">
				<FontAwesomeIcon
					icon={faQuoteLeft}
					className=" text-8xl flex self-start "
					style={{ color: iconcolor }}
				/>
				<p className=" font-[400] text-[18px]">{description}</p>
			</div>

			<div className="flex gap-6 items-center ">
				<img src={img} alt="" className="h-[95px] w-[95px]" />
				<div className="flex flex-col gap-6">
					<p className="text-[24px] font-[500]" style={{ color: namecolor }}>
						{name}
					</p>
					<p className="font-[300] text-[16px]">{position}</p>
				</div>
			</div>
		</section>
	);
};

export default Card;
