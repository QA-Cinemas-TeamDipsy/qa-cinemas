
import { Alert, Form, Button, Col, Container } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

const PaymentForm = (props) => {
  const [showErr, setShowErr] = useState(false);
  const [show, setShow] = useState(false);
  const cost = props.location.state.totalTicketsPrice;
  const adultTickets = props.location.state.adultTickets;
  const childTickets = props.location.state.childTickets;
  const seniorTickets = props.location.state.seniorTickets;
  const screeningDate = props.location.state.screeningDate;
  const screeningTime = props.location.state.screeningTime;
  const movieTitle = props.location.state.movieTitle;
  const [userEmail, setUserEmail] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cvc, setCVC] = useState("");
  const [country, setCountry] = useState("");
  const [expMonth, setExpMonth] = useState("");
  const [expYear, setExpYear] = useState("2021");
  const [postCode, setPostCode] = useState("");

  const sendPayment = async (event) => {
    event.preventDefault();
    const obj = {
      amount: cost * 100,
      cardId: "card_1IyBnZAlfwidcJXzOi0RmFYP",
      oneTime: true,
      email: userEmail,
      cardNumber: cardNumber,
      cardExpMonth: expMonth,
      cardExpYear: expYear,
      cardCVC: cvc,
      cardName: cardName,
      country: country,
      postal_code: postCode,
    };
    const objForAxios = {
      amount: cost * 100,
      email: userEmail,
      card_number: cardNumber,
      card_exp_month: expMonth,
      card_exp_year: expYear,
      card_cvc: cvc,
      card_name: cardName,
      country: country,
      postal_code: postCode,
      adult_tickets: adultTickets,
      child_tickets: childTickets,
      senior_tickets: seniorTickets,
      movie_day: screeningDate,
      movie_time: screeningTime,
      movie_title: movieTitle,
    };

    axios
      .post("http://localhost:8080/api/createCharge", obj)
      .then((res) => {
        console.log(res);
        axios.post("http://localhost:8080/api/booking/", objForAxios)
          .then((secondRes) => {
            console.log(secondRes)
            setUserEmail("");
            setCardNumber("");
            setCardName("");
            setExpMonth("");
            setExpYear("2021");
            setCountry("");
            setPostCode("");
            setCVC("000");
            setShow(true);
          }).catch((secondErr) => {
            console.error(secondErr);
          })
      })
      .catch((err) => {
        console.error(err);
        setShowErr(true);
      })
  }


  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Successful Payment!</Alert.Heading>
        <p>
          Thank you for booking, we will email you shortly with your receipt
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
      <Alert show={showErr} variant="danger">
        <Alert.Heading>Error with payment!</Alert.Heading>
        <p>
          There was a problem with the information you entered please can you
          try again
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShowErr(false)} variant="outline-danger">
            Close
          </Button>
        </div>
      </Alert>
      <Container>
        <Form onSubmit={sendPayment}>
          <Form.Row>
            <Form.Group as={Col} controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cardName">
              <Form.Label>Card Name</Form.Label>
              <Form.Control
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Card Name"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="cardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="Card Number"
            />
          </Form.Group>

          <Form.Group controlId="cardCVC">
            <Form.Label>CVC</Form.Label>
            <Form.Control
              value={cvc}
              onChange={(e) => setCVC(e.target.value)}
              type="number"
              placeholder="000"
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="cardExpMonth">
              <Form.Label>Card Exp Month</Form.Label>
              <Form.Control
                value={expMonth}
                onChange={(e) => setExpMonth(e.target.value)}
                as="select"
                defaultValue="Choose..."
              >
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
              <Form.Control
                value={expYear}
                onChange={(e) => setExpYear(e.target.value)}
                as="select"
                defaultValue="Choose..."
              >
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
              <Form.Control
                value={postCode}
                onChange={(e) => setPostCode(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
        </Form>
        <Button variant="primary" onClick={sendPayment}>
          Submit
        </Button>
      </Container>
    </>
  );
};
export default PaymentForm;