import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({})

    // eslint-disable-next-line no-unused-vars
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
                <button onClick={handleGoogleSignin} class="btn btn-primary w-full"> <i className="fa-brands fa-google mr-2"></i>Google</button>
            </div>
            <div className="mt-8">
                <form autoComplete="off" onSubmit={handleloginSubmit}>
                    <div className="flex flex-col mb-2">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-purple-color shadow-sm text-sm">
                                <i className="fa-solid fa-envelope"></i>
                            </span>
                            <input required type="email" name="email" id="sign-in-email" onBlur={handleOnChange} className="flex-1 appearance-none border border-purple-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="flex flex-col mb-6">
                        <div className="flex relative ">
                            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-purple-color shadow-sm text-sm">
                                <i className="fa-solid fa-lock"></i>
                            </span>
                            <input required type="password" name="password" onBlur={handleOnChange} id="sign-in-password" className=" flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-purple-color placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Password" />
                        </div>
                    </div>
                    <div className="flex w-full">
                        <button type="submit" className="btn btn-primary w-full">
                            Login
                        </button>
                    </div>
                </form>
            </div>
            <div className="flex items-center justify-center mt-6">
                <Link to="/register" className="inline-flex items-center text-base font-thin text-center text-purple-color hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                    <span className="ml-2 text-2xl">
                        You don't have an account?
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default Login;