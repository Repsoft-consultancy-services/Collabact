import React from 'react';
import Banner from './Banner';
import Offer from './Offer';
import Steps from './Steps';
import Woffer from './Woffer';

const index = () => {
    return (
        <div className='flex items-center flex-col text-black'>
            <Banner></Banner>
            <Offer></Offer>
            <Steps></Steps>
            <Woffer></Woffer>
        </div>
    );
};

export default index;