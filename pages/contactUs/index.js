import React from 'react';
import Banner from './Banner';
import Form from './Form';
import Map from './Map';

const index = () => {
    return (
        <div className='flex items-center flex-col text-black'>
            <Banner></Banner>
            <Form></Form>
            <Map></Map>
        </div>
    );
};

export default index;