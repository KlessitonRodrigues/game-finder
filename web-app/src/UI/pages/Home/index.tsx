import { useEffect, useState } from 'react';

import Header from 'src/UI/base/Header';
import If from 'src/UI/base/If';
import Loading from 'src/UI/base/Loading';
import PageContainer from 'src/UI/base/PageContainer';
import { GameFilter } from 'src/UI/components/GameFilter';
import MobyGameView from 'src/UI/components/MobyGameView';
import { YoutubeView } from 'src/UI/components/YoutubeView';
import useApp from 'src/hooks/useApp';
import { getLocalGameById, loadGameList } from 'src/utils/mobygames';

import { Background } from './styled';

const HomePage = () => {
  const { gameId } = useApp();
  const [isLoading, setloading] = useState(false);
  const [game, setGame] = useState<Utils.GameInfo>();

  useEffect(() => {
    const load = async () => {
      setloading(true);
      await loadGameList();
    };

    load().finally(() => setloading(false));
  }, []);

  useEffect(() => {
    getLocalGameById(Number(gameId)).then(data => data.n && setGame(data));
  }, [gameId]);

  return (
    <PageContainer>
      <Header />
      <GameFilter />
      <If check={!!game}>
        <>
          <MobyGameView game={game} />
          <YoutubeView query={game?.n} />
        </>
      </If>
      <Loading type="fullScreen" show={isLoading} title="Loading Game List" description="loading" />
      <Background />
    </PageContainer>
  );
};

export default HomePage;
