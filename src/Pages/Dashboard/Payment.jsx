import { Helmet } from "react-helmet-async";
import SectionHeader from "../../components/SectionHeader";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeForm from "../../components/StripeForm";


// stripe promis
const stripePromis = loadStripe(import.meta.env.VITE_Payment_Gateway_Key) 

const Payment = () => {
  console.log(stripePromis)
  return (
    <div>
      <Helmet><title>Food Master || Payment</title></Helmet>
      <SectionHeader subTitle={'---Get Payment---'} title={'Pay Amount & Get Item'}/>
      <div>
        <Elements stripe={stripePromis}>
          <StripeForm/>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;