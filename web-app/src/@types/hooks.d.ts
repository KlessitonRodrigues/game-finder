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

  type UseScreenState = {
    active: boolean;
    focus: number;
    option: number;
    loading: boolean;
    setActive: React.Dispatch<boolean>;
    setFocus: React.Dispatch<number>;
    setOption: React.Dispatch<number>;
    setLoading: React.Dispatch<boolean>;
  };
}
