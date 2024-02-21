import { useEffect, useMemo, useState } from 'react';

import Icons from 'src/UI/base/Icons';
import Pagination from 'src/UI/base/Pagination';
import { Column } from 'src/UI/base/StyledComponents/Containers';
import { Title } from 'src/UI/base/StyledComponents/Titles';
import useGameData from 'src/hooks/useGameData';
import { getPageItems } from 'src/utils/mobygames';

import { Card, CardDescription, CardImg, Cards, Container } from './styled';

const GameList = (props: Props.GameList) => {
  const { onSelect } = props;
  const { lastUpdate } = useGameData();
  const [list, setList] = useState<Models.GameInfo[]>([]);
  const [page, setPage] = useState({ index: 1, total: 0 });

  useEffect(() => {
    const { pages, pageItems } = getPageItems(page.index, 20);
    if (pageItems) {
      setList(pageItems);
      setPage({ index: 1, total: pages });
      window.scrollTo({ top: 0 });
    }
  }, [lastUpdate]);

  useEffect(() => {
    const { pageItems } = getPageItems(page.index, 20);
    if (pageItems) {
      setList(pageItems);
      window.scrollTo({ top: 0 });
    }
  }, [page.index]);

  const cardItems = useMemo(() => {
    return list.map(game => {
      return (
        <Card key={game.i} onClick={() => onSelect(game)}>
          <CardImg src={game.c} />
          <CardDescription>
            <b>{game.y}</b>
            <div>{game.n}</div>
          </CardDescription>
        </Card>
      );
    });
  }, [list]);

  if (!list.length) return null;

  return (
    <Container>
      <Column>
        <Title>
          <Icons type="list" />
          Game List
        </Title>

        <Cards>{cardItems}</Cards>

        <Pagination
          page={page.index}
          total={page.total}
          onChange={index => setPage({ ...page, index })}
        />
      </Column>
    </Container>
  );
};

export default GameList;
