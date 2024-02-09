import { PropsWithChildren, createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext<Hooks.UseAppContext>(null);

export const AppProvider = (props: PropsWithChildren) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const context: Hooks.UseAppContext = {
    darkTheme,
    setDarkTheme,
  };

  const value = useMemo(() => context, [JSON.stringify(context)]);
  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
};

export default () => useContext(AppContext);
