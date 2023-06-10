import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../../hooks/useSelectedClass";

// TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const stripePromise = loadStripe('pk_test_51NFUupDbR3hp4RSLCafW8w7cOaXJfdBOTRtHjUHFhLtZMA5ksmTv3GAHnZYGA25as0fRRJWSJkawAG9mUYnnfG4900NfaOr1mu');
const Payment = () => {
    const [selectdClass,total] = useSelectedClass()
    const price = parseFloat(total.toFixed(2))
    return (
        <div>
            <h2 className="text-3xl"> Teka o teka tumi uira uira aso...</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectdClass={selectdClass} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;