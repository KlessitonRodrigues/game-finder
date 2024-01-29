import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import useRoutes from 'src/hooks/useRoutes';
import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';

import GameViewPage from 'UI/pages/GameView';

const Router = () => {
  const routes = useRoutes();

  return (
    <ThemeProvider theme={defaultThemeDark}>
      <GlobalCSS />
      <Routes location={window.location}>
        <Route path="/*" element={<GameViewPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
