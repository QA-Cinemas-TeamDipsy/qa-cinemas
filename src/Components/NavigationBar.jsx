import {
  Nav,
  Row,
  Col,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <div>
        <Navbar className="nav-top">
          <Navbar.Brand href="#home">QA Cinema</Navbar.Brand>
          <Button variant="danger">Login</Button>
          <Button variant="danger">Sign Up</Button>
        </Navbar>

        <Navbar
          className="nav-bottom"
          bg="dark"
          variant="dark"
          max-width="100%"
        >
          <Nav className="mr-auto">
            <Nav.Link href="#movies">What's On</Nav.Link>
            <Nav.Link href="#cinemas">Cinemas</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
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
