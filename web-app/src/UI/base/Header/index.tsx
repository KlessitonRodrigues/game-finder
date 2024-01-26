import useApp from 'src/hooks/useApp';
import { getRandomGame } from 'src/utils/mobygames';

import { Container, RandomGameBtn } from './styled';

const Header = () => {
  const { gameCategory, gamePlatform, setGameId } = useApp();

  return (
    <Container>
      <RandomGameBtn onClick={() => setGameId(getRandomGame(gameCategory, gamePlatform))}>
        Random Game
      </RandomGameBtn>
    </Container>
  );
};

export default Header;
