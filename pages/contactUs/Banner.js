import Image from 'next/image';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import bg from '../../public/contact/bg.svg'

const Banner = () => {
    return (
        <div className='flex justify-evenly items-end px-5 w-full xl:80[rem] 2xl:w-[90rem]'>
            <div className='hidden lg:block'>
                <div className='flex flex-col text-gray-500 text-xl xl:text-[28px] space-y-5 mb-24 xl:mb-52 mr-10'>
                    <AiOutlineFacebook />
                    <AiOutlineLinkedin />
                    <AiOutlineInstagram />
                    <FiTwitter />
                </div>
            </div>
            <div className='lg:mr-28 relative z-[-10]'>
                <div className='realtive w-[400px] h-[400px] lg:w-[1000px] lg:h-[800px]'>
                    <Image layout='fill' src={bg} alt=""></Image>
                </div>
            </div>
        </div>
        // <div className='px-20 2xl:px-0 w-full 2xl:w-[1621px] xl:h-[672.2px] 2xl:h-[686.4px]'>
        //     <div className="bg-[url('/contact/bg.svg')] bg-no-repeat bg-cover bg-center text-white h-screen xl:w-[1000px] 2xl:w-[1621px] xl:h-[672.2px] 2xl:h-[686.4px] flex items-end rounded-[100px]">
        //         <div className='px-28 2xl:px-40 py-20 drop-shadow-[0_12px_6px_rgba(0,0,0,0.5)]'>
        //             <h1 className='text-7xl 2xl:text-[80px] font-bold'>Need help selecting <br />
        //                 the right channel?</h1>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;