import 'src/UI/assets/json/games.json';
import { urls } from 'src/constants/urls';

let gameData: Models.GameData = { games: [], filtered: [], categories: [], platforms: [] };

export const loadGameList = async () => {
  try {
    gameData = await (await fetch(urls.localGamelist)).json();

    const { categories, platforms } = gameData;

    console.log(gameData);

    return { categories, platforms };
  } catch (err) {
    console.error(err);
  }
};

export const getPageItems = (page: number, items: number) => {
  const index = (page - 1) * items;

  return {
    pages: Math.ceil(gameData.filtered?.length / items),
    pageItems: gameData.filtered?.slice(index, index + items),
  };
};

export const updateGameList = (filters: Models.GameFilters) => {
  try {
    const { search, category, platform, fromYear, toYear } = filters;
    const gameList: Models.GameInfo[] = [];

    gameData.games.forEach(game => {
      const { g, p, n, y } = game;
      const name = n?.toLocaleLowerCase();

      if (search && !name?.includes(search)) return false;
      if (category && !g?.includes(Number(category))) return false;
      if (platform && !p?.includes(Number(platform))) return false;
      if (platform && !p?.includes(Number(platform))) return false;

      const gameYear = new Date(y).getFullYear();
      if (fromYear && Number(fromYear) >= gameYear) return false;
      if (toYear && Number(toYear) <= gameYear) return false;

      gameList.push(game);
    });

    gameData.filtered = gameList;
  } catch (err) {
    console.error(err);
  }
};

export const getCategoryNames = (type: string) => {
  const types: string[] = [];
  const items: { i: number; name: string }[] = [];

  gameData.categories.forEach((category, i) => {
    const { t, n } = JSON.parse(category);
    if (!types.includes(t)) types.push(t);
    if (type === '' || type === t) items.push({ i, name: n });
  });

  return { types, items };
};

/*
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

*/
