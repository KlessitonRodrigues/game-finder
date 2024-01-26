import styled, { css } from 'styled-components';

import { animations } from 'src/styles/lib/animations';

export const Container = styled.div(() => css``);

export const FullScreen = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
    z-index: 2;
  `,
);

export const Spinner = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.size(8)};
    animation: ${animations.spinning} 0.8s infinite linear;
    color: ${theme.colors.white};
  `,
);

export const Title = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.fontSize.label};
    margin-bottom: ${theme.size(2)};
    animation: ${animations.slideUpLarge} 0.5s ease-out;
    color: ${theme.colors.white};
  `,
);

export const Description = styled.p(
  ({ theme }) => css`
    font-size: ${theme.fontSize.verySmall};
    animation: ${animations.slideUpLarge} 0.5s ease-out;
    color: ${theme.colors.white};
  `,
);
