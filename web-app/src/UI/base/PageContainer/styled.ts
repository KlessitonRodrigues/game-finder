import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(400)};
    overflow-y: auto;
    margin: auto;
  `,
);
