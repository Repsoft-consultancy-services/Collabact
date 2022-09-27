import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import c from '../../../public/TRIQUENCH.png'

const Encash1 = () => {
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
        }
    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-16 py-5'>
            {
                data.map((d, index) => <Link key={index} href="https://app.collabact.com/Account">
                    <div className='xl:w-[380px] shadow-[0px_3px_10px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.50)] hover:shadow-blue-600'>
                        <div>
                            <div className='flex items-center space-x-3 p-5'>
                                <div className='relative w-24'>
                                    <Image width={100} height={80} src={d.logo} alt=""></Image>
                                </div>
                                <div className='border-r-2 h-[80px] border-gray-300'></div>
                                <h1 className='text-base xl:text-2xl font-bold text-left flex-1'>{d.title}</h1>
                            </div>
                            <div className='border-b-2 border-gray-300 w-full'></div>
                            <div className='text-left ml-3 space-y-3'>
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

export default Encash1;