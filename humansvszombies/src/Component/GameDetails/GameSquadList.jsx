import { useEffect, useState } from "react"
import { getSquadsInGame } from "../../api/squad";
import { createSquadMember } from "../../api/squadMembers";
import RenderOnRole from '../../Service/RenderOnRole';

const GameSquadList = (game) => {
    //Hooks
    const [squads, setSquads] = useState([]);
    const [ apiError, setApiError] = useState(null);
  
    //Get all the squads in a specific game
    useEffect(() => {
        const getSquads = async () => {
            const [ error, userResponse ] = await getSquadsInGame(game.info[0].gameId);
            if (error !== null){
                setApiError(error)
            }
            if(userResponse !== null){
                setSquads(userResponse)
            }
        }
        getSquads();
    }, [game.info[0].gameId]);

    //Create a new squadMember
    const addSquadMember = async (squadMemberObject) => {
        const [ error, userResponse ] = await createSquadMember(squadMemberObject)
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            alert("You are now a member in this squad")
            window.location.reload()
        }
    };

    //Creates a new squadMember in the database
    const join = (squadId) => {
        let squadMemberObject = { rank: Math.floor(Math.random() * (1 - 100) + 100), squadId : parseInt(squadId), playerId :game.info[1].playerId};
        addSquadMember(squadMemberObject)
    }

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
                                {game.info[2] ? <button value={s.squadId} className="btn btn-dark" onClick={e => join(e.target.value)}>Join</button> : null}
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