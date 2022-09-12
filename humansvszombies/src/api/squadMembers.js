import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new squad member (takes in a squadMember object)
export const createSquadMember = async (squadMember) => {
    try {

        const response = await fetch(`${apiUrl}/squadMembers`, {
            method: 'PATCH',
            headers: createHeaders(),
            players: [ squadMember]
        })
        if (!response.ok) {
            throw new Error('Could not create new squad member' + squadMember)
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Update an existing squadMember (takes in a squadMember object)
export const updateSquadMember = async (squadMemberId, rank, squad, player, squadCheckins) => {
    try {
        const response = await fetch(`${apiUrl}/squadMember/${squadMemberId}`, {
            method: 'PUT',
            headers: createHeaders(),
            body: JSON.stringify(squadMemberId, rank, squad, player, squadCheckins)
        })
        if (!response.ok) {
            throw new Error('Could not update the squadMember')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}

//Delete an existing squad member (takes in a squadMember object)
export const deleteSquadMember = async (squadMemberId) => {
    try {
        const response = await fetch(`${apiUrl}/squadMembers/${squadMemberId}`, {
            method: 'DELETE',
            headers: createHeaders(),
            body: JSON.stringify({
                squadMembers: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the squadMember')
        }
        const result = await response.json()
        return [ null, result ]
    }
    catch (error) {
        return [ error.message, null ]
    }

}


//Get all squadMembers
export const getAllSquadMembers = async () => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squadMembers`)
        if (!response.ok) {
            throw new Error('Could not get squad members')
        }

        const squadMembers = await response.json()
        return [null, squadMembers]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific squad member by squadMemberId
export const getSquadMemberById = async (squadMemberId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/squadMembers/${squadMemberId}`)
        if (!response.ok) {
            throw new Error('Could not get the squadMember')
        }

        const squadMemberById = await response.json()
        return [null, squadMemberById]

    }
    catch (error) {
        return [error.message, null]

    }
}