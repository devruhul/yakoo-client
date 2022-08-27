import React, { useState } from 'react';
import axios from 'axios';

const AddBicycle = () => {
    const [bicycleAdd, setBicycleAdd] = useState({});

    // get input value
    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value

        setBicycleAdd({
            ...bicycleAdd,
            [field]: value
        })
    }

    // send cycle to server
    const handleAddServices = (e) => {
        axios.post('https://yokoo-server.vercel.app/bicycle', bicycleAdd)
            .then(result => {
                if (result.data?.insertedId) {
                    alert("Bicycle added successfully");
                    setBicycleAdd(result.data);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        // Add bicycle form
        <form onSubmit={handleAddServices} className="flex w-full max-w-xl  space-y-3 mx-auto">
            <div className="w-full  px-5 py-5 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Add New <span className='text-purple-color'>Bicycle </span>
                </div>
                <div className="grid  grid-cols-2 gap-6 mx-auto">
                    <div className="col-span-2 lg:col-span-2 ">
                        <div className=" relative ">
                            <input required name="bicycleName" onBlur={handleOnBlur} type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color  placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Bicycle Name" />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input required name="price" onBlur={handleOnBlur} type="number" id="contact-form-price" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color  placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Bicycle Price" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 col-span-2">
                        <input required name="imageLink" onBlur={handleOnBlur} className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color  placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" id="comment" placeholder="Bicycle image link" />
                    </div>
                    <div className="col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <textarea required name="description" onBlur={handleOnBlur} type="text" id="contact-form-description" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color  placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Bicycle Description" rows="5" cols="40" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <button type='submit' className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddBicycle;