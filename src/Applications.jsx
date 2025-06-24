import './index.css'
import { useMediaQuery } from 'react-responsive';
import ApplicationsMobile from './Mobileviews/ApplicationsMobile';


function Applications(){
  const isMobile = useMediaQuery({maxWidth:767})
return (
  <>
    {isMobile ? (
      <ApplicationsMobile />
    ) : (
      <>
        <main className="h-[751px] relative  bg-[#043873] flex flex-col   pt-[140px] pb-[140px] pr-[180px] pl-[180px] max-[1700px]:pr-[32px] max-[1700px]:pl-[32px]   max-xl:pr-[32px] max-xl:pl-[32px]  z-0 ">
          <img
            src="/Landing page V1/desktop/bgelem.png"
            alt=""
            className="absolute inset-0 h-auto  w-auto  object-cover z-0 "
          />

          <section className=" flex items-center align-middle z-10 gap-18">
            <div>
              <img
                src="/Landing page V1/desktop/Apps.png"
                alt=""
                className=""
              />
            </div>
            <div>
              <p className="text-white font-[700] text-[72px] text-nowrap">
                Work with Your <br /> Favorite Apps Using <br /> whitepace
              </p>
              <p className="text-white font-[300] text-[18px] text-nowrap">
                Whitepace teams up with your favorite software. Integrate with
                over 1000+ apps with Zapier to <br /> have all the tools you
                need for your project success
              </p>
            </div>
          </section>
        </main>
      </>
    )}
  </>
);

}

export default Applications