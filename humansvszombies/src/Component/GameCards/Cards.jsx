import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, array } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import keycloak from '../../keycloak';
import CreateGame from '../Administrator/CreateGame';

function Cards() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [gameId, setId] = useState([]);
    const [playerData, setPData] = useState([{}]);
    const [isZombieVisible, setZVisible] = useState(false);
    const [isHumanVisible, setHVisible] = useState(false);

    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(`$https://humanvszombies.azurewebsites.net/api/games/${gameId}/players`)
            .then((response) => response.json())
            .then((data) => {
                setPData(data);
                console.log(data)
            },
                (error) => {
                    setError(error);
                }
            )
    }, []);

    useEffect(() => {
        fetch("https://humanvszombies.azurewebsites.net/api/v1/games")
            .then((response) => response.json())
            .then((data) => {
                setIsLoaded(true);
                setError(error);
                setData(data);
            },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);
    
    

    function handleClick(e) {
        setId(e.target.id);
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>
    } else {
        return (
            <div>

                <Container id="container" fixed className="App py-2 overflow-hidden">
                    <Row id="row">
                        <Col id="col">
                            {data.map(data =>
                                <Card style={{ width: '18rem' }} id="card" key={data.gameId}>
                                    <Card.Img variant="top">{images}</Card.Img> 
                                    <Card.Body>
                                        <Card.Title>{data.gameName}</Card.Title>
                                        <Card.Text>
                                            <ul>
                                                <li>State: {data.gameState}</li>
                                                <li>Registered players: {data.players.length}</li>
                                            </ul>
                                        </Card.Text>
                                        {keycloak.authenticated && (
                                            <Link to="/gamedetails" className="btn btn-primary" id={data.gameId} onClick={(e) => handleClick(e)} >Details</Link>
                                        )}
                                    </Card.Body>
                                </Card>
                            )}
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}

export default Cards;