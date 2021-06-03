import { loadStripe } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/stripe-js";



const Payment = () => {
const stripePromise = loadStripe("pk_test_51Ixvo4AlfwidcJXzEk6Xjy2PbREpIBDjou952mvWJwn5ZIM7sBXFHJ4YOQAEUMMxf3lQCsnRtXC8RnQfAkb0NRwJ00pJ9LsJu3")
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    )
}

