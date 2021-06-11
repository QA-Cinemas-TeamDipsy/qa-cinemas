import { Nav, Container, Row, Col, Navbar, Button, Form, FormControl, Image } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const BookTicketsBtn = () => {
    let movieTitle = "passed from BookTicketsBtn"

    return (
        <Link
            to={{
                pathname: "/MovieTimes",
                state: { movieTitle }
            }}>
            <Button variant="outline-danger">Go To Tickets</Button>
        </Link>
    )
}
export default BookTicketsBtn;
