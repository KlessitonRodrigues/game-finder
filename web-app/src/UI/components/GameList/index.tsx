import { useEffect, useMemo, useState } from 'react';

import Icons from 'src/UI/base/Icons';
import If from 'src/UI/base/If';
import { Column } from 'src/UI/base/StyledComponents/Containers';
import { Title } from 'src/UI/base/StyledComponents/Titles';
import { Pages, PagesBadge } from 'src/UI/base/StyledComponents/pagination';
import useGameData from 'src/hooks/useGameData';
import { getPageItems } from 'src/utils/mobygames';

import { Card, CardDescription, CardImg, Cards, Container } from './styled';

const GameList = (props: Props.GameList) => {
  const { onSelect } = props;

  const { lastUpdate } = useGameData();
  const [list, setList] = useState<Models.GameInfo[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setList(getPageItems(page, 20));
    window.scrollTo({ top: 0 });
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

        <Cards>{cardItems}</Cards>
        <Pages>
          <PagesBadge>
            <Icons type="previous" onClick={() => page > 1 && setPage(page - 1)} />
          </PagesBadge>
          <If check={page - 1 > 0}>
            <PagesBadge onClick={() => setPage(page - 1)}>{page - 1}</PagesBadge>
          </If>
          <PagesBadge active>{page}</PagesBadge>
          <PagesBadge onClick={() => setPage(page + 1)}>{page + 1}</PagesBadge>
          <PagesBadge onClick={() => setPage(page + 2)}>{page + 2}</PagesBadge>

          <PagesBadge>
            <Icons type="next" onClick={() => setPage(page + 1)} />
          </PagesBadge>
        </Pages>
      </Column>
    </Container>
  );
};

export default GameList;
