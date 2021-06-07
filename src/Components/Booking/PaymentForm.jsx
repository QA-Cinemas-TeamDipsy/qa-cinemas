import { Form, Button, Col, Modal, Container } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'

const PaymentForm = ({ totalTicketsPrice }) => {

    console.log(totalTicketsPrice)
    const [email, setEmail] = useState("");
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvc, setCVC] = useState("");
    const [country, setCountry] = useState("");
    const [expMonth, setExpMonth] = useState("");
    const [expYear, setExpYear] = useState("2021");
    const [postCode, setPostCode] = useState("");

    const sendPayment = async event => {
        event.preventDefault();
        const obj = {
            "amount": totalTicketsPrice * 100,
            "cardId": "card_1IyBnZAlfwidcJXzOi0RmFYP",
            "oneTime": true,
            "email": email,
            "cardNumber": cardNumber,
            "cardExpMonth": expMonth,
            "cardExpYear": expYear,
            "cardCVC": cvc,
            "cardName": cardName,
            "country": country,
            "postal_code": postCode
        }
        console.log(obj);
        axios.post("http://localhost:4000/api/createCharge", obj)
            .then((res) => res)
            .then((result) => {

                console.log('successfully Added ' + result);
                setEmail("")
                setCardNumber("")
                setCardName("")
                setExpMonth("")
                setExpYear("2021")
                setCountry("")
                setPostCode("")
                setCVC("000")

            },
                (error) => {
                    console.error(error)
                }
            );
    }

    return (
        <>
        <Container style="font-color">
            <Modal.Header className="modal-header" closeButton>
                <Modal.Title >Stripe</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-body">
                <Form onSubmit={sendPayment}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="cardName">
                            <Form.Label>Card Name</Form.Label>
                            <Form.Control type="text" value={cardName} onChange={(e) => setCardName(e.target.value)} placeholder="Card Name" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="cardNumber">
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} placeholder="Card Number" />
                    </Form.Group>

                    <Form.Group controlId="cardCVC">
                        <Form.Label>CVC</Form.Label>
                        <Form.Control value={cvc} onChange={(e) => setCVC(e.target.value)} type="number" placeholder="000" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="country">
                            <Form.Label>Country</Form.Label>
                            <Form.Control value={country} onChange={(e) => setCountry(e.target.value)} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="cardExpMonth">
                            <Form.Label>Card Exp Month</Form.Label>
                            <Form.Control value={expMonth} onChange={(e) => setExpMonth(e.target.value)} as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>01</option>
                                <option>02</option>
                                <option>03</option>
                                <option>04</option>
                                <option>05</option>
                                <option>06</option>
                                <option>07</option>
                                <option>08</option>
                                <option>09</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} controlId="cardExpYear">
                            <Form.Label>Card Exp Year</Form.Label>
                            <Form.Control value={expYear} onChange={(e) => setExpYear(e.target.value)} as="select" defaultValue="Choose...">
                                <option>Choose...</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                                <option>2026</option>
                                <option>2027</option>
                                <option>2028</option>
                                <option>2029</option>
                                <option>2030</option>
                                <option>2031</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="postCode">
                            <Form.Label>Post Code</Form.Label>
                            <Form.Control value={postCode} onChange={(e) => setPostCode(e.target.value)} />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <Modal.Footer className="modal-footer">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal.Body>
            </Container>
        </>
    )
}
export default PaymentForm;