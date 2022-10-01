import Image from "next/image";
import React from "react";
import kartik from "../../public/about/kartik.png";
import rajvi from "../../public/about/rajvi.png";
import seperator from "../../public/about/seperator.png";

const Administration = () => {
  return (
    <div className="max-w-[95rem] mx-auto px-2">
      <div className="w-11/12 xl:w-3/4 bg-[#DCDCDC] rounded-full flex items-center space-x-5 lg:space-x-10 py-2 lg:py-5 px-5 lg:px-10">
        <div className="rounded-full border-4 border-[#F4B50D] relative w-20 h-20 lg:w-56 lg:h-56">
          <Image layout="fill" src={kartik} alt=""></Image>
        </div>
        <div className="flex-1">
          <h1 className="text-xs lg:text-2xl text-center font-bold text-[#1E86FD] uppercase">
            Kartik Shah
          </h1>
          <h1 className="font-medium text-xs lg:text-2xl text-center mb-2 lg:mb-5">
            Founder
          </h1>
          <p className="text-[8px] lg:text-xl font-medium">
            Kartik Shah is a Life Coach, an International Human Potential
            Trainer, the Art of Living Senior Faculty, and a Chemical Engineer.
            He has a rich experience of more than 25 years with 2,50,000+ people
            Trained. He is an expert in fostering a growth mindset by unearthing
            potential and channelizing energy to fulfil professional and
            personal aspirations.
          </p>
        </div>
      </div>
      <div className="w-11/12 xl:w-3/4 bg-[#DCDCDC] rounded-full flex flex-row-reverse ml-auto items-center space-x-10 py-2 lg:py-5 px-5 lg:px-10 mt-10">
        <div className="border-4 border-[#F4B50D] rounded-full relative w-20 h-20 lg:w-56 lg:h-56">
          <Image src={rajvi} layout="fill" alt=""></Image>
        </div>
        <div className="flex-1">
          <h1 className="text-xs lg:text-2xl text-center font-bold text-[#1E86FD] uppercase">
            RAJVI SHAH
          </h1>
          <h1 className="font-medium text-xs lg:text-2xl text-center mb-2 lg:mb-5">
            Co-Founder
          </h1>
          <p className="text-[8px] lg:text-xl font-medium">
            Content creator with Masters in Business Administration, Rajvi has a
            dynamic & creative approach to life. Passionate, dependable,
            ambitious, and spiritual are a few among many qualities that she
            brings to the table. She knows how to invest her time, mind, and
            energy effectively and efficiently, which turns out to be one of the
            company&apos;s major assets.
          </p>
        </div>
      </div>
      <div className="mt-20 relative w-full h-5">
        <Image layout="fill" src={seperator} alt=""></Image>
      </div>
    </div>
  );
};

export default Administration;
