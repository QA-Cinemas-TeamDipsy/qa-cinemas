import { Modal, Button } from "react-bootstrap";
import LoginForm from "./LoginForm.jsx";
import "./User.css"

const UserLogin = ({showModal, updateState}) => {
    
    // const {showModal, updateState} = props;

    const handleClose = () => {
        updateState(false);
    };
    const handleSubmit = () => {
        updateState(false);
    };
    

    return (
        <>
            <Modal
                show={showModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" className="formButton"  onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" className="formButton" onClick={handleSubmit}>Login</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UserLogin;