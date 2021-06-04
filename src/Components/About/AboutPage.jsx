import details from "../static/TeamDetails.json"
import AboutCard from "./AboutCard"
import { CardDeck, Container } from "react-bootstrap"

const About = () => {
    return (
        <>
        <div className="text-center">
            <h1>About Us</h1>
        </div>
            <Container>
                <CardDeck>
                {

                    details.map((data, id) => (

                        
                            <AboutCard key={id} data={data} />
                         ))

                }
                </CardDeck>

            </Container>
          
            

        </>
    )

}

export default About;
