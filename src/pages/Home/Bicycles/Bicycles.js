import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Bicycles = () => {

    const { data, isLoading, isError, error } = useQuery(["bicycles"], async () => await axios.get('http://localhost:5000/bicycles'))

    if (isLoading) {
        return <div>Loading...</div>;
    }
    // error message query
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='mt-12 container'>
            <h3 className='text-4xl font-bold my-1  opacity-90'>Discover <br /> our new<span className="text-purple-color opacity 90"> arrivals</span></h3>
            <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">

                {
                    data.data?.map(bicycle => (
                        <div key={bicycle._id} className="card w-50 bg-base-100 shadow-xl  hover:bg-footer-bg hover:scale-90 hover:translate-y-1 duration-300">
                            <figure className="px-10 pt-10">
                                <img src={bicycle?.imageLink} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-purple-color cursor-pointer">{bicycle?.bicycleName}</h2>
                                <p>{bicycle?.description}</p>
                                <p>${bicycle?.price}</p>
                                <div className="card-actions">
                                    <Link to={`/bookBicycle/${bicycle._id}`}>
                                        <button className="btn btn-primary">Buy Now</button> </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Link to="/explore" ><button className="btn btn-primary my-20">Explore More Bicycles</button></Link>
        </div>


    );
};

export default Bicycles;