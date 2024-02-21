import { useMemo } from 'react';

import { urls } from 'src/constants/urls';
import useGameData from 'src/hooks/useGameData';

import Icons from 'UI/base/Icons';
import { Column, Columns } from 'UI/base/StyledComponents/Containers';
import { List, ListItem } from 'UI/base/StyledComponents/Lists';
import { Title, TitleBar } from 'UI/base/StyledComponents/Titles';

import {
  Container,
  Cover,
  Description,
  MobyLink,
  MobyScore,
  ScreenShot,
  ScreenShots,
  Year,
} from './styled';

const MobyGameView = (props: Props.MobyGameView) => {
  const { game } = props;
  const { categories, platforms } = useGameData();

  const gameCategories = useMemo(() => {
    return game.g?.map(index => {
      if (!categories[index]) return null;
      const { t, n } = JSON.parse(categories[index]);
      return <ListItem>{`${t}, ${n}`}</ListItem>;
    });
  }, [game.g]);

  const gamePlatforms = useMemo(() => {
    return game.p?.map(index => <ListItem>{platforms[index]}</ListItem>);
  }, [game.p]);

  const gameScreenshots = useMemo(() => {
    return game.s?.map(url => <ScreenShot src={urls.mobyCDN + url} />);
  }, [game.s]);

  const gameStars = useMemo(() => {
    return [2, 4, 6, 8, 10].map(score => {
      if (Number(game.r) >= score) return <Icons type="star" />;
      if (Number(game.r) - score > -2) return <Icons type="starHalf" />;
      return <Icons type="starLine" />;
    });
  }, [game.r]);

  return (
    <Container>
      <Columns>
        <Column>
          <Cover src={game?.c} />
        </Column>
        <Column>
          <Title>{game?.n}</Title>
          <Year>{game?.y}</Year>
          <MobyScore>
            {gameStars} {game.r}
          </MobyScore>
          <Description dangerouslySetInnerHTML={{ __html: game?.d }} />
          <MobyLink href={game?.l}>MobyGames</MobyLink>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Title>
            <Icons type="category" />
            Categories
          </Title>
          <TitleBar />
          <List>{gameCategories}</List>
        </Column>
        <Column>
          <Title>
            <Icons type="platform" />
            Platforms
          </Title>
          <TitleBar />
          <List>{gamePlatforms}</List>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Title>
            <Icons type="screenshot" />
            Screenshots
          </Title>
          <TitleBar />
          <ScreenShots>{gameScreenshots}</ScreenShots>
        </Column>
      </Columns>
    </Container>
  );
};

export default MobyGameView;
