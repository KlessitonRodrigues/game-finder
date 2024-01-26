declare namespace Hooks {
  type UseRoutesContext = {
    pathname: string;
    hash: string;
    search: string;
    lang: string;
    setPath: React.Dispatch<Utils.Paths>;
    setLang: React.Dispatch<string>;
  };

  type UseAppContext = {
    gameId: string;
    gameCategory: number;
    gamePlatform: number;
    setGameId: React.Dispatch<string>;
    setGameCategory: React.Dispatch<number>;
    setGamePlatform: React.Dispatch<number>;
  };

  type UseGameDataContext = {
    categories: Utils.GameData['categories'];
    platforms: Utils.GameData['platforms'];
    setCategories: React.Dispatch<Utils.GameData['categories']>;
    setPlatforms: React.Dispatch<Utils.GameData['platforms']>;
  };
}