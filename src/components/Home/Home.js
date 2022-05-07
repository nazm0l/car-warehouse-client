import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import OurLocation from '../OurLocation/OurLocation';
import OurPartner from '../OurPartner/OurPartner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <InventoryItem></InventoryItem>
            <OurPartner></OurPartner>
            <OurLocation></OurLocation>
        </div>
    );
};

export default Home;