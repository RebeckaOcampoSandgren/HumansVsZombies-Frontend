import { useEffect, useState } from "react"
import { getSquadsInGame } from "../../api/squad";
import RenderOnRole from '../../Service/RenderOnRole';

const GameSquadList = ({game}) => {
    //Hooks
    const [squads, setSquads] = useState([]);
    const [ apiError, setApiError] = useState(null);
  
    //Get the squads for the specific game
    useEffect(() => {
        const getSquads = async () => {
            console.log(game.gameId)
            const [ error, userResponse ] = await getSquadsInGame(game.gameId);
            if (error !== null){
                setApiError(error)
            }
            if(userResponse !== null){
                setSquads(userResponse)
            }
        }
        getSquads();
    }, [game.gameId]);


    return(
        <>
        <div id="SquadList">
                <header>
                    <h2>Available squads</h2>
                </header>
                <ul>
                {squads.map(s =>
                        <li key={s.squadId}>
                        <div class="card w-50" id="card">
                            <div class="card-body">
                                <h5 class="card-title">{s.squadName}</h5>
                                <p class="card-text">Total number of members : {s.squadMembers.length}</p>
                                <RenderOnRole roles={['default-roles-hvz-auth']}>
                                <button class="btn btn-dark" type="button">Join</button>
                                </RenderOnRole>
                            </div>
                        </div>
                    </li>    
                    )}
                </ul>
            </div></>
    )
}

export default GameSquadList