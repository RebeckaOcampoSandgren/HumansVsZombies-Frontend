import { useState } from "react"
import Cards from "../GameCards/Cards"

const GameTitle = ({game}) => {
    return(
        <>
            <div id="gameTitle" className="text-center">
                <header>
                    <h2>{game.gameName}</h2>
                </header>
                <div className="gameDescription" key={game.gameId}>
                    {game.gameId && (
                    <p> {game.description} </p>
                        )}
                </div>
                <div>
                    <h4>Game Rules</h4>
                    <ul className="list-unstyled">
                        <li>Do not share personal information in the chat</li>
                        <li>Do not hurt each other</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default GameTitle