import React from 'react';
import Administration from './Administration';
import Advisory from './Advisory';
import Banner from './Banner';
import Objectives from './Objectives';

const index = () => {
    return (
        <div className='flex items-center flex-col text-black'>
        <Banner></Banner>
        <Objectives></Objectives>
        <Administration></Administration>
        <Advisory></Advisory>
        </div>
    );
};

export default index;