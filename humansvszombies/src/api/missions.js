import { createHeaders } from '.'

const apiUrl = 'https://experis-java-hvz-api.herokuapp.com/api/v1/games/8/missions'

export const createMission = async (mission) => {
    try{
        const response = await fetch(apiUrl, {
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                missions: [ mission]
            })
        })
        if(!response.ok){
            throw new Error('Could not create your translation ' + mission)
        }
        const result = await response.json()
        return [null, result]
    }
    catch(error) {
        return [error.message, null]
    }
}