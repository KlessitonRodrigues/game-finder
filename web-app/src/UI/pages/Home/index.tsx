import PageContainer from 'src/UI/base/PageContainer';
import { Background } from './styled';
import { GameFilter } from 'src/UI/base/GameFilter';
import { useEffect } from 'react';
import { getRandomGame, loadGameList } from 'src/utils/mobygames';
import MobyGameView from 'src/UI/components/MobyGameView';
import { YoutubeView } from 'src/UI/components/YoutubeView';

const HomePage = () => {
  useEffect(() => {
    loadGameList();
    getRandomGame();
  }, []);

  return (
    <PageContainer>
      <GameFilter />
      <MobyGameView />
      <YoutubeView query="Baldur's Gate III" />
      <Background />
    </PageContainer>
  );
};

export default HomePage;
