import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const {user} = useAuth()
  const axiosSecure = useAxiosSecure();

  const {data: payments = []} = useQuery({
    queryKey: ['payments', user?.email],
    queryFn: async()=>{
      const res = await axiosSecure.get(`/payments/${user?.email}`)
      return res.data;
    }
  })
  return (
    <div>
      <Helmet><title>Food Master || Payment History</title></Helmet>
      <SectionHeader subTitle={'---Thank you---'} title={'Payment Histroy'}></SectionHeader>

      <div>
        <h2 className="font-bold text-xl mb-3">Total Payment: {payments.length}</h2>
      <table className="table">
            {/* head */}
            <thead className='bg-orange-400 text-white font-bold text-base'>
              <tr>
                <th>#</th>
                <th>Trx Id</th>
                <th>Price</th>
                <th>Status</th>
                <th>Payment Date</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.map((payment, idx)=> <tr key={payment._id}>
                  <th>
                    {idx + 1}
                  </th>
                  <td>
                    <span className='font-bold text-base'>
                   {payment.transactionId}
                    </span>
                  </td>
                  <td>
                    <span className='font-bold text-base'>${payment.price}</span>
                  </td>
                  <td><span className='font-bold text-base'>{payment.status}</span></td>

                  <td><span className='font-bold text-base'>{new Date(payment.date).toLocaleDateString()}</span></td>
                  
                </tr>)
              }
              
            </tbody>         
          </table>
      </div>
    </div>
  );
};

export default PaymentHistory;