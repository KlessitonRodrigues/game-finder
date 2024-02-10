import { useMemo, useState } from 'react';

import { Title, TitleBar } from 'src/UI/base/StyledComponents/Titles';
import { DefaultButton } from 'src/UI/base/StyledComponents/buttons';
import { gameFilters } from 'src/constants/models';
import useGameData from 'src/hooks/useGameData';
import { getRandomGames } from 'src/utils/mobygames';

import Icons from 'UI/base/Icons';
import { Column, FlexRow } from 'UI/base/StyledComponents/Containers';
import { Input, InputBox, InputTitle } from 'UI/base/StyledComponents/Inputs';
import { Select, SelectBox, SelectItem, SelectTitle } from 'UI/base/StyledComponents/Select';

import { Container } from './styled';

export const GameFilter = () => {
  const {
    categories,
    platforms,
    setLastUpdate,
    selectedCategory,
    selectedPlatform,
    setCategory,
    setPlatform,
  } = useGameData();
  const [categoryType, setCategoryType] = useState('');
  const [filters, setFilters] = useState(gameFilters);

  const PlatformItems = useMemo(() => {
    return platforms.map((platform, i) => <SelectItem value={i}>{platform}</SelectItem>);
  }, [platforms]);

  const categoryItems = useMemo(() => {
    const types: string[] = [];
    const items: { i: number; name: string }[] = [];

    categories.forEach((category, i) => {
      const { t, n } = JSON.parse(category);
      if (!types.includes(t)) types.push(t);
      if (categoryType === '' || categoryType === t) items.push({ i, name: n });
    });

    return { types, items };
  }, [categories, categoryType]);

  const CategoriesTypes = useMemo(() => {
    return categoryItems.types.map(type => <SelectItem value={type}>{type}</SelectItem>);
  }, [categories]);

  const CategoriesNames = useMemo(() => {
    return categoryItems.items.map(ct => <SelectItem value={ct.i}>{ct.name}</SelectItem>);
  }, [categories, categoryType]);

  const onFiltering = () => {
    getRandomGames(selectedCategory, selectedPlatform);
    setLastUpdate(Date.now());
  };

  return (
    <Container>
      <Column>
        <Title>
          <Icons type="selector" />
          Filters
        </Title>
        <TitleBar />

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
            <Icons type="platform" />
            <SelectTitle>Platform</SelectTitle>
            <Select value={selectedPlatform} onChange={ev => setPlatform(Number(ev.target.value))}>
              {PlatformItems}
            </Select>
          </SelectBox>
        </FlexRow>

        <FlexRow>
          <SelectBox>
            <Icons type="category" />
            <SelectTitle>Category Type</SelectTitle>
            <Select value={categoryType} onChange={ev => setCategoryType(ev.target.value)}>
              {CategoriesTypes}
            </Select>
          </SelectBox>
          <SelectBox>
            <Icons type="category" />
            <SelectTitle>Category</SelectTitle>
            <Select value={selectedCategory} onChange={ev => setCategory(Number(ev.target.value))}>
              {CategoriesNames}
            </Select>
          </SelectBox>
        </FlexRow>

        <FlexRow>
          <InputBox>
            <Icons type="date" />
            <InputTitle>From Year</InputTitle>
            <Input type="number" value="2023" />
          </InputBox>
          <InputBox>
            <Icons type="date" />
            <InputTitle>To Year</InputTitle>
            <Input type="number" value="2023" />
          </InputBox>
        </FlexRow>

        <FlexRow>
          <SelectBox>
            <Icons type="list" />
            <SelectTitle>List Format</SelectTitle>
            <Select value={selectedPlatform} onChange={ev => setPlatform(Number(ev.target.value))}>
              <SelectItem>Ordered</SelectItem>
              <SelectItem>Random</SelectItem>
            </Select>
          </SelectBox>
          <SelectBox>
            <Icons type="list" />
            <SelectTitle>Pages Items</SelectTitle>
            <Select value={selectedPlatform} onChange={ev => setPlatform(Number(ev.target.value))}>
              <SelectItem>10</SelectItem>
              <SelectItem>25</SelectItem>
              <SelectItem>50</SelectItem>
            </Select>
          </SelectBox>
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
