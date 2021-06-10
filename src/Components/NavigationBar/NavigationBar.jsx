import React, { useRef } from "react";
import { Nav, Navbar, Button, Form, FormControl, Image } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from "../static/Logo.png";

const NavigationBar = ({ setSearchedMovie }) => {
  const movieRef = useRef("");

  const { handleFilter, query } = props;

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("eref", movieRef.current.value);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=1fac6c28&t=${movieRef.current.value}`
    );
    // console.log("data", data);
    setSearchedMovie(data);
  };

  return (
    <>
      <Navbar
        className="nav-top"
        sticky="top"
        bg="dark"
        variant="dark"
        expand="lg"
      >
        <Navbar.Brand to="/" href="/">
          <Image src={logo} width={150} />
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link href="/movies">What's On</Nav.Link>
          <Nav.Link href="/cinemas">Cinemas</Nav.Link>
          <Nav.Link href="/contactus">Contact Us</Nav.Link>
          <Nav.Link to="/about" href="/about">
            About Us
          </Nav.Link>
        </Nav>

        <Nav className="mr-3">
          <Button
            variant="danger"
            className="rounded-pill"
            style={{ borderColor: "#343A40", border: "10px" }}
          >
            {" "}
            <img src="https://img.icons8.com/android/24/000000/login-rounded-right.png" />
            Login
          </Button>{" "}
          <Button
            variant="danger"
            className="rounded-pill"
            style={{ borderColor: "#343A40", border: "10px" }}
          >
            <img src="https://img.icons8.com/small/32/000000/user.png" />
            Sign Up
          </Button>
        </Nav>

        <Nav>
          <Form inline onSubmit={handleSubmit}>
            {" "}
            <input
              className="mx-auto"
              type="text"
              name="filterBar"
              id="filterBar"
              value={query}
              onInput={handleFilter}
              placeholder="Filter characters on page..."
            />
            <FormControl
              ref={movieRef}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button variant="outline-danger" type="submit">
              Search
              {/* Needs to redirect to homepage */}
            </Button>
          </Form>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavigationBar;
