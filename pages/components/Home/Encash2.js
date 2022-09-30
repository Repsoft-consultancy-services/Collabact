import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Encash2 = () => {
    const data = [
        {
            "logo": "/SUGAR.png",
            "title": "SugarCo",
            "product": ["Coconut Sugar"],
            "Segment": "FMCG",
            "Earning": "10000-40000"
        },
        {
            "logo": "/Aurasoul.png",
            "title": "AuraSoul",
            "product": ["Food Supplements..."],
            "Segment": "FMCG",
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
            "Segment": "FMCG",
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
            "Segment": "FMCG",
            "Earning": "25000-50000"
        },
        {
            "logo": "/lamex.png",
            "title": "Lamex",
            "product": ["Wrist Watches"],
            "Segment": "FMCG",
            "Earning": "35000-75000"
        },
        {
            "logo": "/Mars.png",
            "title": "MarsBazaar",
            "product": ["Leads Generation for..."],
            "Segment": "Business Services",
            "Earning": "25000-60000"
        },


    ]
    return (
        <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-5 px-2'>
            {
                data.map((d, index) => <div key={index} className='bg-white lg:w-[276.5px] h-[350px] shadow-[0px_0px_8px_0_rgba(0,0,0,0.30)] hover:shadow-[0px_0px_8px_0_rgba(0,0,0,0.50)] shadow-gray-500 hover:shadow-gray-600 hover:cursor-pointer'>
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
                        <Link href="https://app.collabact.com/Account"><button className='px-5 py-2 bg-[#F5F5F5] w-full'><p className='font-medium text-lg text-[#757575] uppercase'>know more</p></button></Link>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Encash2;