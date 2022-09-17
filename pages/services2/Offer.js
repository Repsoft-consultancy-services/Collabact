import Image from 'next/image';
import React from 'react';
import what from '../../public/services/what2.png'
import { GoPrimitiveDot } from 'react-icons/go'

const Offer = () => {
    return (
        <div className='w-full bg-[#F4F5F4] p-10 mt-5'>
            <h1 className='text-2xl font-bold text-center'>What We Offer To Businesses</h1>
            <div className='flex justify-center items-center space-x-10 2xl:space-x-32 p-10 mt-10 '>
                <div className='border-2 border-gray-500 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] flex justify-center'>
                    <div className='relative w-[508px] h-[338px]'>
                    <Image layout='fill' src={what} alt=""></Image>
                    </div>
           
                </div>
                <div className='w-[50%] 2xl:w-[40%] text-xl 2xl:text-2xl'>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-4xl' /><p>We offer skill-based sales training to all our ESPs, who can be students, graduates, salaried professionals, senior citizens, housewives, or anyone else.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-5xl' /><p>All the ESPs have freedom to work on their own hours and time. They need to participate in the entire sales process on a part-time or full-time basis to earn as much as they can.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-4xl' /><p>We have a list of 9 types of business niches, out of which an ESP can choose the category that they are the most comfortable with.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-6xl' /><p>By offering a commission-based earning system, we connect ESPs with their chosen businesses so that they can promote their products or services at various geographic locations to multiply their sales.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-4xl' /><p>The ESPs can devote as much as time and energy as they can to their tasks and earn more with the increasing sales they generate.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className=' text-[#F4B50D] text-5xl' /><p>This way, they can take control of their income, set their own performance levels, and surprise themselves with countless opportunities and possibilities.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;