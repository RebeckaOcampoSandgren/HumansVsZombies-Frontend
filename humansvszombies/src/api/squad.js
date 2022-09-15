const apiUrl = process.env.REACT_APP_API_URL

//Create a new squad
export const createSquad = async (squadInfo) => {
    try{
        console.log(`${apiUrl}/squads`);
        const response =await fetch(`${apiUrl}/squads`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(squadInfo)
        })
        if(!response.ok){
            throw new Error('Could not create new squad')
        }
        const data = await response.json()
        return[ null,data ]
    }
    catch(error) {
        return[ error.message,[] ]
    }

}

//Update an existing squad
export const updateSquad = async (squadInfo, squadId) => {
    try {
        const response = await fetch(`${apiUrl}/squads/${squadId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ squadId: squadInfo.squadId, squadName: squadInfo.squadName, isHuman: squadInfo.isHuman, gameId: squadInfo.gameId })
        })
        if (!response.ok) {
            throw new Error('Could not update the squad')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
        
    }
}

//Delete an existing squad
export const deleteSquad = async (squadId) => {
    try {
        const response = await fetch(`${apiUrl}/squads/${squadId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                squads: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the squad')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}


//Get all squads
export const getAllSquads = async () => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squads`)
        if (!response.ok) {
            throw new Error('Could not get squads')
        }

        const squads = await response.json()
        return [null, squads]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific squad by squadId
export const getSquadById = async (squadId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squads/${squadId}`)
        if (!response.ok) {
            throw new Error('Could not get the squad')
        }

        const squadById = await response.json()
        return [null, squadById]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get a list of squads in a specific game by gameId
export const getSquadsInGame = async (gameId) => {
    try {
        const response = await fetch(`${apiUrl}/squads/${gameId}/squads`)
        if (!response.ok) {
            throw new Error('Could not get squads')
        }

        const gameSquads = await response.json()
        return [null, gameSquads]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific squad in specific game by squadId
export const getSquadInGameById = async (gameId, squadId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squads/${gameId}/${squadId}`)
        if (!response.ok) {
            throw new Error('Could not get squad')
        }

        const gameSquadById = await response.json()
        return [null, gameSquadById]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get all chats for a specific squad

//Get all squadcheckins in a specific squad by squadId
export const getCheckinsInSquad = async (squadId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squads/${squadId}/checkins`)
        if (!response.ok) {
            throw new Error('Could not get squadCheckins')
        }

        const squadCheckins = await response.json()
        return [null, squadCheckins]

    }
    catch (error) {
        return [error.message, null]

    }
}