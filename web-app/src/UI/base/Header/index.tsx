import { openPrintDialog } from 'src/utils/pdf';
import { Container } from './styled';
import Loading from '../Loading';
import { useState } from 'react';

const Header = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Container>
      <Loading type="fullScreen" show={loading} />
    </Container>
  );
};

export default Header;
