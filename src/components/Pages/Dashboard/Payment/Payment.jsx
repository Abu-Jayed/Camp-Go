import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import useSelectedClass from "../../../../hooks/useSelectedClass";
import { useParams } from "react-router-dom";

// TODO: provide publishable Key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const stripePromise = loadStripe('pk_test_51NFUupDbR3hp4RSLCafW8w7cOaXJfdBOTRtHjUHFhLtZMA5ksmTv3GAHnZYGA25as0fRRJWSJkawAG9mUYnnfG4900NfaOr1mu');
const Payment = () => {
    const [selectedClass] = useSelectedClass()
    // console.log('payment',selectedClass);
    const {id} = useParams()
    const foundItem = selectedClass.find(item => item._id === id);
    const price = foundItem?.price
    console.log('payment-foundItem',foundItem);
    return (
        <div className="w-[600px]">
            <h2 className="text-3xl"> You Have to pay {price}tk</h2>
            <h1>{foundItem?.enrolled} enrolled</h1>
            <h1>{foundItem?.availableSeats} available seats</h1>
            <Elements stripe={stripePromise}>
                <CheckoutForm foundItem={foundItem} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;