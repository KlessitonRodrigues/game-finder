import styled, { css } from 'styled-components';

export const Title = styled.h4(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
  `,
);

export const TitleBar = styled.hr(
  ({ theme }) => css`
    border-color: ${theme.colors.text1 + '44'};
  `,
);
