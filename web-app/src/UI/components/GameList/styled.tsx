import styled, { css } from 'styled-components';

import { slideUp } from 'src/UI/base/StyledComponents/keyframe';

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
    gap: ${theme.size(4)};
  `,
);

export const Card = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: ${theme.size(70)};
    border: 2px solid transparent;
    border-radius: ${theme.radius.veryLarge};
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;
    animation: ${slideUp} 0.3s ease-out;

    &:hover {
      border-color: ${theme.colors.bg2};
      box-shadow: ${theme.shadow.low};
    }
  `,
);

export const CardImg = styled.img(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(70)};
    max-height: ${theme.size(80)};
    background-color: ${theme.colors.bg2};
    border: none;
  `,
);

export const CardDescription = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: ${theme.size(22)};
    background-color: ${theme.colors.bg2};
    color: ${theme.colors.text1};
    padding: ${theme.size(3)} ${theme.size(2)};
    font-size: ${theme.fontSize.verySmall};
    font-weight: bold;

    b {
      color: ${theme.colors.text3};
    }
  `,
);
