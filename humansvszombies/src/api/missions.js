const apiUrl = process.env.REACT_APP_API_URL

//Create a new mission (takes in array of mission information)
export const createMission = async (missionInfo) => {
    try {
        const response = await fetch(`${apiUrl}/missions`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(missionInfo)
        })
        if (!response.ok) {
            throw new Error('Could not create new mission')
        }
        const data = await response.json()
        return [ null, data ]
    }
    catch (error) {
        return [ error.message, [] ]
    }

}