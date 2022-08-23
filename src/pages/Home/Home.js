import React from 'react';
import Banner from './Banner/Banner';
import Bicycles from './Bicycles/Bicycles';
import Contact from './Contact/Contact';
import Explore from './Explore/Explore';
import NewsLetter from './Newsletter/NewsLetter';
import Reviews from './Reviews/Reviews';
import Statictics from './Statistics/Statictics';

const Home = () => {
    return (
        <div>
            <Banner />
            <Bicycles />
            <Explore />
            <Reviews />
            <Statictics />
            <NewsLetter />
            <Contact />
        </div>
    );
};

export default Home;