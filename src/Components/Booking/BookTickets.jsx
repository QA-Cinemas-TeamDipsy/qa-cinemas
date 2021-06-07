import { useState } from "react";
import PaymentForm from "./PaymentForm";


const BookTickets = ({ adultTicketPrice, childTicketPrice, movieTitle, firstName, time, date, rating }) => {
    const [adultTickets, setAdultTickets] = useState("");
    const [adultTicketsCost, setAdultTicketsCost] = useState("");
    const [childTickets, setChildTickets] = useState("");
    const [childTicketsCost, setChildTicketsCost] = useState("");
    const [totalTickets, setTotalTickets] = useState("")
    const [totalTicketsPrice, setTotalTicketsPrice] = useState("")

    const adultTicketUpdate = (e) => {
        setTotalTickets(adultTickets + childTickets);
        setAdultTickets(e.target.value);
        setAdultTicketsCost(e.target.value * adultTicketPrice);
        setTotalTicketsPrice(adultTicketsCost + childTicketsCost)
    }
    const childTicketUpdate = (e) => {
        setTotalTickets(adultTickets + childTickets);
        setChildTickets(e.target.value);
        setChildTicketsCost(e.target.value * childTicketPrice);
        setTotalTicketsPrice(adultTicketsCost + childTicketsCost)
    }

    return (
        <>
            <p>Hello, ${firstName}</p>
            <p>Movie: ${movieTitle}</p>
            <p>Date: ${date}, Time: ${time}</p>
            <Form>
                <Form.Group as={Col} controlId="adultTickets">
                    <Form.Label>Adult Tickets</Form.Label>
                    <Form.Control value={adultTickets} onChange={(e) => adultTicketUpdate(e)} as="select" defaultValue="Choose...">
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
                    <Form.Control value={childTickets} onChange={(e) => childTicketUpdate(e)} as="select" defaultValue="Choose...">
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
                {rating>10? (<p>You will need to provide a valid form of ID when attempting to enter the screening</p>):(<p></p>)}
                    <br />
                <PaymentForm totalTicketsPrice={totalTicketsPrice} />
            </Form>
        </>
    )
}

export default BookTickets;