import { useQuery } from '@tanstack/react-query';
import React from 'react';
import axios from 'axios';

const ManageBicycles = () => {

    // load all bicycles using react query
    const { data, isLoading, isError, error } = useQuery(["manageBicycles"],
        async () => await axios.get('https://yokoo-server.vercel.app/allBicycles'))
    
    // if data is loading
    if (isLoading) {
        return <div>Loading...</div>;
    }
    // error message query
    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    // delete a service
    const handleDeleteService = (_id) => {
        const result = window.confirm('Are you sure to delete?');
        if (result) {
            axios.delete(`https://yokoo-server.vercel.app/bicycles/${_id}`)
                .then(main => {
                    if (main.data?.deletedCount > 0) {
                        alert('Deleted Successfully!')
                    } else {
                        alert('Error!', main.data?.message)
                    }
                })
        }
    }

    return (
        // Manage Bicycles page
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-5 mx-auto">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">All
                    <span className='text-purple-color'> Bicycles </span>
                    List
                </div>
                <div className="grid grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    {
                        data?.data?.map(bicycle => (
                            <div key={bicycle._id} className="card w-50 bg-base-100 shadow-xl ">
                                <div className="flex flex-wrap ">
                                    <div className="text-gray-600 flex justify-between">
                                        <div>
                                            <img src={bicycle.imageLink} alt="" className=' w-50' />
                                        </div>
                                        <div className='mr-3'>
                                            <button onClick={() => handleDeleteService(bicycle._id)} className="btn btn-primary ">Delete</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title hover:text-purple-color cursor-pointer">{bicycle?.bicycleName}</h2>
                                    <p>{bicycle?.description}</p>
                                    <p>${bicycle?.price}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageBicycles;