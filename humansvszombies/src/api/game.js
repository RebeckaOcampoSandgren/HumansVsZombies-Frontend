const apiUrl = process.env.REACT_APP_API_URL

//Create a new game (takes in a game object)
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
export const updateGame = async (gameInfo, gameId) => {
    try {
        console.log(`${apiUrl}/Games`);
        const response = await fetch(`${apiUrl}/Games/${gameId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(gameInfo)
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

