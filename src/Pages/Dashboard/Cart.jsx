import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionHeader from '../../components/SectionHeader';
import useCart from '../../hooks/useCart';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const Cart = () => {
  const [cart, refetch] = useCart()
  const axiosSecure = useAxiosSecure()

  // calculate total price
  const totalPrice = cart.reduce((sum, item)=> sum + item.price, 0)

  const handleDelete = (id)=>{
    Swal.fire({
      title: "Are you sure?😯",
      text: "You won't be delete this cart!💁‍♂️💁‍♂️",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/carts/${id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            Swal.fire({
              title: "Deleted!",
              text: "Your cart has been deleted.",
              icon: "success"
            });
            // refacth data 
            refetch();
          }
        })
        .catch(err=> toast.error(`${err.message}`))
      }
    });
  }

  return (
    <div>
      <Helmet>
        <title>Food Master || Dashboard-Cart</title>
      </Helmet>
      <SectionHeader subTitle={'---My Cart---'} title={"Wanna Add More"}></SectionHeader>
      <div className='px-7 bg-white rounded-lg py-7'>
        <div className='flex justify-between items-center'>
          <p className='font-bold text-base'>Total Order:- {cart.length}</p>
          <p className='font-bold text-base'>Total Price:- {totalPrice}$</p>
          <button className='btn bg-orange-400 text-white hover:bg-orange-400 font-bold text-base'>Pay</button>
        </div>
        {/* table data */}
        <div className="overflow-x-auto rounded-xl rounded-b-none mt-3">
          <table className="table">
            {/* head */}
            <thead className='bg-orange-400 text-white font-bold text-base'>
              <tr>
                <th>Si Num</th>
                <th>Item Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((item, idx)=> <tr key={item._id}>
                  <th>
                    {idx + 1}
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className='font-bold text-base'>{item.name}</span>
                  </td>
                  <td><span className='font-bold text-base'>{item.price}$</span></td>
                  <th>
                    <button onClick={()=> handleDelete(item._id)} className="btn btn-sm text-red-600 bg-white font-bold text-base"><FaTrashAlt/></button>
                  </th>
                </tr>)
              }
              
            </tbody>         
          </table>
        </div>
      </div>  
    </div>
  );
};

export default Cart;