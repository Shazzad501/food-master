import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";

const StripeForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const [clientSecret, setClientSecret] = useState('')
  const {user} = useAuth()
  const [trxId, setTrxId] = useState('')
  // error handle state
  const [err, setErr] = useState('')
  // user axios secure
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart()
  // calculate total price 
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res =>{
      setClientSecret(res.data.clientSecret)
    })
  }, [])

  const handleSubmit= async(event)=>{
    event.preventDefault();

    // if stripe & elements is undefind then return
    if(!stripe || !elements){
      return;
    }
    // if card element null then return
    const card = elements.getElement(CardElement);
    if(card === null){
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card,
    })

    if(error){
      toast.error(`${err}`)
      setErr(error.message)
    }
    else{
      console.log('Paymet Method', paymentMethod)
      setErr('')
    }

    // confirm payment
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || 'anonymus',
          email: user?.email || 'anonymus'
        }
      }
    })

    if(confirmError){
      toast.error(`${confirmError.message}`)
    }
    else{
      // console.log('payment intent', paymentIntent)
      if(paymentIntent.status === 'succeeded'){
        setTrxId(paymentIntent.id)

        // now save the payment in the db
        const payment = {
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          date: new Date(), //obisuly convert in uts date
          cartId: cart.map(item=> item._id),
          menuItemId: cart.map(item=> item.menuId),
          status: 'pending'
        }

        const res = await axiosSecure.post('/payments', payment)
        console.log(res.data)
      }
    }
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto border p-3 rounded-md border-black">
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="font-bold text-base btn btn-sm mt-3 bg-green-600 text-white hover:bg-green-600" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="font-bold text-red-600 text-base">{err}</p>
      {trxId && <p className="font-bold text-green-600 text-base">Your Transaction id: {trxId} </p>}
    </form>
  );
};
export default StripeForm;