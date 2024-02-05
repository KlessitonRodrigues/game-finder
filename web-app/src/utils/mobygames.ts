import 'src/UI/assets/json/games.json';

const corsProxy = 'https://corsproxy.io/?';
const apiKey = 'moby_sswl52j8U91ow1oqyNOppHee0XP';
const apiURL = 'https://api.mobygames.com/v1/games';
const dataURL = 'https://klessitonrodrigues.github.io/game-finder/assets/json/games.json';

let gameData: Utils.GameData = { games: [], filtered: [], categories: [], platforms: [] };

export const getGameById = async (id: string) => {
  const query = new URLSearchParams();
  query.append('api_key', apiKey);

  const queryUrl = `${apiURL}/${id}?${query.toString()}`;
  const proxyUrl = corsProxy + encodeURIComponent(queryUrl);
  return (await fetch(proxyUrl)).json();
};

export const getLocalGameById = async (id: number) => {
  return gameData.games.find(game => game.i === id);
};

export const loadGameList = async () => {
  try {
    gameData = await (await fetch(dataURL)).json();
    const { categories, platforms } = gameData;
    return { categories, platforms };
  } catch (err) {
    console.error(err);
  }
};

export const getPageItems = (page: number, items: number) => {
  if (page < 0) return [];
  const index = page * items;
  return gameData.filtered?.slice(index, index + items);
};

export const getRandomGames = (category: number, platform: number) => {
  try {
    const { games } = gameData;
    const filteredGames = games
      .filter((game: any) => {
        const { g, p } = game;
        if (g?.includes(category)) {
          if (p?.includes(platform)) return true;
        }
        return false;
      })
      .sort((a, b) => Math.random() - 0.5);

    gameData.filtered = filteredGames;
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
