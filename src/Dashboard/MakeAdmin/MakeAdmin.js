import React, { useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const { authToken } = useAuth()

    // Handle change of input
    const handleOnChange = (e) => {
        setEmail(e.target.value)
    }

    // Handle the make admin
    const handleMakeAdmin = (e) => {
        e.preventDefault();
        const user = { email };
        fetch('https://yokoo-server.vercel.app/users/makeAdmin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${authToken}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('admin added successfully')
                    e.target.reset();
                } else {
                    alert('admin existed')
                }
            })
        // stop relaoding the page after click the button
        e.preventDefault();
    }

    return (
        // Make admin form
        <div>
            <form onSubmit={handleMakeAdmin} className="flex w-full max-w-xl space-y-3 mx-auto">
                <div className="w-full  px-5 py-5 m-auto bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className="mb-6 text-3xl font-bold text-center text-gray-800 dark:text-white">
                        Add a New <span className='text-span-text'>Admin </span>
                    </div>
                    <div className="grid  grid-cols-2 gap-6 mx-auto">
                        <div className="col-span-2 lg:col-span-2">
                            <div className=" relative ">
                                <input name="email" type="email" id="contact-form-admin-email" className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    required
                                    onChange={handleOnChange}
                                    placeholder="Admin Email" />
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
        </div>
    );
};

export default MakeAdmin;