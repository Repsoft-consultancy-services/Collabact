import Image from 'next/image';
import React from 'react';
import steps from '../../public/services/steps1.png'

const Steps = () => {
    return (
        <div className='bg-white lg:bg-[#B5C2CF] bg-opacity-40 w-full py-10 lg:py-20 lg:mt-20'>
            <h1 className='text-xl lg:text-5xl font-bold text-center'>Start collaborating with Businesses</h1>
            <div className='lg:w-[68rem] mx-auto mt-20 px-5 lg:px-0'>
                <Image src={steps} alt=""></Image>
            </div>
        </div>
    );
};

export default Steps;