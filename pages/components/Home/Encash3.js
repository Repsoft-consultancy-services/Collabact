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
            "Segment": "Building Constructions...",
            "Earning": "16000-40000"
        }
    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-5 py-5'>
            {
                data.map((d, index) => <Link key={index} href="https://app.collabact.com/Account">
                    <div className='bg-white xl:w-[300px] shadow-[0px_0px_8px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_8px_0_rgba(0,0,0,0.50)] shadow-gray-500 hover:shadow-gray-600 hover:cursor-pointer'>
                        <div>
                            <div className='flex items-center space-x-3 p-5 bg-slate-100 h-[150px]'>
                                <div className='relative w-24'>
                                    <Image width={100} height={80} src={d.logo} alt=""></Image>
                                </div>
                                <div className='border-r-2 h-[80px] border-gray-300'></div>
                                <h1 className='text-base xl:text-2xl font-bold text-left flex-1'>{d.title}</h1>
                            </div>
                            <div className='border-b-2 border-gray-300 w-full'></div>
                            <div className='text-left ml-3 space-y-3 mt-3'>
                                <h6 className='text-sm xl:text-base'><span className='font-bold'>Product: </span>{d.product[0]}</h6>
                                <h6 className='text-sm xl:text-base'><span className='font-bold'>Segment: </span>{d.Segment}</h6>
                            </div>
                            <div className='border-b-2 border-gray-300 w-[200px] mx-auto mt-5 lg:mt-2 xl:mt-5'></div>
                            <div className=''>
                                <p>Possible Earning Range</p>
                                <p>{d.Earning} Rs/month</p>
                            </div>
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default Encash3;