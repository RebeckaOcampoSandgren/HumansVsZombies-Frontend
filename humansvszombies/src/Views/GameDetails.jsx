import GameRegistration from "../Component/GameDetails/GameRegistration"
import GameTitle from "../Component/GameDetails/GameTitle"
import GameBiteCode from "../Component/GameDetails/GameBiteCode"
import GameSquadCreation from "../Component/GameDetails/GameSquadCreation"
import GameSquadDetails from "../Component/GameDetails/GameSquadDetails"
import GameChat from "../Component/GameDetails/GameChat"
import GameMap from '../Component/WorldMap/GameMap'
import NavbarLandningPage from "../Component/HOC/NavbarLandningPage"
import { useState, useEffect } from "react"
import GameSquadList from "../Component/GameDetails/GameSquadList"
import RenderOnRole from "../Component/RenderOnRole"
import KeycloakRoute from "../Component/HOC/KeycloakRoute"
import { getPlayersInGame } from '../api/game';
import keycloak from '../keycloak';
import { Container, Row, Card, Col } from 'react-bootstrap';

const GameDetails = () => {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [gameIdData, setData] = useState([]);
const [isZombieVisible, setZVisible] = useState(false);
const [isHumanVisible, setHVisible] = useState(false);
const [isRegistered, setIsRegistered] = useState(false);
const [ apiError, setApiError] = useState(null);
const [ players, setPlayers] = useState([]);

//fetch the selected game
useEffect(() => {
   const selectedGame = localStorage.getItem("gameId")
   console.log(selectedGame)
    fetch(`https://humanvszombies.azurewebsites.net/api/v1/games/${selectedGame}`)
    .then((response) => response.json())
    .then((data) => {
       setData(data);
     },
     (error) => {
        setError(error);
     })
},[]);

//check if the user already is player
const checkPlayer = () => {
   for (let i = 0; i < players.length; i++) {   
      if(players[i].user === keycloak.userId()){
         setIsRegistered(true)
         return;
      }
  }
  setIsRegistered(false)
}
   
//get the players for the specific game
useEffect(() => {
   const getPlayers = async () => {
       const [ error, userResponse ] = await getPlayersInGame(gameIdData.gameId);
       if (error !== null){
           setApiError(error)
       }
       if(userResponse !== null){
           setPlayers(userResponse)
       }
   }
   getPlayers();
},[gameIdData]);

//when players are fetched invoke checkPlayer
useEffect(() => {
   checkPlayer()
},[players]);

const renderRegisterAndMap = () => {
   if (!isRegistered) {
      return <Row className="d-flex align-items-center"><Col> <GameRegistration info = {[isRegistered, players.length, gameIdData.gameId]}/></Col><Col><GameMap/></Col></Row>
   } else {
     return <Row><Col><GameMap/></Col></Row>
   }
}

const renderUnregistered = () => {
   console.log(isRegistered)
   if (!isRegistered) {
      return 
      
   } else {
     return <Row><Col><GameMap/></Col></Row>
   }
}


return(
   <>
   <NavbarLandningPage/>
   <GameTitle game = {gameIdData}/>
   {renderRegisterAndMap()}
   {isRegistered ? <GameBiteCode/> : null}
   {isRegistered ? <GameSquadCreation game = {gameIdData}/> : null}
   <RenderOnRole roles={['default-roles-hvz-auth']}>
   <GameSquadList game = {gameIdData}/>
   </RenderOnRole>
   {isRegistered ? <GameSquadDetails/> : null}
   {isRegistered ? <GameChat/> : null}
    </>
)
}

export default GameDetails