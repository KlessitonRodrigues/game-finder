import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(2)};
    margin: ${theme.size(2)} 0;
    border-radius: ${theme.radius.large};
  `,
);

export const RandomGameBtn = styled.button(
  ({ theme }) => css`
    margin: ${theme.size(10)} auto;
    background-color: #fff;
  `,
);