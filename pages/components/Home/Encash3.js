import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Encash3 = () => {
    const data = [
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
            "product": ["Kangen Alkaline water..."],
            "Segment": "Building Constructions",
            "Earning": "16000-40000"
        }
    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 py-5 px-2'>
            {
                data.map((d, index) =>
                    <div key={index} className='bg-white lg:w-[320px] shadow-[0px_0px_8px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_8px_0_rgba(0,0,0,0.50)] shadow-gray-500 hover:shadow-gray-600 hover:cursor-pointer'>
                        <div>
                            <div className='flex items-center justify-center'>
                                <div className='px-11 py-2 my-2 bg-slate-100'>
                                    <Image width={218} height={152} src={d.logo} alt=""></Image>
                                </div>
                            </div>
                            <div className='pl-1'>
                                <h6 className='text-[17px] text-[#757575]'>{d.Segment}</h6>
                                <h1 className='text-base xl:text-[30px] font-bold text-left mt-3'>{d.title}</h1>
                                <h6 className='text-[22px] mt-5'>Business Consultancy</h6>
                                <div className='text-[20px] flex justify-between mt-3'>
                                    <h6 className='font-medium flex-1'>Earning<span className='ml-1'>Range</span></h6>
                                    <div className='ml-4'>
                                        <p>Rs. {d.Earning}/month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2'>
                            <Link href="https://app.collabact.com/Account"><button className='px-5 py-2 bg-[#F5F5F5] w-full'><p className='font-medium text-3xl text-[#757575] uppercase'>know more</p></button></Link>
                        </div>
                    </div>)
            }


        </div>
    );
};

export default Encash3;