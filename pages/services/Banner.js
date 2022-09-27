import Image from 'next/image';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import bg from '../../public/services/bg.png'

const Banner = () => {
    return (
        <div>
            <div className='flex justify-between items-end lg:space-x-6 lg:px-5 w-full'>
                <div className='hidden md:block'>
                    <div className='flex flex-col text-black text-xl xl:text-3xl space-y-5 mb-32 xl:mb-52 ml-2 2xl:ml-0 mr-2'>
                        <AiOutlineFacebook className='cardanimate hover:cursor-pointer' />
                        <AiOutlineLinkedin className='cardanimate hover:cursor-pointer' />
                        <AiOutlineInstagram className='cardanimate hover:cursor-pointer' />
                        <FiTwitter className='cardanimate hover:cursor-pointer' />
                    </div>
                </div>
                <div className=''>
                    <Image width={1000} height={650} src={bg} alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;