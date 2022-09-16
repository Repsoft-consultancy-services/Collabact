import Image from 'next/image';
import React from 'react';

const Encash2 = () => {
    const data = [
        {
            "logo": "/Aurasoul.png",
            "title": "AuraSoul",
            "product": ["Food Supplements & wellness"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
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
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
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
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "25000-50000"
        },
        {
            "logo": "/lamex.png",
            "title": "Lamex",
            "product": ["Wrist Watches"],
            "Segment": "Fast Moving Consumer & Goods(FMCG)",
            "Earning": "35000-75000"
        },
        {
            "logo": "/Mars.png",
            "title": "MarsBazaar",
            "product": ["Leads Generation for Industries"],
            "Segment": "Business Services",
            "Earning": "25000-60000"
        },
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
            "product": ["Kangen Alkaline water machine"],
            "Segment": "Building Construction & Home Products",
            "Earning": "16000-40000"
        }
    ]
    return (
        <div className='grid grid-cols-4 gap-10'>
            {
                data.map(d => <>
                    <div className='border-2 border-[#0D72B8] shadow-[0px_3px_10px_0_rgba(0,0,0,0.30)] '>
                        <div className='flex items-center justify-evenly space-x-3 p-5'>
                            <Image width={80} height={80} src={d.logo} alt=""></Image>
                            <div className='border-r-2 h-[80px] border-gray-300'></div>
                            <h1 className='text-2xl font-bold text-left'>{d.title}</h1>
                        </div>
                        <div className='border-b-2 border-gray-300 w-full'></div>
                        <div className='ml-3 space-y-5 text-left'>
                            <h6><span className='font-bold'>Product: </span>{d.product[0]}</h6>
                            <h6><span className='font-bold'>Segment: </span>{d.Segment}</h6>
                        </div>
                        <div className='border-b-2 border-gray-300 w-[200px] mx-auto mt-5'></div>
                        <div className='mt-1'>
                            <p>Possible Earning Range</p>
                            <p>{d.Earning} Rs/month</p>
                        </div>
                    </div>
                </>)
            }

        </div>
    );
};

export default Encash2;