import Image from 'next/image';
import React from 'react';
import arrow from '../../../public/arrow.svg'
import Fade from 'react-reveal/Fade';

const Started = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-30 w-full relative -mt-[300px] md:-mt-[280px] xl:-mt-[350px] 2xl:-mt-[400px] z-[-2]'>
            <div className='px-5 xl:px-0 xl:w-[1300px] pt-52 xl:pt-72 pb-10 lg:pb-20 xl:pb-40 mx-auto'>
                <div className='flex items-center flex-col-reverse lg:flex-row text-center lg:text-left mt-5 sm:mt-0'>
                    <Fade left>
                        <div>
                            <h1 className='text-xl lg:text-3xl font-bold'>Get started!</h1>
                            <h1 className='text-2xl lg:text-4xl xl:text-6xl font-bold mt-3'>With India&apos;s Fastest Growing<br /> Collaboration Platform</h1>
                            <p className='font-semibold mt-3 text-[14px] lg:text-sm 2xl:text-lg'>For Businesses, CollabAct connects Commission-based Sales Partners who <br /> become their extended hand and help them expand their businesses in PAN India.<br /> And for the Sales Partners, we offer established companies whose products/ <br /> services they can sell without any investment.</p>
                            <button className='bg-[#929394] p-2 font-semibold lg:ml-20 mt-5 text-base 2xl:text-lg'>Discover more</button>
                        </div>
                    </Fade>
                    <div className='w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem] relative'>
                        <Image layout='fill' src={arrow} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Started;