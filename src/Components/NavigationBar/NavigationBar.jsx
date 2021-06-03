import {
  Nav,
  Container,
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
import UserRegistration from "../SignUp/UserRegistration";
import {useState} from "react"


const NavigationBar = () => {

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  }
  
  return (
    <>

      <Navbar className="nav-top" sticky="top" bg="dark"
        variant="dark"
        expand="lg">
        <Navbar.Brand to="/" href="/">
          <Image src={logo} width={150} />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/movies">What's On</Nav.Link>
          <Nav.Link href="/cinemas">Cinemas</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link to="/about" href="/about">About Us</Nav.Link>
        </Nav>

        <Nav className="mr-3">
          <Button variant="danger" className="rounded-pill" style={{borderColor:"#343A40", border: "10px"}}>Login</Button>{' '}
          <Button variant="danger" className="rounded-pill" style={{borderColor:"#343A40", border: "10px"}} onClick={handleShowModal}>Sign Up</Button>
        </Nav>

        <Nav>
          <Form inline>
            {' '}
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Nav>
      </Navbar>

      <UserRegistration showModal={showModal}  updateState={setShowModal}/>
    </>
  );
};

export default NavigationBar;
