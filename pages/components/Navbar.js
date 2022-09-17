import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CA from '../../public/collabActlogo.png'
import {BsChevronRight} from 'react-icons/bs'

const Navbar = () => {
    const [servicedrop, setServicedrop] = useState(false)
    const { route } = useRouter()
    const handledropdown = () => {
        if (!servicedrop)
            setServicedrop(true)
        else
            setServicedrop(false)
    }
    // const menu = <>
    //     <h1><Link href='/'><p className='bg-white text-xl text-[#8a8a8a]'>Home</p></Link></h1>
    //     <h1><Link href='/joinUs'><p className='bg-white text-xl text-[#8a8a8a]'>AboutUs</p></Link></h1>
    //     <h1 onClick={handledropdown}>
    //         <p className='bg-white text-xl text-[#8a8a8a]'>What we offer</p>
    //     </h1>
    //     <Link href="/">
    //         <div className=''>
    //             <Image src={CA} alt=""></Image>
    //         </div>
    //     </Link>
    //     <h1><Link href='/contactUs'><p className='bg-white text-xl text-[#8a8a8a]'>Blog</p></Link></h1>
    //     <h1><Link href='/contactUs'><p className='bg-white text-xl text-[#8a8a8a]'>FAQ</p></Link></h1>
    //     <h1><Link href='/aboutUs'><p className='bg-white text-xl '>Contact Us</p></Link></h1>
    // </>
    return (
        <div className={`flex items-center justify-center ${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'}`}>
            <div className="w-full xl:w-[1323.09px] 2xl:w-[1621px] xl:h-[83.7px] 2xl:h-[74.4px] mt-1">
                {/* <Link href="/">
                    <div className='hidden lg:block'>
                        
                    </div>
                </Link>
                <div className="navbar-start lg:hidden -ml-5">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost">
                            <CgMenuLeft className='text-4xl' />
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow
                     rounded-md w-52 bg-white">
                            {menu}
                            </div>
                        </ul>
                    </div>
                </div> */}
                <div className={`flex justify-evenly items-center`}>
                    <Link href='/'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/' ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Home</h1></Link>

                    <Link href='/aboutUs'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/aboutUs' ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>AboutUs</h1></Link>

                    <h1 onClick={handledropdown} className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/services' ? 'border-t-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>What we offer</h1>

                    <Link href="/">
                        <div className=''>
                            <Image width={230} height={70} src={CA} alt=""></Image>
                        </div>
                    </Link>

                    <Link href='https://collabact.com/Blog/'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/blog' ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Blog</h1></Link>

                    <Link href='/faq'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/faq' ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>FAQ</h1></Link>

                    <Link href='/contactUs'><h1 className={`${route === '/terms' ? 'bg-[#C2C2C3]' : route === '/cookie' ? 'bg-[#C2C2C3]' : 'bg-white'} text-xl pb-2 hover:cursor-pointer ${route === '/contactUs' ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Contact Us</h1></Link>

                    <div className='space-x-1 pb-2 text-lg text-white'>
                        <Link href='https://app.collabact.com/Account/SignIn'><button className='bg-blue-500 px-2 py-1'>Sign In</button></Link>
                        <Link href='https://app.collabact.com/'><button className='bg-blue-500 px-2 py-1'>Sign Up</button></Link>
                    </div>
                    {/* <ul className="menu menu-horizontal p-0 text-2xl">
                        {menu}
                    </ul> */}
                </div>
            </div>
            {servicedrop && <div onMouseLeave={handledropdown} className="mt-1 absolute top-[59px] xl:left-[22rem] 2xl:left-[38rem] 3xl:left-[52rem] z-50 px-5 py-3 bg-[#C2C2C3] space-y-1 text-lg ">
                <div onClick={handledropdown} className="flex justify-between items-center">
                    <h1 className='hover:cursor-pointer'><Link href='/services'><p className='font-bold uppercase '>Businesses</p></Link></h1>
                    <BsChevronRight/>
                </div>
                <div className='border-b-2 border-black h-2'>

                </div>
                <div onClick={handledropdown} className="flex justify-between items-center space-x-3">
                    <h1 className='hover:cursor-pointer'><Link href='/services2'><p className='font-bold uppercase'>Sale Partners</p></Link></h1>
                    <BsChevronRight/>
                </div>

            </div>}

        </div>

    );
};

export default Navbar;