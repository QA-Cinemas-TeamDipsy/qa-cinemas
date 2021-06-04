import { Nav, Container, Row, Col, Navbar, Button, Form, FormControl, Image } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const BookTicketsBtn = () => {

    return (
        <Link to="/BookTickets">
            <Button variant="outline-danger" >
                Book Tickets
            </Button>
        </Link>
    )
}
export default BookTicketsBtn;