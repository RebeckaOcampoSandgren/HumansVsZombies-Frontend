const apiUrl = process.env.REACT_APP_API_URL;

//Create a new squad member
export const createSquadMember = async (squadMemberInfo) => {
  try {
    const response = await fetch(`${apiUrl}/squadMembers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(squadMemberInfo),
    });
    if (!response.ok) {
      throw new Error("Could not create new squad members");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

//Update an existing squadMember
export const updateSquadMember = async (squadMemberInfo, squadMemberId) => {
  try {
    const response = await fetch(`${apiUrl}/squadMembers/${squadMemberId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        squadMemberId: squadMemberInfo.squadMemberId,
        rank: squadMemberInfo.rank,
        squadId: squadMemberInfo.squadId,
        playerId: squadMemberInfo.playerId,
      }),
    });
    if (!response.ok) {
      throw new Error("Could not update the squadMember");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

//Delete an existing squad member
export const deleteSquadMember = async (squadMemberId) => {
  try {
    const response = await fetch(`${apiUrl}/squadMembers/${squadMemberId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        squadMembers: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not delete the squadMember");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

//Get all squadMembers
export const getAllSquadMembers = async () => {
  try {
    const response = await fetch(`${apiUrl}/squadMembers`);
    if (!response.ok) {
      throw new Error("Could not get squad members");
    }

    const squadMembers = await response.json();
    return [null, squadMembers];
  } catch (error) {
    return [error.message, null];
  }
};

//Get specific squad member by squadMemberId
export const getSquadMemberById = async (squadMemberId) => {
  try {
    const response = await fetch(
      `${apiUrl}/squadMembers/${squadMemberId}`
    );
    if (!response.ok) {
      throw new Error("Could not get the squadMember");
    }

    const squadMemberById = await response.json();
    return [null, squadMemberById];
  } catch (error) {
    return [error.message, null];
  }
};
