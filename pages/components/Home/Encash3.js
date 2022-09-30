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
                    <div key={index} className='bg-white lg:w-[276.5px] h-[350px] shadow-[0px_0px_8px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_8px_0_rgba(0,0,0,0.50)] shadow-gray-500 hover:shadow-gray-600 hover:cursor-pointer'>
                        <div>
                            <div className='flex items-center justify-center'>
                                <div className='mx-2 py-2 my-2 bg-slate-100'>
                                    <Image objectFit='contain' width={350} height={160} src={d.logo} alt=""></Image>
                                </div>
                            </div>
                            <div className='p-2 space-y-2'>
                                <h6 className='text-sm text-[#757575]'>{d.Segment}</h6>
                                <h1 className='text-lg font-bold text-left'>{d.title}</h1>
                                <h6 className='text-sm'>Business Consultancy</h6>
                                <div className='text-sm flex'>
                                    <div>
                                        <h6 className='font-medium flex-1'>Earning<span className='ml-1'>Range</span></h6>
                                    </div>
                                    <div className='ml-[10%]'>
                                        <p>Rs. {d.Earning}/month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='px-2 -mt-1'>
                            <Link href="https://app.collabact.com/Account"><button className='px-5 py-2 bg-[#F5F5F5] w-full'><p className='font-medium text-lg text-[#757575]'>Know More</p></button></Link>
                        </div>
                    </div>)
            }


        </div>
    );
};

export default Encash3;