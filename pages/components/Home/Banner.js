import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import happy from '../../../public/happy.png'
import happyyellow from '../../../public/happyyellow.png'
import { Slide } from 'react-awesome-reveal';

const Banner = () => {
    return (
        <div className='max-w-[95rem] mx-auto relative z-[3]'>
            <div className=''>
                <div className='flex items-end'>
                    <div className='hidden md:block'>
                        <div className='flex flex-col text-black text-xl xl:text-3xl space-y-5 mb-32 xl:mb-52 ml-2 2xl:ml-0 mr-2'>
                            <AiOutlineFacebook className='cardanimate hover:cursor-pointer' />
                            <AiOutlineLinkedin  className='cardanimate hover:cursor-pointer' />
                            <AiOutlineInstagram className='cardanimate hover:cursor-pointer'/>
                            <FiTwitter className='cardanimate hover:cursor-pointer'/>
                        </div>
                    </div>
                    <div className="bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center text-white h-[175px] md:h-[400px] lg:h-[476px] xl:h-[40rem] flex-1 rounded-[10px] lg:rounded-[50px] sm:mr-7 mx-3 sm:mx-0">
                        <div className='text-center md:text-left md:px-10 xl:px-16 py-5 md:py-20 xl:py-24 md:drop-shadow-[0_12px_6px_rgba(0,0,0,0.5)]'>
                            <Slide direction='right' triggerOnce={1}  duration={2000}>
                                <h1 className='text-lg md:text-4xl lg:text-6xl xl:text-7xl font-semibold lg:font-bold'>We connect</h1>
                                <h4 className='text-lg md:text-3xl lg:text-5xl xl:text-6xl font-semibold sm:mt-2'>Commissioned Sales Partners<br />with Businesses <br /> to grow Exponentially</h4>
                            </Slide>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[85vw] sm:w-[350px] lg:w-[550px] xl:w-[700px] 2xl:w-[750px] ml-[7.2vw] sm:ml-auto -mt-[42px] md:-mt-10 lg:-mt-36 xl:-mt-[152px] sm:mr-16">
                <Slide direction='down' triggerOnce={1} duration={2000}>
                    <div className="bg-[#BABFC4] px-2 py-3 lg:py-5 text-[12px] sm:text-[14px] lg:text-lg xl:text-2xl text-center relative font-bold z-[1] rounded-xl">
                        <h1 className='mb-1'>Advantages of associating with CollabAct</h1>
                    </div>
                </Slide>
                <div className="flex justify-between w-11/12 mx-auto relative -mt-3 z-[5] md:space-x-12 lg:space-x-28 xl:space-x-5">
                    <Slide direction='up' triggerOnce={1} duration={2000}>
                        <div>
                            <div className="bg-white w-[30vw] md:w-[140px] lg:w-[200px] xl:w-[250px] flex flex-col items-center 2xl:ml-3">
                                <h1 className="text-center text-[3vw] md:text-base lg:text-lg xl:text-[1.4rem] font-bold mt-2">Businesses</h1>
                                <div className='p-5 z-[5]'>
                                    <div className='relative -mt-3 lg:-mt-0 w-[32px] h-[32px] lg:w-[70px] lg:h-[70px]'>
                                        <Image src={happy} alt=""></Image>
                                    </div>
                                    <AiFillYoutube className='text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6' />
                                </div>
                                <div className='bg-[#b8bdc2] w-[45vw] sm:w-[180px] lg:w-[290px] xl:w-[340px] relative -mt-10 lg:-mt-16 shadow-[0px_1px_30px_0_rgba(0,0,0,0.30)] md:shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] rounded-xl'>
                                    <div className='flex flex-col items-center py-5 sm:py-10 xl:py-14 font-bold text-[8px] sm:text-[10px] xl:text-[1rem] space-y-2 text-center lg:text-left'>
                                        <h1>Global sales</h1>
                                        <div className='border-b-2 lg:border-b-4 w-8'></div>
                                        <h1>Performance-based partners</h1>
                                        <div className='border-b-2 lg:border-b-4 w-8'></div>
                                        <h1>Low Expense, Increased Revenue</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center relative -mt-[4vw] sm:-mt-6'>
                                <button className='py-[2vw] px-[2vw] buttonanimate sm:py-3 sm:px-5 lg:px-10 xl:px-20 buttonbg rounded-full text-white font-semibold lg:font-bold uppercase text-[3vw] md:text-sm xl:text-lg'>join us</button>
                            </div>
                        </div>
                        <div>
                            <div className="bg-white w-[30vw] md:w-[140px] lg:w-[200px] xl:w-[250px] flex flex-col items-center 2xl:mr-3">
                                <h1 className="text-center text-[3vw] md:text-base lg:text-lg xl:text-[1.4rem] font-bold mt-2">Sales Partners</h1>
                                <div className='p-5 z-[5]'>
                                    <div className='relative -mt-3 lg:-mt-0 w-[32px] h-[32px] lg:w-[70px] lg:h-[70px]'>
                                        <Image src={happyyellow} alt=""></Image>
                                    </div>
                                    <AiFillYoutube className='text-red-600 lg:text-3xl ml-[7px] lg:ml-[20px] relative -mt-2 lg:-mt-6' />
                                </div>
                                <div className='bg-[#b8bdc2] w-[45vw] sm:w-[180px]  lg:w-[290px] xl:w-[340px] relative -mt-10 lg:-mt-16 shadow-[0px_1px_30px_0_rgba(0,0,0,0.30)] md:shadow-[0px_1px_64px_0_rgba(0,0,0,0.30)] rounded-xl'>
                                    <div className='flex flex-col items-center py-5 sm:py-10 xl:py-14 font-bold text-[8px] sm:text-[10px] xl:text-[1rem] space-y-2 text-center lg:text-left'>
                                        <h1>Flexible work Hours</h1>
                                        <div className='border-b-2 lg:border-b-4 w-8'></div>
                                        <h1>Commission-based partnerships</h1>
                                        <div className='border-b-2 lg:border-b-4 w-8'></div>
                                        <h1>Zero Investment & Unlimited income</h1>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center relative -mt-[4vw] sm:-mt-6'>
                                <button className='py-[2vw] px-[2vw] buttonanimate sm:py-3 sm:px-5 md:px-5 xl:px-14 buttonbg2 rounded-full text-black font-semibold lg:font-bold text-[3vw] md:text-sm xl:text-lg'><span className='text-[#FF0000] mr-1'>FREE</span>Registrations</button>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Banner;