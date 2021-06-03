import { ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = () => {
    handleSubmit = async event => {
        event.preventDefault();
        const obj = {
            "amount":200,
            "cardId":"card_1IyBnZAlfwidcJXzOi0RmFYP",
            "oneTime":false,
            "email":"philipsephton1994@gmail.com"
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

    return(
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                <CardSection />
                <button className="btn-pay">Buy Now</button>
              </form>
            </div>
          );
    )
}
export default CheckoutForm;