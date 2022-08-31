import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Container, Row, Card, Col } from 'react-bootstrap';



function LandingPage() {

    return (
        <>
            <div className="LandingPagedDiv">
                <h1 id="LandingPageTitle">Games</h1>

                <Container id="container" fixed className="App py-2 overflow-hidden">
                    <Row id="row">
                        <Col id="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton">Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col id="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton" >Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col id="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton">Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <br></br>

                    <Row id="row">
                        <Col id="col">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top"src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton">Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col >
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton">Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://dummyimage.com/50/000/fff.jpg" />
                                <Card.Body>
                                    <Card.Title>Game title</Card.Title>
                                    <Card.Text>
                                        <ul>
                                            <li>State</li>
                                            <li>Number of registered players</li>
                                            <li>Dates</li>
                                        </ul>
                                    </Card.Text>
                                    <Button variant="primary" id="ChooseGameButton">Click to play</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>

            </div>
        </>
    );
}
export default LandingPage