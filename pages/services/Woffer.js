import Image from 'next/image';
import React from 'react';
import offer1 from '../../public/services/offer1.png'
import offer2 from '../../public/services/offer2.png'
import offer3 from '../../public/services/offer3.png'

const Woffer = () => {
    return (
        <>
            <h1 className='font-bold text-center text-5xl uppercase mt-20 mb-52'>What we offer</h1>
            <div className='w-full bg-[#0D72B8] pb-20 mt-20'>
                <div className='grid grid-cols-3 2xl:w-[100rem] mx-auto px-10 2xl:px-0 gap-10 relative -mt-36'>
                    <div className='w-[439px]'>
                        <div className='h-[360px] w-[379px] border-4 border-[#0f79c4] relative'>
                            <Image layout='fill' src={offer2} alt=""></Image>
                        </div>
                        <div className='text-white'>
                            <h1 className='font-bold text-3xl'>Commissioned Sales <br /> Partners</h1>
                            <p className='mt-2 text-2xl leading-9'>Connect with the Executive Sales Partner (ESP). With a performance-driven workstyle, the associated ESPs take ownership of their tasks, benefiting businesses like never before.</p>
                        </div>
                    </div>
                    <div className='w-[439px]'>
                        <div className='h-[360px] w-[379px] border-4 border-[#0f79c4] relative'>
                            <Image layout='fill' src={offer3} alt=""></Image>
                        </div>
                        <div className='text-white'>
                            <h1 className='font-bold text-3xl'>Geographical<br />Expansion</h1>
                            <p className='mt-2 text-2xl leading-9'>Businesses gain global exposure and sales, as the ESPs come from diverse backgrounds and demographics. You have a team PAN India.</p>
                        </div>
                    </div>
                    <div className='w-[439px]'>

                        <div className='h-[360px] w-[379px]  relative'>
                            <Image layout='fill' src={offer1} alt=""></Image>
                        </div>
                        <div className='text-white'>
                            <h1 className='font-bold text-3xl'>Networking</h1>
                            <p className='mt-2 text-2xl leading-9'>Businesses are given the opportunity to connect with other Businesses registered on our platform. You can build your Business by connecting and networking with other businesses.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Woffer;