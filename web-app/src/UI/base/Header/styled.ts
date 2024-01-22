import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => css``);

export const RandomGameBtn = styled.button(
  ({ theme }) => css`
    margin: ${theme.size(10)} auto;
    background-color: #fff;
  `,
);
