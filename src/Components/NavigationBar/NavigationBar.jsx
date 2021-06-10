import React, { useRef } from "react";
import { Nav, Navbar, Button, Form, FormControl, Image } from "react-bootstrap";
import axios from "axios";
import { NavLink } from "react-router-dom";
import SearchedMovie from "../SearchedMovie/SearchedMovie.jsx";
import UserRegistration from "../SignUp/UserRegistration";
import UserLogin from "../SignUp/UserLogin";
import Logo from "../static/Logo.png";
import { useState, useEffect } from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import RegisterButton from "./RegisterButton";

const NavigationBar = ({ setSearchedMovie, user, setUser }) => {
  const [showSearchModal, setShowSearchModal] = useState(false);

  const [showRegModal, setShowRegModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShowSearchModal = () => {
    setShowSearchModal(true);
  };
  const handleShowRegModal = () => {
    setShowRegModal(true);
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
          <Image src={Logo} alt="logo" width={150} />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/movies">What's On</Nav.Link>

          <Nav.Link href="/cinemas">Cinemas</Nav.Link>

          <Nav.Link to="/DiscussionBoard" href="/DiscussionBoard">
            Discussion Board
          </Nav.Link>

          <Nav.Link href="/contactus">Contact Us</Nav.Link>

          <Nav.Link to="/about" href="/about">
            About Us
          </Nav.Link>
        </Nav>

        {isLoggedIn ? (
          <>
            <h4>Hello {user.firstName} </h4>
            <br />
            <LogoutButton
              updateIsLoggedIn={setIsLoggedIn}
              updateUser={setUser}
            />
          </>
        ) : (
          <>
            <LoginButton
              updateIsLoggedIn={setIsLoggedIn}
              updateUser={setUser}
            />
            <RegisterButton />
          </>
        )}
        <Nav>
          <Button
            variant="outline-danger"
            type="submit"
            onClick={handleShowSearchModal}
          >
            <img src="https://img.icons8.com/metro/26/000000/search.png" />
          </Button>
        </Nav>
      </Navbar>

      <SearchedMovie
        showModal={showSearchModal}
        updateState={setShowSearchModal}
      />
    </>
  );
};

export default NavigationBar;
