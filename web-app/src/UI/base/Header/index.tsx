import useApp from 'src/hooks/useApp';

import { Container, RandomGameBtn } from './styled';

const Header = () => {
  const { gameCategory, gamePlatform, setGameId } = useApp();

  return <Container></Container>;
};

export default Header;
