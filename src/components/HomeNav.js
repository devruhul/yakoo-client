import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const HomeNav = () => {
  const { yokooUser } = useAuth()
  return (
    // Home nav
    <header className="footer flex justify-between content-center p-4 bg-footer-bg text-black">
      <div className=" grid-flow-col flex flex-center">
        <i className="fa-solid fa-phone mt-1"></i>
        <a href="tel:+8801764896633"><span>01764896633</span></a>
      </div>
      {/* If user is not availble then show login and register otherwise hide it   */}
      {!yokooUser.email && <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end'><i className="fa-solid fa-key mt-1"></i>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link></div>}
    </header>
  );
};

export default HomeNav;