import { useMemo } from 'react';

import { iconMap } from './services/iconMap';
import { Container } from './styled';

const Icons = (props: Props.Icons) => {
  const { type, size, style, onPress } = props;
  const Icon = useMemo(() => iconMap[type], []);

  return (
    <Container className="icon" size={size} style={style} onClick={onPress}>
      {Icon}
    </Container>
  );
};

export default Icons;
