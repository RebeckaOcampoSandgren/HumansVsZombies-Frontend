import { createHeaders } from '.'
const apiUrl = process.env.REACT_APP_API_URL

//Create a new user (takes in a user object)
export const createUser = async (userInfo) => {
    try{
        console.log(`${apiUrl}/users`);
        const response =await fetch(`${apiUrl}/users`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(userInfo)
        })
        if(!response.ok){
            throw new Error('Could not create new user')
        }
        const data = await response.json()
        return[ null,data ]
    }
    catch(error) {
        return[ error.message,[] ]
    }
}

//Update an existing user
export const updateUser = async (userInfo, userId) => {
    try {
        const response = await fetch(`${apiUrl}/users/${userId}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ userId: userInfo.userId, firstName: userInfo.firstName, lastName: userInfo.lastName, isAdmin: userInfo.isAdmin})
        })
        if (!response.ok) {
            throw new Error('Could not update the user')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }
}

//Delete an existing squad member (takes in a squadMember object)
export const deleteUser = async (userId) => {
    try {
        const response = await fetch(`${apiUrl}/users/${userId}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                users: []
            })
        })
        if (!response.ok) {
            throw new Error('Could not delete the user')
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
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/users`)
        if (!response.ok) {
            throw new Error('Could not get users')
        }

        const squadMembers = await response.json()
        return [null, squadMembers]

    }
    catch (error) {
        return [error.message, null]

    }
}

//Get specific user by userId
export const getSquadMemberById = async (userId) => {
    try {
        const response = await fetch(`https://humanvszombies.azurewebsites.net/api/v1/users/${userId}`)
        if (!response.ok) {
            throw new Error('Could not get the user')
        }

        const userById = await response.json()
        return [null, userById]

    }
    catch (error) {
        return [error.message, null]

    }
}