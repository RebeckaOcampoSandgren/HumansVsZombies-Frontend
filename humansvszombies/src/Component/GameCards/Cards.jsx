import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState, array } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteGame } from "../../api/game";
import keycloak from "../../keycloak";
import RenderOnRole from "../../Service/RenderOnRole";
import '../../App.css';
import Loading from '../loading/Loading';

const apiUrl = process.env.REACT_APP_API_URL;

function Cards() {
  //Hooks
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [gameData, setData] = useState([]);

  let counter = 0;
  function handleCounter() {
    if (counter === 6) {
      counter = 0;
    }
    counter++;
  }

  //Gets all games
  useEffect(() => {
    fetch(`${apiUrl}/games`)
      .then((response) => response.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setError(error);
          setData(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);


  //Delete the game when delete button pressed
  const deleteGameClick = async (event) => {
    if (!window.confirm("Are you sure?\nThis can not be undone!")) {
      return;
    }
    const [clearError] = await deleteGame(event.target.id);
    if (clearError !== null) {
      window.location.reload();
    }
  };

  //Runs when details button is pressed
  function handleClick(event) {
    //Saves choosen gameId to localStorage
    localStorage.setItem("gameId", event.target.id);
  }
  if (error) {
      return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
      return <Loading message="Loading..." />
  } else {
    return (
      <div>
          <Container id="container" className="App">
              <Row xs={1} md={2} lg={2} xl={3} className="g-4" id="row">
                  {gameData.map(data =>
                    <Col>
                        <Card style={{ width: '18rem' }} id="card" key={data.gameId} onLoad={handleCounter()}>
                            <Card.Img variant="top" src={`zombieImages/zombie${counter}.png`} />
                            <Card.Body>
                                <Card.Title>{data.gameName}</Card.Title>
                                <Card.Text>
                                    <ul>
                                      <li>State: {data.gameState}</li>
                                      <li>Registered players: {data.players.length}</li>
                                    </ul>
                                </Card.Text>
                                {keycloak.auth() && (
                                    <Link to="/gamedetails" className="btn btn-dark col-md-5 m-1" direction="horizontal" gap={2} id={data.gameId} onClick={handleClick} >Details</Link>
                                )}
                                <RenderOnRole roles={['Admin']}>
                                    {keycloak.auth() && (
                                        <button className="btn btn-danger" onClick={deleteGameClick} id={data.gameId}>Delete game</button>
                                    )}
                                </RenderOnRole>
                            </Card.Body>
                        </Card>
                    </Col>
                  )}
              </Row>
          </Container>
      </div>
    )
  }
}

export default Cards;
