import { Button, Row, Container, Col } from 'react-bootstrap'
import ContactUsForm from './ContactUsForm'
import CheckoutForm from "../Stripe/CheckoutForm"
import { Elements, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from '../Booking/PaymentForm';

const ContactUs = () => {
    const stripePromise = loadStripe("pk_test_51Ixvo4AlfwidcJXzEk6Xjy2PbREpIBDjou952mvWJwn5ZIM7sBXFHJ4YOQAEUMMxf3lQCsnRtXC8RnQfAkb0NRwJ00pJ9LsJu3")

    return (
        <>
            <div className="text-center">
                <h1>Contact Us</h1>
                {/* <Elements stripe={stripePromise}>
            <PaymentForm />
        </Elements> */}
                <ContactUsForm />
                <br />
                <Container>
                    <Row>
                        <Col>
                            <Button variant="danger" target="_blank" href="https://www.facebook.com/profile.php?id=100068735958729">Facebook Page</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" target="_blank" href="https://www.instagram.com/qacinemas123/">Instagram Page</Button>
                        </Col>
                        <Col>
                            <Button variant="danger" target="_blank" href="https://twitter.com/QACinema4">Twitter Page</Button>
                        </Col>
                    </Row>
                    <br />
                </Container>
                <div className="text-center">
                    <Row>
                        <Col sm>
                            <p>You can also write to us on:<br />321 ABC Lane South<br />London<br />UK<br />EN1 4ND</p>
                        </Col>
                        <Col sm>
                            <p>Phone:<br />12345-6789</p>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default ContactUs;