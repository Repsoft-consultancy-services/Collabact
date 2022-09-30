import Image from 'next/image';
import React from 'react';
import left from '../../../public/left.png'
import right from '../../../public/right.png'
import register from '../../../public/image.png'
import counselling from '../../../public/image1.png'
import collaborate from '../../../public/image2.png'
import Earn from '../../../public/image3.png'
import { Slide } from 'react-awesome-reveal';

const Steps = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-40 w-full stepsclip py-10 md:py-20 mt-10 md:mt-20'>
            <h1 className='text-2xl lg:text-5xl font-semibold text-center'>Willing to become Executive Sales Partner(ESP)?</h1>
            <h2 className='text-2xl lg:text-[40px] text-center mt-2'>Follow these simple steps!</h2>
            <div className='max-w-[68rem] mx-auto px-5 py-10 xl:px-0'>
                <Slide direction='left' triggerOnce={1} duration={2000}>
                    <div className='flex '>
                        <div>
                            <Image src={register} alt=""></Image>
                        </div>
                        <div className='relative'>
                            <Image src={left} alt=""></Image>
                            <div className='absolute top-[4%] left-[10%]'>
                                <div className='flex items-start'>
                                    <h1 className='text-[11vw] md:text-[11.5vw] lg:text-[124px] font-semibold text-white'>1</h1>
                                    <div className='md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] ml-5'>
                                        <h1 className='text-[4vw] md:text-[4vw] lg:text-[45px] font-semibold '>Register</h1>
                                        <h1 className='text-[1.8vw] lg:text-xl mt-[1%] leading-tight md:leading-relaxed'>Choose to become an ESP and sign up with our portal to start working and earning.</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide direction='right' triggerOnce={1} duration={2000}>
                    <div className='flex'>
                        <div className='relative'>
                            <Image src={right} alt=""></Image>
                            <div className='absolute top-[4%] right-[10%] md:right-0 lg:right-[-12%] xl:right-[-22%]'>
                                <div className='flex items-start text-right'>
                                    <div className='md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] mr-5'>
                                        <h1 className='text-[4vw] md:text-[4vw] lg:text-[45px] font-semibold '>Counselling</h1>
                                        <h1 className='text-[1.8vw] lg:text-xl mt-[1%] leading-tight md:leading-relaxed'>Know about the varied industry segments, and choose the best for yourself.</h1>
                                    </div>
                                    <h1 className='text-[11vw] md:text-[11.5vw] lg:text-[124px] font-semibold text-white'>2</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={counselling} alt=""></Image>
                        </div>
                    </div>
                </Slide>
                <Slide direction='left' triggerOnce={1} duration={2000}>
                    <div className='flex '>
                        <div>
                            <Image src={collaborate} alt=""></Image>
                        </div>
                        <div className='relative'>
                            <Image src={left} alt=""></Image>
                            <div className='absolute top-[4%] left-[10%]'>
                                <div className='flex items-start'>
                                    <h1 className='text-[11vw] md:text-[11.5vw] lg:text-[124px] font-semibold text-white'>3</h1>
                                    <div className='md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] ml-5'>
                                        <h1 className='text-[4vw] md:text-[4vw] lg:text-[45px] font-semibold '>Collaborate</h1>
                                        <h1 className='text-[1.8vw] lg:text-xl mt-[1%] leading-tight md:leading-relaxed'>Connect with the business of your choice and become an Executive Sales Partner (ESP).</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
                <Slide direction='right' triggerOnce={1} duration={2000}>
                    <div className='flex'>
                        <div className='relative'>
                            <Image src={right} alt=""></Image>
                            <div className='absolute top-[4%] right-[10%] md:right-0 lg:right-[-12%] xl:right-[-22%]'>
                                <div className='flex items-start text-right'>
                                    <div className='md:w-[80%] lg:w-[70%] xl:w-[60%] mt-[4%] mr-5'>
                                        <h1 className='text-[4vw] md:text-[4vw] lg:text-[45px] font-semibold '>Earn</h1>
                                        <h1 className='text-[1.8vw] lg:text-xl mt-[1%] leading-tight md:leading-relaxed'> Choose your working hours and enable global sales of the business to earn as you perform.</h1>
                                    </div>
                                    <h1 className='text-[11vw] md:text-[11.5vw] lg:text-[124px] font-semibold text-white'>4</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={Earn} alt=""></Image>
                        </div>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Steps;