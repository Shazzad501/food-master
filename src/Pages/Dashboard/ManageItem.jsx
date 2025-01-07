import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import useMenu from "../../hooks/useMenu";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const ManageItem = () => {
  const [menu, refecth] = useMenu();
  const axiosSecure = useAxiosSecure();

  // handle update item
  const handleUpdateItem=(item)=>{
    console.log(item);
  }

  // handle delete Item
  const handleDeleteItem=(item)=>{
    Swal.fire({
      title: "Are you sure?😯",
      text: "You won't be delete this item!💁‍♂️💁",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete item!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/menu/${item._id}`)
        .then(res=>{
          if(res.data.deletedCount>0){
            // refecth data into the db
            refecth();
            // success modal
            Swal.fire({
              title: "Deleted!",
              text: `${item.name} has been deleted!`,
              icon: "success"
            });
          }
        })
        .catch(err=> toast.error(`${err.message}`))
      }
    });
  }
  return (
    <div>    
      <Helmet><title>Food Master || Manage Items</title></Helmet>
      <SectionHeader subTitle={'---Hurry Up---'} title={'Manage an Items'}/>

      {/* data table */}
      <div className="overflow-x-auto rounded-xl rounded-b-none mt-3">
          <table className="table">
            {/* head */}
            <thead className='bg-orange-400 text-white font-bold text-base'>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                menu.map((item, idx)=> <tr key={item._id}>
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
                  <td><span className='font-bold text-base'>${item.price}</span></td>
                  <th>
                    <button onClick={()=>handleUpdateItem(item)} className="btn bg-orange-600 text-base font-bold btn-sm hover:bg-orange-500 text-white"><FaEdit/></button>
                  </th>
                  <th>
                    <button onClick={()=>handleDeleteItem(item)} className="btn btn-sm text-red-600 bg-white font-bold text-base"><FaTrashAlt/></button>
                  </th>
                </tr>)
              }
              
            </tbody>         
          </table>
        </div>
    </div>
  );
};

export default ManageItem;