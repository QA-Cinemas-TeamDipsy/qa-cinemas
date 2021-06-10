import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {

  return (

    <div className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>QA Cinema</h4>
            <ul className="list-unstyled">
              <li>London, UK</li>
              <li>321 ABC Lane South</li>
              <li>12345-6789</li>
            </ul>
          </div>
          <div className="col">
            <h4>Get in Touch</h4>
            <ul className="list-unstyled">

              <li>
                <a href="./ContactUs" />
              Contact us
              
              </li>
            
              <li>
                <a href="./AboutUs" />
                About Us
              </li>

            </ul>
          </div>
          <div className="col">
            <h4>Follow Us!</h4>
            <ul className="list-unstyled">

              <li>
                <a href="https://www.facebook.com/profile.php?id=100068735958729" target="_blank">
                  <img src="https://img.icons8.com/android/24/000000/facebook-new.png" />
                  Facebook
                </a>
              </li>

              <li>
                <a href="https://twitter.com/QACinema4" target="_blank">
                  <img src="https://img.icons8.com/android/24/000000/twitter.png" />
                  Twitter
                </a>
              </li>

              <li>
                <a href="https://www.instagram.com/qacinemas123/" target="_blank">
                  <img src="https://img.icons8.com/material-rounded/24/000000/instagram-new.png" />
                  Instagram
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Team Dipsy | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>

        <hr />
      </div>
    </div>


  );
};

export default Footer;