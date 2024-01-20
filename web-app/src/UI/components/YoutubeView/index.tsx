import { useEffect, useState } from 'react';
import { Container, Content, Controls, Header, Title, VideoFrame } from './styled';
import { searchVideos } from 'src/utils/youtube';
import Icons from 'src/UI/base/Icons';

export const YoutubeView = (props: Props.YoutubeView) => {
  const { query } = props;
  const [urls, setUrls] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    searchVideos(query + 'gameplay').then(setUrls);
    setIndex(0);
  }, []);

  return (
    <Container>
      <Content>
        <Header>
          <Title>Youtube</Title>
          <Controls>
            <Icons size={10} type="previous" onPress={() => index && setIndex(index - 1)} />
            <Icons
              size={10}
              type="next"
              onPress={() => index < urls.length - 1 && setIndex(index + 1)}
            />
          </Controls>
        </Header>

        <VideoFrame src={urls[index]} />
      </Content>
    </Container>
  );
};
