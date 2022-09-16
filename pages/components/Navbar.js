import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import CA from '../../public/collabActlogo.png'

const Navbar = () => {
    const [servicedrop, setServicedrop] = useState(false)
    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [blog, setBlog] = useState(false)
    const [faq, setFaq] = useState(false)
    const [contact, setContact] = useState(false)
    const router = useRouter()
    console.log(router.route);
    const handledropdown = () => {
        if (!servicedrop)
            setServicedrop(true)
        else
            setServicedrop(false)
    }
    const handlehome = () => {
        if (!home)
            setHome(true)
        else
            setHome(false)

    }
    const handleabout = () => {
        if (!about)
            setAbout(true)
        else
            setAbout(false)

    }
    const handlefaq = () => {
        if (!faq)
            setFaq(true)
        else
            setFaq(false)

    }
    const handleblog = () => {
        if (!blog)
            setBlog(true)
        else
            setBlog(false)

    }
    const handlecontact = () => {
        if (!contact)
            setContact(true)
        else
            setContact(false)

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
        <div className='flex items-center justify-center'>
            <div className="w-full xl:w-[80rem] 2xl:w-[94rem] mt-1">
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
                            <div className='flex ml-3 mt-2 space-x-3 text-3xl'>
                                <Link href=""><AiOutlineInstagram /></Link>
                                <Link href=""><FaDiscord /></Link>
                                <Link href=""><AiFillYoutube /></Link>
                            </div>
                        </ul>
                    </div>
                </div> */}
                <div className="flex justify-evenly items-center">
                    <Link href='/'><h1 onClick={handlehome} className={`bg-white text-xl pb-2 hover:cursor-pointer ${home ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Home</h1></Link>
                    <Link href='/aboutUs'><h1 onClick={handleabout} className={`bg-white text-xl pb-2 hover:cursor-pointer ${about ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>AboutUs</h1></Link>
                    <h1 onClick={handledropdown} className={`bg-white text-xl pb-2 hover:cursor-pointer ${servicedrop ? 'border-t-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>What we offer</h1>
                    <Link href="/">
                        <div className=''>
                            <Image src={CA} alt=""></Image>
                        </div>
                    </Link>
                    <Link href='/blog'><h1 onClick={handleblog} className={`bg-white text-xl pb-2 hover:cursor-pointer ${blog ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Blog</h1></Link>
                    <Link href='/faq'><h1 onClick={handlefaq} className={`bg-white text-xl pb-2 hover:cursor-pointer ${faq ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>FAQ</h1></Link>
                    <Link href='/contactUs'><h1 onClick={handlecontact} className={`bg-white text-xl pb-2 hover:cursor-pointer ${contact ? 'border-b-4 border-[#8a8a8a] text-black font-bold' : 'text-[#8a8a8a]'}`}>Contact Us</h1></Link>
                    <div className='space-x-1 pb-2 text-lg text-white'>
                        <Link href='https://app.collabact.com/Account/SignIn'><button className='bg-blue-500 px-2 py-1'>Sign In</button></Link>
                        <Link href='https://app.collabact.com/'><button className='bg-blue-500 px-2 py-1'>Sign Up</button></Link>
                    </div>
                    {/* <ul className="menu menu-horizontal p-0 text-2xl">
                        {menu}
                    </ul> */}
                </div>
            </div>
            {servicedrop && <div className="bg-white mt-1 absolute top-[59px] xl:left-[22rem] 2xl:left-[33rem] z-50">
                <h1 onClick={handledropdown} className='hover:cursor-pointer'><Link href='/services'><p className='bg-white text-base uppercase'>1</p></Link></h1>
                <h1 onClick={handledropdown} className='hover:cursor-pointer'><Link href='/services2'><p className='bg-white text-base uppercase'>2</p></Link></h1>
            </div>}

        </div>

    );
};

export default Navbar;