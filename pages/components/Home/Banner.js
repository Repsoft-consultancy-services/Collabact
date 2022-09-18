import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import happy from '../../../public/happy.png'
import happyyellow from '../../../public/happyyellow.png'

const Banner = () => {
    return (
        <div className='mt-5 w-full 2xl:w-[1621px] mb-10 mr-16 2xl:mr-40'>
            <div className='flex justify-between items-end 2xl:space-x-6 px-5'>
                <div className='hidden lg:block'>
                    <div className='flex flex-col text-black text-xl xl:text-[28px] space-y-5 mb-20 xl:mb-52 ml-5 2xl:ml-0 mr-10'>
                        <AiOutlineFacebook />
                        <AiOutlineLinkedin />
                        <AiOutlineInstagram />
                        <FiTwitter />
                    </div>
                </div>
                <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center text-white h-[300px] w-[500px] lg:w-full xl:w-[1458.9px] lg:h-[500px] xl:h-[672.2px] 2xl:h-[686.4px] flex-1 rounded-[50px] lg:rounded-[100px]">
                    <div className='px-10 lg:px-28 2xl:px-40 py-10 lg:py-32 2xl:py-40 drop-shadow-[0_12px_6px_rgba(0,0,0,0.5)]'>
                        <h1 className='text-3xl lg:text-5xl xl:text-7xl 2xl:text-[80px] font-bold'>We connect</h1>
                        <h4 className='text-xl lg:text-4xl xl:text-6xl 2xl:text-7xl font-semibold mt-2'>Commissioned Sales Partners<br />with Businesses to grow Exponentially</h4>
                    </div>
                </div>
            </div>
            <div className="w-[400px] lg:w-[550px] xl:w-[700px] 2xl:w-[850px] lg:ml-[28rem] xl:ml-auto -mt-10 lg:-mt-32 xl:-mt-40 2xl:-mt-40 3xl:-mt-36 mr-14 hidden lg:block">
                <h1 className="bg-[#BABFC4] px-2 py-4 text-lg 2xl:text-3xl text-center relative font-bold z-[1]">Advantages of associating with CollabAct</h1>
                <div className="flex justify-between w-11/12 mx-auto relative -mt-3 z-[5] lg:space-x-28 xl:space-x-0">
                    <div>
                        <div className="bg-white w-[200px] xl:w-[250px] flex flex-col items-center 2xl:ml-5">
                            <h1 className="text-center text-lg xl:text-2xl font-bold mt-2">Businesses</h1>
                            <div className='p-5 z-[5]'>
                                <Image height={70} width={70} src={happy} alt=""></Image>
                                <AiFillYoutube className='text-red-600 text-3xl ml-[20px] relative -mt-6' />
                            </div>
                            <div className='bg-[#B8BDC2F2] w-[290px] 2xl:w-[360px] relative -mt-16 shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)]'>
                                <div className='flex flex-col items-center py-14 font-bold text-sm 2xl:text-lg space-y-2'>
                                    <h1>Global sales</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Performance-based partners</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Low Expense, Increased Revenue</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center relative -mt-6'>
                            <button className='py-3 px-10 xl:px-20 buttonbg rounded-full text-white font-bold uppercase text-sm xl:text-lg'>join us</button>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white  w-[200px] xl:w-[250px] flex flex-col items-center 2xl:mr-5">
                            <h1 className="text-center text-lg xl:text-2xl font-bold mt-2">Sales Partners</h1>
                            <div className='p-5 z-[5]'>
                                <Image height={70} width={70} src={happyyellow} alt=""></Image>
                                <AiFillYoutube className='text-red-600 text-3xl ml-[20px] relative -mt-6' />
                            </div>
                            <div className='bg-[#B8BDC2F2] w-[290px] 2xl:w-[360px] relative -mt-16 shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] '>
                                <div className='flex flex-col items-center py-14 font-bold text-sm 2xl:text-lg space-y-2 p-5'>
                                    <h1>Flexible work Hours</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Commission-based partnerships</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Zero Investment & Unlimited income</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center relative -mt-6'>
                            <button className='py-3 px-10 xl:px-14 buttonbg2 rounded-full text-black font-bold text-lg'><span className='text-[#FF0000] mr-1'>FREE</span>Registrations</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;