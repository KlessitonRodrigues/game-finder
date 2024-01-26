import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { loadGameList } from 'src/utils/mobygames';

const Context = createContext<Hooks.UseGameDataContext>(null);

export const GameDataProvider = (props: PropsWithChildren) => {
  const [gameId, setGameId] = useState(0);
  const [gameCategory, setGameCategory] = useState(0);
  const [gamePlatform, setGamePlatform] = useState(0);
  const [gameStartYear, setGameStartYear] = useState(0);
  const [gameEndYear, setGameEndYear] = useState(0);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const context: Hooks.UseGameDataContext = {
    categories,
    platforms,
    setPlatforms,
    setCategories,
  };

  useEffect(() => {
    loadGameList().then(data => {
      setCategories(data.categories);
      setPlatforms(data.platforms);
    });
  }, []);

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default () => useContext(Context);
