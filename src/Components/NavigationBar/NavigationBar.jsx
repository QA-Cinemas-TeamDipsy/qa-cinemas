import {
  Nav,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  FormControl,
  Image
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import logo from "../static/Logo.png";

const NavigationBar = () => {
  return (
    <>
      <div className="nav-top">
         
        <Navbar sticky="top" >
          <Navbar.Brand to="/" href="/">
            <Image src={logo} width={150} />
          </Navbar.Brand>
          <Button variant="danger">Login</Button>
          <Button variant="danger">Sign Up</Button>
        </Navbar>


        <Navbar sticky="top" 
          className="nav-bottom"
          bg="dark"
          variant="dark"
          max-width="100%"
        >
          <Nav className="mr-auto">
            <Nav.Link href="/movies">What's On</Nav.Link>
            <Nav.Link href="/cinemas">Cinemas</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link to="/about" href="/about">About Us</Nav.Link>
          </Nav>

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar>
      </div>
    </>
  );
};

export default NavigationBar;
