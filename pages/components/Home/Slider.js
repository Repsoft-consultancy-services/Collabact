import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import Encash1 from './Encash1';
import Encash2 from './Encash2';

const Slider = () => {
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='mt-32 w-full 2xl:w-[110rem]'>
        <h1 className='text-4xl lg:text-5xl text-[#F4B50D] text-center font-bold mb-20'>Encash out businesses</h1>
        <div className='relative z-10 flex items-center space-x-3 h-auto px-2'>
            <div ref={navigationPrevRef} className="order-1">
                <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaLessThan /></button>
            </div>
            <div ref={navigationNextRef} className="order-3">
                <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaGreaterThan /></button>
            </div>
            <Swiper
                spaceBetween={10}
                modules={[Navigation]}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                navigation={{
                    prevEl: navigationPrevRef.current,
                    nextEl: navigationNextRef.current,
                }}
                slidesPerView={1}
                className="mySwiper order-2"
            >
                <SwiperSlide>
                    <Encash1></Encash1>
                </SwiperSlide>
                <SwiperSlide>
                    <Encash2></Encash2>
                </SwiperSlide>
               
            </Swiper>

        </div>
    </div>
    );
};

export default Slider;