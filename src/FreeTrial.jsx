import './index.css';
import Card from './NameCard'
import { useMediaQuery } from 'react-responsive';
import TrialsMobile from './Mobileviews/TrialsMobile';

function FreeTrial(){
  const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
      <>
        {isMobile ? (
          <TrialsMobile />
        ) : (
          <>
            <main className="h-[1000px] pt-[140px] pb[140px] pr-[150px] pl-[150px] xl:pr-[32px] xl:pl-[32px] flex flex-col relative  gap-20">
              <img
                src="/Landing page V1/desktop/Group.png"
                alt=""
                className="absolute a z-0 inset-0 left-[65%] top-[20%] "
              />
              <p className="z-10 text-[70px] font-[700] text-[#212529] text-center">
                What Our Clients Says
              </p>

              <div className="flex justify-center gap-8 xl:overflow-x-auto xl:snap-mandatory lg:overflow-x-auto lg:snap-mandatory">
                <Card
                  img="/Landing page V1/desktop/Avater1.png"
                  description="Whitepace is designed as a collaboration tool for
             businesses that is a full project management solution"
                  name="Oberon Shaw, MCH"
                  position="Head of Talent Acquisition, North America"
                  bgcolor="bg-white"
                  textcolor="#212529"
                  iconcolor="#043873"
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
                />
              </div>
            </main>
          </>
        )}
      </>
    );


}


export default FreeTrial; 