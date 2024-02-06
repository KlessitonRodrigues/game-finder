import { useEffect, useState } from 'react';

import { searchVideos } from 'src/utils/youtube';

import Icons from 'UI/base/Icons';
import If from 'UI/base/If';
import { Column } from 'UI/base/StyledComponents/Containers';
import { Title, TitleBar } from 'UI/base/StyledComponents/Titles';

import { Container, Controls, Header, VideoFrame } from './styled';

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
            <Icons size={10} type="previous" onClick={() => index && setIndex(index - 1)} />
            <Icons
              size={10}
              type="next"
              onClick={() => index < urls.length - 1 && setIndex(index + 1)}
            />
          </Controls>
        </Header>
        <TitleBar />
        <If check={!!query}>
          <VideoFrame src={urls[index]} />
        </If>
      </Column>
    </Container>
  );
};
