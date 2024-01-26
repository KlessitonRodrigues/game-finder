import 'src/UI/assets/json/games.json';

const corsProxy = 'https://corsproxy.io/?';
const apiKey = 'moby_sswl52j8U91ow1oqyNOppHee0XP';
const apiUrl = 'https://api.mobygames.com/v1/games';
let gameData: Utils.GameData = { games: [], categories: [], platforms: [] };

export const getGameById = async (id: string) => {
  const query = new URLSearchParams();
  query.append('api_key', apiKey);

  const queryUrl = `${apiUrl}/${id}?${query.toString()}`;
  const proxyUrl = corsProxy + encodeURIComponent(queryUrl);
  return (await fetch(proxyUrl)).json();
};

export const getLocalGameById = async (id: number) => {
  return gameData.games.find(game => game.i === id);
};

export const loadGameList = async () => {
  try {
    gameData = await (await fetch('/assets/json/games.json')).json();
    const { categories, platforms } = gameData;
    return { categories, platforms };
  } catch (err) {
    console.error(err);
  }
};

export const getRandomGame = (category: number, platform: number) => {
  try {
    const { games } = gameData;
    const filteredGames = games.filter((game: any) => {
      const { g, p } = game;
      if (g?.includes(category)) {
        if (p?.includes(platform)) return true;
      }
      return false;
    });

    const random = Number(Math.random().toFixed(2));
    const randomIndex = Number((filteredGames.length * random).toFixed(0));
    const game = filteredGames[randomIndex];

    return String(game.i);
  } catch (err) {
    console.error(err);
  }
};

export const getGameFilters = () => {
  try {
    const categories = gameData?.categories || [];
    const platforms = gameData?.platforms || [];

    const sortedCategories = categories.sort((ct1, ct2) => {
      const [gender1, name1] = ct1.split(',');
      const [gender2, name2] = ct2.split(',');
      return gender1 === gender2 ? -1 : 1;
    });

    return { categories: sortedCategories, platforms };
  } catch (err) {
    console.error(err);
  }
};
