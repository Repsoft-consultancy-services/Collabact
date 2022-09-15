import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'

const Banner = () => {
    return (
        <div className='mt-10 w-full 2xl:w-[100rem]'>
            <div className='flex justify-between items-end space-x-6 px-5'>
                <div className='flex flex-col text-gray-500 text-2xl space-y-5 mb-36'>
                    <AiOutlineFacebook />
                    <AiOutlineLinkedin />
                    <AiOutlineInstagram />
                    <FiTwitter />
                </div>
                <div className="bg-[url('/bg.png')] bg-opacity-30 bg-no-repeat bg-cover text-white min-h-screen">
                    <div className='px-20 py-40'>  
                        <h1 className='text-[80px] font-bold'>We connect</h1>
                    <h4 className='text-7xl font-semibold mt-2'>Commissioned Sales Partners with Businesses to grow Exponentially</h4>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;