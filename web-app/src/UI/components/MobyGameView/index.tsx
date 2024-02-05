import { useMemo } from 'react';

import useGameData from 'src/hooks/useGameData';

import Icons from 'UI/base/Icons';
import { Column, Columns } from 'UI/base/StyledComponents/Containers';
import { List, ListItem } from 'UI/base/StyledComponents/Lists';
import { Bar, Title } from 'UI/base/StyledComponents/Titles';

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

  const Categories = useMemo(() => {
    return game.g?.map(index => {
      if (!categories[index]) return null;
      const { t, n } = JSON.parse(categories[index]);
      return <ListItem>{`${t}, ${n}`}</ListItem>;
    });
  }, [game.g]);

  const Platforms = useMemo(() => {
    return game.p?.map(index => <ListItem>{platforms[index]}</ListItem>);
  }, [game.p]);

  const Screenshots = useMemo(() => {
    return game.s?.map(url => <ScreenShot src={url} />);
  }, [game.s]);

  return (
    <Container>
      <Columns>
        <Column>
          <Cover src={game?.c} />
        </Column>
        <Column>
          <Title>{game?.n}</Title>
          <Year>2024</Year>
          <MobyScore>
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="starLine" />
            <Icons type="starLine" />
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
          <Bar />
          <List>{Categories}</List>
        </Column>
        <Column>
          <Title>
            <Icons type="platform" />
            Platforms
          </Title>
          <Bar />
          <List>{Platforms}</List>
        </Column>
      </Columns>

      <Columns>
        <Column>
          <Title>
            <Icons type="screenshot" />
            Screenshots
          </Title>
          <Bar />
          <ScreenShots>{Screenshots}</ScreenShots>
        </Column>
      </Columns>
    </Container>
  );
};

export default MobyGameView;
