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

const GameDetails = () => {

const [error, setError] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);
const [gameIdData, setData] = useState([]);
const [isZombieVisible, setZVisible] = useState(false);
const [isHumanVisible, setHVisible] = useState(false);


 useEffect(() => {
    const selectedGame = localStorage.getItem("gameId")
     fetch(`https://humanvszombies.azurewebsites.net/api/v1/games/${selectedGame}`)
     .then((response) => response.json())
     .then((data) => {
        setData(data);
      },
      (error) => {
         setError(error);
      }
      )
     },[]);

return(
    <>
    <NavbarLandningPage/>
    <RenderOnRole roles={['default-roles-hvz-auth']}>
    <GameTitle game = {gameIdData}/>
    <GameMap/>
    <GameRegistration></GameRegistration>
    </RenderOnRole>
    <GameBiteCode/>
    <GameSquadCreation game = {gameIdData}/>
    <RenderOnRole roles={['default-roles-hvz-auth']}>
    <GameSquadList game = {gameIdData}/>
    </RenderOnRole>
    <GameSquadDetails/>
    <GameChat/>

    </>
)
}

export default GameDetails