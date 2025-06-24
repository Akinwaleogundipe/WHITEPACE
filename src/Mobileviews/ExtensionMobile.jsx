import { GoArrowRight } from "react-icons/go";


function ExtensionMobile() {
 return (
   <>
     <main className="bg-[#043873] flex flex-col h-[916px]  pt-[100px] pb-[100px] pr-[28px] pl-[28px] gap-16 text-white text-center  " >
       <div className="  flex flex-col   ">
         <img
           src="/Landing page V1/tablet/Element5.png"
           alt=""
           className="absolute z-0 pt-[70px] flex self-end"
         />
         <p className="font-[700] text-[72px]  relative z-10 ">
           Use as Extension
         </p>

         <p className="text-[18px] font-[200] leading-[30px] pb-[50px] ">
           Use the web clipper extension, available on Chrome and Firefox, to
           save web pages <br /> or take screenshots as notes.
         </p>

         <button className="bg-[#4F9CF9]  self-center  w-[186px] h-[63px]  rounded-md flex  items-center place-content-center gap-2">
           Let's Go <GoArrowRight className="text-xl" />
         </button>
       </div>

       <div className="h-[388px] w-[557px] bg-[#A7CEFC] flex self-center"></div>
     </main>
   </>
 );


}


export default ExtensionMobile ;