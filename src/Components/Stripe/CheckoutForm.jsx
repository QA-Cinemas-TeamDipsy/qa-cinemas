import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import CardSection from "./CardSection"

const CheckoutForm = () => {
    const handleSubmit = async event => {
        event.preventDefault();
        const obj = {
            "amount":200,
            "cardId":"card_1IyBnZAlfwidcJXzOi0RmFYP",
            "oneTime":true,
            "email":"philipsephton1994@gmail.com",
            "cardNumber":4242424242424242,
            "cardExpMonth":"04",
            "cardExpYear":"2027",
            "cardCVC":"558",
            "cardName":"Edward Kenway",
            "country":"India",
            "postal_code":"123456"
        }
        axios.post("http://localhost:4000/api/createCharge", obj)
        .then((res) => res)
        .then((result) => {
            console.log('successfully Added '+ result)
            
        },
            (error) => {
                console.error(error)
            }
        );
    }

    return(
            <div>
              <form onSubmit={handleSubmit}>
                <CardSection />
                <button className="btn-pay">Buy Now</button>
              </form>
            </div>
    )
}
export default CheckoutForm;