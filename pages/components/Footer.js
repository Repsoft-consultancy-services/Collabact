import React from 'react';
import Link from 'next/link';
import email from '../../public/email.png'
import FAQ from '../../public/FAQ.png'
import smartphone from '../../public/smartphone.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#F4B50D] w-full py-2 box-shadow-[0px_-8px_38px_0_rgba(0,0,0,0.15)]'>
                <div className='flex justify-evenly max-w-[100rem] mx-auto'>
                    <div className='flex flex-row items-center space-x-1 lg:space-x-5'>
                        <Image width={30} height={30} src={smartphone} alt=""></Image>
                        <p className='text-[0.8rem] lg:text-base'>(+91) 8849951310</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1 lg:space-x-5'>
                        <Image width={30} height={30} src={email} alt=""></Image>
                        <p className='lg:text-base'>info@collabact.com</p>
                    </div>
                    <div className='flex flex-row items-center space-x-1 lg:space-x-5'>
                        <Image width={30} height={30} src={FAQ} alt=""></Image>
                        <p className='lg:text-base'>FAQ</p>
                    </div>
                </div>

            </div>
            <div className='bg-[#B5C2CF] px-2 xl:px-8 py-5 flex flex-col lg:flex-row justify-evenly lg:space-y-0 lg:space-x-2 xl:space-x-0'>
                <div className='text-[12px] xl:text-[17px] text-[#505050] text-justify order-2 lg:order-1 my-5 lg:my-0'>
                    <p>Become a mediator, and connect to right company with right <br /> candidate, to work together for development and ultimately <br /> have a Win-Win-Win situation wherein everyone grows.</p>
                </div>
                <div className='flex justify-evenly lg:space-x-2 xl:space-x-0 xl:w-1/3 order-3 lg:order-2'>
                    <div>
                        <h1 className='uppercase text-base xl:text-xl font-bold'>About<span className='ml-1'>Us</span></h1>
                        <Link href=""><p>Our Story</p></Link>
                        <Link href=""><p>Our Team</p></Link>
                        <Link href=""><p>Career</p></Link>
                    </div>
                    <div>
                        <h1 className='uppercase text-base xl:text-xl font-bold'>Resources</h1>
                        <Link href=""><p>EBP</p></Link>
                        <Link href=""><p>EBL</p></Link>
                        <Link href=""><p>Support</p></Link>
                        <Link href='https://collabact.com/Blog/'><p className='hover:cursor-pointer'>Blog</p></Link>
                    </div>
                    <div className='font-bold'>
                        <Link href="/terms"><h1 className='hover:cursor-pointer'>Terms and Condition</h1></Link>
                        <Link href="/cookie"><p className='hover:cursor-pointer'>Cookie policy</p></Link>
                        <Link href=""><p className='hover:cursor-pointer'>Privacy Policy</p></Link>
                        <Link href=""><p className='hover:cursor-pointer'>Refund Policy</p></Link>
                    </div>
                </div>
                <div className='order-1 lg:order-3'>
                    <h1 className='lg:text-lg xl:text-xl font-bold'>SUBSCRIBE NEWS LETTER</h1>
                    <div className='flex items-center mt-4'>
                        <input type="text" className='border border-[#C4C4C4] py-1 2xl:w-[20rem]' /><button className='px-5 py-1 bg-[#3E416C] text-white'>Subcribe</button>
                    </div>
                    <p className='text-[13px] mt-3 text-white'>Get digital marketing updates in your mailbox</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;