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
    darkTheme: boolean;
    setDarkTheme: React.Dispatch<boolean>;
  };

  type UseGameDataContext = {
    lastUpdate: number;
    categories: Utils.GameData['categories'];
    platforms: Utils.GameData['platforms'];
    selectedGame: number;
    selectedPlatform: number;
    selectedCategory: number;
    setLastUpdate: React.Dispatch<number>;
    setCategories: React.Dispatch<Utils.GameData['categories']>;
    setPlatforms: React.Dispatch<Utils.GameData['platforms']>;
    setSelectedGame: React.Dispatch<number>;
    setPlatform: React.Dispatch<number>;
    setCategory: React.Dispatch<number>;
  };
}
