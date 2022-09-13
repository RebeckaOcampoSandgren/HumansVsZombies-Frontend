import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, array } from 'react';
import { Container, Row, Card, Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { deleteGame } from '../../api/game';
import keycloak from '../../keycloak';
import RenderOnRole from '../RenderOnRole';

function Cards() {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [gameData, setData] = useState([]);
const [selectedGame, setSelectedGame] = useState({game: ""});
const [isZombieVisible, setZVisible] = useState(false);
const [isHumanVisible, setHVisible] = useState(false);


useEffect(() => {
fetch(`https://humanvszombies.azurewebsites.net/api/v1/games`)
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
},[]);

const deleteGameClick = async (event) => {
    console.log(event.target.id);
    if (!window.confirm('Are you sure?\nThis can not be undone!')) {
        return
    }

    const [clearError] = await deleteGame(event.target.id)

    if (clearError !== null) {
        return
    }

}


function handleClick(event){

 localStorage.setItem("gameId", event.target.id)
    };

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
                                    {gameData.map(data =>
                                        <Card style={{ width: '18rem' }} id="card" key={data.gameId}>
                                        <Card.Img variant="top"src="https://cdn.wccftech.com/wp-content/uploads/2016/01/steamworkshop_webupload_previewfile_315734800_preview.png" />
                                        <Card.Body>
                                            <Card.Title>{data.gameName}</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>State: {data.gameState}</li>
                                                     <li>Registered players: {data.players.length}</li>
                                                </ul>
                                            </Card.Text>
                                            {keycloak.auth() && (
                                                 <Link to="/gamedetails" className="btn btn-primary" id={data.gameId} onClick={handleClick} >Details</Link>
  
                                            )}
                                            {/* Use this if you have the role as a user */}
                                            {/* <RenderOnRole roles={['default-roles-hvz-auth']}>*/}
                                            <RenderOnRole roles={['Admin']}>
                                            {keycloak.auth() && (
                                            <button onClick={deleteGameClick} id={data.gameId}>Delete game</button>
                                            )}
                                            </RenderOnRole>
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