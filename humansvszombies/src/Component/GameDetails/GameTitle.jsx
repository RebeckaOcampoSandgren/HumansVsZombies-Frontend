import { useState } from "react"
import Cards from "../GameCards/Cards"

const GameTitle = ({game}) => {
    return(
        <>
            <div id="gameTitle" className="text-center">
                <header>
                    <h2>Game title</h2>
                </header>
                <div className="gameDescription" key={game.gameId}>
                    {game.gameId && (
                    <p> {game.gameName} </p>
                        )}
                </div>
                <div>
                    <h4>Game Rules</h4>
                    <ul className="list-unstyled">
                        <li>Have fun</li>
                        <li>Be happy</li>
                        <li>Shoot well</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GameTitle