import React from "react";
import Link from "next/link";
import email from "../../public/email.png";
import FAQ from "../../public/FAQ.png";
import smartphone from "../../public/smartphone.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#F4B50D] w-full font-semibold py-4 box-shadow-[0px_-8px_38px_0_rgba(0,0,0,0.15)]">
        <div className="flex justify-between max-w-[100rem] mx-auto w-2/4">
          <div className="flex flex-row items-center space-x-1 lg:space-x-5">
            <div className="relative w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]">
              <Image layout="fill" src={smartphone} alt=""></Image>
            </div>
            <p className="text-[0.8rem] lg:text-base">(+91) 8849951310</p>
          </div>
          <div className="flex flex-row items-center space-x-1 lg:space-x-5">
            <div className="relative w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]">
              <Image layout="fill" src={email} alt=""></Image>
            </div>
            <p className="lg:text-base">info@collabact.com</p>
          </div>
          <div className="flex flex-row items-center space-x-1 lg:space-x-5">
            <div className="relative w-[20px] h-[20px] lg:w-[30px] lg:h-[30px]">
              <Image layout="fill" src={FAQ} alt=""></Image>
            </div>
            <p className="lg:text-base">FAQ</p>
          </div>
        </div>
      </div>
      <div className="bg-[#B5C2CF] px-1 xl:px-8 py-8 flex flex-col lg:flex-row justify-between lg:space-y-0 lg:space-x-2 xl:space-x-0">
        <div className="text-[12px] xl:text-[17px] text-[#505050] text-justify order-2 lg:order-1 my-5 lg:my-0 w-1/8">
          <p>
            Become a mediator, and connect to right company with right <br />{" "}
            candidate, to work together for development and ultimately <br />{" "}
            have a Win-Win-Win situation wherein everyone grows.
          </p>
        </div>
        <div className="flex justify-between lg:space-x-2 xl:space-x-0 xl:w-1/3 order-3 lg:order-2">
          <div>
            <h1 className="uppercase text-base xl:text-lg font-bold">
              About<span className="ml-1">Us</span>
            </h1>
            <Link href="">
              <p>Our Story</p>
            </Link>
            <Link href="">
              <p>Our Team</p>
            </Link>
            <Link href="">
              <p>Career</p>
            </Link>
          </div>
          <div>
            <h1 className="uppercase text-base xl:text-lg font-bold">
              Resources
            </h1>
            <Link href="">
              <p>EBP</p>
            </Link>
            <Link href="">
              <p>EBL</p>
            </Link>
            <Link href="">
              <p>Support</p>
            </Link>
            <Link href="https://collabact.com/Blog/">
              <p className="hover:cursor-pointer">Blog</p>
            </Link>
          </div>
          <div>
            <Link href="/terms">
              <h1 className="hover:cursor-pointer">Terms and Condition</h1>
            </Link>
            <Link href="/cookie">
              <p className="hover:cursor-pointer">Cookie policy</p>
            </Link>
            <Link href="">
              <p className="hover:cursor-pointer">Privacy Policy</p>
            </Link>
            <Link href="">
              <p className="hover:cursor-pointer">Refund Policy</p>
            </Link>
          </div>
        </div>
        <div className="order-1 lg:order-3 w-1/4">
          <h1 className="lg:text-lg xl:text-xl font-bold">
            SUBSCRIBE NEWS LETTER
          </h1>
          <div className="flex items-center mt-4">
            <input
              type="text"
              className="border border-[#C4C4C4] py-1 w-full 2xl:w-[20rem] p3"
              placeholder="Enter your email"
            />
            <button className="px-5 py-1 bg-[#3E416C] text-white">
              Subcribe
            </button>
          </div>
          <p className="text-[13px] mt-3 text-white">
            Get digital marketing updates in your mailbox
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
