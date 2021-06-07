import { useState } from "react";

const BookTickets = ({ adultTicketPrice, childTicketPrice, seniorTicketPrice }) => {
  const [adultTickets, setAdultTickets] = useState("");
  const [adultTicketsCost, setAdultTicketsCost] = useState("");
  const [childTickets, setChildTickets] = useState("");
  const [childTicketsCost, setChildTicketsCost] = useState("");
  const [seniorTickets, setSeniorTickets] = useState("");
  const [seniorTicketsCost, setSeniorTicketsCost] = useState("");
  const [totalTickets, setTotalTickets] = useState("");
  const [totalTicketsPrice, setTotalTicketsPrice] = useState("");

  const adultTicketUpdate = (e) => {
    setTotalTickets(adultTickets + childTickets + seniorTickets);
    setAdultTickets(e.target.value);
    setAdultTicketsCost(e.target.value * adultTicketPrice);
    setTotalTicketsPrice(
      adultTicketsCost + childTicketsCost + seniorTicketsCost
    );
  };
  const childTicketUpdate = (e) => {
    setTotalTickets(adultTickets + childTickets + seniorTickets);
    setChildTickets(e.target.value);
    setChildTicketsCost(e.target.value * childTicketPrice);
    setTotalTicketsPrice(
      adultTicketsCost + childTicketsCost + seniorTicketsCost
    );
  };
  const seniorTicketUpdate = (e) => {
    setTotalTickets(adultTickets + childTickets + seniorTickets);
    setSeniorTickets(e.target.value);
    setSeniorTicketsCost(e.target.value * seniorTicketPrice);
    setTotalTicketsPrice(
      adultTicketsCost + childTicketsCost + seniorTicketsCost
    );
  };

  return (
    <Form>
      <Form.Group as={Col} controlId="adultTickets">
        <Form.Label>Adult Tickets</Form.Label>
        <Form.Control
          value={adultTickets}
          onChange={(e) => adultTicketUpdate(e)}
          as="select"
          defaultValue="Choose..."
        >
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="childTickets">
        <Form.Label>Child Tickets</Form.Label>
        <Form.Control
          value={childTickets}
          onChange={(e) => childTicketUpdate(e)}
          as="select"
          defaultValue="Choose..."
        >
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="seniorTickets">
        <Form.Label>Senior Tickets</Form.Label>
        <Form.Control
          value={seniorTickets}
          onChange={(e) => seniorTicketUpdate(e)}
          as="select"
          defaultValue="Choose..."
        >
          <option>Choose...</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
        </Form.Control>
      </Form.Group>

      <p>Total tickets: ${totalTickets}</p>
      <p>Total tickets cost: £${totalTicketsPrice}</p>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default BookTickets;