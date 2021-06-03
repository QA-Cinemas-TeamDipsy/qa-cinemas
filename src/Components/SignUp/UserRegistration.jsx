import { Modal, Button } from "react-bootstrap";
import UserForm from "./UserForm.jsx";

const UserRegistration = ({showModal, updateState}) => {
    
    // const {showModal, updateState} = props;

    const handleClose = () => {
        updateState(false);
    };
    const handleSubmit = () => {
        
        updateState(false);
    }
    

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button> */}

            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Register</Button>
                </Modal.Footer>
            </Modal>


        </>
    );
}

export default UserRegistration;