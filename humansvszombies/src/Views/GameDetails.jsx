import GameRegistration from "../Component/GameDetails/GameRegistration"
import GameTitle from "../Component/GameDetails/GameTitle"
import GameBiteCode from "../Component/GameDetails/GameBiteCode"
import GameSquadCreation from "../Component/GameDetails/GameSquadCreation"
import GameSquadDetails from "../Component/GameDetails/GameSquadDetails"
import GameChat from "../Component/GameDetails/GameChat"

const GameDetails = () => {
return(
    <>
    <GameTitle/>
    <GameRegistration></GameRegistration>
    <GameBiteCode/>
    <GameSquadCreation/>
    <GameSquadDetails/>
    <GameChat/>
    </>
)
}

export default GameDetails