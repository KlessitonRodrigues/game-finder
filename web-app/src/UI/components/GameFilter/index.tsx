import { useEffect, useState } from 'react';
import { Container, Filters } from './styled';
import { getGameFilters } from 'src/utils/mobygames';
import Icons from 'src/UI/base/Icons';
import useApp from 'src/hooks/useApp';
import { Input, Row, Select, SelectBox, SelectItem } from 'src/UI/base/styled';

export const GameFilter = () => {
  const { gameCategory, gamePlatform, setGameCategory, setGamePlatform } = useApp();
  const [filters, setFilters] = useState({ categories: [], platforms: [] });

  useEffect(() => {
    const filters = getGameFilters();
    setFilters(filters);
  }, []);

  return (
    <Container>
      <Filters>
        <Row>
          <SelectBox>
            <Icons type="platform" />
            <Select value={gamePlatform} onChange={ev => setGamePlatform(Number(ev.target.value))}>
              {filters.platforms.map((platform, i) => (
                <SelectItem value={i}>{platform}</SelectItem>
              ))}
            </Select>
          </SelectBox>

          <SelectBox>
            <Icons type="category" />
            <Select value={gameCategory} onChange={ev => setGameCategory(Number(ev.target.value))}>
              {filters.categories.map((category, i) => (
                <SelectItem value={i}>{category}</SelectItem>
              ))}
            </Select>
          </SelectBox>
        </Row>

        <Row>
          <Input type="number" value="2023" />
          <Input type="number" value="2024" />
        </Row>
      </Filters>
    </Container>
  );
};
