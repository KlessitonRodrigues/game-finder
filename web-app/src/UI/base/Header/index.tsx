import { Container, RandomGameBtn } from './styled';
import useApp from 'src/hooks/useApp';
import { getRandomGame } from 'src/utils/mobygames';

const Header = () => {
  const { setGameId } = useApp();

  return (
    <Container>
      <RandomGameBtn onClick={() => setGameId(getRandomGame())}>Random Game</RandomGameBtn>
    </Container>
  );
};

export default Header;
