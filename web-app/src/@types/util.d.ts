declare namespace Utils {
  type Paths = '/home';

  type LangJson = Record<string, string>;

  type GameInfo = {
    description: string;
    game_id: number;
    genres: {
      genre_category: string;
      genre_category_id: number;
      genre_id: number;
      genre_name: string;
    }[];
    moby_score: number;
    moby_url: string;
    num_votes: number;
    platforms: {
      first_release_date: string;
      platform_id: number;
      platform_name: string;
    }[];
    sample_cover: {
      height: number;
      image: string;
      platforms: string[];
      thumbnail_image: string;
      width: number;
    };
    sample_screenshots: {
      caption: string;
      height: number;
      image: string;
      thumbnail_image: string;
      width: number;
    }[];
    title: string;
  };
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
