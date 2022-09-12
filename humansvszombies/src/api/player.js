const apiUrl = process.env.REACT_APP_API_URL

//Update an existing game (takes in a game object)
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