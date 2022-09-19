import { useState, useEffect } from "react";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import CreateGame from "./Administrator/CreateGame";
import EditGame from "./Administrator/EditGame";
import EditPlayer from "./Administrator/EditPlayer";
import CreateMission from "./Administrator/CreateMission";
import EditMission from "./Administrator/EditMission";
import keycloak from "../keycloak";
import { Row, Col } from "react-bootstrap";
const apiUrl = process.env.REACT_APP_API_URL;

function AdministrationPage() {
  //Hooks
  const [data, setData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  //Get all the games to pass to edit game and edit player
  useEffect(() => {
    fetch(`${apiUrl}/Games`)
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

  return (
    <>
      <div className="adminDiv">
        <h1 id="adminWelcome">Welcome {keycloak.userName()}</h1>
        <div className="form-wrapper2">
          <Row>
            <Col>
              <CreateGame />
            </Col>
            <Col>
              <EditGame gameData={data} />
            </Col>
            <Col>
              <EditPlayer gameData={data} />
            </Col>
          </Row>
        </div>
        <div className="form-wrapper" id="missionContainer">
          <Row>
            <Col>
              <CreateMission gameData={data} />
            </Col>
            <Col>
              <EditMission gameData={data} />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
export default AdministrationPage;
