import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new squadCheckin (takes in a squadCheckin object)
export const createSquadCheckin = async (squadCheckin) => {
    try {

        const response = await fetch(`${apiUrl}/squadCheckins`, {
            method: 'PATCH',
            headers: createHeaders(),
            players: [ squadCheckin]
        })
        if (!response.ok) {
            throw new Error('Could not create new squadCheckin' + squadCheckin)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Update an existing squadCheckin (takes in a squadCheckin object)
export const updateSquadCheckin = async (squadCheckinId, startTime, endTime, lat, lng, gameId, squadId, squadMemberId) => {
    try {
        const response = await fetch(`${apiUrl}/squadCheckins/${squadCheckinId}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify(squadCheckinId, startTime, endTime, lat, lng, gameId, squadId, squadMemberId)
        })
        if (!response.ok) {
            throw new Error('Could not update the squadCheckin')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Delete an existing squadCheckin (takes in a squadCheckin object)
export const deleteSquadCheckin = async (squadCheckinId) => {
    try {
        const response = await fetch(`${apiUrl}/squadCheckins/${squadCheckinId}`, {
            method: 'DELETE',
            headers: createHeaders(),
            body: JSON.stringify({
                squadCheckins: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the squadCheckin')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}


//Get all squadCheckins
export const getAllSquadCheckins = async () => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squadCheckins`)
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

//Get specific squadCheckin by squadCheckinId
export const getSquadCheckinById = async (squadCheckinId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squadCheckins/${squadCheckinId}`)
        if (!response.ok) {
            throw new Error('Could not get the squadCheckin')
        }

        const squadCheckinById = await response.json()
        return [null, squadCheckinById]

    }
    catch (error) {
        return [error.message, null]

    }
}