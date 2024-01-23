import { useEffect, useState } from 'react';
import { Container, Filters, Select, SelectBox, SelectItem } from './styled';
import { getGameFilters } from 'src/utils/mobygames';
import Icons from 'src/UI/base/Icons';

export const GameFilter = () => {
  const [filters, setFilters] = useState({ categories: [], platforms: [] });

  useEffect(() => {
    const filters = getGameFilters();
    setFilters(filters);
  }, []);

  return (
    <Container>
      <Filters>
        <SelectBox>
          <Icons type="category" />
          <Select>
            {filters.categories.map(category => (
              <SelectItem>{category}</SelectItem>
            ))}
          </Select>
        </SelectBox>

        <SelectBox>
          <Icons type="platform" />
          <Select>
            {filters.platforms.map(platform => (
              <SelectItem>{platform}</SelectItem>
            ))}
          </Select>
        </SelectBox>
      </Filters>
    </Container>
  );
};
