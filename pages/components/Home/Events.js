import Image from 'next/image';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import yellowlong from '../../../public/yellowlinelong.png'
import yellowshort from '../../../public/yellowlineshort.png'
import parag from '../../../public/parag.png'

const Events = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className="max-w-[95rem] mx-auto mt-5 pb-10 mb-10 bg-[url('/WorldMap.png')] bg-right bg-no-repeat">
            <div className='flex flex-col lg:flex-row lg:space-x-3 xl:space-x-0 justify-between px-2 md:px-10 mt-16'>
                <div className='lg:w-[50%]'>
                    <div className='flex items-center space-x-5'>
                        <h1 className='text-2xl xl:text-4xl'>Upcoming <span className='font-bold'>Events</span></h1>
                        <div className='w-[165px] md:w-[60%] lg:w-[50%] h-2 relative'>
                            <Image layout='fill' src={yellowlong} alt=""></Image>
                        </div>
                    </div>
                    {/* slider here */}
                    <div className='relative z-50 flex flex-col-reverse h-auto w-full'>
                        <div className='flex space-x-10 justify-center mt-10'>
                            <div ref={navigationPrevRef} >
                                <button className='bg-white text-blue-500 border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] p-2 text-xs lg:text-base rounded-full'><FaLessThan className='' /></button>
                            </div>
                            <div ref={navigationNextRef}>
                                <button className='bg-white text-blue-500 border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] p-2 text-xs lg:text-base rounded-full'><FaGreaterThan className='' /></button>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            modules={[Navigation]}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}

                            className=""
                        >
                            <SwiperSlide>
                                <div className='text-base md:text-[20px] xl:text-[26px] flex justify-between space-x-20 mt-10'>
                                    <div className='space-y-5'>
                                        <h1 className='font-bold text-[#0099E6]'>Upgrade sessions for <br /> Entrepreneurship</h1>
                                        <p className='text-[#757575]'>Every Friday at 8 pm</p>
                                    </div>
                                    <div className='space-y-5'>
                                        <h1 className='font-bold text-[#0099E6]'>Business Introductory <br /> Meeting</h1>
                                        <p className='text-[#757575]'>On 20th Sept at 4.30 pm</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='text-base xl:text-[26px] flex justify-between space-x-20 mt-10'>
                                    <div className='space-y-5'>
                                        <h1 className='font-bold text-[#0099E6]'>Upgrade sessions for <br /> Entrepreneurship</h1>
                                        <p className='text-[#757575]'>Every Friday at 8 pm</p>
                                    </div>
                                    <div className='space-y-5'>
                                        <h1 className='font-bold text-[#0099E6]'>Business Introductory <br /> Meeting</h1>
                                        <p className='text-[#757575]'>On 20th Sept at 4.30 pm</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
                <div className='mt-5 lg:mt-0'>
                    <div className='flex items-center space-x-7'>
                        <h1 className='text-2xl xl:text-3xl'><span className='font-bold'>What</span> our Business Says</h1>
                        <div className='w-[82px] md:w-[50%] lg:w-[19%] h-2 relative'>
                            <Image layout='fill' src={yellowshort} alt=""></Image>
                        </div>
                    </div>
                    <div className='mt-10 lg:w-[28rem] xl:w-[30rem]'>
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
                                <h4 className='text-[26px] text-[#0099E6] font-bold'>Mr. Parag Shah</h4>
                                <p className='text-[19px] text-[#0099E6]'>Ahmedabad </p>
                                <p className='text-[22px]'>Director, TriQuench India Pvt. Ltd.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;