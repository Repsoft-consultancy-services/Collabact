import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import happy from '../../../public/happy.png'
import happyyellow from '../../../public/happyyellow.png'

const Banner = () => {
    return (
        <div className='mt-5 w-full xl:w-[1300px] 2xl:w-[1400px] mb-10 mr-16 2xl:mr-40'>
            <div className='flex justify-between items-end 2xl:space-x-6 px-5'>
                <div className='hidden lg:block'>
                    <div className='flex flex-col text-black text-xl xl:text-[28px] space-y-5 mb-20 xl:mb-20 2xl:mb-52 ml-5 2xl:ml-0 mr-10'>
                        <AiOutlineFacebook />
                        <AiOutlineLinkedin />
                        <AiOutlineInstagram />
                        <FiTwitter />
                    </div>
                </div>
                <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center text-white h-[300px] w-[500px] lg:w-full lg:h-[600px] flex-1 rounded-[10px] lg:rounded-[50px]">
                    <div className='text-center lg:text-left lg:px-10 xl:px-16 py-10 lg:py-20 xl:py-20 lg:drop-shadow-[0_12px_6px_rgba(0,0,0,0.5)]'>
                        <h1 className='text-xl lg:text-5xl xl:text-7xl font-semibold lg:font-bold'>We connect</h1>
                        <h4 className='text-xl lg:text-4xl xl:text-6xl font-semibold mt-2'>Commissioned Sales Partners<br />with Businesses <br /> to grow Exponentially</h4>
                    </div>
                </div>
            </div>
            <div className="w-[300px] lg:w-[550px] xl:w-[700px] 2xl:w-[750px] ml-auto lg:ml-[25rem] xl:ml-auto -mt-10 lg:-mt-[150px] xl:-mt-40 mr-14">
                <h1 className="bg-[#BABFC4] px-2 py-3 lg:py-5 text-[14px] lg:text-lg xl:text-2xl  text-center relative font-bold z-[1]">Advantages of associating with CollabAct</h1>
                <div className="flex justify-between w-11/12 mx-auto relative -mt-3 z-[5] lg:space-x-28 xl:space-x-5">
                    <div>
                        <div className="bg-white w-[200px] xl:w-[250px] flex flex-col items-center 2xl:ml-3">
                            <h1 className="text-center text-lg xl:text-[1.4rem] font-bold mt-2">Businesses</h1>
                            <div className='p-5 z-[5]'>
                                <div className='relative lg:w-[70px] lg:h-[70px]'>
                                    <Image  src={happy} alt=""></Image>
                                </div>
                                <AiFillYoutube className='text-red-600 text-3xl ml-[20px] relative -mt-6' />
                            </div>
                            <div className='bg-[#b8bdc2] w-[152px] lg:w-[290px] xl:w-[340px] relative -mt-16 shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)]'>
                                <div className='flex flex-col items-center py-10 xl:py-14 font-bold text-[10px] xl:text-[1rem] space-y-2 text-center lg:text-left'>
                                    <h1>Global sales</h1>
                                    <div className='border-b-4 w-8 hidden lg:block'></div>
                                    <h1>Performance-based partners</h1>
                                    <div className='border-b-4 w-8 hidden lg:block'></div>
                                    <h1>Low Expense, Increased Revenue</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center relative -mt-6'>
                            <button className='py-3 px-2 lg:px-10 xl:px-20 buttonbg rounded-full text-white font-bold uppercase text-[10px] lg:text-sm xl:text-lg'>join us</button>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white  w-[200px] xl:w-[250px] flex flex-col items-center 2xl:mr-3">
                            <h1 className="text-center text-lg xl:text-[1.4rem] font-bold mt-2">Sales Partners</h1>
                            <div className='p-5 z-[5]'>
                            <div className='relative lg:w-[70px] lg:h-[70px]'>
                                    <Image  src={happyyellow} alt=""></Image>
                                </div>
                                <AiFillYoutube className='text-red-600 text-3xl ml-[20px] relative -mt-6' />
                            </div>
                            <div className='bg-[#b8bdc2] w-[290px] xl:w-[340px] relative -mt-16 shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] '>
                                <div className='flex flex-col items-center py-10 xl:py-14 font-bold text-[10px] xl:text-[1rem] space-y-2 p-5'>
                                    <h1>Flexible work Hours</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Commission-based partnerships</h1>
                                    <div className='border-b-4 w-8'></div>
                                    <h1>Zero Investment & Unlimited income</h1>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center relative -mt-6'>
                            <button className='py-3 px-10 xl:px-14 buttonbg2 rounded-full text-black font-bold text-[10px] lg:text-sm xl:text-lg'><span className='text-[#FF0000] mr-1'>FREE</span>Registrations</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;