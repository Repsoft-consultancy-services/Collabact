import Image from 'next/image';
import React from 'react';
import what from '../../public/services/what.png'
import { GoPrimitiveDot } from 'react-icons/go'

const Offer = () => {
    return (
        <div className='w-full bg-[#F4F5F4] p-10 -mt-16'>
            <h1 className='text-2xl font-bold text-center'>What We Offer To Businesses</h1>
            <div className='flex justify-center items-center space-x-10 2xl:space-x-32 p-10 mt-10 text-xl 2xl:text-2xl'>
                <div className='border-2 border-gray-500 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] w-[40%] flex justify-center'>
                    <Image src={what} alt=""></Image>
                </div>
                <div className='w-[50%] 2xl:w-[40%]'>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /><p>Businesses can connect with their commission-based partners and pay them as per their performance.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /><p>Also, businesses gain global exposure and sales, due to the fact that our ESPs come from diverse backgrounds and demographics.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /><p>As the work style is completely performance-driven, the associated ESPs take ownership of their tasks, thus, benefiting businesses like never before.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /><p>This flexible culture and landscape allows businesses to save a great portion of their money.</p>
                    </div>
                    <div className='flex items-start space-x-5 mb-5'>
                        <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /><p>Thus, businesses or manufactures can enhance their business turnover, overall profits, as well as geographic presence.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;