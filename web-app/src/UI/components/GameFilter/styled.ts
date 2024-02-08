import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)};
    margin: auto;
  `,
);
