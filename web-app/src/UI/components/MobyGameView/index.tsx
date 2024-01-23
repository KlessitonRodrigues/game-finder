import {
  Container,
  Cover,
  Description,
  MobyLink,
  MobyScore,
  Year,
  ScreenShots,
  ScreenShot,
} from './styled';

import { Column, Columns, Bar, List, ListItem, Title } from 'src/UI/base/styled';
import Icons from 'src/UI/base/Icons';
import { useMemo } from 'react';

const MobyGameView = (props: Props.MobyGameView) => {
  const { game } = props;
  const { platforms, sample_screenshots, genres } = game;

  const Categories = useMemo(() => {
    return genres?.map(ct => <ListItem>{ct.genre_name}</ListItem>);
  }, [genres]);

  const Platforms = useMemo(() => {
    return platforms?.map(pt => <ListItem>{pt.platform_name}</ListItem>);
  }, [platforms]);

  const Screenshots = useMemo(() => {
    return sample_screenshots?.map(ss => <ScreenShot src={ss.image} />);
  }, [sample_screenshots]);

  return (
    <Container>
      <Columns>
        <Column>
          <Cover src={game?.sample_cover?.image} />
        </Column>
        <Column>
          <Title>{game?.title}</Title>
          <Year>2024</Year>
          <MobyScore>
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="starLine" />
            <Icons type="starLine" />
          </MobyScore>
          <Description dangerouslySetInnerHTML={{ __html: game?.description }} />

          <MobyLink href={game?.moby_url}>MobyGames</MobyLink>
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
