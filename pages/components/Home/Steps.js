import Image from "next/image";
import React from "react";
import left from "../../../public/left.png";
import right from "../../../public/right.png";
import register from "../../../public/image.png";
import counselling from "../../../public/image1.png";
import collaborate from "../../../public/image2.png";
import Earn from "../../../public/image3.png";
import { Slide } from "react-awesome-reveal";

const Steps = () => {
  return (
    <div className="bg-[#B5C2CF] bg-opacity-40 stepsclip py-10 md:py-20 mt-10 md:mt-20 ">
      <div className=" w-10/12 mx-auto">
        <h1 className="text-2xl lg:text-4xl font-semibold text-center">
          Willing to become Executive Sales Partner(ESP)?
        </h1>
        <h2 className="text-2xl lg:text-[40px] text-center mt-2">
          Follow these simple steps!
        </h2>
        <div className="sm:w-8/12 w-full mx-auto">
          <div className="max-w-[68rem] mx-auto px-5 py-10 xl:px-0">
            {/* <Slide direction="left" triggerOnce={1} duration={2000}> */}
            <div className="flex my-3">
              <div className="relative w-1/4 h-[50px] sm:w-[20vw] sm:h-[10vw]">
                <Image src={register} alt="" layout="fill"></Image>
              </div>
              <div className="relative">
                <div className="relative w-[200px] h-[50px] sm:w-[40vw] sm:h-[10vw]">
                  <Image src={left} alt="" layout="fill"></Image>
                </div>
                <div className="absolute top-[4%] left-[10%]">
                  <div className="flex items-start">
                    <h1 className="sm:text-[11vw] text-[5vw] md:text-[11.5vw] lg:text-[5vw] font-semibold text-white">
                      1
                    </h1>
                    <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] ml-5">
                      <h1 className="text-[4vw] md:text-[4vw] lg:text-[1.8vw] font-semibold ">
                        Register
                      </h1>
                      <h1 className="sm:text-[1vw] text-[1.5vw] lg:text[15px] mt-[1%] leading-tight md:leading-relaxed">
                        Choose to become an ESP and sign up with our portal to
                        start working and earning.
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Slide>
            <Slide direction="right" triggerOnce={1} duration={2000}> */}
            <div className="flex my-3">
              <div className="relative">
                <div className="relative w-[200px] h-[50px] sm:w-[40vw] sm:h-[10vw]">
                  <Image src={right} alt="" layout="fill"></Image>
                </div>
                <div className="absolute top-[4%] sm:right-[10%] -right-[15%] md:right-0 lg:right-[-12%] xl:right-[-22%]">
                  <div className="flex items-start text-right">
                    <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] mr-5">
                      <h1 className="text-[4vw] md:text-[4vw] lg:text-[1.8vw] font-semibold ">
                        Counselling
                      </h1>
                      <h1 className="sm:text-[1vw] text-[1.5vw] lg:text[15px] mt-[1%] leading-tight md:leading-relaxed">
                        Know about the varied industry segments, and choose the
                        best for yourself.
                      </h1>
                    </div>
                    <h1 className="sm:text-[11vw] text-[5vw] md:text-[11.5vw] lg:text-[5vw] font-semibold text-white mr-12">
                      2
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative w-1/4 h-[50px] sm:w-[20vw] sm:h-[10vw]">
                <Image src={counselling} alt="" layout="fill"></Image>
              </div>
            </div>
            {/* </Slide>
            <Slide direction="left" triggerOnce={1} duration={2000}> */}
            <div className="flex my-3">
              <div className="relative w-1/4 h-[50px] sm:w-[20vw] sm:h-[10vw]">
                <Image src={collaborate} alt="" layout="fill"></Image>
              </div>
              <div className="relative">
                <div className="relative w-[200px] h-[50px] sm:w-[40vw] sm:h-[10vw]">
                  <Image src={left} alt="" layout="fill"></Image>
                </div>
                <div className="absolute top-[4%] left-[10%]">
                  <div className="flex items-start">
                    <h1 className="sm:text-[11vw] text-[5vw] md:text-[11.5vw] lg:text-[5vw] font-semibold text-white">
                      3
                    </h1>
                    <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] ml-5">
                      <h1 className="text-[4vw] md:text-[4vw] lg:text-[1.8vw] font-semibold ">
                        Collaborate
                      </h1>
                      <h1 className="sm:text-[1vw] text-[1.5vw] lg:text[15px] mt-[1%] leading-tight md:leading-relaxed">
                        Connect with the business of your choice and become an
                        Executive Sales Partner (ESP).
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </Slide>
            <Slide direction="right" triggerOnce={1} duration={2000}> */}
            <div className="flex my-3">
              <div className="relative">
                <div className="relative w-[200px] h-[50px] sm:w-[40vw] sm:h-[10vw]">
                  <Image src={right} alt="" layout="fill"></Image>
                </div>
                <div className="absolute top-[4%] right-[10%] md:right-0 lg:right-[-12%] xl:right-[-20%] ">
                  <div className="flex items-start text-right">
                    <div className="md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[1%] mr-5 ">
                      <h1 className="text-[4vw] md:text-[4vw] lg:text-[1.8vw] font-semibold ">
                        Earn
                      </h1>
                      <h1 className="sm:text-[1vw] text-[1.5vw] lg:text[15px] mt-[1%] leading-tight md:leading-relaxed">
                        {" "}
                        Choose your working hours and enable global sales of the
                        business to earn as you perform.
                      </h1>
                    </div>
                    <h1 className="sm:text-[11vw] text-[5vw] md:text-[11.5vw] lg:text-[5vw] font-semibold text-white">
                      4
                    </h1>
                  </div>
                </div>
              </div>
              <div className="relative w-1/4 h-[50px] sm:w-[20vw] sm:h-[10vw]">
                <Image src={Earn} alt="" layout="fill"></Image>
              </div>
            </div>
            {/* </Slide> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
