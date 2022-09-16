import Image from 'next/image';
import React from 'react';
import yellowlong from '../../../public/yellowlinelong.png'
import yellowshort from '../../../public/yellowlineshort.png'
import parag from '../../../public/parag.png'

const Events = () => {
    return (
        <div className="w-full 2xl:w-[110rem] mt-5 pb-10 mb-10 bg-[url('/WorldMap.png')] bg-right bg-no-repeat">
            <div className='flex justify-evenly'>
                <div>
                    <div className='flex items-center space-x-5'>
                        <h1 className='text-3xl'>Upcoming <span className='font-bold'>Events</span></h1>
                        <div className='mt-3'>
                            <Image src={yellowlong} alt=""></Image>
                        </div>
                    </div>
                    <div className='text-[26px] flex justify-between ml-20 mt-10'>
                        <div className='space-y-5'>
                            <h1 className='font-bold text-[#0099E6]'>Upgrade sessions for <br /> Entrepreneurship</h1>
                            <p>Every Friday at 8 pm</p>
                        </div>
                        <div className='space-y-5'>
                            <h1 className='font-bold text-[#0099E6]'>Business Introductory <br /> Meeting</h1>
                            <p>On 20th Sept at 4.30 pm</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='flex items-center space-x-7'>
                        <h1 className='text-3xl'><span className='font-bold'>What</span> our Business Say</h1>
                        <div className='mt-3'>
                            <Image src={yellowshort} alt=""></Image>
                        </div>
                    </div>
                    <div className='mt-10 w-[30rem]'>
                        <div className='bg-[#0099E6] message flex justify-between space-x-10 items-center p-6 rounded-md'>
                            <div>
                                video
                            </div>
                            <div>
                                <h1 className='text-white'>Lorem ipsum dolor sit amet, sonsectetur adipiscing elit. Donee hendrerit vehicular est, in consequat.</h1>
                            </div>
                        </div>
                        <div className='flex mt-2 space-x-5'>
                            <div className='mt-2'>
                                <Image src={parag} alt=""></Image>
                            </div>
                            <div>
                                <h4 className='text-2xl text-[#0099E6] font-bold'>Mr. Parag Shah</h4>
                                <p className='text-lg text-[#0099E6]'>Ahmedabad </p>
                                <p className='text-xl'>Director, TriQuench India Pvt. Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;