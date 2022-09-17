import React from 'react';
import Link from 'next/link';
import email from '../../public/email.png'
import FAQ from '../../public/FAQ.png'
import smartphone from '../../public/smartphone.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#F4B50D] w-full flex justify-center space-x-40 py-2 box-shadow-[0px_-8px_38px_0_rgba(0,0,0,0.15)]'>
                <div className='flex items-center space-x-5'>
                    <Image src={smartphone} alt=""></Image>
                    <p>(+91) 8849951310</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <Image src={email} alt=""></Image>
                    <p>info@collabact.com</p>
                </div>
                <div className='flex items-center space-x-5'>
                    <Image src={FAQ} alt=""></Image>
                    <p>FAQ</p>
                </div>
            </div>
            <div className='bg-[#B5C2CF] px-8 py-5 flex justify-evenly'>
                <div className='text-[17px] text-[#505050] text-justify'>
                    <p>Become a mediator, and connect to right company with right <br /> candidate, to work together for development and ultimately <br /> have a Win-Win-Win situation wherein everyone grows.</p>
                </div>
                <div className='flex justify-evenly w-1/3'>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>About Us</h1>
                        <Link href=""><p>Our Story</p></Link>
                        <Link href=""><p>Our Team</p></Link>
                        <Link href=""><p>Career</p></Link>
                    </div>
                    <div>
                        <h1 className='uppercase text-xl font-bold'>Resources</h1>
                        <Link href=""><p>EBP</p></Link>
                        <Link href=""><p>EBL</p></Link>
                        <Link href=""><p>Support</p></Link>
                        <Link href=""><p>Blog</p></Link>
                    </div>
                    <div className='font-bold'>
                        <Link href="/terms"><h1>Terms and Condition</h1></Link>
                        <Link href="/cookie"><p>Cookie policy</p></Link>
                        <Link href=""><p>Privacy Policy</p></Link>
                        <Link href=""><p>Refund Policy</p></Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-bold'>SUBSCRIBE NEWS LETTER</h1>
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