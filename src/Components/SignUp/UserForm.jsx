import { Form, Row, Col } from "react-bootstrap";

const UserForm = () => {

    return (
        <>
            <Form>

                <Row>
                    <Form.Label>Name</Form.Label>
                    <Col>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control placeholder="First name" />
                    </Col>
                    <Col>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control placeholder="Last name" />
                    </Col>
                </Row>

                <Form.Group controlId="formPickCinema">
                    <Form.Label>Choose cinema</Form.Label>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Confirm Email address</Form.Label>
                    <Form.Control type="email" placeholder="Confirm email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPasswordConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="ConfirmPassword" />
                </Form.Group>

                <Row>
                    <Form.Label>Date of birth</Form.Label>
                    <Col>
                        <Form.Control placeholder="DD" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="MM" />
                    </Col>
                    <Col>
                        <Form.Control placeholder="YYYY" />
                    </Col>
                </Row>
            </Form>
        </>
    )
}

export default UserForm;