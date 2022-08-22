import React from 'react';
import Banner from './Banner/Banner';
import Bicycles from './Bicycles/Bicycles';
import NewsLetter from './Newsletter/NewsLetter';
import Statictics from './Statistics/Statictics';

const Home = () => {
    return (
        <div>
            <Banner />
            <Bicycles />
            <Statictics />
            <NewsLetter />
        </div>
    );
};

export default Home;