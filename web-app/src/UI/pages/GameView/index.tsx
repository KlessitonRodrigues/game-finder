import { useEffect, useState } from 'react';

import useApp from 'src/hooks/useApp';
import { getLocalGameById, loadGameList } from 'src/utils/mobygames';

import Header from 'UI/base/Header';
import If from 'UI/base/If';
import Loading from 'UI/base/Loading';
import PageContainer from 'UI/base/PageContainer';
import { Background, GradidentBg } from 'UI/base/StyledComponents/background';
import { GameFilter } from 'UI/components/GameFilter';
import MobyGameView from 'UI/components/MobyGameView';
import { YoutubeView } from 'UI/components/YoutubeView';

const GameViewPage = () => {
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
      <GameFilter />
      <If check={!!game}>
        <>
          <MobyGameView game={game} />
          <YoutubeView query={game?.n} />
        </>
      </If>
      <Loading
        type="fullScreen"
        show={isLoading}
        title="Loading Game List"
        description="Needed on first loding only."
      />
      <GradidentBg />
    </PageContainer>
  );
};

export default GameViewPage;
