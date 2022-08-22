import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    const location = useLocation()
    // handle login text and password field
    const handleOnChange = e => {
        const emailText = e.target.name
        const passValue = e.target.value

        setLoginData({
            ...loginData,
            [emailText]: passValue
        })
    }
    // handle login submit
    const handleloginSubmit = e => {
        e.preventDefault()
        // sign in user with firebase
        // signInParlourUser(loginData.email, loginData.password, location)
        e.target.reset()
        alert('Login Successfully')
    }

    // handle google sign in
    const handleGoogleSignin = () => {
        // signInWithGoogle(location)
    }
    return (
        <div className="flex flex-col w-full mx-auto max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
            <div className="self-center mb-6 text-3xl font-bold text-gray-600 sm:text-2xl dark:text-white">
                Login To Your Account
            </div>
            <div className="flex gap-4 item-center">
                {/* <button type="button" className="py-2 px-4 flex justify-center items-center  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <i className="fa-brands fa-facebook mr-2"></i>
                    Facebook
                </button> */}
                <button onClick={handleGoogleSignin} type="button" className="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    <i className="fa-brands fa-google mr-2"></i>
                    Google
                </button>
            </div>
            <div className="mt-8">
                <form autoComplete="off" onSubmit={handleloginSubmit}>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input required type="email" name="email" id="sign-in-email" onBlur={handleOnChange} className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input required type="password" name="password" onBlur={handleOnChange} id="sign-in-password" className=" flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Password" />
                        </div>
                    </div>
                    <div className="flex items-center mb-6 -mt-4">
                        <div className="flex ml-auto">
                            <a href="/#" className="inline-flex text-lg font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                Forgot Your Password?
                            </a>
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="  focus:ring-purple-500 focus:ring-offset-purple-200  w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2   uppercase my-2 py-2
                        px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400 ">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/register" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2 text-2xl">
                        You don't have an account?
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Login;