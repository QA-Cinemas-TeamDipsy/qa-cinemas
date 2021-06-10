import React from "react";
import { Image, Button, Container, Modal, Row, Col, Popover, OverlayTrigger, ListGroup } from "react-bootstrap";
import CinemaMap from "./CinemaMap";
import "./CinemaModal.css"

const CinemaModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { name, image, location, directions } = props;
    console.log(image)
    console.log(name)

    const Bella_Italia = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Bella Italia</Popover.Title>
            <Popover.Content>
                <Container>
                    
                        <img style={{ width: 200, height: undefined }} src="https://img.static-bookatable.com/4cddf887-3e40-4974-a1eb-1a80affee51e.jpg?404=bat2%2F404-restaurant.jpg&height=466&width=700&quality=75&mode=crop&scale=both&id=e927f122367a16e45c78650ffb367d52.jpg" alt="Bella Italia phot" />
                        <br />
                        <ListGroup variant="flush">
                            <ListGroup.Item>Lowry Centre, Unit G40a, Manchester, M50 3A</ListGroup.Item>
                            <ListGroup.Item>Bubbly chain venue for Italian pasta, pizza and grill dishes, with a special children's menu</ListGroup.Item>
                            <ListGroup.Item>CHILDREN UNDER 7 DINE FREE WHEN YOU SHOW A VALID MOVIE TICKET</ListGroup.Item>
                            <ListGroup.Item><a href="https://www.bellaitalia.co.uk/italian-restaurant/manchester/salford-quays"> https://www.bellaitalia.co.uk/italian-restaurant/manchester/salford-quays</a></ListGroup.Item>    
                            <ListGroup.Item>+441615492144</ListGroup.Item>    
                        </ListGroup>
                    
                </Container>
            </Popover.Content>
        </Popover>);
    const Costa = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Costa Coffee</Popover.Title>
            <Popover.Content>
                <Container>
                    
                        <img style={{ width: 200, height: undefined }} src="https://lh5.googleusercontent.com/p/AF1QipNrMh1yjvYhH-St0JbIHUSldxY5c3Ldw50OLG1m=w408-h306-k-no" alt="CostaPhoto" />
                        <br />
                        <ListGroup variant="flush">
                            <ListGroup.Item>G24 the Lowry Designer Outlet The Quays Lowry Outlet, Salford M50 3AG</ListGroup.Item>
                            <ListGroup.Item>Counter-service coffee chain offering hot drinks, iced coolers, sweet snacks and sandwiches</ListGroup.Item>
                            <ListGroup.Item>FREE COOKIE WHEN YOU ORDER A COFFE AND SHOW A VALID MOVIE TICKET</ListGroup.Item>
                            <ListGroup.Item><a href="https://www.costa.co.uk/">https://www.costa.co.uk/</a></ListGroup.Item>
                            <ListGroup.Item>+441618764391</ListGroup.Item>
                        </ListGroup>
                    
                </Container>
            </Popover.Content>
        </Popover>);
    const cafe = (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Café Rouge</Popover.Title>
            <Popover.Content>
                <Container>
                    
                        <img style={{ width: 200, height: undefined }} src="https://img.static-bookatable.com/bbcf3c97-4386-4fb2-bd4c-c9001cd0c1cb.jpg?404=bat2%2F404-restaurant.jpg&height=466&width=700&quality=75&mode=crop&scale=both&id=6d52387cb982c2265eb9a9319a0cdfc9.jpg" alt="CafeRouge" />
                        <br />
                        <ListGroup variant="flush">
                            <ListGroup.Item>The Lowry Outlet Mall, Unit G40B, Salford M50 3AZ</ListGroup.Item>
                            <ListGroup.Item>Chain bistro for French classics from croque-monsieurs to mussels in a retro Parisian setting</ListGroup.Item>
                            <ListGroup.Item>MOVIE VOUCHERS AVAILABLE WITH ANY PURCHASE AT THE COUNTER</ListGroup.Item>
                            <ListGroup.Item><a href="https://www.caferouge.com/bistro-brasserie/manchester/salford-quays">https://www.caferouge.com/bistro-brasserie/manchester/salford-quays</a></ListGroup.Item>
                            <ListGroup.Item>+441615492173</ListGroup.Item>
                        </ListGroup>
                    
                </Container>
            </Popover.Content>
        </Popover>);
    return (
        <>
            <Button 
            variant="primary" 
            onClick={() => setModalShow(true)}
            style={{
                backgroundColor:"#dc3545",
                borderColor:"#dc3545"
            }}>
                Getting Here
        </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id="cinema_modal"
                className="cinema_modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                bg="dark"
                autoFocus={true}
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <br />
                        <Image src={image} fluid />
                        <br />
                        <br />
                        <h4>Directions</h4>
                        <ul>
                            <li>By Train: {directions.train}</li>
                            <br />
                            <li>By Bus: {directions.bus}</li>
                        </ul>



                        <h4> Places To Go </h4>
                        <br />

                        <Row>
                            <Col><OverlayTrigger trigger="click" placement="bottom" overlay={Bella_Italia}>
                                <Button variant="danger">Bella Italia</Button>
                            </OverlayTrigger>

                            </Col>
                            <Col><OverlayTrigger trigger="click" placement="bottom" overlay={Costa}>
                                <Button variant="danger">Costa Coffee</Button>
                            </OverlayTrigger>

                            </Col>
                            <Col><OverlayTrigger trigger="click" placement="bottom" overlay={cafe}>
                                <Button variant="danger">Café Rouge</Button>
                            </OverlayTrigger>

                            </Col>

                        </Row>
                        <br />
                        <CinemaMap location={location} />



                    </Container>
                </Modal.Body>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    );

}
export default CinemaModal;