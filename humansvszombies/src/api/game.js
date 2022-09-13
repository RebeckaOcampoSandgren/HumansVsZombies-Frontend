import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new game (takes in array of game information)
export const createGame = async (gameInfo) => {
    try {
        console.log(`${apiUrl}/Games`);
        const response = await fetch(`${apiUrl}/Games`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new game')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}

//Update an existing game (takes in a game object)
export const updateGame = async (gameId, gameName, gameState, description, nwLat, nwLng, seLat, seLng) => {
    try {
        const response = await fetch(`${apiUrl}/Games/${gameId}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify(gameId, gameName, gameState, description, nwLat, nwLng, seLat, seLng)
        })
        if (!response.ok) {
            throw new Error('Could not update the game')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Delete an existing game (takes in a game object)
export const deleteGame = async (gameId) => {
    try {
        const response = await fetch(`${apiUrl}/Games/${gameId}`, {
            method: 'DELETE',
            headers: createHeaders(),
            body: JSON.stringify({
                games: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the game')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Zombiechat
//Humanchat


//Get a list of players in a specific game by playerId
export const getPlayersInGame = async (gameId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/games/${gameId}/players`)
        if (!response.ok) {
            throw new Error('Could not get players')
        }

        const gamePlayers = await response.json()
        return [null, gamePlayers]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific player in specific game by playerId
export const getPlayerInGameById = async (gameId, playerId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/games/${gameId}/${playerId}`)
        if (!response.ok) {
            throw new Error('Could not get player')
        }

        const gamePlayerById = await response.json()
        return [null, gamePlayerById]

    }
    catch (error) {
        return [error.message, null]

    }
}