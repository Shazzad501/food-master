import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const links= <>
      <li><NavLink 
      to='/'
      className={({ isActive }) =>
        `hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
          isActive ? 'text-[#BB8506]' : ''
        }`}
      >Home</NavLink></li>       
      <li><NavLink 
      to='/contact'
      className={({ isActive }) =>
        `hover:bg-transparent hover:border-b-2 bg-transparent font-bold text-base ${
          isActive ? 'text-[#BB8506]' : ''
        }`}
      >Contact Us</NavLink></li>
  </>
  return (
    <>
      <div className="navbar bg-black bg-opacity-50 text-white fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <a className="btn bg-transparent hover:bg-transparent border-none text-xl text-white">Food Master</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn bg-transparent hover:bg-transparent border-black text-white">Button</Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;