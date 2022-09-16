import Image from 'next/image';
import React from 'react';
import offer11 from '../../public/services/offer11.png'
import offer12 from '../../public/services/offer12.png'
import offer13 from '../../public/services/offer13.png'

const Woffer = () => {
    return (
        <>
            <h1 className='font-bold text-center text-5xl uppercase mt-20 mb-52'>What we offer</h1>
            <div className='w-full bg-[#F4B50D] pb-20 mt-20'>
                <div className='grid grid-cols-3 2xl:w-[100rem] mx-auto px-10 2xl:px-0 gap-10 relative -mt-36'>
                    <div className='w-[439px]'>
                        <div className='h-[360px] w-[379px] border-4 border-[#0f79c4] relative'>
                            <Image layout='fill' src={offer11} alt=""></Image>
                        </div>
                        <div className='text-black'>

                            <h1 className='font-bold text-5xl'>Individual Counselling</h1>
                            <p className='mt-2 text-2xl leading-9'>Engage yourself in our well-informed and hand-hold counselling sessions and avail the necessary training and mentoring to become a skilful ESP.</p>
                        </div>
                    </div>
                    <div className='w-[439px]'>
                        <div className='h-[360px] w-[379px] border-4 border-[#0f79c4] relative'>
                            <Image layout='fill' src={offer13} alt=""></Image>
                        </div>
                        <div className='text-black'>
                            <h1 className='font-bold text-5xl'>Training</h1>
                            <p className='mt-2 text-2xl leading-9'>Gain skill-based training concerning extensive aspects of sales and broaden up your overall Entrepreneurial mindset while grooming your personality in the best way possible.</p>
                        </div>
                    </div>
                    <div className='w-[439px]'>

                        <div className='h-[360px] w-[379px] border-4 border-[#0f79c4] relative'>
                            <Image layout='fill' src={offer12} alt=""></Image>
                        </div>
                        <div className='text-black'>
                            <h1 className='font-bold text-5xl'>Association with <br /> Businesses</h1>
                            <p className='mt-2 text-2xl leading-9'> Collaborate with a maximum of 3 businesses simultaneously to earn limitlessly. Go beyond the bars of becoming a time-bound employee, and optimize your efforts to earn well.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Woffer;