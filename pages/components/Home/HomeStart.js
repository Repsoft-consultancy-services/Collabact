import React from 'react';
import Banner from './Banner';
import Industry from './Industry';
import Slider from './Slider';
import Started from './Started';
import Steps from './Steps';


const HomeStart = () => {
    return (
        <div className='flex items-center flex-col text-black'>
            <Banner></Banner>
            <Started></Started>
            <Industry></Industry>
            <Slider></Slider>
            <Steps></Steps>
        </div>
    );
};

export default HomeStart;