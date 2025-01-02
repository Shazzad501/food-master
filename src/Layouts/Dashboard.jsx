import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaCommentDots, FaHome, FaList, FaSearch, FaShoppingCart, FaStreetView, FaWallet } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex max-w-7xl mx-auto gap-5'>
      <Helmet>
        <title>Food Master || Dashboard</title>
      </Helmet>
      <aside className='w-64 min-h-screen bg-orange-400 text-black'>
        <div className='flex flex-col items-center justify-center mb-3 py-4'>
          <h2 className='font-bold text-2xl text-black'>Food Master</h2>
          <p className='font-bold text-base text-black'>Restaurent</p>
        </div>
        <ul className='menu'>
          <li><NavLink to='/dashboard/user-home' className='font-bold text-base'><span className='font-bold text-lg'><FaHome/></span> User Home</NavLink></li>

          <li><NavLink to='/dashboard/reservation' className='font-bold text-base'><span className='font-bold text-lg'><FaCalendar/></span> Reservation</NavLink></li>

          <li><NavLink to='/dashboard/payment' className='font-bold text-base'><span className='font-bold text-lg'><FaWallet/></span> Payment History</NavLink></li>

          <li><NavLink to='/dashboard/cart' className='font-bold text-base'><span className='font-bold text-lg'><FaShoppingCart/></span> My Cart</NavLink></li>

          <li><NavLink to='/dashboard/review' className='font-bold text-base'><span className='font-bold text-lg'><FaCommentDots/></span> Add Review</NavLink></li>

          <li><NavLink to='/dashboard/booking' className='font-bold text-base'><span className='font-bold text-lg'><FaList/></span> My Booking</NavLink></li>

          <div className='divider'></div>

          <li><NavLink to='/' className='font-bold text-base'><span className='font-bold text-lg'><FaHome/></span>Home</NavLink></li>

          <li><NavLink to='/order' className='font-bold text-base'><span className='font-bold text-lg'><FaSearch/></span>Menu</NavLink></li>

        </ul>
      </aside>
      <div className='flex-1'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;