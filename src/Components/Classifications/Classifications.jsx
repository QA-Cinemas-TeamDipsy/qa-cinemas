import { Container, Row, Col, Button } from "react-bootstrap";

const Classifications = () => {


    return (
        <>
            <h2 className="text-center">BBFC Film Classifications</h2><br />
            <Container>
                <Row>
                    <Col  sm="2">
                        <img src="https://images.immediate.co.uk/production/volatile/sites/28/2019/02/16277-28797ce.jpg?quality=90&resize=584%2C471" width="100px" alt="U" />
                    </Col>
                    <Col>
                        <p>Universal.<br/> Very mild in impact.<br/> Suitable for all audiences.<br/> Should be suitable for ages 4 and up</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="2">
                        <img src="https://jaybullimore98.files.wordpress.com/2014/12/pg.png" width="100px" alt="PG" />
                    </Col>
                    <Col>
                        <p>Parental Guidance.<br/> Mild in impact.<br/> General viewing although some scenes might be unsuitable for young children.<br/> The boards policy is that it should not disturb any child aged 8 and up, however the parents are advised to consider whether the content should be suitable for their own child.</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="2">
                        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1532ff48-7262-48e9-a6eb-c8640efea973/de77qfi-eaed20c7-c7cb-4619-831a-067131d95682.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE1MzJmZjQ4LTcyNjItNDhlOS1hNmViLWM4NjQwZWZlYTk3M1wvZGU3N3FmaS1lYWVkMjBjNy1jN2NiLTQ2MTktODMxYS0wNjcxMzFkOTU2ODIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.GaIi5HVoMdDpZOTUwRikVgHTqSaKoqFC_Tz5RJOE9yc" width="100px" alt="12A" />
                    </Col>
                    <Col>
                        <p>12 Advisory.<br/> Moderate in Impact.<br/> People inder the age of 12 should be accompanied by an adult, Used only in cinema, this replaced 12 in 2002</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="2">
                        <img src="https://cdn.thinglink.me/api/image/512616823280107522/1240/10/scaletowidth" width="100px" alt="15" />
                    </Col>
                    <Col>
                        <p>Strong in impact.<br/> Nobody under the age of 15 may see a 15 film in the cinema</p>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col sm="2">
                        <img src="https://gamespot1.cbsistatic.com/uploads/scale_medium/mig/7/5/0/7/987507-bbfc18_69123_.jpg" width="100px" alt="18" />
                    </Col>
                    <Col>
                    <p>Very strong in impact.<br/> Nobody younger than 18 may view an 18 rated film in the cinema.<br/> These films may contain strong language, strong sexual content and strong blood and gore.</p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Classifications;