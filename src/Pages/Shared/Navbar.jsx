import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { FaBars, FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const {user, logoutUser} = useContext(AuthContext);

  const handleLogOut = ()=>{
    logoutUser()
    .then(()=>{
      toast.success("Log Out Success!!")
    })
    .catch(err=> toast.error(`${err.message}`))
  }

  const links= <>
      <li><NavLink 
      to='/'
      className={({ isActive }) =>
        `hover:bg-transparent hover:border-b-2 bg-transparent font-bold ${
          isActive ? 'text-white' : 'text-[#ebd247]'
        }`}
      >Home</NavLink></li> 

      <li><NavLink 
      to='/menu'
      className={({ isActive }) =>
        `hover:bg-transparent hover:border-b-2 bg-transparent font-bold ${
          isActive ? 'text-white' : 'text-[#ebd247]'
        }`}
      >Our Menu</NavLink></li>

      <li><NavLink 
      to='/order'
      className={({ isActive }) =>
        `hover:bg-transparent hover:border-b-2 bg-transparent font-bold ${
          isActive ? 'text-white' : 'text-[#ebd247]'
        }`}
      >Order Food</NavLink></li>

      {
      user && <li><Link to='' onClick={handleLogOut} className="lg:hidden">Log out</Link></li>
     }  
  </>
  return (
    <>
      <div className="navbar bg-black bg-opacity-55 fixed top-0 left-0 right-0 z-50">
        <div className="navbar-start">
          <a className="btn bg-transparent hover:bg-transparent border-none text-xl text-white">Food Master</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-3">
        <p>
          <Link className='text-yellow-500 font-bold text-xl flex'>
              <FaShoppingCart/>
              <span className='text-white -mt-3 text-base font-thin'>+0</span>
        </Link>
        </p>
        {
          user?<>
          <div 
           title={user?.displayName}
          className='rounded-full h-12 w-12 border-2 overflow-hidden'>
             <img 
            className="w-full h-full object-cover"
            src={user?.photoURL} 
            alt="user img" />
          </div>
          <button onClick={handleLogOut} className="hidden lg:flex btn font-bold text-base bg-transparent hover:bg-transparent border-gray-300 text-white">Log out</button>
          </>:<>
          <Link to='/login' className={`btn font-bold text-base bg-transparent  text-white hover:bg-transparent`}>Login</Link>
          </>
        }
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="lg:hidden">
              <p className='font-thin text-3xl text-white'><FaBars></FaBars></p>
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