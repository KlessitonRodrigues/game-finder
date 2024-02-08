import styled, { css } from 'styled-components';

import { animations, cssSize, gradients, screenSize } from 'src/styles/tools';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(4)};
  `,
);

export const Cards = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${cssSize(8)} ${cssSize(4)};
    padding: ${theme.size(2)} 0;
  `,
);

export const Card = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${theme.size(80)};
    border: 2px solid ${theme.colors.text1 + '44'};
    border-radius: ${theme.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 0.2s;
    animation: ${animations.slideUp} 0.5s;

    @media (max-width: ${screenSize.tablet}px) {
      max-width: unset;
    }
  `,
);

export const CardImg = styled.img(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(80)};
    max-height: ${theme.size(95)};
    background-color: ${theme.colors.bg3};
    border: none;

    @media (max-width: ${screenSize.tablet}px) {
      max-width: unset;
      max-height: ${theme.size(120)};
    }
  `,
);

export const CardDescription = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: ${theme.size(22)};
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
    padding: ${theme.size(3)} ${theme.size(2)};
    font-size: ${theme.fontSize.verySmall};
    font-weight: bold;

    b {
      color: ${theme.colors.text3};
    }
  `,
);
