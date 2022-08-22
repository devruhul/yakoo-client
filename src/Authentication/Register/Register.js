import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Register = () => {
    const [createUserData, setCreateUserData] = useState({})


    // eslint-disable-next-line no-unused-vars
    const location = useLocation()
    // const signUpUsingFacebook = () => {
    //     signInWithFacebook();
    // }

    const handleOnBlur = e => {
        // store the value of email and password field
        const emailText = e.target.name
        const passValue = e.target.value

        setCreateUserData({
            ...createUserData,
            [emailText]: passValue
        })
    }

    const signUpUsingEmail = (e) => {
        e.preventDefault();
        // create user with firebase
        // createParlourUser(createUserData.email, createUserData.password, createUserData.name, location)

        // match password
        if (createUserData.password !== createUserData.userConfirmPassword) {
            alert('Password do not match')
            return
        }
        else {
            alert('Register Successfully')
            e.target.reset()
        }
    }
    return (
        <div className="flex flex-col w-full mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-3xl font-bold text-gray-600 sm:text-2xl dark:text-white">
                Create an account
            </div>
            <div className="mt-4">
                <form autoComplete="off" onSubmit={signUpUsingEmail}>
                    <div className="flex flex-col mb-4">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-purple-color shadow-sm text-sm">
                                <i className="fa-solid fa-id-card"></i>
                            </span>
                            <input required type="text" name="name" onBlur={handleOnBlur} id="sign-up-name" className="flex-1 appearance-none border border-pink-300 w-full py-3 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-purple-color shadow-sm text-sm">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input required type="email" name="email" onBlur={handleOnBlur} id="sign-up-email" className="flex-1 appearance-none border border-pink-300 w-full py-3 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-4">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-purple-color shadow-sm text-sm">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input required type="password" name="password" onBlur={handleOnBlur} id="sign-up-password" className="flex-1 appearance-none border border-pink-300 w-full py-3 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Password" />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="btn btn-primary w-full">
                            Register
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/login" className="inline-flex items-center text-xs font-thin text-center text-purple-color hover:text-purple-color dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2 text-2xl">
                        Already created an account?
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Register;