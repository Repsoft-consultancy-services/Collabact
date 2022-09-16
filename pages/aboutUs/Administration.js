import Image from 'next/image';
import React from 'react';
import kartik from '../../public/about/kartik.png'
import rajvi from '../../public/about/rajvi.png'
import m from '../../public/about/image.png'
import seperator from '../../public/about/seperator.png'

const Administration = () => {
    return (
        <div className='w-11/12'>
            <div className='w-3/4 bg-[#DCDCDC] rounded-full flex items-center space-x-10 py-5 px-10'>
                <div className='rounded-full border-4 border-[#F4B50D] relative w-56 h-56'>
                    <Image layout='fill' src={kartik} alt=""></Image>
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl text-center font-bold text-[#1E86FD] uppercase'>Kartik Shah</h1>
                    <h1 className='font-medium text-2xl text-center mb-5'>Founder</h1>
                    <p className='text-xl font-medium'>
                        Kartik Shah is a Life Coach, an International Human Potential Trainer, the Art of Living Senior Faculty, and a Chemical Engineer. He has a rich experience of more than 25 years with 2,50,000+ people Trained. He is an expert in fostering a growth mindset by unearthing potential and channelizing energy to fulfil professional and personal aspirations.
                    </p>
                </div>
            </div>
            <div className='w-3/4 bg-[#DCDCDC] rounded-full flex flex-row-reverse ml-auto items-center space-x-10 py-5 px-10 mt-10'>
                <div className='border-4 border-[#F4B50D] rounded-full relative w-56 h-56'>
                    <Image src={rajvi} layout='fill' alt=""></Image>
                </div>
                <div className='flex-1'>
                    <h1 className='text-2xl text-center font-bold text-[#1E86FD] uppercase'>RAJVI SHAH</h1>
                    <h1 className='font-medium text-2xl text-center mb-5'>Co-Founder</h1>
                    <p className='text-xl font-medium'>
                    Content creator with Masters in Business Administration, Rajvi has a dynamic & creative approach to life. Passionate, dependable, ambitious, and spiritual are a few among many qualities that she brings to the table. She knows how to invest her time, mind, and energy effectively and efficiently, which turns out to be one of the company&apos;s major assets.
                    </p>
                </div>
            </div>
            <div className='mt-20'>
                <Image src={seperator} alt=""></Image>
            </div>
        </div>
    );
};

export default Administration;