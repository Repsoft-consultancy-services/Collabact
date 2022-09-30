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
            "title": "SpeedForce Ventures Pvt...",
            "product": ["Two Wheeler servicing..."],
            "Segment": "Franchise",
            "Earning": "35000-80000"
        },
        {
            "logo": "/panache.png",
            "title": "Panache Green Tech...",
            "product": ["CoolTops & WaterProofing"],
            "Segment": "Building Construction...",
            "Earning": "25000-60000"
        },
        {
            "logo": "/sugree.png",
            "title": "Sugree Green Power...",
            "product": ["Solar Power Generator"],
            "Segment": "Energy & Environment",
            "Earning": "25000-75000"
        },
        {
            "logo": "/shreelight.png",
            "title": "ShreeLight Power Pvt. Ltd",
            "product": ["Electrical Products"],
            "Segment": "Building Construction...",
            "Earning": "25000-60000"
        },
        {
            "logo": "/quicktech.png",
            "title": "QuickTech",
            "product": ["Refurbished & New Apple..."],
            "Segment": "Business Services",
            "Earning": "25000-50000"
        },
        {
            "logo": "/Rsa.png",
            "title": "Ronak Switchgear & Auto...",
            "product": ["Electrical Switchgear"],
            "Segment": "Building Construction...",
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
            "Segment": "FMCG",
            "Earning": "10000-40000"
        },
    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 py-5 px-2'>
            {
                data.map((d, index) => <div key={index} className='bg-white lg:w-[448px] shadow-[0px_0px_8px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_8px_0_rgba(0,0,0,0.50)] shadow-gray-500 hover:shadow-gray-600 hover:cursor-pointer'>
                    <div>
                        <div className='flex items-center justify-center'>
                            <div className='px-10 py-2 my-2 bg-slate-100'>
                                <Image width={350} height={250} src={d.logo} alt=""></Image>
                            </div>
                        </div>
                        <div className='pl-1'>
                            <h6 className='text-[17px] text-[#757575]'>{d.Segment}</h6>
                            <h1 className='text-base xl:text-[30px] font-bold text-left mt-5'>{d.title}</h1>
                            <h6 className='text-[22px] mt-3'>Business Consultancy</h6>
                            <div className='text-[20px] flex justify-between mt-5'>
                                <h6 className='font-medium flex-1'>Earning<span className='ml-1'>Range</span></h6>
                                <div className='ml-6'>
                                    <p>Rs. {d.Earning}/month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='p-2 mt-3'>
                        <Link href="https://app.collabact.com/Account"><button className='px-5 py-2 bg-[#F5F5F5] w-full'><p className='font-medium text-3xl text-[#757575] uppercase'>know more</p></button></Link>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Encash1;