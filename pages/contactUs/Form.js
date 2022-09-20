import React from 'react';

const Form = () => {
    return (
        <div className='bg-[#B5C2CF] bg-opacity-30 w-full relative lg:-mt-20'>
            <div className='w-full lg:w-[58rem] 2xl:w-[90rem] mx-auto p-5 mt-24 2xl:mt-52 mb-20'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='space-y-5'>
                        <h1 className='font-bold text-3xl'>Contact Information</h1>
                        <p className='pb-5'>We can help you find verified mentor that fit your budget and <br /> other requirements within just few days absolute free of <br /> charges.</p>
                        <div className='flex items-start space-x-2'>
                            <p className='font-bold'>Address</p>
                            <p>: 401/F, 4th Floor, Lotus Aura-2 <br />
                                Sama-Savli Road,<br />
                                Vemali, Vadodara</p>
                        </div>
                        <div className='flex items-start space-x-5'>
                            <p className='font-bold'>Phone</p>
                            <p>: (+91) 8849951310</p>
                        </div>
                        <div className='flex items-start space-x-7'>
                            <p className='font-bold'>Email</p>
                            <p>: info@collabact.com</p>
                        </div>
                    </div>
                    <div className='w-[30rem]'>
                        <form onSubmit="">
                            <div className='flex space-x-5'>
                                <input placeholder='NAME' type="text" className='py-2 pl-2 w-full' /><input type="text" placeholder='SURNAME' className='py-2 pl-2 w-full' />
                            </div>
                            <div className='flex space-x-5 mt-5'>
                                <input placeholder='PHONE' type="text" className='py-2 pl-2 w-full' /><input type="text" placeholder='EMAIL' className='py-2 pl-2 w-full' />
                            </div>
                            <select className='py-2 pl-2 w-full mt-5 text-gray-400' name="" id="">
                                <option disabled className='text-blue-300' value="">SUBJECT RELATED TO</option>
                            </select>
                            <textarea placeholder='MESSAGE' name="" id="" rows="4" className='py-2 pl-2 mt-5 w-full'></textarea>
                            <div>
                                 <button onClick={(e)=>{
                                    e.preventDefault()
                                    console.log("object");
                        
                                 }} type='submit' className='bg-blue-400 hover:shadow-[0px_3px_20px_0_rgba(0,0,0,0.50)] hover:shadow-blue-600 px-2 py-1 text-white'>SEND</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;