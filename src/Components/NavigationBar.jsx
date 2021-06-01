
import { Nav, Row, Col, Navbar, Button, Form, FormControl } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" max-width="100%" >
                <Navbar.Brand href="#home">QA Cinemas</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#movies">What's On</Nav.Link>
                    <Nav.Link href="#cinemas">Cinemas</Nav.Link>
                    <Nav.Link href="#about">About Us</Nav.Link>
                    <Nav.Link href="#pricing">Contact Us</Nav.Link>
                </Nav>
                <Button>Login</Button>
                <Button>Sign Up</Button>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>

        </>
    )
}

export default NavigationBar;