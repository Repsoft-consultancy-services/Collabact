import Image from 'next/image';
import React from 'react';
import register from '../../../public/Register.png'
import steps from '../../../public/steps.png'

const Steps = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-40 w-full stepsclip py-10 md:py-20 mt-10 md:mt-20'>
            <h1 className='text-2xl lg:text-5xl font-semibold text-center'>Willing to become Executive Sales Partner(ESP)?</h1>
            <h2 className='text-2xl lg:text-[40px] text-center mt-2'>Follow these simple steps!</h2>
            <div className='px-5 py-10 xl:px-0 max-w-[68rem] mx-auto'>
                <Image src={steps} alt=""></Image>
            </div>
        </div>
    );
};

export default Steps;