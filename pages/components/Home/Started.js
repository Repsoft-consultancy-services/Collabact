import Image from 'next/image';
import React from 'react';
import arrow from '../../../public/arrow.svg'

const Started = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-30 w-full relative lg:-mt-[300px] xl:-mt-[350px] 2xl:-mt-[400px] z-[-2]'>
            <div className='xl:w-[1300px] lg:pt-60 xl:pt-72 pb-40 xl:pb-64 mx-auto'>
                <div className='flex items-center'>
                    <div>
                        <h1 className='text-3xl font-bold'>Get started!</h1>
                        <h1 className='text-6xl font-bold mt-3'>With India&apos;s Fastest Growing<br /> Collaboration Platform</h1>
                        <p className='font-semibold mt-3 text-base 2xl:text-lg'>For Businesses, CollabAct connects Commission-based Sales Partners who <br /> become their extended hand and help them expand their businesses in PAN India.<br /> And for the Sales Partners, we offer established companies whose products/ <br /> services they can sell without any investment.</p>
                        <button className='bg-[#929394] p-2 font-semibold ml-20 mt-5 text-base 2xl:text-lg'>Discover more</button>
                    </div>
                    <div className='lg:w-[40rem] lg:h-[40rem] relative'>
                        <Image layout='fill' src={arrow} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;