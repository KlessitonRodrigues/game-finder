import styled, { css } from 'styled-components';

export const Title = styled.h2(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
  `,
);

export const Bar = styled.hr(
  ({ theme }) => css`
    border-color: ${theme.colors.text1 + '44'};
  `,
);
