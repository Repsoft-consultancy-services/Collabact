import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CA from '../../public/collabActlogo.png'
import CAG from '../../public/collablogogray.png'
import { BsChevronRight } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
    const [servicedrop, setServicedrop] = useState(false)
    const [menudrop, setMenudrop] = useState(false)
    const { route } = useRouter()
    const handledropdown = () => {
        if (!servicedrop)
            setServicedrop(true)
        else
            setServicedrop(false)
    }
    // const menu = <>
    //     <h1><Link href='/'><p className='bg-white  font-medium text-base xl:text-xl text-[#717171]'>Home</p></Link></h1>
    //     <h1><Link href='/joinUs'><p className='bg-white  font-medium text-base xl:text-xl text-[#717171]'>AboutUs</p></Link></h1>
    //     <h1 onClick={handledropdown}>
    //         <p className='bg-white  font-medium text-base xl:text-xl text-[#717171]'>What we offer</p>
    //     </h1>
    //     <Link href="/">
    //         <div className=''>
    //             <Image src={CA} alt=""></Image>
    //         </div>
    //     </Link>
    //     <h1><Link href='/contactUs'><p className='bg-white  font-medium text-base xl:text-xl text-[#717171]'>Blog</p></Link></h1>
    //     <h1><Link href='/contactUs'><p className='bg-white  font-medium text-base xl:text-xl text-[#717171]'>FAQ</p></Link></h1>
    //     <h1><Link href='/aboutUs'><p className='bg-white  font-medium text-base xl:text-xl '>Contact Us</p></Link></h1>
    // </>
    return (
        <div className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} py-2 sticky top-0 z-[150]`}>
            <div className="w-full lg:hidden mt-1">
                <div className='flex justify-between items-center pr-2'>
                    <div className="dropdown">
                        <label tabIndex="0" onClick={() => {
                            if (!menudrop)
                                setMenudrop(true)
                            else
                                setMenudrop(false)

                        }} className="btn btn-ghost">
                            <AiOutlineMenu className='text-2xl' />
                        </label>
                        <div tabIndex="0" className={`menu menu-compact ${menudrop ? 'dropdown-content' : 'hidden'} mt-3 p-2 shadow
                     rounded-md w-52 bg-white`}>
                            <Link href='/'><h1 onClick={() => setMenudrop(false)} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Home</h1></Link>
                            <Link href='/aboutUs'><h1 onClick={() => setMenudrop(false)} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/aboutUs' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>AboutUs</h1></Link>

                            <h1 onTouchStart={handledropdown} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/services' ? 'border-t-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>What we offer</h1>
                            <Link href='https://collabact.com/Blog/'><h1 onClick={() => setMenudrop(false)} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/blog' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Blog</h1></Link>

                            <Link href='/faq'><h1 onClick={() => setMenudrop(false)} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/faq' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>FAQ</h1></Link>

                            <Link href='/contactUs'><h1 onClick={() => setMenudrop(false)} className={`bg-white  font-medium text-base xl:text-xl pb-2 hover:cursor-pointer ${route === '/contactUs' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Contact Us</h1></Link>
                        </div>
                    </div>
                    <Link href="/">
                        <div className=''>
                            {
                                route === '/terms' ? <Image width={120} height={50} src={CAG} alt=""></Image> : route === '/cookie' ? <Image width={120} height={50} src={CAG} alt=""></Image> : route === '/faq' ? <Image width={120} height={50} src={CAG} alt=""></Image> : <Image width={120} height={35} src={CA} alt=""></Image>
                            }
                        </div>
                    </Link>

                    <div className='space-x-1 text-[10px] text-white'>
                        <Link href='https://app.collabact.com/Account/SignIn'><button className='bg-blue-500 px-1 lg:px-2 py-1 hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.30)] hover:shadow-blue-600 rounded-lg'>Sign In</button></Link>
                        <Link href='https://app.collabact.com/'><button className='bg-blue-500 px-1 lg:px-2 py-1 hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.30)] hover:shadow-blue-600 rounded-lg'>Sign Up</button></Link>
                    </div>
                </div>
            </div>
            <div className="max-w-[115rem] mx-auto mt-1 hidden lg:block">
                <div className={`flex justify-evenly items-center ml-0 xl:ml-2`}>
                    <Link href='/'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black font-medium text-base xl:text-xl  pb-2 hover:cursor-pointer ${route === '/' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Home</h1></Link>

                    <Link href='/aboutUs'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black  font-medium text-base xl:text-xl  pb-2 hover:cursor-pointer ${route === '/aboutUs' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>AboutUs</h1></Link>

                    <h1 onMouseEnter={handledropdown} className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black  font-medium text-base xl:text-xl  pb-2 hover:cursor-pointer ${route === '/services' ? 'border-t-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>What we offer</h1>

                    <Link href="/">
                        <div className=''>
                            {
                                route === '/terms' ? <Image width={180} height={60} src={CAG} alt=""></Image> : route === '/cookie' ? <Image width={180} height={60} src={CAG} alt=""></Image> : route === '/faq' ? <Image width={180} height={60} src={CAG} alt=""></Image> : <Image width={180} height={60} src={CA} alt=""></Image>
                            }
                        </div>
                    </Link>
                    <Link href='https://collabact.com/Blog/'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black  font-medium text-base xl:text-xl  pb-2 hover:cursor-pointer ${route === '/blog' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Blog</h1></Link>

                    <Link href='/faq'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black  font-medium text-base xl:text-xl hover:cursor-pointer  pb-2 ${route === '/faq' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>FAQ</h1></Link>

                    <Link href='/contactUs'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : route === '/faq' ? 'bg-[#C2C2C3]' : 'bg-white'} hover:text-black  font-medium text-base xl:text-xl  pb-2 hover:cursor-pointer ${route === '/contactUs' ? 'border-b-4 border-[#717171] text-black font-bold' : 'text-[#717171]'}`}>Contact Us</h1></Link>

                    <div className='space-x-1 pb-2 text-[1rem] text-white'>
                        <Link href='https://app.collabact.com/Account/SignIn'><button className='transition ease-in-out delay-100 bg-blue-500  hover:scale-105 hover:bg-blue-600 duration-300 px-1 lg:px-2 py-1 rounded-lg'>Sign In</button></Link>
                        <Link href='https://app.collabact.com/'><button className='transition ease-in-out delay-100 bg-blue-500  hover:scale-105 hover:bg-blue-600 duration-300 px-1 lg:px-2 py-1 rounded-lg'>Sign Up</button></Link>
                    </div>
                </div>
            </div >
            {servicedrop && <div onMouseLeave={handledropdown} className="mt-3 rounded-[10px] dropclip absolute top-[170px] lg:top-[59px] left-[1rem] lg:left-[16.5rem] xl:left-[25rem] 2xl:left-[35rem] 3xl:left-[53rem] z-50 px-5 py-3 bg-gray-100 space-y-1  font-medium text-base">
                <div onClick={handledropdown}>
                    <h1 className='hover:cursor-pointer'><Link href='/services'><p className='font-semibold uppercase'>Businesses</p></Link></h1>
                </div>
                <div onClick={handledropdown} className="">
                    <h1 className='hover:cursor-pointer'><Link href='/services2'><p className='font-semibold uppercase'>Sale Partners</p></Link></h1>
                </div>

            </div>}

        </div >

    );
};

export default Navbar;