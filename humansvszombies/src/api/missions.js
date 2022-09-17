const apiUrl = process.env.REACT_APP_API_URL;

//Create a new mission
export const createMission = async (missionInfo) => {
  try {
    const response = await fetch(`${apiUrl}/missions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(missionInfo),
    });
    if (!response.ok) {
      throw new Error("Could not create new mission");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

//Update an existing mission
export const updateMission = async (missionInfo, missionId) => {
  try {
    const response = await fetch(`${apiUrl}/missions/${missionId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        missionId: missionInfo.missionId,
        missionName: missionInfo.missionName,
        isHumanVisible: missionInfo.isHumanVisible,
        isZombieVisible: missionInfo.isZombieVisible,
        description: missionInfo.description,
        startTime: missionInfo.startTime,
        endTime: missionInfo.endTime,
        gameId: missionInfo.game,
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update the game");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};
