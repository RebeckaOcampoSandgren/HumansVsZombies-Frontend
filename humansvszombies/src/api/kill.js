const apiUrl = process.env.REACT_APP_API_URL

//Create a new kill
export const createKill = async (killInfo) => {
    try{
        console.log(`${apiUrl}/kills`);
        const response =await fetch(`${apiUrl}/kills`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(killInfo)
        })
        if(!response.ok){
            throw new Error('Could not create new kill')
        }
        const data = await response.json()
        return[ null, data ]
    }
    catch(error) {
        return[ error.message,[] ]
    }
}

//Update an existing kill
export const updateKill = async (killInfo, killId) => {
    try {
        const response = await fetch(`${apiUrl}/kills/${killId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ killId: killInfo.killId, timeOfDeath: killInfo.timeOfDeath, story: killInfo.story, lat: killInfo.lat, lng: killInfo.lng, gameId: killInfo.gameId, killerId: killInfo.killerId, victimId: killInfo.victimId})
        })
        if (!response.ok) {
            throw new Error('Could not update the kill')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Delete an existing kill
export const deleteKill = async (killId) => {
    try {
        const response = await fetch(`${apiUrl}/kills/${killId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                kills: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the kill')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}


//Get all kills
export const getAllKills = async () => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/kills`)
        if (!response.ok) {
            throw new Error('Could not get kills')
        }

        const kills = await response.json()
        return [null, kills]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific user by userId
export const getKillById = async (killId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/kills/${killId}`)
        if (!response.ok) {
            throw new Error('Could not get the kill')
        }

        const killById = await response.json()
        return [null, killById]

    }
    catch (error) {
        return [error.message, null]

    }
}