import { useEffect, useMemo, useState } from 'react';

import Icons from 'src/UI/base/Icons';
import { Column } from 'src/UI/base/StyledComponents/Containers';
import { Title, TitleBar } from 'src/UI/base/StyledComponents/Titles';
import { Pagination, PaginationBadge } from 'src/UI/base/StyledComponents/pagination';
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
  }, [lastUpdate, page]);

  const cardItems = useMemo(() => {
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

  if (!cardItems.length) return null;

  return (
    <Container>
      <Column>
        <Title>
          <Icons type="list" />
          Game List
        </Title>
        <TitleBar />

        <Cards>{cardItems}</Cards>
        <Pagination>
          <PaginationBadge>
            <Icons type="previous" onClick={() => setPage(page - 1)} />
          </PaginationBadge>

          <PaginationBadge>{page + 1}</PaginationBadge>

          <PaginationBadge>
            <Icons type="next" onClick={() => setPage(page + 1)} />
          </PaginationBadge>
        </Pagination>
      </Column>
    </Container>
  );
};

export default GameList;
