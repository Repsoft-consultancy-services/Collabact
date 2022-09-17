import Image from 'next/image';
import React from 'react';
import bg from '../../public/contact/bg.png'

const Banner = () => {
    return (
        <div className='px-20 2xl:px-0 w-full 2xl:w-[1621px] xl:w-[1458.9px] xl:h-[672.2px] 2xl:h-[686.4px]'>
            <div className="bg-[url('/contact/bg.png')] bg-no-repeat bg-cover bg-center text-white h-screen flex items-end rounded-[100px]">
                <div className='px-28 2xl:px-40 py-20 drop-shadow-[0_12px_6px_rgba(0,0,0,0.5)]'>
                    <h1 className='text-7xl 2xl:text-[80px] font-bold'>Need help selecting <br />
                        the right channel?</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;