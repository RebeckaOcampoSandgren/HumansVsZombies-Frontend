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
import RenderOnRole from "../Service/RenderOnRole"
import { getPlayersInGame } from '../api/game';
import keycloak from '../keycloak';
import { Row, Col } from 'react-bootstrap';

const GameDetails = () => {
const [error, setError] = useState(null);
const [gameIdData, setData] = useState([]);
const [isRegistered, setIsRegistered] = useState(false);
const [ apiError, setApiError] = useState(null);
const [ players, setPlayers] = useState([]);
const [ player, setPlayer] = useState({});

const apiUrl = process.env.REACT_APP_API_URL;

//fetch the selected game
useEffect(() => {
   const selectedGame = localStorage.getItem("gameId")
    fetch(`${apiUrl}/games/${selectedGame}`)
    .then((response) => response.json())
    .then((data) => {
       setData(data);
     },
     (error) => {
        setError(error);
     })
},[]);

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

//when players are fetched check if the user already is player
useEffect(() => {
   for (let i = 0; i < players.length; i++) {   
      if(players[i].user === keycloak.userId()){
         setIsRegistered(true)
         setPlayer(players[i])
         return;
      }
  }
  setIsRegistered(false)
},[players]);

//Show the register button and map for unregistered users or just show map if the user is already a player in that game
const renderRegisterAndMap = () => {
   if (!isRegistered) {
      return <Row className="d-flex align-items-center"><RenderOnRole roles={['default-roles-hvz-auth']}><Col><GameRegistration info = {[isRegistered, players.length, gameIdData.gameId]}/></Col></RenderOnRole><Col><GameMap/></Col></Row>
   } else {
     return <Row><Col><GameMap/></Col></Row>
   }
}

return(
   <>
   <NavbarLandningPage/>
   <GameTitle game = {gameIdData}/>
   {renderRegisterAndMap()}
   <RenderOnRole roles={['default-roles-hvz-auth']}>
   {isRegistered ? <GameBiteCode isHuman = {player.isHuman} /> : null}
   {isRegistered ? <GameSquadCreation game = {gameIdData}/> : null}
   </RenderOnRole>
   <GameSquadList info = {[gameIdData, player, isRegistered]}/>
   <RenderOnRole roles={['default-roles-hvz-auth']}>
   {isRegistered ? <GameSquadDetails/> : null}
   </RenderOnRole>
   {isRegistered ? <GameChat/> : null}
   <RenderOnRole roles={['Admin']}>
   <GameChat/>
   </RenderOnRole>
   </>
)
}

export default GameDetails;
