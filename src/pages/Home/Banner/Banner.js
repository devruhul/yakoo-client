import React from 'react';
import { Link } from 'react-router-dom'
import slider1 from '../../../assets/images/slide-1.png';
import useFirebase from '../../../Hooks/useFirebase';

const Banner = () => {
    const { yokooUser } = useFirebase()
    return (
        <div>
            <div className="hero min-h-screen" style={{
                backgroundImage: `url(${slider1})`
            }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold"> Hello<span className='text-purple-color opacity-90'> {yokooUser?.displayName}</span> </h1>
                        <p className="mb-5 text-2xl">We’re a bike shop, a family and a team of riders, helping folks in New York explore their passion for cycling. Biking is more than transportation or exercise, it’s a lifestyle. Whether you need help with where to ride or are in need.</p>
                        <Link to="/bicycles" className="btn btn-primary">Explore</Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;