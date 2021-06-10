import { Row, Nav, Col, Tab, Image } from "react-bootstrap";


import "./Classifications.css";

const Classifications = () => {
  return (
    <>
      <h1>Classifcations</h1>

      <a href="https://www.bbfc.co.uk/"
        target="_blank"
        style={{
          color: "#dc3545"
        }}>
        <span> <span>To find out more, visit the </span> BBFC website </span>
      </a>



      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" className="classification" >Universal</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="classification" >PG</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="classification" >12A</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth" className="classification" >15</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth" className="classification" >18</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>



          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Image src="https://static.wikia.nocookie.net/logopedia/images/a/a1/BBFC_U_%282002%29.svg" alt="U" />
                <h2>U Universal - Suitable for all</h2>
                <h5>
                  A U film should be suitable for audiences aged four years and
                  over, although it is impossible to predict what might upset
                  any particular child. U films should be set within a positive
                  framework and should offer reassuring counterbalances to any
                  violence, threat or horror. If a work is particularly suitable
                  for pre-school children, this will be indicated in the Ratings
                  Info.
                </h5>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Image src="https://static.wikia.nocookie.net/logopedia/images/9/9f/BBFC_PG_%282002%29.svg" alt="PG" />
                <h2>PG Parental Guidance</h2>
                <h5>
                  General viewing, but some scenes may be unsuitable for young
                  children. A PG film should not unsettle a child aged around
                  eight or older. Unaccompanied children of any age may watch,
                  but parents are advised to consider whether the content may
                  upset younger, or more sensitive, children.
                </h5>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Image src="https://static.wikia.nocookie.net/logopedia/images/1/1b/BBFC_12A_%282002%29.svg" alt="12A" />
                <h2>12A/12 – Suitable for 12 years and over</h2>
                <h5>
                  Films classified 12A and video works classified 12 contain
                  material that is not generally suitable for children aged
                  under 12. No one younger than 12 may see a 12A film in a
                  cinema unless accompanied by an adult. Adults planning to take
                  a child under 12 to view a 12A film should consider whether
                  the film is suitable for that child. To help them decide, we
                  recommend that they check the Ratings Info for that film in
                  advance. No one younger than 12 may rent or buy a 12 rated
                  video work.
                </h5>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Image src="https://static.wikia.nocookie.net/logopedia/images/0/08/BBFC_15_%282002%29.svg" alt="15" />
                <h2>15 – Suitable only for 15 years and over</h2>
                <h5>
                  No one younger than 15 may see a 15 film in a cinema. No one
                  younger than 15 may rent or buy a 15 rated video work.
                </h5>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Image src="https://static.wikia.nocookie.net/logopedia/images/c/c3/BBFC_18_%282002%29.svg" alt="18" />
                <h2>18 – Suitable only for adults</h2>
                <h5>
                  No one younger than 18 may see an 18 film in a cinema. No one
                  younger than 18 may rent or buy an 18 rated video work. Adults
                  should be free to choose their own entertainment.
                </h5>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>


    </>
  );
};

export default Classifications;
