import React from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import Items from '../Items/Items';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <InventoryItem></InventoryItem>
        </div>
    );
};

export default Home;