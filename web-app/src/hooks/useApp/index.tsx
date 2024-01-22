import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<Hooks.UseAppContext>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [gameId, setGameId] = useState('');
  const [gameName, setGameName] = useState('');

  const context: Hooks.UseAppContext = {
    gameId,
    gameName,
    setGameId,
    setGameName,
  };

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
