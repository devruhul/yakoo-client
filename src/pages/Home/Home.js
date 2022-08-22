import React from 'react';
import Banner from './Banner/Banner';
import Bicycles from './Bicycles/Bicycles';
import NewsLetter from './Newsletter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Banner />
            <Bicycles />
            <NewsLetter />
        </div>
    );
};

export default Home;