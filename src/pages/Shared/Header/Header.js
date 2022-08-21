/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div class="navbar bg-base-300 purple-text">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="/"><li><a>Home</a></li></Link>
                        <Link to="/bicycles"><li><a>Bicycles</a></li></Link>
                        {/* <Link to="/"><li><a>Dashboard</a></li></Link> */}
                        <Link to="/reviews"><li><a>Reviews</a></li></Link>
                        <Link to="/contact"><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <Link to="/" ><a class="btn btn-ghost normal-case text-xl">Yokoo</a></Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <Link to="/"><li><a>Home</a></li></Link>
                    <Link to="/bicycles"><li><a>Bicycles</a></li></Link>
                    {/* <Link to="/"><li><a>Dashboard</a></li></Link> */}
                    <Link to="/reviews"><li><a>Reviews</a></li></Link>
                    <Link to="/contact"><li><a>Contact</a></li></Link>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn nav-text">Login</a>
            </div>
        </div>
    );
};

export default Header;