import { urls } from 'src/constants/urls';
import useApp from 'src/hooks/useApp';

import Icons from '../Icons';
import { Column, Row } from '../StyledComponents/Containers';
import { Title } from '../StyledComponents/Titles';
import { Buttons, Container } from './styled';

const Header = () => {
  const { darkTheme, setDarkTheme } = useApp();

  return (
    <Container>
      <Column>
        <Row>
          <Title>
            <Icons size={10} type="platform" />
            Game Finder
          </Title>
          <Buttons>
            <Icons type={darkTheme ? 'sun' : 'moon'} onClick={() => setDarkTheme(!darkTheme)} />
            <a href={urls.repository} target="_blank">
              <Icons type="github" />
            </a>
            <Title>EN</Title>
          </Buttons>
        </Row>
      </Column>
    </Container>
  );
};

export default Header;
