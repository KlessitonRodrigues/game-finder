import 'src/UI/assets/json/games.json';

const corsProxy = 'https://corsproxy.io/?';
const apiKey = 'moby_sswl52j8U91ow1oqyNOppHee0XP';
const apiUrl = 'https://api.mobygames.com/v1/games';

export const getGameById = async (id: string) => {
  const query = new URLSearchParams();
  query.append('api_key', apiKey);

  const queryUrl = `${apiUrl}/${id}?${query.toString()}`;
  const proxyUrl = corsProxy + encodeURIComponent(queryUrl);
  return (await fetch(proxyUrl)).json();
};

export const loadGameList = async () => {
  try {
    const games = localStorage.getItem('game_list');
    if (games) return JSON.parse(games);

    const gamesList = await (await fetch('/assets/json/games.json')).json();
    localStorage.setItem('game_list', JSON.stringify(gamesList));
    return gamesList;
  } catch (err) {
    console.error(err);
  }
};

export const getRandomGame = (category: number, platform: number) => {
  try {
    const gameList = localStorage.getItem('game_list');
    const { games } = JSON.parse(gameList);
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
    const gameList = localStorage.getItem('game_list');
    const { categories, platforms } = JSON.parse(gameList);
    return { categories, platforms };
  } catch (err) {
    console.error(err);
  }
};
