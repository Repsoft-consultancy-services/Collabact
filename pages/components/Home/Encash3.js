import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Encash3 = () => {
    const data = [
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
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                data.map((d, index) => <Link key={index} href="https://app.collabact.com/Account">
                    <div className='border-2 border-[#0D72B8] shadow-[0px_3px_10px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.50)] hover:shadow-blue-600'>
                        <div className='flex items-center justify-evenly space-x-3 p-5'>
                            <Image width={80} height={80} src={d.logo} alt=""></Image>
                            <div className='border-r-2 h-[80px] border-gray-300'></div>
                            <h1 className='text-2xl font-bold text-left'>{d.title}</h1>
                        </div>
                        <div className='border-b-2 border-gray-300 w-full'></div>
                        <div className='ml-3 space-y-5 text-left'>
                            <h6 className='text-sm xl:text-base'><span className='font-bold'>Product: </span>{d.product[0]}</h6>
                            <h6 className='text-sm xl:text-base'><span className='font-bold'>Segment: </span>{d.Segment}</h6>
                        </div>
                        <div className='border-b-2 border-gray-300 w-[200px] mx-auto mt-5'></div>
                        <div className='mt-1'>
                            <p>Possible Earning Range</p>
                            <p>{d.Earning} Rs/month</p>
                        </div>
                    </div>
                </Link>)
            }

        </div>
    );
};

export default Encash3;