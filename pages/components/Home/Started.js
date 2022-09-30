import Image from "next/image";
import React from "react";
import arrow from "../../../public/arrow.svg";
import { Slide } from "react-awesome-reveal";

const Started = () => {
  return (
    <div className="bg-[#BCCCDC] bg-opacity-30 w-full relative -mt-[300px] md:-mt-[280px] xl:-mt-[350px] 2xl:-mt-[400px]">
      <div className="px-5 max-w-[92rem] pt-52 xl:pt-64 pb-10 lg:pb-20 xl:pb-40 mx-auto mt-16">
        <div className="flex items-center justify-between flex-col-reverse lg:flex-row text-center lg:text-left sm:mt-0">
          <Slide triggerOnce={1} duration={2000}>
            <div className="ml-28 2xl:ml-0 max-w-[69rem]">
              <h1 className="text-xl lg:text-[33px] font-semibold">
                Get started!
              </h1>
              <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold mt-16">
                With India&apos;s Fastest Growing
                <br /> Collaboration Platform
              </h1>
              <p className="mt-3 text-[14px] lg:text-sm xl:text-2xl text-[#575757]">
                For Businesses, CollabAct connects Commission-based Sales
                Partners who become their extended hand and help them expand
                their businesses in PAN India. And for the Sales Partners, we
                offer established companies whose products services they can
                sell without any investment.
              </p>
              <button className="bg-[#c4c4c4] p-2 font-semibold mt-10 text-base 2xl:text-lg">
                Discover more
              </button>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Started;
