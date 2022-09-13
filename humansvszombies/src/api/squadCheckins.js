import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new squadCheckin (takes in a squadCheckin object)
export const createSquadCheckin = async (SquadCheckinInfo) => {
    try{
        console.log(`${apiUrl}/squadCheckins`);
        const response =await fetch(`${apiUrl}/squadCheckins`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(SquadCheckinInfo)
        })
        if(!response.ok){
            throw new Error('Could not create new squad checkin')
        }
        const data = await response.json()
        return[ null,data ]
    }
    catch(error) {
        return[ error.message,[] ]
    }

}

//Update an existing squadCheckin
export const updateSquadCheckin = async (squadCheckinInfo, squadCheckinId) => {
    try {
        const response = await fetch(`${apiUrl}/squadCheckins/${squadCheckinId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ squadCheckinId: squadCheckinInfo.squadCheckinId, startTime: squadCheckinInfo.startTime, endTime: squadCheckinInfo.endTime, lat: squadCheckinInfo.lat, lng: squadCheckinInfo.lng, gameId: squadCheckinInfo.gameId, squadId: squadCheckinInfo.squadId, squadMemberId: squadCheckinInfo.squadMemberId })
        })
        if (!response.ok) {
            throw new Error('Could not update the squadCheckin')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
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