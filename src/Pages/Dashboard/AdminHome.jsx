import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaTruck, FaUtensils, FaWallet } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";

const AdminHome = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure();

  const {data: stats} = useQuery({
    queryKey: 'admin-stats',
    queryFn: async()=>{
      const res = await axiosSecure.get('/admin-stats');
      return res.data;
    }
  })
  const {revenue, menuItems, orders, users} = stats || {};

  return (
    <div>
      <h2 className="font-bold text-xl">Hi! Welcome {user?.displayName ? user?.displayName : 'Back'}</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
        {/* revenue */}
        <div className="p-5 bg-[#fb923c] text-white flex gap-3 items-center justify-center rounded-md">
          <div>
            <p className="font-bold text-5xl"><FaWallet/></p>
          </div>
          <div>
            <p className="font-bold text-xl">${revenue}</p>
            <p className="font-bold text-base">Revenue</p>
          </div>
        </div>
        {/* customer */}
        <div className="p-5 bg-[#fb923c] text-white flex gap-3 items-center justify-center rounded-md">
          <div>
            <p className="font-bold text-5xl"><FaPeopleGroup/></p>
          </div>
          <div>
            <p className="font-bold text-xl">{users}</p>
            <p className="font-bold text-base">Customers</p>
          </div>
        </div>
        {/* Products */}
        <div className="p-5 bg-[#fb923c] text-white flex gap-3 items-center justify-center rounded-md">
          <div>
            <p className="font-bold text-5xl"><FaUtensils/></p>
          </div>
          <div>
            <p className="font-bold text-xl">{menuItems}</p>
            <p className="font-bold text-base">Products</p>
          </div>
        </div>
        {/* Orders */}
        <div className="p-5 bg-[#fb923c] text-white flex gap-3 items-center justify-center rounded-md">
          <div>
            <p className="font-bold text-5xl"><FaTruck/></p>
          </div>
          <div>
            <p className="font-bold text-xl">{orders}</p>
            <p className="font-bold text-base">Orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;