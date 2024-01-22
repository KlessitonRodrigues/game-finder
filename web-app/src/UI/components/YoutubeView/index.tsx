import { useEffect, useState } from 'react';
import { Container, Controls, Header, VideoFrame } from './styled';
import { searchVideos } from 'src/utils/youtube';
import Icons from 'src/UI/base/Icons';
import { Bar, Column, Title } from 'src/UI/base/styled';
import If from 'src/UI/base/If';

export const YoutubeView = (props: Props.YoutubeView) => {
  const { query } = props;
  const [urls, setUrls] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (query) {
      searchVideos(query + 'gameplay').then(setUrls);
      setIndex(0);
    }
  }, [query]);

  return (
    <Container>
      <Column>
        <Header>
          <Title>
            <Icons type="youtube" />
            Youtube
          </Title>
          <Controls>
            <Icons size={10} type="previous" onPress={() => index && setIndex(index - 1)} />
            <Icons
              size={10}
              type="next"
              onPress={() => index < urls.length - 1 && setIndex(index + 1)}
            />
          </Controls>
        </Header>
        <Bar />
        <If check={!!query}>
          <VideoFrame src={urls[index]} />
        </If>
      </Column>
    </Container>
  );
};
