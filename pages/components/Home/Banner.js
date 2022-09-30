import Image from "next/image";
import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import happy from "../../../public/happy.png";
import happyyellow from "../../../public/happyyellow.png";
import { Slide } from "react-awesome-reveal";
import Social from "../Social";

const Banner = () => {
  return (
    <div className="max-w-[95rem] mx-auto relative z-[3]">
      <div className="">
        <div className="flex items-end">
          <div className="hidden md:block">
            <Social></Social>
          </div>
          <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover md:bg-contain bg-center text-white h-[175px] md:h-[400px] lg:h-[40vw] lg:w-[40vw] md:h-[40vw] md:w-[40vw] flex-1 rounded-[10px] lg:rounded-[50px] mx-5 xl:mx-0">
            <div className="text-center md:text-left md:px-40 lg:px-30 xl:px-56 py-5 md:py-24">
              <h1 className="text-lg md:text-4xl lg:text-3xl xl:text-6xl font-semibold lg:font-bold ">
                We connect
              </h1>
              <h4 className="text-lg md:text-3xl lg:text-3xl xl:text-5xl font-semibold sm:mt-2">
                Commissioned Sales Partners
                <br />
                with Businesses <br /> to grow Exponentially
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[85vw] lg:w-[550px] xl:w-[700px] 2xl:w-[750px] ml-[7.2vw] sm:ml-auto -mt-[30px] md:-mt-[80px] lg:-mt-[110px] md:mr-36">
        <div className="flex justify-between w-11/12 mx-auto relative -mt-3 z-[5] md:space-x-12 lg:space-x-28 xl:space-x-5">
          <Slide direction="up" triggerOnce={1} duration={2000}>
            <div>
              <div className="bg-white w-[30vw] sm:w-[25vw] md:w-[140px] lg:w-[200px] xl:w-[250px] flex flex-col items-center 2xl:ml-3 rounded-[20px] md:ml-32 lg:ml-0">
                <h1 className="text-center text-[3vw] md:text-base lg:text-lg xl:text-[1.4rem] font-bold mt-2">
                  Businesses
                </h1>
                <div className="p-5 z-[5]">
                  <div className="relative -mt-3 lg:-mt-0 w-[32px] h-[32px] lg:w-[70px] lg:h-[70px]">
                    <Image src={happy} alt=""></Image>
                  </div>
                  <AiFillYoutube className="text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6" />
                </div>
                <div className="bg-[#88939E] w-[45vw] sm:w-[180px] lg:w-[290px] xl:w-[340px] relative -mt-10 lg:-mt-16 shadow-[0px_1px_30px_0_rgba(0,0,0,0.30)] md:shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] rounded-[20px]">
                  <div className="text-white flex flex-col items-center py-5 sm:py-10 xl:py-14 font-semibold text-[7px] sm:text-[9px] xl:text-[1rem] space-y-3 text-center lg:text-left">
                    <h1>Global sales</h1>
                    <h1>Performance-based partners</h1>
                    <h1>Low Expense, Increased Revenue</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-center relative -mt-[4vw] sm:-mt-6">
                <button className="py-[2vw] px-[2vw] buttonanimate sm:py-3 sm:px-5 lg:px-10 xl:px-20 buttonbg rounded-full text-white font-semibold lg:font-bold uppercase text-[3vw] md:text-sm xl:text-lg md:ml-32 lg:ml-0 ">
                  join us
                </button>
              </div>
            </div>
            <div>
              <div className="bg-white w-[30vw] sm:w-[25vw] md:w-[140px] lg:w-[200px] xl:w-[250px] flex flex-col items-center 2xl:mr-3 rounded-[20px]">
                <h1 className="text-center text-[3vw] md:text-base lg:text-lg xl:text-[1.4rem] font-bold mt-2">
                  Sales Partners
                </h1>
                <div className="p-5 z-[5]">
                  <div className="relative -mt-3 lg:-mt-0 w-[32px] h-[32px] lg:w-[70px] lg:h-[70px]">
                    <Image src={happyyellow} alt=""></Image>
                  </div>
                  <AiFillYoutube className="text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6" />
                </div>
                <div className="bg-[#88939E] w-[45vw] sm:w-[180px] lg:w-[290px] xl:w-[340px] relative -mt-10 lg:-mt-16 shadow-[0px_1px_30px_0_rgba(0,0,0,0.30)] md:shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] rounded-[20px]">
                  <div className="text-white flex flex-col items-center py-5 sm:py-10 xl:py-14 font-semibold text-[7px] sm:text-[9px] xl:text-[1rem] space-y-3 text-center lg:text-left">
                    <h1>Flexible work Hours</h1>
                    <h1>Commission-based partnerships</h1>
                    <h1>Zero Investment & Unlimited income</h1>
                  </div>
                </div>
              </div>
              <div className="flex justify-center relative -mt-[4vw] sm:-mt-6">
                <button className="py-[2vw] px-[2vw] buttonanimate sm:py-3 sm:px-3 md:px-1 lg:px-5 xl:px-14 buttonbg2 rounded-full text-black font-semibold lg:font-bold text-[3vw] md:text-sm xl:text-lg">
                  <span className="text-[#FF0000] mr-1">FREE</span>Registrations
                </button>
              </div>
            </div>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Banner;
