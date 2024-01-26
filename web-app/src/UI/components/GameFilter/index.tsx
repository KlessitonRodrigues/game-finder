import { useMemo, useState } from 'react';

import Icons from 'src/UI/base/Icons';
import { Row } from 'src/UI/base/StyledComponents/Containers';
import { Input, InputBox, InputTitle } from 'src/UI/base/StyledComponents/Inputs';
import { Select, SelectBox, SelectItem, SelectTitle } from 'src/UI/base/StyledComponents/Select';
import useApp from 'src/hooks/useApp';
import useGameData from 'src/hooks/useGameData';

import { Container } from './styled';

export const GameFilter = () => {
  const { gameCategory, gamePlatform, setGameCategory, setGamePlatform } = useApp();
  const { categories, platforms } = useGameData();
  const [categoryType, setCategoryType] = useState('');

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

  return (
    <Container>
      <Row>
        <SelectBox>
          <Icons type="platform" />
          <SelectTitle>Platform</SelectTitle>
          <Select value={gamePlatform} onChange={ev => setGamePlatform(Number(ev.target.value))}>
            {PlatformItems}
          </Select>
        </SelectBox>
      </Row>
      <Row>
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
      </Row>

      <Row>
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
          <Select value={gameCategory} onChange={ev => setGameCategory(Number(ev.target.value))}>
            {CategoriesNames}
          </Select>
        </SelectBox>
      </Row>
    </Container>
  );
};