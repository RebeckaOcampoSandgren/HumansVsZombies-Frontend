const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in array of game information)
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

