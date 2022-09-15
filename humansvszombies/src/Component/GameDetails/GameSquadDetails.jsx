import { useEffect, useState } from "react"
import { getPlayersInGame } from "../../api/game";
import { getSquadsInGame } from "../../api/squad";

const GameSquadDetails = ({game}) => {
//Hooks
const [squads, setSquads] = useState([]);
const [ apiError, setApiError] = useState(null);
const gameId = game.gameId;


//Get the players for the specific game
useEffect(() => {
    const getSquads = async () => {
        const [ error, userResponse ] = await getSquadsInGame(gameId);
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            setSquads(userResponse)
        }
    }
    getSquads();
    },[gameId]);

    return(
        <>
        <div id="SquadList" className="text-center">
                <header>
                    <h2>Squad details</h2>
                </header>
                <ul>
                {squads.map(s =>
                        <li key={s.squadMembers}>
                        <div class="card w-50" id="card">
                            <div class="card-body">
                                <h5 class="card-title">{s.squadMembers}</h5>
                            </div>
                        </div>
                    </li>    
                    )}
                </ul>
            </div></>
    )
}
export default GameSquadDetails