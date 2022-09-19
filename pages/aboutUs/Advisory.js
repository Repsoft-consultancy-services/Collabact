import Image from 'next/image';
import React from 'react';
import rishi from '../../public/about/Rishi.png'
import milnd from '../../public/about/milnd.png'
import ekata from '../../public/about/ekata.png'
import hemant from '../../public/about/hemant.png'

const Advisory = () => {
    return (
        <div className='mt-20'>
            <h1 className='text-4xl font-bold text-center'>Our Advisory Team</h1>
            <div className='my-20 grid grid-cols-4 gap-16 px-5 2xl:px-0'>
                <div className='border-2 border-gray-500 rounded-[20px] flex flex-col items-center py-5 px-2 shadow-[0px_6px_33px_0_rgba(0,0,0,0.30)] 2xl:w-[350px] '>
                    <div className='rounded-full border-4 border-[#F4B50D] relative w-56 h-56'>
                        <Image layout='fill' src={rishi} alt=""></Image>
                    </div>
                    <div className='mt-2 text-center'>
                        <h1 className='font-bold text-[#1592E6] text-xl'>RISHI NITYAPRAGYA</h1>
                        <h2 className='font-medium text-lg'>Spiritual Mentor</h2>
                        <p className='mt-5'>Rishiji, a spiritual mentor, singer and author of the best-selling book &apos;&apos;Celebrating Life&apos;&apos;. This modern Rishi was always perceived as a &apos;spiritual scientist&apos;, bursting with love, energy and a never-dying enthusiasm to serve humanity.</p>
                    </div>
                </div>
                <div className='border-2 border-gray-500 rounded-[20px] flex flex-col items-center py-5 px-2 shadow-[0px_6px_33px_0_rgba(0,0,0,0.30)] 2xl:w-[350px]'>
                    <div className='rounded-full border-4 border-[#F4B50D] relative w-56 h-56'>
                        <Image layout='fill' src={ekata}></Image>
                    </div>
                    <div className='mt-2 text-center'>
                        <h1 className='font-bold text-[#1592E6] text-xl'>EKATA MEHUL</h1>
                        <h2 className='font-medium text-lg'>Technical Advisor </h2>
                        <p className='mt-5'>Ekata Mehul, Director and CEO - Orena Solutions and Blazing Arrows Pvt. Ltd. She is Co-director for “Women in Big Data”. Director for “Ignite” and Brand Ambassador for “Impulse of Women” at India level.</p>
                    </div>
                </div>
                <div className='border-2 border-gray-500 rounded-[20px] flex flex-col items-center py-5 px-2 shadow-[0px_6px_33px_0_rgba(0,0,0,0.30)] 2xl:w-[350px]'>
                    <div className='rounded-full border-4 border-[#F4B50D] relative w-56 h-56'>
                        <Image layout='fill' src={hemant}></Image>
                    </div>
                    <div className='mt-2 text-center'>
                        <h1 className='font-bold text-[#1592E6] text-xl'>HEMANT SHAH</h1>

                        <h2 className='font-medium text-lg'>Strategic Advisor</h2>
                        <p className='mt-5'> Director, Shreelight Power Pvt.Ltd Has more than 25 years of experience in the field Precedent, Vadodara Electrical Licensed Contractor Association (VELCA)</p>
                    </div>
                </div>
                <div className='border-2 border-gray-500 rounded-[20px] flex flex-col items-center py-5 px-2 shadow-[0px_6px_33px_0_rgba(0,0,0,0.30)] 2xl:w-[350px]'>
                    <div className='rounded-full border-4 border-[#F4B50D] relative w-56 h-56'>
                        <Image layout='fill' src={milnd}></Image>
                    </div>
                    <div className='mt-2 text-center'>
                        <h1 className='font-bold text-[#1592E6] text-xl'>MILIND SINDHA</h1>
                        <h2 className='font-medium text-lg'>Management Advisor</h2>
                        <p className='mt-5'> Founder & Strategic Consultant at Root2Ray IIM-Ahmedabad alumnus Certified Strategic Consultant from IIM-Bangalore</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advisory;