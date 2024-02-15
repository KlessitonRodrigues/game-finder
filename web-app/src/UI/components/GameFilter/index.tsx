import { useMemo, useState } from 'react';

import { Title } from 'src/UI/base/StyledComponents/Titles';
import { DefaultButton } from 'src/UI/base/StyledComponents/buttons';
import { gameFilters } from 'src/constants/models';
import useGameData from 'src/hooks/useGameData';
import { getCategoryNames, updateGameList } from 'src/utils/mobygames';

import Icons from 'UI/base/Icons';
import { Column, FlexRow } from 'UI/base/StyledComponents/Containers';
import { Input, InputBox, InputTitle } from 'UI/base/StyledComponents/Inputs';
import { Select, SelectBox, SelectItem, SelectTitle } from 'UI/base/StyledComponents/Select';

import { Container } from './styled';

export const GameFilter = () => {
  const { categories, platforms, setLastUpdate } = useGameData();
  const [filters, setFilters] = useState(gameFilters);

  const { category, platform, categoryType } = filters;

  const categoryItems = useMemo(() => {
    return getCategoryNames(categoryType);
  }, [categories, categoryType]);

  const CategoriesTypes = useMemo(() => {
    return categoryItems.types.map(type => {
      return <SelectItem value={type}>{type}</SelectItem>;
    });
  }, [categories]);

  const CategoriesNames = useMemo(() => {
    return categoryItems.items.map(ct => {
      return <SelectItem value={ct.i}>{ct.name}</SelectItem>;
    });
  }, [categories, categoryType]);

  const PlatformItems = useMemo(() => {
    return platforms.map((platform, i) => {
      return <SelectItem value={i}>{platform}</SelectItem>;
    });
  }, [platforms]);

  const onFiltering = () => {
    updateGameList(filters);
    setLastUpdate(Date.now());
  };

  return (
    <Container>
      <Column>
        <Title>
          <Icons type="selector" />
          Filters
        </Title>

        <FlexRow>
          <InputBox>
            <Icons type="search" />
            <InputTitle>Search</InputTitle>
            <Input
              type="search"
              value={filters.search}
              onChange={ev => setFilters({ ...filters, search: ev.target.value })}
            />
          </InputBox>
          <SelectBox>
            <Icons type="selector" />
            <SelectTitle>Platform</SelectTitle>
            <Select
              value={platform}
              onChange={ev => setFilters({ ...filters, platform: ev.target.value })}
            >
              <SelectItem value="">All</SelectItem>
              {PlatformItems}
            </Select>
          </SelectBox>
        </FlexRow>

        <FlexRow>
          <SelectBox>
            <Icons type="selector" />
            <SelectTitle>Category Type</SelectTitle>
            <Select
              value={filters.categoryType}
              onChange={ev => setFilters({ ...filters, categoryType: ev.target.value })}
            >
              <SelectItem value="">All</SelectItem>
              {CategoriesTypes}
            </Select>
          </SelectBox>
          <SelectBox>
            <Icons type="selector" />
            <SelectTitle>Category</SelectTitle>
            <Select
              value={category}
              onChange={ev => setFilters({ ...filters, category: ev.target.value })}
            >
              <SelectItem value="">All</SelectItem>
              {CategoriesNames}
            </Select>
          </SelectBox>
        </FlexRow>

        <FlexRow>
          <InputBox>
            <Icons type="date" />
            <InputTitle>From Year</InputTitle>
            <Input
              type="number"
              value={filters.fromYear}
              onChange={ev => setFilters({ ...filters, fromYear: ev.target.value })}
            />
          </InputBox>
          <InputBox>
            <Icons type="date" />
            <InputTitle>To Year</InputTitle>
            <Input
              type="number"
              value={filters.toYear}
              onChange={ev => setFilters({ ...filters, toYear: ev.target.value })}
            />
          </InputBox>
        </FlexRow>

        <FlexRow>
          <DefaultButton onClick={onFiltering}>
            <Icons type="search" />
            Find Games
          </DefaultButton>
        </FlexRow>
      </Column>
    </Container>
  );
};
