import React from "react";
import { Image, Button, Container, Modal } from "react-bootstrap";
import CinemaMap from "./CinemaMap";
import "./CinemaModal.css"

const CinemaModal = (props) => {
    const [modalShow, setModalShow] = React.useState(false);
    const { name, image, location, directions } = props;
    console.log(image)
    console.log(name)
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Getting Here
        </Button>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}

                className="cinema_modal"
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                bg="dark"
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