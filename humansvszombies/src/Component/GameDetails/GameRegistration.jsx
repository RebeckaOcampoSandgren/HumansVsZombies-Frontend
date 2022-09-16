import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import {createPlayer, getAllPlayers } from '../../api/player';
import keycloak from '../../keycloak';
import { useState, useEffect} from 'react';
import { getPlayersInGame } from '../../api/game';
import { logDOM } from '@testing-library/react';

const GameRegistration = (gameInfo) => {
    //Hooks
    const [ apiError, setApiError] = useState(null);
    let isReg = gameInfo.info[0];

    //Create a new player
    const addPlayer = async (player) => {
        const [ error, userResponse ] = await createPlayer(player)
        if (error !== null){
            setApiError(error)
        }
        if(userResponse !== null){
            isReg = true;
            alert("You are now a player in the game")
            window.location.reload()
        }
    };

    //Creates a new player in the database (connected to logged in user)
    const register = () => {
        let human = true;
        let patientZero = false;

        //if there is no players in game then the first player becomes the original zombie
        if(gameInfo.info[1] === 0){
            human = false;
            patientZero = true;
        }

        let playerObject = { isHuman: human, isPatientZero: patientZero, biteCode: Math.floor(Math.random() * (99999 - 10000) + 10000), gameId: gameInfo.info[2], userId: keycloak.userId()};
        addPlayer(playerObject)
    }
         
    return(
        <>
            {
                (!isReg ) ? <Button id='gameRegisterBtn' onClick={register}>Register To Game</Button> : null
            }
        </>
    )
}

export default GameRegistration