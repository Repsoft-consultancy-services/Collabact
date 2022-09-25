import React from 'react';
import Banner from './Banner';
import Events from './Events';
import Industry from './Industry';
import Slider from './Slider';
import Started from './Started';
import Steps from './Steps';


const HomeStart = () => {
    return (
        <div className=' text-black'>
            <Banner></Banner>
            <Started></Started>
            <Industry></Industry>
            <Slider></Slider>
            <Steps></Steps>
            <Events></Events>
        </div>
    );
};

export default HomeStart;