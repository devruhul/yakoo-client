import React from 'react';
import { Link } from 'react-router-dom'
import slider1 from '../../../assets/images/slide-1.png';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen" style={{
                backgroundImage: `url(${slider1})`
            }}>
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold"> <span className='text-purple-color opacity-90'>Hello</span> there</h1>
                        <p class="mb-5 text-2xl">We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
                        <Link to="/bicycles" class="btn btn-primary">Explore</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;