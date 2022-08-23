/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Header = () => {
    const { yokooUser, yokooUserlogout } = useFirebase()
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <i className="fa-solid fa-bars-staggered"></i>
                    </label>
                    <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-100">
                        <Link to="/"><li><button className='btn btn-ghost normal-case text-xl'>Home</button></li></Link>
                        <Link to="bicycles"><li><button className='btn btn-ghost normal-case text-xl'>Bicycles</button></li></Link>
                        {/* <Link to="/"><li><a>Dashboard</a></li></Link> */}
                        <Link to="reviews"><li><button className='btn btn-ghost normal-case text-xl'>Reviews</button></li></Link>
                        <Link to="contact"><li><button className='btn btn-ghost normal-case text-xl'>Contact</button></li></Link>
                    </ul>
                </div>
                <Link to="/" ><button className="btn btn-ghost normal-case text-xl">Yokoo</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <Link to="/"><li><button className='btn btn-ghost normal-case text-base'>Home</button></li></Link>
                    <Link to="bicycles"><li><button className='btn btn-ghost normal-case text-base'>Bicycles</button></li></Link>
                    <Link to="reviews"><li><button className='btn btn-ghost normal-case text-base'>Reviews</button></li></Link>
                    <Link to="contact"><li><button className='btn btn-ghost normal-case text-base'>Contact</button></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <h2>{yokooUser?.displayName}</h2>
              {yokooUser?.email &&  <button onClick={yokooUserlogout} className=" btn ml-5">Logout</button>}
            </div>
        </div>
    );
};

export default Header;