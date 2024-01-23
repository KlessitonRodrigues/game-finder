import PageContainer from 'src/UI/base/PageContainer';
import { Background } from './styled';
import { useEffect, useState } from 'react';
import { getGameById, loadGameList } from 'src/utils/mobygames';
import MobyGameView from 'src/UI/components/MobyGameView';
import { YoutubeView } from 'src/UI/components/YoutubeView';
import Header from 'src/UI/base/Header';
import useApp from 'src/hooks/useApp';
import { gameInfo } from 'src/utils/test';
import { GameFilter } from 'src/UI/components/GameFilter';

const HomePage = () => {
  const { gameId } = useApp();
  // @ts-ignore
  const [game, setGame] = useState<Utils.GameInfo>(gameInfo);

  useEffect(() => {
    loadGameList();
  }, []);

  useEffect(() => {
    getGameById(gameId).then(data => data.title && setGame(data));
  }, [gameId]);

  return (
    <PageContainer>
      <Header />
      <GameFilter />
      <MobyGameView game={game} />
      <YoutubeView query={game.title} />
      <Background />
    </PageContainer>
  );
};

export default HomePage;
