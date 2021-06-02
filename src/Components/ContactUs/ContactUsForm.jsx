import { Form, Button, Container, Alert } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import { useState } from 'react'

const ContactUsForm = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_q7kggnf', 'template_r5cg8dx', e.target, 'user_GFikwRvFbBhQsqBJT1Y75')
            .then((result) => {
                console.log(result.text);
                setUserName("")
                setEmail("")
                setMessage("")
                setShow(true)

            }, (error) => {
                console.log(error.text);
            });
    }
    return (
        <Container>
            <Alert show={show} variant="success">
                <Alert.Heading>Email Sent!</Alert.Heading>
                <p>
                    Thank you for sending us an email, we may be in touch shortly
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
                    </Button>
                </div>
            </Alert>
            <Form className="contact-form" onSubmit={sendEmail}>

                <input type="hidden" name="contact_number" />

                <Form.Group controlId="nameInput">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={userName} placeholder="Name" onChange={(e) => setUserName(e.target.value)} name="contact_name" />
                </Form.Group>

                <br />

                <Form.Group controlId="emailInput">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} name="user_email" />
                </Form.Group>

                <br />

                <Form.Group controlId="Textarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" value={message} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} name="message" rows={4} />
                </Form.Group>

                <Button type="submit" value="Send" >Submit</Button>

                <br />

            </Form>
        </Container>
    )
}

export default ContactUsForm;