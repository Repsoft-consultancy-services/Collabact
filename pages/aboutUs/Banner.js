import Image from 'next/image';
import React from 'react';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineInstagram, AiFillYoutube } from 'react-icons/ai'
import { FiTwitter } from 'react-icons/fi'
import bg from '../../public/about/about.png'
import seperator from '../../public/about/seperator.png'

const Banner = () => {
    return (
        <div>
            <div>
                <div className='flex justify-evenly items-end w-full mx-auto'>
                    <div className='hidden md:block'>
                        <div className='flex flex-col text-black text-xl xl:text-3xl space-y-5 mb-32 xl:mb-52 ml-2 2xl:ml-[60px]'>
                            <AiOutlineFacebook className='cardanimate hover:cursor-pointer' />
                            <AiOutlineLinkedin className='cardanimate hover:cursor-pointer' />
                            <AiOutlineInstagram className='cardanimate hover:cursor-pointer' />
                            <FiTwitter className='cardanimate hover:cursor-pointer' />
                        </div>
                    </div>
                    <div className=''>
                        <div>
                            <Image width={1000} height={650} src={bg} alt=""></Image>
                        </div>
                    </div>
                </div>
                <div className='text-center text-[10px] px-5 lg:px-0 lg:text-2xl 2xl:text-3xl xl:w-[80rem] xl:ml-[5rem] 2xl:ml-[5rem] xl:-mt-16'>
                    <p className='hidden md:block'>For Businesses, CollabAct connects Commission based Sales Partners who become their <br /> extended hand and help them expand their business PAN India. And for the youth, we offer <br /> established companies whose products/services they sell without investment. <br /> This kind of connection brings a new earning opportunity for both the stakeholders. <br /><br />

                        Many challenges, like underemployment, were faced by the youth of India, because of which <br /> they have low energy and low confidence. We notice; that even though they have a lot <br /> of potential and capabilities, they don&apos;t have the right direction. They are willing to earn and put <br /> effort but don&apos;t know how to do that. <br /><br />

                        Similarly, many challenges were faced by MSMEs, like not having enough geographical presence<br /> to scale up their business, not having a proper dealers and distributors network, and not having<br /> a sales team with an ownership mindset.
                    </p>
                    <p className='block md:hidden'>For Businesses, CollabAct connects Commission based Sales Partners who become their extended hand and help them expand their business PAN India. And for the youth, we offer established companies whose products/services they sell without investment. This kind of connection brings a new earning opportunity for both the stakeholders. <br /><br />

                        Many challenges, like underemployment, were faced by the youth of India, because of which  they have low energy and low confidence. We notice; that even though they have a lot of potential and capabilities, they don&apos;t have the right direction. They are willing to earn and put effort but don&apos;t know how to do that. <br /><br />

                        Similarly, many challenges were faced by MSMEs, like not having enough geographical presence to scale up their business, not having a proper dealers and distributors network, and not having a sales team with an ownership mindset.
                    </p>
                    <div className='mt-5'>
                        <Image src={seperator} alt=""></Image>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;