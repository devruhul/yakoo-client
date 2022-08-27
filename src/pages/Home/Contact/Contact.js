import axios from 'axios';
import React, { useState } from 'react';

const Contact = () => {

    const [contact, setContact] = useState({})

    // handle input on change
    const handleOnChange = (e) => {
        const nameInputField = e.target.name
        const valueInputField = e.target.value

        setContact({
            ...contact,
            [nameInputField]: valueInputField
        })
    }

    // handle submit of the contact form
    const handleContact = (e) => {
        const newContact = { ...contact };
        axios.post('https://yokoo-server.vercel.app/contact', newContact)
            .then(result => {
                if (result?.data?.insertedId) {
                    alert('Your message has been sent successfully');
                    e.target.reset()
                }
            })
        // stop reloding the page
        e.preventDefault();
    }
    return (
        // Contact page        
        <div className="bg-indigo-300">
            <form onSubmit={handleContact} className="flex w-full max-w-md space-y-3 mx-auto">
                <div className="w-full  px-5 m-auto mb-10 mt-10 rounded-lg shadow-lg dark:bg-gray-800">
                    <h3 className='text-4xl font-bold mb-10 opacity-90'>Let us handle your project<span className="text-purple-color opacity-90"> Professionally</span></h3>
                    <div className="grid  grid-cols-2 gap-6 m-auto">
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input required type="text" onChange={handleOnChange} id="contact-form-name" name='firstName' className="flex-1 appearance-none border border-purple-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="First Name" />
                            </div>
                        </div>
                        <div className="md:col-span-2 lg:col-span-1">
                            <div className=" relative ">
                                <input required type="text" onChange={handleOnChange} id="contact-form-name" name='lastName' className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-2">
                            <div className=" relative ">
                                <input required type="email" onChange={handleOnChange} id="contact-form-name" name='email' className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Email Address" />
                            </div>
                        </div>
                        <div className="col-span-2 lg:col-span-2">
                            <div className=" relative ">
                                <input required type="number" onChange={handleOnChange} id="contact-form-number" name='phoneNumber' className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" placeholder="Your Number" />
                            </div>
                        </div>
                        <div className="col-span-2">
                            <label className="text-gray-700" onChange={handleOnChange} htmlFor="name">
                                <textarea required className="flex-1 appearance-none border border-pink-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-purple-color focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent" id="message" placeholder="Your Message" name="message" rows="5" cols="40" minLength={10}>
                                </textarea>
                            </label>
                        </div>
                        <div className="col-span-2 text-center mb-8">
                            <button type='submit' className="btn btn-primary">Send Message</button>
                        </div>
                    </div>
                </div>
            </form>
        </div >
    );
};

export default Contact;