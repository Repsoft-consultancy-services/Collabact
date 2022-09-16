import Image from 'next/image';
import React from 'react';
import steps from '../../public/services/steps1.png'

const Steps = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-40 w-full py-20 mt-20'>
            <h1 className='text-5xl font-bold text-center'>Start collaborating with Sales Partners<br />in 4 easy steps</h1>
            <div className='w-[68rem] mx-auto mt-20'>
                <Image src={steps} alt=""></Image>
                {/* <div className='flex'>
                    <div className='border border-[#F4B50D] px-20'>
                        <Image src={register} alt="register"></Image>
                    </div>
                    <div className='bg-[#F4B50D] flex-1 flex space-x-10 items-start py-5'>
                        <h1 className='font-bold text-9xl text-white'>1</h1>
                        <div className='mt-3'>
                            <h1 className='text-[45px] font-bold'>Register</h1>
                            <p className='text-xl font-semibold mt-3'>Choose to become an ESP and sign up with our <br /> portal to start working and earning.</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Steps;