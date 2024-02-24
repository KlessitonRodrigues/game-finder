import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/tools';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
  `,
);

export const Cover = styled.img(
  ({ theme }) => css`
    margin: auto;
    width: 100%;
    max-width: ${cssSize(140)};
    border-radius: ${theme.radius.large};
    overflow: hidden;
  `,
);

export const Year = styled.h4(() => css``);

export const Description = styled.p(() => css``);

export const MobyLink = styled.a(
  () => css`
    text-decoration: none;
  `,
);

export const MobyScore = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.main};
  `,
);

export const ScreenShots = styled.div(
  () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${cssSize(4)};
    padding: ${cssSize(4)} 0;
  `,
);

export const ScreenShot = styled.img(
  ({ theme }) => css`
    width: 100%;
    max-width: ${cssSize(160)};
    border-radius: ${theme.radius.large};
    border: 2px solid ${theme.colors.white + '44'};

    @media (max-width: ${screenSize.laptopM}px) {
      max-width: ${cssSize(220)};
    }
  `,
);
