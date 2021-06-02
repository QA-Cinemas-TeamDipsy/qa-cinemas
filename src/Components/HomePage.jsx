import React, { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../Config";
import NavigationBar from "./NavigationBar";
import { Container } from "react-bootstrap";
import axios from "axios";

// // import axios from "axios";
const HomePage = () => {
  const [state, setState] = useState();
  //   useEffect(() => {
  //     fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         console.log(response);
  //       });
  //   }, []);

  useEffect(() => {
    axios
      .get(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((res) => {
        console.log(res);
        // setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <NavigationBar />

      {/* Movie Hero Section */}
      <div
        style={{
          background: `red`,
          height: `500px`,
          backgroundSize: `100%, cover`,
          backgroundPosition: `centre, centre`,
          width: `100%`,
          position: `relative`,
        }}
      >
        <div>
          <div
            style={{
              position: "absolute",
              maxWidth: `500px`,
              bottom: `2rem`,
              marginLeft: `2rem`,
            }}
          >
            <h1>Title</h1>
            <p style={{ color: `white`, fontSize: `1ream` }}>text....</p>
          </div>
        </div>
      </div>

      {/* Movie Lists */}

      <div>
        <button>Whats on</button>
        <button>Coming Soon</button>

        {/* <Container>
          <Row>
            <Col>1 of 2</Col>
            <Col>2 of 2</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
        </Container> */}
      </div>
    </>
  );
};

export default HomePage;
