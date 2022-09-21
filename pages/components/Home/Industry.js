import Image from 'next/image';
import React, { useRef } from 'react';
import { GoPrimitiveDot } from 'react-icons/go'
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLessThan, FaGreaterThan } from 'react-icons/fa'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination, Navigation } from "swiper";

const Industry = () => {
    const data = [
        [
            {
                "logo": "/electriccar.png",
                "title": "Automobile and electric vehicle",
                "list": [
                    "Spare Parts and Equipment",
                    "Accessories",
                    "Electric Vehicles",
                    "Commercial Vehicle",
                    "Battery"
                ]
            }
        ],
        [
            {
                "logo": "/man.png",
                "title": "Industrial Products",
                "list": [
                    "Engineering Machines",
                    "Tools & equipments",
                    "Industrial Supplies"
                ]
            },
            {
                "logo": "/roll.png",
                "title": "Fabric and Textiles",
                "list": [
                    "Appreal,Clothing & Garments",
                    "Cotton,Wool Textiles & Fabrics"
                ]
            }
        ],
        [
            {
                "logo": "/electriccar.png",
                "title": "Business Services",
                "list": [
                    "Software,Technology or IT",
                    "Training .Coaching Consulting",
                    "Human Resource & Legal",
                    "Event Planning",
                    "Insurance",
                    "Advertisement & Media Support"
                ]
            }
        ],
        [
            {
                "logo": "/helikopter.png",
                "title": "Building construction and home products",
                "list": [
                    "Architectural & Civil Engineering",
                    "Ceramic & Flooring",
                    "Furniture & Supplies",
                    "Home Decor",
                    "Electronics and Electrical Goods"
                ]
            }
        ],
        [
            {
                "logo": "/windmill.png",
                "title": "Energy & Environment",
                "list": [
                    "Paper & Paper Products",
                    "Solar Products",
                    "Water Treatment",
                    "Air CLeaning",
                    "Waste Management"
                ]
            }
        ],
        [
            {
                "logo": "/roll.png",
                "title": "Hospital and Medical Equipments",
                "list": [
                    "Hospital Set-up Equipment",
                    "Healthcare products",
                    "Food Supplements",
                    "Medical Safety & Protective Gears"
                ]
            }
        ],
        [
            {
                "logo": "/farmer.png",
                "title": "Agriculture",
                "list": [
                    "Food & Beverages",
                    "Agro Machinery and Equipments",
                    "Seeds & Plantation Products",
                    "Fertilisers and Soil Additives"
                ]
            }
        ],
        [
            {
                "logo": "/windmill.png",
                "title": "Franchises",
                "list": [
                    "Sports & Fitness",
                    "Laboratories",
                    "Travel & Tourism",
                    "Education"
                ]
            }
        ],
        [
            {
                "logo": "/dentalchair.png",
                "title": "Fast Moving Consumer Goods(FMCG)",
                "list": [
                    "Food & Beverages",
                    "Stationary",
                    "Gifting",
                    "Books & Toys"
                ]
            }
        ]
    ]
    const navigationPrevRef = useRef(null);
    const navigationNextRef = useRef(null);
    return (
        <div className='bg-white w-[95%] xl:w-[90rem] relative -mt-20 p-5 lg:p-10 xl:p-32 lg:shadow-[0px_30px_73px_0_rgba(0,0,0,0.30)]'>
            <div className=''>
                <h1 className='text-2xl lg:text-[38px] text-center'>Various <span className='font-bold'>Industry segments</span></h1>
                <div className='block md:hidden'>
                    <div className='relative z-50 flex flex-col-reverse items-center h-[25rem] w-full'>
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
                            spaceBetween={0}
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
                                data.map(d => <>
                                    {
                                        d.length === 1 ? <SwiperSlide>
                                            <div className='border border-[#707070] py-5 px-3'>
                                                <div className='flex items-center space-x-5'>
                                                    <Image width={50} height={50} src={d[0].logo} alt=""></Image>
                                                    <h1 className='text-xl font-bold'>{d[0].title}</h1>
                                                </div>
                                                <div className='mt-3 text-[14px] md:text-lg font-semibold md:ml-[60px]'>
                                                    <div>
                                                        {
                                                            d[0].list.map(l => <>
                                                                <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                            </>)
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                            :
                                            <SwiperSlide>
                                                <div className='border border-[#707070] py-5 px-3'>
                                                    <div className='flex items-center space-x-5'>
                                                        <Image width={50} height={50} src={d[0].logo} alt=""></Image>
                                                        <h1 className='text-base md:text-xl font-bold'>{d[0].title}</h1>
                                                    </div>
                                                    <div className='mt-3 text-[14px] md:text-lg font-semibold md:ml-[60px]'>
                                                        <div>
                                                            {
                                                                d[0].list.map(l => <>
                                                                    <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                                </>)
                                                            }

                                                        </div>
                                                    </div>
                                                    <div className='flex items-center space-x-5'>
                                                        <Image width={50} height={50} src={d[1].logo} alt=""></Image>
                                                        <h1 className='text-base md:text-xl font-bold'>{d[1].title}</h1>
                                                    </div>
                                                    <div className='mt-3 text-[14px] md:text-lg font-semibold md:ml-[60px]'>
                                                        <div>
                                                            {
                                                                d[1].list.map(l => <>
                                                                    <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                                </>)
                                                            }

                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                    }
                                </>)
                            }

                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='hidden md:block'>
                <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 mt-20'>
                    {
                        data.map(d => <>
                            {
                                d.length === 1 ? <div className='border border-[#707070] py-5 px-3'>
                                    <div className='flex items-center space-x-5'>
                                        <Image width={50} height={50} src={d[0].logo} alt=""></Image>
                                        <h1 className='text-xl font-bold'>{d[0].title}</h1>
                                    </div>
                                    <div className='mt-3 xl:text-lg font-semibold ml-[50px] xl:ml-[60px]'>
                                        <div>
                                            {
                                                d[0].list.map(l => <>
                                                    <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                </>)
                                            }

                                        </div>
                                    </div>
                                </div>
                                    :
                                    <>
                                        <div className='border border-[#707070] py-2 xl:py-5 px-2 xl:px-3'>
                                            <div className='flex items-center space-x-5'>
                                                <Image width={40} height={40} src={d[0].logo} alt=""></Image>
                                                <h1 className='text-xl font-bold'>{d[0].title}</h1>
                                            </div>
                                            <div className='xl:text-lg font-semibold ml-[60px]'>
                                                <div>
                                                    {
                                                        d[0].list.map(l => <>
                                                            <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                        </>)
                                                    }

                                                </div>
                                            </div>
                                            <div className='flex items-center space-x-5'>
                                                <Image width={50} height={50} src={d[1].logo} alt=""></Image>
                                                <h1 className='text-xl font-bold'>{d[1].title}</h1>
                                            </div>
                                            <div className='xl:text-lg font-semibold ml-[60px]'>
                                                <div>
                                                    {
                                                        d[1].list.map(l => <>
                                                            <p className='flex items-center'><GoPrimitiveDot className='text-[#675555] mt-1' />{l}</p>
                                                        </>)
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                    </>
                            }
                        </>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Industry;