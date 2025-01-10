import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaCalendar, FaCommentDots, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaStreetView, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';
import { FaBookBookmark } from 'react-icons/fa6';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  // TODO: load admin data into the db
  const [isAdmin] = useAdmin();
  const [cart] = useCart()
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
          {
            isAdmin 
            ? 
            <>
            <li><NavLink to='/dashboard/admin-home' className='font-bold text-base'><span className='font-bold text-lg'><FaHome/></span> Admin Home</NavLink></li>

            <li><NavLink to='/dashboard/add-item' className='font-bold text-base'><span className='font-bold text-lg'><FaUtensils/></span>Add Items</NavLink></li>

            <li><NavLink to='/dashboard/manage-item' className='font-bold text-base'><span className='font-bold text-lg'><FaList/></span>Manage Items</NavLink></li>

            {/* <li><NavLink to='/dashboard/bookigs' className='font-bold text-base'><span className='font-bold text-lg'><FaBookBookmark/></span> Manage Bookings</NavLink></li> */}

            <li><NavLink to='/dashboard/all-users' className='font-bold text-base'><span className='font-bold text-lg'><FaUsers/></span> All Users</NavLink></li>

            </> 
            : 
            <>
            <li><NavLink to='/dashboard/payment' className='font-bold text-base'><span className='font-bold text-lg'><FaCalendar/></span> Payment</NavLink></li>

            <li><NavLink to='/dashboard/payment-history' className='font-bold text-base'><span className='font-bold text-lg'><FaWallet/></span> Payment History</NavLink></li>

            <li><NavLink to='/dashboard/cart' className='font-bold text-base'><span className='font-bold text-lg'><FaShoppingCart/></span> My Cart ({cart.length})</NavLink></li>

            {/* <li><NavLink to='/dashboard/review' className='font-bold text-base'><span className='font-bold text-lg'><FaCommentDots/></span> Add Review</NavLink></li> */}

            {/* <li><NavLink to='/dashboard/booking' className='font-bold text-base'><span className='font-bold text-lg'><FaList/></span> My Booking</NavLink></li> */}
            </>
          }

          <div className='divider'></div>
          {/* shared link */}

          <li><NavLink to='/' className='font-bold text-base'><span className='font-bold text-lg'><FaHome/></span>Home</NavLink></li>

          <li><NavLink to='/order' className='font-bold text-base'><span className='font-bold text-lg'><FaSearch/></span>Menu</NavLink></li>

          <li><NavLink to='/contact' className='font-bold text-base'><span className='font-bold text-lg'><FaEnvelope/></span>Contact</NavLink></li>

        </ul>
      </aside>
      <div className='flex-1 px-5 py-10 bg-base-200'>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;