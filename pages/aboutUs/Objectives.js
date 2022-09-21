import Image from 'next/image';
import React, { useState } from 'react';
import visioni from '../../public/about/Vision.png'
import missioni from '../../public/about/Mision.png'
import valuei from '../../public/about/Value.svg'
import objectives from '../../public/about/Objective.png'
import { GoPrimitiveDot } from 'react-icons/go'


const Objectives = () => {
    const [visiond, setVisiond] = useState(true)
    const [missiond, setMissiond] = useState(false)
    const [valued, setValued] = useState(false)
    const [objectived, setObjectived] = useState(false)
    const handlevison = () => {
        setVisiond(true)
        setMissiond(false)
        setValued(false)
        setObjectived(false)
    }
    const handlemission = () => {
        setVisiond(false)
        setMissiond(true)
        setValued(false)
        setObjectived(false)
    }
    const handlevalue = () => {
        setVisiond(false)
        setMissiond(false)
        setValued(true)
        setObjectived(false)
    }
    const handleobjective = () => {
        setVisiond(false)
        setMissiond(false)
        setValued(false)
        setObjectived(true)
    }
    const vision = <>
        <div className='flex  flex-col lg:flex-row  items-center'>
            <div>
                <Image src={visioni} alt=""></Image>
            </div>
            <div className='px-5 lg:px-0'>
                <h1 className='text-xl xl:text-3xl font-bold mb-5 text-center lg:text-left'>OUR VISION</h1>
                <p className='mb-5'> <span className='font-bold'>For Sales Partner</span> - To develop an Entrepreneurial Mindset <br /> among the youth and make them capable of generating <br /> business.

                </p>
                <p><span className='font-bold'>For Business</span> - To support new and already existing <br /> businesses to thrive in their fields.
                </p>
            </div>
        </div>
    </>

    const mission = <div className='flex flex-col lg:flex-row justify-between items-center'>
        <div className='relative w-[280px] h-[280px] lg:w-[500px] lg:h-[300px] xl:w-[2000px] xl:h-[400px]'>
            <Image layout='fill' src={missioni} alt=""></Image>
        </div>
        <div className='lg:ml-24 px-5 lg:px-0'>
        <h1 className='text-xl xl:text-3xl font-bold mb-5 text-center lg:text-left'>OUR MISSION</h1>
            <div className='flex flex-col lg:flex-row xl:space-x-10 text-sm lg:text-base'>
                <div className=''>
                    <h1 className='uppercase font-bold mb-3'>what</h1>
                    <p>We will connect the youth of India to different SMEs, MSMEs, and Professionals who want to expand their business in various parts of India. Executive Sales Partners (ESPs) and the Businesses, along with CollabAct, will work together and perform the expansion activities.</p>
                </div>
                <div className=''>
                    <h1 className='uppercase font-bold mb-3'>how</h1>
                    <p>CollabAct will find out the best ESPs, who are taught and trained in different aspects like personality, selling skills, attitude and mindset. Simultaneously, we will find the best Businesses - who want to grow and expand their business. And become a mediator, and connect the right company with the right candidate, to work together for development. And ultimately have a Win-Win-Win situation wherein everyone grows.</p>
                </div>
            </div>
        </div>
    </div>
    const objective = <div className='flex flex-col lg:flex-row items-center'>
        <div>
            <Image src={objectives} alt=""></Image>
        </div>
        <div className='lg:ml-16 px-5 lg:px-0'>
        <h1 className='text-xl xl:text-3xl font-bold mb-5 text-center lg:text-left'>OUR OBJECTIVE</h1>
            <div className='flex items-center space-x-5 mb-5'>
                <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /> <p>To provide an opportunity for Collaboration in Business to the youth of India.</p>
            </div>
            <div className='flex items-center space-x-5 mb-5'>
                <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /> <p>To become a catalyst in forming and growing the relationship of the Indian youth with business.</p>
            </div>
            <div className='flex items-center space-x-5 mb-5'>
                <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /> <p>To help grow the business of the SME, MSMEs, and professionals and ultimately help grow the <br />Indian Economy.</p>
            </div>
            <div className='flex items-center space-x-5 mb-5'>
                <GoPrimitiveDot className='mt-1 text-[#0D72B8]' /> <p>To create possibilities of knowledge and experience for youth to develop their capabilities and <br />become an accomplished person who contributes to the nation.</p>
            </div>
        </div>
    </div>

    const value = <div className='flex flex-col lg:flex-row items-center mt-10'>
        <div className='relative w-[300px] h-[300px] lg:w-[600px] lg:h-[300px] xl:w-[2000px] xl:h-[500px]'>
            <Image layout='fill' src={valuei} alt=""></Image>
        </div>
        <div className='lg:ml-28 px-5 lg:px-0'>
            <h1 className='text-xl xl:text-3xl font-bold mb-5 text-center lg:text-left'>OUR VALUE</h1>
            <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 space-x-2 xl:space-x-10'>
                <div>
                    <h1 className='font-medium text-lg xl:text-2xl mb-5'>Integrity</h1>
                    <p>Transparency in our Operations, Truthfulness in our words, Conviction in our Actions, and Ethics in our Business are our strongest beliefs.</p>
                </div>
                <div>
                    <h1 className='font-medium text-lg xl:text-2xl mb-5'>Accountability</h1>
                    <p>We believe we are responsible for our actions and non-actions. Every stakeholder connected with CollabAct from anywhere is our key partner, and we are committed to their all-around growth.</p>
                </div>
                <div>
                    <h1 className='font-medium text-lg xl:text-2xl mb-5'>Contribution</h1>
                    <p>Limitless contribution is our priority - from one individual to a family, and ultimately towards the nation. Ultimately, we want to become a catalyst in the growth of business in India and the development of the young population.utes to the nation.</p>
                </div>
            </div>
        </div>
    </div>
    return (
        <div>
            <div className='flex justify-center space-x-5 lg:space-x-20 lg:ml-16 lg:-mt-7 font-semibold'>
                <button onClick={handlevison} className={`bg-transparent py-5`}><h1 className={`text-sm lg:text-[23px] uppercase ${visiond ? 'text-black' : 'text-gray-400'}`}>vision</h1></button>
                <button onClick={handlemission} className='bg-transparent py-5'><h1 className={`text-sm lg:text-[23px] uppercase ${missiond ? 'text-black' : 'text-gray-400'}`}>mission</h1></button>
                <button onClick={handlevalue} className='bg-transparent py-5'><h1 className={`text-sm lg:text-[23px]  uppercase ${valued ? 'text-black' : 'text-gray-400'}`}>value</h1></button>
                <button onClick={handleobjective} className='bg-transparent py-5'><h1 className={`text-sm lg:text-[23px]  uppercase ${objectived ? 'text-black' : 'text-gray-400'}`}>objective</h1></button>
            </div>
            <div className='w-full lg:ml-5 xl:w-[70rem]'>
                {
                    visiond && vision
                }
                {
                    missiond && mission
                }
                {
                    valued && value
                }
                {
                    objectived && objective
                }



            </div>
        </div>
    );
};

export default Objectives;