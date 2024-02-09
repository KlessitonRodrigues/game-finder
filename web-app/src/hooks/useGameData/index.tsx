import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';

import { loadGameList } from 'src/utils/mobygames';

const Context = createContext<Hooks.UseGameDataContext>(null);

export const GameDataProvider = (props: PropsWithChildren) => {
  const [lastUpdate, setLastUpdate] = useState(0);
  const [categories, setCategories] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const [selectedGame, setSelectedGame] = useState(0);
  const [selectedPlatform, setPlatform] = useState(0);
  const [selectedCategory, setCategory] = useState(0);

  const context: Hooks.UseGameDataContext = {
    lastUpdate,
    selectedGame,
    categories,
    platforms,
    selectedPlatform,
    selectedCategory,
    setLastUpdate,
    setSelectedGame,
    setPlatforms,
    setCategories,
    setPlatform,
    setCategory,
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
