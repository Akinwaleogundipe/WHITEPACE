import './index.css';
import { GoArrowRight } from "react-icons/go";
import {useMediaQuery} from 'react-responsive';
import { useState } from 'react';
import WorkMobile from './Mobileviews/WorkMobile';


function WorkManagement (){
  const isMobile = useMediaQuery({ maxWidth: 767} )


    return (
      <>
        {isMobile ? (
          <WorkMobile />
        ) : (
          <>
            <main className=" flex flex-col  gap-[100px] relative  pt-[140px] pb-[140px] pr-[120px] pl-[120px]  max-xl:pr-[80px] max-xl:pl-[80px]">
              <div className="absolute inset-0  pt-[180px] ">
                <img src="/Landing page V1/desktop/BACKGROUND.png" alt="" />
              </div>
              <section className="w-full h-[547px] relative  flex ">
                <div className=" flex flex-col relative  w-[50%]  h-[547px] z-10 ">
                  <p className="flex flex-col font-[700] text-[72px] text-[#212529] relative  tracking-[-2%] z-10 pt-[30px] pb-[30px]">
                    Project <br /> Management
                  </p>
                  <img
                    src="/Landing page V1/desktop/Element3.png"
                    alt=""
                    className="absolute top-[31%] z-0 "
                  />
                  <p className="text-[18px] font-[300] leading-[30px] pb-[50px]">
                    Images, videos, PDFs and audio files are supported. Create
                    math expressions and diagrams directly from the app. Take
                    photos with the mobile app and save them to a note.
                  </p>

                  <button className="bg-[#4F9CF9] w-[201px] h-[63px] rounded-[6px] flex items-center text-white pt-[20px] pb-[20px] pr-[40px] pl-[40px]">
                    Get Started &nbsp;&nbsp; <GoArrowRight />
                  </button>
                </div>

                <div className="w-[748px] h-[547px] bg-[#A7CEFC]"></div>
              </section>

              <section className="h-[661px] w-full items-center relative pt-[20px] gap-[100px] flex  ">
                <div>
                  <img
                    src="/Landing page V1/desktop/Work Together Image.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col text-[#212529] relative pt-[100px] pb-[100px]">
                  <p className="flex flex-col font-[700] text-[72px]  relative  tracking-[-2%] z-10 pt-[30px] pb-[30px]">
                    Work together
                  </p>
                  <img
                    src="/Landing page V1/desktop/Element.png"
                    alt=""
                    className="absolute  left-[30%] top-[31%]"
                  />
                  <p className="text-[18px] font-[300] leading-[30px] pb-[50px] whitespace-nowrap">
                    With whitepace, share your notes with your colleagues and
                    collaborate on them. <br /> You can also publish a note to
                    the internet and share the URL with others.
                  </p>

                  <button className="bg-[#4F9CF9] w-[186px] h-[63px] rounded-[6px] flex items-center text-white pt-[20px] pb-[20px] pr-[40px] pl-[40px] gap-2">
                    Try it now <GoArrowRight className="2xl" />
                  </button>
                </div>
              </section>
            </main>
          </>
        )}
      </>
    );


}



export default WorkManagement;  // export the component