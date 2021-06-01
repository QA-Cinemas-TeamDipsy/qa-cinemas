
import {Nav, Navbar, Button, Form, FormControl} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">QA Cinemas</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#movies">Movies</Nav.Link>
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