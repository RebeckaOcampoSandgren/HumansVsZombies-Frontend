import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState, array } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import keycloak from '../../keycloak';

function Cards() {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [data, setData] = useState([]);
const [missionData, setMData] = useState([]);
const [playerData, setPData] = useState([]);
const [isZombieVisible, setZVisible] = useState();
const [isHumanVisible, setHVisible] = useState(false);

useEffect(() => {
    fetch('https://humanvszombies.azurewebsites.net/api/games')
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
fetch('https://humanvszombies.azurewebsites.net/api/games')
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

let dataP = data;

const renderPlayers = () => {
let totalPlayers = 0;
for (let i = 0; i < dataP.length; i++) {
    totalPlayers++;   
}
return totalPlayers;
}

if(error) {
    return <div>Error: {error.message}</div>;
} else if(!isLoaded) {
    return <div>Loading...</div>
}else{
    return (
     <div>

        <Container id="container" fixed className="App py-2 overflow-hidden">
                            <Row id="row">
                                <Col id="col">
                                    {data.map(data => 
                                        <Card style={{ width: '18rem' }} id="card" key={data.gameId}>
                                        <Card.Img variant="top"src="https://cdn.wccftech.com/wp-content/uploads/2016/01/steamworkshop_webupload_previewfile_315734800_preview.png" />
                                        <Card.Body>
                                            <Card.Title>{data.gameName}</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>State: {data.gameState}</li>
                                                    <li>Number of registered players: {renderPlayers()}</li>
                                                </ul>
                                            </Card.Text>
                                            {keycloak.authenticated && (
                                                  <Link to="/gamedetails" className="btn btn-primary" id='chooseGame'>Details</Link>
                                            )}
                                        </Card.Body>
                                    </Card>
                                        )}
                                </Col>
                            </Row>
        
                        </Container>
             </div>
    )}
}

export default Cards;