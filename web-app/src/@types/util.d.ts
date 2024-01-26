declare namespace Utils {
  type Paths = '/home';

  type LangJson = Record<string, string>;

  type GameInfo = {
    i: number;
    n: string;
    l: string;
    d: string;
    c: string;
    s: string[];
    g: number[];
    p: number[];
  };

  type GameData = {
    games: GameInfo[];
    categories: string[];
    platforms: string[];
  };
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
