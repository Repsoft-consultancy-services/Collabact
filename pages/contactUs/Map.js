import Image from 'next/image';
import React from 'react';
import map from '../../public/contact/map.png'
const Map = () => {
    return (
        <div className='relative w-full h-[500px] 2xl:h-[1000px]'>
            <Image layout='fill' src={map} alt=""></Image>
        </div>
    );
};

export default Map;