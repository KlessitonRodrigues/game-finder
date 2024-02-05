import { useEffect, useMemo, useState } from 'react';

import useGameData from 'src/hooks/useGameData';
import { getPageItems } from 'src/utils/mobygames';

import { Card, CardDescription, CardImg, Cards, Container } from './styled';

const GameList = (props: Props.GameList) => {
  const { onSelect } = props;

  const { lastUpdate } = useGameData();
  const [list, setList] = useState<Utils.GameInfo[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    setList(getPageItems(page, 20));
  }, [lastUpdate]);

  const CardItems = useMemo(() => {
    return list.map(game => {
      return (
        <Card key={game.i} onClick={() => onSelect(game)}>
          <CardImg src={game.c} />
          <CardDescription>
            <b>2024</b>
            <div>{game.n}</div>
          </CardDescription>
        </Card>
      );
    });
  }, [list]);

  return (
    <Container>
      <Cards>{CardItems}</Cards>
    </Container>
  );
};

export default GameList;
