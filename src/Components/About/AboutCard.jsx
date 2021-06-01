import {Card, Button} from 'react-bootstrap'

const AboutCard = (props) => {
    const { name, age, jobTitle, Hobbies, email, img } = props.data;


console.log(props);
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{jobTitle}, {age}</Card.Subtitle>
                <Card.Text>
                    obbies:{Hobbies}"
                    Email:{email}
                    
                  
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>

    )

}

export default AboutCard;