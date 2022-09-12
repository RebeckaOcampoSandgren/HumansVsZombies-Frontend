const apiUrl = process.env.REACT_APP_API_URL
import { createHeaders } from '.'

//Update an existing player
export const updatePlayer = async (playerInfo, playerId) => {
    try {
        const response = await fetch(`${apiUrl}/players/${playerId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ playerId: playerInfo.playerId, isHuman: playerInfo.isHuman, isPatientZero: playerInfo.isPatientZero, biteCode: playerInfo.biteCode, gameId: playerInfo.game, userId: playerInfo.user })
        })
        if (!response.ok) {
            throw new Error('Could not update the game')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}
            

//Create a new player (takes in a player object)
export const createPlayer = async (player) => {
    try {

        const response = await fetch(`${apiUrl}/players`, {
            method: 'PATCH',
            headers: createHeaders(),
            players: [ player]
        })
        if (!response.ok) {
            throw new Error('Could not create new player' + player)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Delete an existing player (takes in a player object)
export const deletePlayer = async (playerId) => {
    try {
        const response = await fetch(`${apiUrl}/players/${playerId}`, {
            method: 'DELETE',
            headers: createHeaders(),
            body: JSON.stringify({
                games: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the player')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}


//Get all players
export const getAllPlayers = async () => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/players`)
        if (!response.ok) {
            throw new Error('Could not get players')
        }

        const players = await response.json()
        return [null, players]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific player by playerId
export const getPlayerById = async (playerId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/players/${playerId}`)
        if (!response.ok) {
            throw new Error('Could not get the player')
        }

        const playerById = await response.json()
        return [null, playerById]

    }
    catch (error) {
        return [error.message, null]

    }
}