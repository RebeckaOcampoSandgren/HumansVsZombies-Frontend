const apiUrl = process.env.REACT_APP_API_URL;

//Create a new game
export const createGame = async (gameInfo) => {
  try {
    const response = await fetch(`${apiUrl}/games`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(gameInfo),
    });
    if (!response.ok) {
      throw new Error("Could not create new game");
    }
    const data = await response.json();
    return [null, data];
  } catch (error) {
    return [error.message, []];
  }
};

//Update an existing game
export const updateGame = async (gameInfo, gameId) => {
  try {
    const response = await fetch(`${apiUrl}/games/${gameId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        gameId: gameInfo.gameId,
        gameName: gameInfo.gameName,
        gameState: gameInfo.gameState,
        description: gameInfo.description,
        nwLat: gameInfo.nwLat,
        nwLng: gameInfo.nwLng,
        seLat: gameInfo.seLat,
        seLng: gameInfo.seLng,
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

//Delete an existing game (takes in a game object)
export const deleteGame = async (gameId) => {
  try {
    const response = await fetch(`${apiUrl}/games/${gameId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        games: [],
      }),
    });
    if (!response.ok) {
      throw new Error("Could not delete the game");
    }
    const result = await response.json();
    return [null, result];
  } catch (error) {
    return [error.message, null];
  }
};

//Zombiechat
//Humanchat

//Get all games
export const getAllGames = async () => {
  try {
    const response = await fetch(
      `https://humanvszombies.azurewebsites.net/api/v1/games`
    );
    if (!response.ok) {
      throw new Error("Could not get games");
    }

    const games = await response.json();
    return [null, games];
  } catch (error) {
    return [error.message, null];
  }
};

//Get specific game by gameId
export const getGameById = async (gameId) => {
  try {
    const response = await fetch(
      `https://humanvszombies.azurewebsites.net/api/v1/games/${gameId}`
    );
    if (!response.ok) {
      throw new Error("Could not get the game");
    }

    const gameById = await response.json();
    return [null, gameById];
  } catch (error) {
    return [error.message, null];
  }
};

//Get a list of players in a specific game by gameId
export const getPlayersInGame = async (gameId) => {
  try {
    const response = await fetch(
      `https://humanvszombies.azurewebsites.net/api/v1/games/${gameId}/players`
    );
    if (!response.ok) {
      throw new Error("Could not get players");
    }

    const gamePlayers = await response.json();
    return [null, gamePlayers];
  } catch (error) {
    return [error.message, null];
  }
};

//Get specific player in specific game by playerId
export const getPlayerInGameById = async (gameId, playerId) => {
  try {
    const response = await fetch(
      `https://humanvszombies.azurewebsites.net/api/v1/games/${gameId}/${playerId}`
    );
    if (!response.ok) {
      throw new Error("Could not get player");
    }

    const gamePlayerById = await response.json();
    return [null, gamePlayerById];
  } catch (error) {
    return [error.message, null];
  }
};
