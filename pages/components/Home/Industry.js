import Image from 'next/image';
import React from 'react';
import electric from '../../../public/electriccar.png'
import { GoPrimitiveDot } from 'react-icons/go'

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
    return (
        <div className='bg-white w-11/12 2xl:w-[90rem] relative -mt-20 p-32 shadow-[0px_30px_73px_0_rgba(0,0,0,0.30)] '>
            <div className=''>
                <h1 className='text-[38px] text-center'>Various <span className='font-bold'>Industry segments</span></h1>
                <div className='grid grid-cols-3 gap-5 mt-20'>
                    {
                        data.map(d => <>
                            {
                                d.length === 1 ? <div className='border border-[#707070] py-5 px-3'>
                                    <div className='flex items-center space-x-5'>
                                        <Image width={50} height={50} src={d[0].logo} alt=""></Image>
                                        <h1 className='text-xl font-bold'>{d[0].title}</h1>
                                    </div>
                                    <div className='mt-3 text-lg font-semibold ml-[60px]'>
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
                                        <div className='border border-[#707070] py-5 px-3'>
                                            <div className='flex items-center space-x-5'>
                                                <Image width={50} height={50} src={d[0].logo} alt=""></Image>
                                                <h1 className='text-xl font-bold'>{d[0].title}</h1>
                                            </div>
                                            <div className='mt-3 text-lg font-semibold ml-[60px]'>
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
                                            <div className='mt-3 text-lg font-semibold ml-[60px]'>
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