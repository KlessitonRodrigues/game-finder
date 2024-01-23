import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    padding: ${theme.size(4)};
  `,
);

export const Filters = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: ${theme.size(4)};
  `,
);
