import PageContainer from 'src/UI/base/PageContainer';
import { YoutubeView } from 'src/UI/components/YoutubeView';

const HomePage = () => {
  return (
    <PageContainer>
      <YoutubeView query="Forza Horizon 3" />
    </PageContainer>
  );
};

export default HomePage;
