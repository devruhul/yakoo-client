/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-300 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-100">
                        <Link to="/"><li><a className='text-nav-purple'>Home</a></li></Link>
                        <Link to="bicycles"><li><a>Bicycles</a></li></Link>
                        {/* <Link to="/"><li><a>Dashboard</a></li></Link> */}
                        <Link to="reviews"><li><a>Reviews</a></li></Link>
                        <Link to="contact"><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <Link to="/" ><a className="btn btn-ghost normal-case text-xl">Yokoo</a></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="bicycles"><li><a>Bicycles</a></li></Link>
                    {/* <Link to="/"><li><a>Dashboard</a></li></Link> */}
                    <Link to="reviews"><li><a>Reviews</a></li></Link>
                    <Link to="contact"><li><a>Contact</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="login"><a className=" btn">Logout</a></Link>
            </div>
        </div>
    );
};

export default Header;