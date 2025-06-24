import Card from "../NameCard";

function TrialsMobile() {
  return (
    <>
      <main className="h-[932px]   pt-[140px] pb[140px] pr-[20px] pl-[20px] flex flex-col gap-6 relative border  ">
      

        <img src="/Landing page V1/tablet/Element9.png" alt="" className="absolute pr-[110px] pt-[40px] self-end"/>
        <p className="z-10 text-[50px] font-[700] text-[#212529] text-center ">
          See what our trusted users say
        </p>

        <div className="flex gap-3 snap-mandatory   overflow-x-auto ">
          <Card
            img="/Landing page V1/desktop/Avater1.png"
            description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
            name="Oberon Shaw, MCH"
            position="Head of Talent Acquisition, North America"
            bgcolor="bg-white"
            textcolor="#212529"
            iconcolor="#043873"
            className=" snap-start"
          />

          <Card
            img="/Landing page V1/desktop/Avater2.png"
            description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
            name="Will Smith, AB"
            position="Head of Public Relations, North America"
            bgcolor="#4F9CF9"
            textcolor="white"
            iconcolor="white"
            namecolor="#212529"
            className=" snap-start"
          />

          <Card
            img="/Landing page V1/desktop/Avater3.png"
            description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
            name="John Stone, MA"
            position="Head of Talent Acquisition, South America"
            bgcolor="#4F9CF9"
            textcolor="white"
            iconcolor="white"
            namecolor="#212529"
            className=" snap-start"
          />
        </div>
      </main>
    </>
  );
}

export default TrialsMobile;
