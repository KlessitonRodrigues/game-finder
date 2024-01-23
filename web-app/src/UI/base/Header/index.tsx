import { Container, RandomGameBtn } from './styled';
import useApp from 'src/hooks/useApp';
import { getRandomGame } from 'src/utils/mobygames';

// () => setGameId(getRandomGame())

const Header = () => {
  const { setGameId } = useApp();

  return (
    <Container>
      <RandomGameBtn onClick={() => {}}>Random Game</RandomGameBtn>
    </Container>
  );
};

export default Header;
