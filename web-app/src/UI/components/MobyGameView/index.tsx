import { useEffect, useState } from 'react';
import {
  Column,
  Container,
  Columns,
  Cover,
  Description,
  MobyLink,
  MobyScore,
  Title,
  Year,
  Categories,
  Category,
  ScreenShots,
  ScreenShot,
} from './styled';
import { gameInfo } from 'src/utils/test';
import Icons from 'src/UI/base/Icons';

const MobyGameView = () => {
  const [game, setGame] = useState(gameInfo);

  useEffect(() => {
    // getGameById(150689).then(g => console.log(g));
  }, []);

  return (
    <Container>
      <Columns>
        <Column>
          <Cover src={game.sample_cover.image} />
        </Column>
        <Column>
          <Title>{game.title}</Title>
          <Year>2024</Year>
          <MobyScore>
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="star" />
            <Icons type="starLine" />
            <Icons type="starLine" />
          </MobyScore>
          <Description dangerouslySetInnerHTML={{ __html: game.description }} />
          <Categories>
            {game.genres.map(category => (
              <Category>{category.genre_name}</Category>
            ))}
          </Categories>
          <MobyLink href={game.moby_url}>MobyGames</MobyLink>
        </Column>
      </Columns>
      <Columns>
        <Column>
          <Title>Screenshots</Title>
          <ScreenShots>
            {game.sample_screenshots.map(ss => (
              <ScreenShot src={ss.image} />
            ))}
          </ScreenShots>
        </Column>
      </Columns>
    </Container>
  );
};

export default MobyGameView;
