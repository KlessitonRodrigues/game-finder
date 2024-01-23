import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<Hooks.UseAppContext>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [gameId, setGameId] = useState('');
  const [gameCategory, setGameCategory] = useState(0);
  const [gamePlatform, setGamePlatform] = useState(0);

  const context: Hooks.UseAppContext = {
    gameId,
    gameCategory,
    gamePlatform,
    setGameId,
    setGameCategory,
    setGamePlatform,
  };

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
