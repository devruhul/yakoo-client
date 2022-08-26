import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const BicycleReview = () => {
    const { yokooUser } = useAuth();

    const [bicycleReview, setBicycleReview] = useState({})

    const handleOnChange = (e) => {
        const nameInputField = e.target.name
        const valueInputField = e.target.value

        setBicycleReview({
            ...bicycleReview,
            [nameInputField]: valueInputField
        })
    }

    const handleBicycleReview = (e) => {

        const reviewInfo = {
            ...bicycleReview,
            yokooUserName: yokooUser?.displayName,
            email: yokooUser?.email
        }

        axios.post('http://localhost:5000/review', reviewInfo)
            .then(result => {
                if (result.data?.insertedId) {
                    alert('Review Successfully')
                    e.target.reset()
                }
            })

        e.preventDefault();
    }
    return (
        <form onSubmit={handleBicycleReview} className="flex w-full max-w-xl space-y-3 mx-auto">
            <div className="w-full  px-5 py-5 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                    <span className='text-purple-color'>Review </span>
                    Bicycle
                </div>
                <div className="grid  grid-cols-2 gap-6 mx-auto">
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="userName" type="text" id="contact-form-user-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                value={yokooUser?.displayName}
                                placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2">
                        <div className=" relative ">
                            <input name="bicycleName" type="text" id="contact-form-company-name" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                placeholder="Bicycle Name" />
                        </div>
                    </div>
                    <div className="md:col-span-2 lg:col-span-2 col-span-2">
                        <div className=" relative ">
                            <textarea name="yourReview" type="text" id="contact-form-review" className=" resize flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                required
                                onChange={handleOnChange}
                                placeholder="Your Review" rows="5" cols="40">
                            </textarea>
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

export default BicycleReview;