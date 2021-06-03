//$ npm install emailjs-com --save
// this needs to be run for the email api
import emailjs from 'emailjs-com';
import { Button, Form, Row, Container, Col } from 'react-bootstrap'
import Payment from '../Stripe/Payment';
import ContactUsForm from './ContactUsForm'

const ContactUs = () => {


    return (
        <>
            <div className="text-center">
                <h1>Contact Us</h1>
                <Payment/>
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