import { Modal, Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm.jsx";
import "./User.css"

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
                    <RegisterForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="formButton" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" className="formButton" onClick={handleSubmit}>Register</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserRegistration;