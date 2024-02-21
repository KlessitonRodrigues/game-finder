declare namespace Models {
  type GameFilters = {
    search: string;
    fromYear: string;
    toYear: string;
    platform: string;
    category: string;
    categoryType: string;
  };

  type GameInfo = {
    i: number;
    n: string;
    l: string;
    d: string;
    c: string;
    s: string[];
    g: number[];
    p: number[];
    y: string;
    r: string;
  };

  type GameData = {
    games: GameInfo[];
    filtered: GameInfo[];
    categories: string[];
    platforms: string[];
  };
}
