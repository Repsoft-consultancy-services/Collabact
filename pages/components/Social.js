import React from "react";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";

const Social = () => {
  return (
    <>
      <div className="flex flex-col text-[#707070] text-xl lg:text-3xl space-y-5 absolute top-[32.5%] xl:left-20 lg:left-16 md:left-10 ">
        <AiOutlineFacebook className="cardanimate hover:cursor-pointer" />
        <AiOutlineLinkedin className="cardanimate hover:cursor-pointer" />
        <AiOutlineInstagram className="cardanimate hover:cursor-pointer" />
        <FiTwitter className="cardanimate hover:cursor-pointer" />
      </div>
    </>
  );
};

export default Social;
