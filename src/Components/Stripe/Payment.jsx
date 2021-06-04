import { loadStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm"
import { Button } from "bootstrap";
import PaymentForm from "../Booking/PaymentForm";

const stripePromise = loadStripe("pk_test_51Ixvo4AlfwidcJXzEk6Xjy2PbREpIBDjou952mvWJwn5ZIM7sBXFHJ4YOQAEUMMxf3lQCsnRtXC8RnQfAkb0NRwJ00pJ9LsJu3")

const Payment = () => {

    return (
        <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements>
    )
}

export default Payment;