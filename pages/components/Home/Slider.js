import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'
import Encash1 from './Encash1';
import Encash2 from './Encash2';
import Encash3 from './Encash3';
import Image from 'next/image';



const Slider = () => {
    const data = [
        {
            "logo": "/TRIQUENCH.png",
            "title": "TriQuench India Pvt. Ltd",
            "product": ["spindles,CNC Machine"],
            "Segment": "Industrial Products",
            "Earning": "30000-100000"
        },
        {
            "logo": "/speedforce.png",
            "title": "SpeedForce Ventures Pvt. Ltd",
            "product": ["Two Wheeler servicing Franchise"],
            "Segment": "Franchise",
            "Earning": "35000-80000"
        },
        {
            "logo": "/panache.png",
            "title": "Panache Green Tech Solution Pvt. Ltd",
            "product": ["CoolTops & WaterProofing"],
            "Segment": "Building Construction & Home Products",
            "Earning": "25000-60000"
        },
        {
            "logo": "/sugree.png",
            "title": "Sugree Green Power Solutions",
            "product": ["Solar Power Generator"],
            "Segment": "Energy & Environment",
            "Earning": "25000-75000"
        },
        {
            "logo": "/shreelight.png",
            "title": "ShreeLight Power Pvt. Ltd",
            "product": ["Electrical Products"],
            "Segment": "Building Construction & Home Products",
            "Earning": "25000-60000"
        },
        {
            "logo": "/quicktech.png",
            "title": "QuickTech",
            "product": ["Refurbished & New Apple Products"],
            "Segment": "Business Services",
            "Earning": "25000-50000"
        },
        {
            "logo": "/Rsa.png",
            "title": "Ronak Switchgear & Automation",
            "product": ["Electrical Switchgear"],
            "Segment": "Building Construction & Home Products",
            "Earning": "30000-80000"
        },
        {
            "logo": "/VCS.png",
            "title": "VCS",
            "product": ["IceCream Parlours"],
            "Segment": "Franchise",
            "Earning": "21000-70000"
        },
        {
            "logo": "/SUGAR.png",
            "title": "SugarCo",
            "product": ["Coconut Sugar"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "10000-40000"
        },
        {
            "logo": "/Aurasoul.png",
            "title": "AuraSoul",
            "product": ["Food Supplements & wellness"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "10000-40000"
        },
        {
            "logo": "/B2Grow.png",
            "title": "B2Grow",
            "product": ["ERP System"],
            "Segment": "Business Services",
            "Earning": "50000-60000"
        },
        {
            "logo": "/TRIQUEENCH.png",
            "title": "TriQueench",
            "product": ["Kitchenware Products"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "25000-50000"
        },
        {
            "logo": "/biztea.png",
            "title": "BizTea",
            "product": ["Business Consultancy"],
            "Segment": "Business Services",
            "Earning": "15000-40000"
        },
        {
            "logo": "/yominternational.png",
            "title": "YOM Inernational",
            "product": ["Health & Personal Care", "Vitamin Suppliments"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "25000-50000"
        },
        {
            "logo": "/lamex.png",
            "title": "Lamex",
            "product": ["Wrist Watches"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "35000-75000"
        },
        {
            "logo": "/Mars.png",
            "title": "MarsBazaar",
            "product": ["Leads Generation for Industries"],
            "Segment": "Business Services",
            "Earning": "25000-60000"
        },
        {
            "logo": "/Grace.png",
            "title": "Grace Labs",
            "product": ["Pathology Lab Franchise"],
            "Segment": "Franchise",
            "Earning": "45000-240000"
        },
        {
            "logo": "/cregx.png",
            "title": "Cregx",
            "product": ["Online Designing Software"],
            "Segment": "Business Services",
            "Earning": "25000-50000"
        },
        {
            "logo": "/dunlop.png",
            "title": "Deepak Trading Co.",
            "product": ["Industrial Rubber Haus"],
            "Segment": "Industrial Products",
            "Earning": "21000-60000"
        },
        {
            "logo": "/enagic.png",
            "title": "Enagic",
            "product": ["Kangen Alkaline water machine"],
            "Segment": "Building Construction & Home Products",
            "Earning": "16000-40000"
        }
    ]
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='w-full mt-10 lg:mt-32'>
            <div className='w-full 2xl:w-[95rem] mx-auto py-10'>
                <h1 className='text-2xl lg:text-5xl text-[#F4B50D] text-center font-bold mb-10 lg:mb-20'>Encash out businesses</h1>
                {/* laptop slider */}
                <div className='hidden md:block'>
                    <div className='relative z-10 flex items-center space-x-3 h-auto px-2'>
                        <div ref={navigationPrevRef} className="order-1">
                            <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaLessThan /></button>
                        </div>
                        <div ref={navigationNextRef} className="order-3">
                            <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaGreaterThan /></button>
                        </div>
                        <Swiper
                            spaceBetween={20}
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
                            <SwiperSlide>
                                <Encash3></Encash3>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
                {/* mobile slider */}
                <div className='block md:hidden'>
                    <div className='relative z-50 flex flex-col-reverse items-center h-[25rem] w-full px-5'>
                        <div className='flex space-x-10 justify-center'>
                            <div ref={navigationPrevRef} >
                                <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaLessThan className='text-black' /></button>
                            </div>
                            {/* <div>
                                <div className="swiper-pagination"></div>
                            </div> */}
                            <div ref={navigationNextRef}>
                                <button className='btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full'><FaGreaterThan className='text-black' /></button>
                            </div>
                        </div>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            modules={[Navigation, Pagination]}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true,
                                renderBullet: function (index, className) {
                                    return '<span class="' + className + '">' + (data[index]) + '</span>';
                                },
                            }}
                            onBeforeInit={(swiper) => {
                                swiper.params.navigation.prevEl = navigationPrevRef.current;
                                swiper.params.navigation.nextEl = navigationNextRef.current;
                            }}
                            navigation={{
                                prevEl: navigationPrevRef.current,
                                nextEl: navigationNextRef.current,
                            }}

                            className="mySwiper"
                        >
                            {
                                data.map((d, index) => <SwiperSlide key={index}>
                                    <div className='border-2 border-[#0D72B8] w-[380px] shadow-[0px_3px_10px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.50)] hover:shadow-blue-600'>
                                        <div className='flex items-center space-x-3 p-5'>
                                            <div className='relative w-32'>
                                                <Image width={100} height={80} src={d.logo} alt=""></Image>
                                            </div>
                                            <div className='border-r-2 h-[80px] border-gray-300'></div>
                                            <h1 className='text-xl xl:text-2xl font-bold text-left flex-1'>{d.title}</h1>
                                        </div>
                                        <div className='border-b-2 border-gray-300 w-full'></div>
                                        <div className='text-left ml-3 space-y-5'>
                                            <h6 className='text-sm xl:text-base'><span className='font-bold'>Product: </span>{d.product[0]}</h6>
                                            <h6 className='text-sm xl:text-base'><span className='font-bold'>Segment: </span>{d.Segment}</h6>
                                        </div>
                                        <div className='border-b-2 border-gray-300 w-[200px] mx-auto mt-5'></div>
                                        <div className='mt-1'>
                                            <p>Possible Earning Range</p>
                                            <p>{d.Earning} Rs/month</p>
                                        </div>
                                    </div>
                                </SwiperSlide>)
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Slider;