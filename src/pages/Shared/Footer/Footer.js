import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-white bg-footer-bg body-font">
            <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <div className="flex title-font font-medium items-center md:justify-start justify-center text-white gap-7">
                        {/* location icon */}
                        <i className="fa-solid  text-white fa-location-dot text-3xl"></i>
                        <p className="mt-2 text-base text-white"> (0th Floor), Road,New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Company</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link to="/" className="text-white">About</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">Project</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white">Terms & Conditions</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-bold text-white tracking-widest text-lg mb-3">Quick Links</h2>
                        <nav className="list-none mb-10 space-y-2">
                            <li>
                                <Link to="/" className="text-white  ">Rentals</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white  ">Sales</Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white  ">Contact</Link>
                            </li>
                            <li>
                                <Link to="/" className="text-white  ">Our Blog</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:ml-3 space-y-3">
                        <div className="flex title-font font-bold items-center md:justify-start justify-center text-white">
                            <span className=" text-lg">About us</span>
                        </div>
                        <p className="mt-2 text-base text-white">Our award-winning stores are the heart and soul of our company - a haven for cyclists of all levels and disciplines.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bg-gray-400">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-base text-center sm:text-left">© 2022
                        <a to="" href="https://devruhul.netlify.app/" rel="noopener noreferrer" className="text-black text-base ml-1" target="_blank">Ruhul Amin </a>
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start text-lg">
                        <a href='https://www.facebook.com/devruhulaminmahfuj' target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook m-2"></i>
                        </a>
                        <a href="https://twitter.com/dev_ruhul" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter m-2"></i></a>
                        <a href="https://www.linkedin.com/in/devruhul/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin m-2"></i></a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;