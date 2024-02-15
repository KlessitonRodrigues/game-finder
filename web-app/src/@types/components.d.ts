declare namespace Props {
  type Icons = {
    size?: number;
    onClick?: () => void;
    type:
      | 'download'
      | 'selector'
      | 'spinner'
      | 'next'
      | 'previous'
      | 'youtube'
      | 'star'
      | 'starLine'
      | 'category'
      | 'platform'
      | 'screenshot'
      | 'date'
      | 'list'
      | 'search'
      | 'close'
      | 'sun'
      | 'moon'
      | 'github';
    style?: React.CSSProperties;
  };

  type Text = {
    path?: string;
  };

  type Loading = {
    show: boolean;
    type: 'fullScreen' | 'icon';
    title?: string;
    description?: string;
  };

  type If = {
    check: boolean;
    true?: React.ReactElement;
    false?: React.ReactElement;
    children?: React.ReactElement;
  };

  type YoutubeView = {
    query: string;
  };

  type MobyGameView = {
    game: Models.GameInfo;
  };

  type GameList = {
    onSelect: (game: Models.GameInfo) => void;
  };
}
