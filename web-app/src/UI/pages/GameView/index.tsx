import { useEffect, useState } from 'react';

import Header from 'src/UI/base/Header';
import Icons from 'src/UI/base/Icons';
import If from 'src/UI/base/If';
import { Title } from 'src/UI/base/StyledComponents/Titles';
import { ImageBg } from 'src/UI/base/StyledComponents/background';
import { Modal, ModalContent, ModalHeader } from 'src/UI/base/StyledComponents/modal';
import GameList from 'src/UI/components/GameList';
import useApp from 'src/hooks/useApp';
import { getLocalGameById, loadGameList } from 'src/utils/mobygames';
import { gameInfo } from 'src/utils/test';

import Loading from 'UI/base/Loading';
import PageContainer from 'UI/base/PageContainer';
import { GameFilter } from 'UI/components/GameFilter';
import MobyGameView from 'UI/components/MobyGameView';
import { YoutubeView } from 'UI/components/YoutubeView';

const GameViewPage = () => {
  const { darkTheme } = useApp();
  const [isLoading, setloading] = useState(false);
  const [game, setGame] = useState<Utils.GameInfo>(gameInfo);

  useEffect(() => {
    const load = async () => {
      setloading(true);
      await loadGameList();
    };

    load().finally(() => setloading(false));
  }, []);

  return (
    <PageContainer>
      <Header />
      <GameFilter />
      <GameList onSelect={setGame} />

      <Modal show={!!game?.n}>
        <ModalHeader>
          <Title>
            <Icons type="list" />
            Description
          </Title>
          <Icons type="close" size={8} onClick={() => setGame(gameInfo)} />
        </ModalHeader>
        <ModalContent>
          <MobyGameView game={game} />
          <YoutubeView query={game?.n} />
        </ModalContent>
      </Modal>

      <Loading type="fullScreen" show={isLoading} title="Loading Game List" />
      <ImageBg isDark={darkTheme} />
    </PageContainer>
  );
};

export default GameViewPage;
