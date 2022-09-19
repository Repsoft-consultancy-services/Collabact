import Image from 'next/image';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import bg from '../../public/services/bg2.svg'

const Banner = () => {
    return (
        <div>
            <div className='flex justify-between items-end space-x-6 px-5 w-full'>
                <div className='flex flex-col text-gray-500 text-xl xl:text-[28px] space-y-5 mb-10 xl:mb-52 mr-10'>
                    <AiOutlineFacebook />
                    <AiOutlineLinkedin />
                    <AiOutlineInstagram />
                    <FiTwitter />
                </div>
                <div className=''>
                    <Image width={1000} height={650} src={bg} alt=""></Image>
                </div>
            </div>
        </div>
    );
};

export default Banner;