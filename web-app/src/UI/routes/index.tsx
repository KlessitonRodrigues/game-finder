import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalCSS from 'src/styles/globalCSS';
import { defaultTheme, defaultThemeDark } from 'src/styles/theme';

import GameViewPage from 'UI/pages/GameView';

const Router = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCSS />
      <Routes location={window.location}>
        <Route path="/*" element={<GameViewPage />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Router;
