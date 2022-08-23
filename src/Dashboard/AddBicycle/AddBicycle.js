import React, { useState } from 'react';

const AddBicycle = () => {
    const [booking, setBooking] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name
        const value = e.target.value

        setBooking({
            ...booking,
            [field]: value
        })
    }

    const handleAddServices = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleAddServices} className="flex w-full max-w-xl  space-y-3 mx-auto">
            <div className="w-full  px-5 py-5 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    Add New <span className='text-purple-color'>Bicycle </span>
                </div>
                <div className="grid  grid-cols-2 gap-6 mx-auto">
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input required name="serviceName" onBlur={handleOnBlur} type="text" id="contact-form-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Service Title" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input required name="description" onBlur={handleOnBlur} type="text" id="contact-form-description" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Service Description" />
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input required name="price" onBlur={handleOnBlur} type="number" id="contact-form-price" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Service Price" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 col-span-2">
                        <textarea required name="imageLink" onBlur={handleOnBlur} className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" id="comment" placeholder="Service image link" rows="5" cols="40">
                        </textarea>
                    </div>
                    <div className="col-span-2">
                        <button type='submit' className="uppercase  py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default AddBicycle;