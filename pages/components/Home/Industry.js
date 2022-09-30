import Image from "next/image";
import React, { useRef } from "react";
import { GoPrimitiveDot } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { AttentionSeeker } from "react-awesome-reveal";
import car from "../../../public/car.png";
import conveyor from "../../../public/conveyor.png";
import clothes from "../../../public/clothes.png";
import consult from "../../../public/consult.png";
import cleaning from "../../../public/cleaning.png";
import renewableenergy from "../../../public/renewable-energy.png";
import hospitalbuilding from "../../../public/hospital-building.png";
import agriculture from "../../../public/agriculture.png";
import franchise from "../../../public/franchise.png";
import consumer from "../../../public/consumer.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

const Industry = () => {
  const data = [
    [
      {
        logo: "/car.png",
        title: "Automobile and electric vehicle",
        list: [
          "Spare Parts and Equipment,Accessories,Electric Vehicles,Commercial Vehicle,Battery",
        ],
      },
    ],
    [
      {
        logo: "/conveyor.png",
        title: "Industrial Products",
        list: ["Engineering Machines,Tools & equipments,Industrial Supplies"],
      },
    ],
    [
      {
        logo: "/clothes.png",
        title: "Fabric and Textiles",
        list: ["Appreal,Clothing & Garments,Cotton,Wool Textiles & Fabrics"],
      },
    ],
    [
      {
        logo: "/consult.png",
        title: "Business Services",
        list: [
          "Software,Technology or IT,Training,Coaching Consulting,Human Resource & Legal,Event Planning,Insurance,Advertisement & Media Support",
        ],
      },
    ],
    [
      {
        logo: "/cleaning.png",
        title: "Building construction and home products",
        list: [
          "Architectural & Civil Engineering,Ceramic & Flooring,Furniture & Supplies,Home Decor,Electronics and Electrical Goods",
        ],
      },
    ],
    [
      {
        logo: "/renewable-energy.png",
        title: "Energy & Environment",
        list: [
          "Paper & Paper Products,Solar Products,Water Treatment,Air CLeaning,Waste Management",
        ],
      },
    ],
    [
      {
        logo: "/hospital-building.png",
        title: "Hospital and Medical Equipments",
        list: [
          "Hospital Set-up Equipment,Healthcare products,Food Supplements,Medical Safety & Protective Gears",
        ],
      },
    ],
    [
      {
        logo: "/agriculture.png",
        title: "Agriculture",
        list: [
          "Food & Beverages,Agro Machinery and Equipments,Seeds & Plantation Products,Fertilisers and Soil Additives",
        ],
      },
    ],
    [
      {
        logo: "/franchise.png",
        title: "Franchises",
        list: ["Sports & Fitness,Laboratories,Travel & Tourism,Education"],
      },
    ],
    [
      {
        logo: "/consumer.png",
        title: "Fast Moving Consumer Goods(FMCG)",
        list: ["Food & Beverages,Stationary,Gifting,Books & Toys"],
      },
    ],
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="max-w-[95rem] mx-auto px-10">
      <div className="bg-white relative -mt-20 p-5 lg:p-10 lg:shadow-[0px_6px_8px_0_rgba(0,0,0,0.30)] w-10/12 mx-auto">
        <div className="">
          <h1 className="text-2xl lg:text-[38px] text-center">
            Various{" "}
            <span className="font-bold textcolor">Industry Segments</span>
          </h1>
          {/* mobile  */}
          <div className="block md:hidden">
            <div className="relative z-50 flex flex-col-reverse items-center h-auto w-full">
              <div className="flex space-x-10 justify-center mt-10">
                <div ref={navigationPrevRef}>
                  <button className="btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full">
                    <FaLessThan className="text-black" />
                  </button>
                </div>
                <div ref={navigationNextRef}>
                  <button className="btn bg-white text-black border-0 shadow-[3px_4px_36px_0_rgba(0,0,0,0.30)] text-xs lg:text-base rounded-full">
                    <FaGreaterThan className="text-black" />
                  </button>
                </div>
              </div>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  renderBullet: function (index, className) {
                    return (
                      '<span class="' +
                      className +
                      '">' +
                      data[index] +
                      "</span>"
                    );
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
                className="mySwiper mt-10"
              >
                {data.map((d) => (
                  <>
                    {
                      <SwiperSlide>
                        <div className="py-5 px-3 text-left">
                          <div className="flex items-center justify-start space-x-5">
                            <Image
                              width={100}
                              height={100}
                              src={d[0].logo}
                              alt=""
                            ></Image>

                            <div className="font-semibold ml-[50px] xl:ml-[60px]">
                              <h1 className="text-sm font-bold">
                                {d[0].title}
                              </h1>
                              <div>
                                {d[0].list.map((l) => (
                                  <>
                                    <p className="flex items-center justify-start space-x-5 text-[1.8vw] xl:text-sm">
                                      {l}
                                    </p>
                                  </>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    }
                  </>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <span className="industrySegment"></span>
          {/* <div className='grid grid-cols-2 gap-4 mt-10'>
                        {
                            data.map(d => <>
                                {
                                    <AttentionSeeker triggerOnce={1} effect='pulse'>
                                        <div className='py-5 px-3 xl:w-[37rem]'>
                                            <div className='flex items-center justify-start space-x-5'>
                                                <div className=''>
                                                    <Image width={80} height={80} src={d[0].logo} alt=""></Image>
                                                </div>
                                                <div className='font-semibold ml-[50px] xl:ml-[60px]'>
                                                    <h1 className='text-lg font-bold'>{d[0].title}</h1>
                                                    <div>
                                                        {
                                                            d[0].list.map(l => <>
                                                                <p className='flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm'>{l}</p>
                                                            </>)
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </AttentionSeeker>
                                }
                            </>)
                        }
                    </div> */}
          <div className="flex mt-16 mx-auto">
            <div className="max-w-[700px] w-1/3 space-y-5 mx-auto">
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex  justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-28 h-20">
                    <Image src={car} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">
                      Automobile and electric vehicle
                    </h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Spare Parts and Equipment, Accessories, Electric Vehicles,
                      Commercial Vehicle, Battery
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex  justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-20 h-20">
                    <Image src={conveyor} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Industrial Products</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Engineering Machines, Tools & equipments, Industrial
                      Supplies
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex  justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-20 h-20">
                    <Image src={clothes} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Fabric and Textiles</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Appreal, Clothing & Garments, Cotton, Wool Textiles &
                      Fabrics
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex  justify-start space-x-6 w-11/12 mx-auto h-32">
                  <div className="relative w-44 h-20">
                    <Image src={consult} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Business Services</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Software, Technology or IT, Training, Coaching Consulting,
                      Human Resource & Legal, Event Planning, Insurance,
                      Advertisement & Media Support
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
            </div>
            <div className="max-w-[700px] w-1/3 space-y-5 mx-auto">
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex  justify-start space-x-8 w-11/12 mx-auto h-32">
                  <div className="relative w-36 h-20">
                    <Image src={cleaning} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">
                      Building construction and home products
                    </h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Architectural & Civil Engineering,Ceramic & Flooring,
                      Furniture & Supplies, Home Decor, Electronics and
                      Electrical Goods
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex justify-start space-x-7 w-11/12 mx-auto h-32">
                  <div className="relative w-28 h-20">
                    <Image src={renewableenergy} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Energy & Environment</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Paper & Paper Products, Solar Products, Water Treatment,
                      Air CLeaning, Waste Management
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex justify-start space-x-6 w-11/12 mx-auto h-32">
                  <div className="relative w-32 h-20">
                    <Image src={hospitalbuilding} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">
                      Hospital and Medical Equipments
                    </h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Hospital Set-up Equipment, Healthcare products, Food
                      Supplements, Medical Safety & Protective Gears
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-36 h-20">
                    <Image src={agriculture} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Agriculture</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Food & Beverages, Agro Machinery and Equipments, Seeds &
                      Plantation Products, Fertilisers and Soil Additives
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
            </div>
            <div className="max-w-[700px] w-1/3 space-y-5 mx-auto">
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-20 h-20">
                    <Image src={franchise} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">Franchises</h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Sports & Fitness, Laboratories, Travel & Tourism,
                      Education
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
              <AttentionSeeker triggerOnce={1} effect="pulse">
                <div className="flex justify-start space-x-5 w-11/12 mx-auto h-32">
                  <div className="relative w-20 h-20">
                    <Image src={consumer} alt="" layout="fill"></Image>
                  </div>
                  <div className="font-semibold ml-[50px] xl:ml-[60px]">
                    <h1 className="text-lg font-bold">
                      Fast Moving Consumer Goods(FMCG)
                    </h1>
                    <p className="flex items-center justify-start space-x-5 text-[1.2vw] xl:text-sm font-light">
                      Food & Beverages, Stationary, Gifting, Books & Toys
                    </p>
                  </div>
                </div>
              </AttentionSeeker>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
