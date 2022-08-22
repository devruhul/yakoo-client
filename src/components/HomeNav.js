/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const HomeNav = () => {
  return (
    <header className="footer flex justify-between content-center p-4 bg-neutral text-neutral-content">
      <div className=" grid-flow-col flex flex-center">
        <i className="fa-solid fa-phone mt-1"></i>
        <a href="tel:+8801764896633"><span>01764896633</span></a>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <i className="fa-solid fa-key mt-1"></i>
        <Link to="login">Login</Link>
        <Link to="register">Register</Link>
      </div>
    </header>
  );
};

export default HomeNav;