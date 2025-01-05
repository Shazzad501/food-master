import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';

const AllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const {data: users=[]}= useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  return (
    <div>
      <Helmet><title>Food Master || Users</title></Helmet>

      <div className='px-7 bg-white rounded-lg py-7'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-base'>All Users</p>
          <p className='font-bold text-base'>Total user:- {users.length}</p>
        </div>
        {/* table data */}
        <div className="overflow-x-auto rounded-xl rounded-b-none mt-3">
          <table className="table">
            {/* head */}
            <thead className='bg-orange-400 text-white font-bold text-base'>
              <tr>
                <th>Si Num</th>
                <th>User Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, idx)=> <tr key={user._id}>
                  <th>
                    {idx + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='font-bold text-base'>{user.name}</span>
                  </td>
                  <td><span className='font-bold text-base'>{user.email}</span></td>
                  <th>
                    <button  className="btn btn-sm text-orange-500 bg-white font-bold text-base"><FaUsers/></button>
                  </th>
                  <th>
                    <button  className="btn btn-sm text-red-600 bg-white font-bold text-base"><FaTrashAlt/></button>
                  </th>
                </tr>)
              }
              
            </tbody>         
          </table>
        </div>
      </div>  
      {/* onClick={()=> handleDelete(item._id)} */}
    </div>
  );
};

export default AllUsers;