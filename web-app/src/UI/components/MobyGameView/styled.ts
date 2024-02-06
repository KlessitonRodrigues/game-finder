import styled, { css } from 'styled-components';

import { screenSize } from 'src/styles/tools';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
  `,
);

export const Cover = styled.img(
  ({ theme }) => css`
    margin: auto;
    width: 100%;
    max-width: ${theme.size(140)};
    border-radius: ${theme.radius.large};
    overflow: hidden;
  `,
);

export const Year = styled.h4(({ theme }) => css``);

export const Description = styled.p(({ theme }) => css``);

export const MobyLink = styled.a(
  ({ theme }) => css`
    text-decoration: none;
  `,
);

export const MobyScore = styled.div(({ theme }) => css``);

export const ScreenShots = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)} 0;
  `,
);

export const ScreenShot = styled.img(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(160)};
    border-radius: ${theme.radius.large};
    border: 2px solid ${theme.colors.white + '44'};

    @media (max-width: ${screenSize.laptopM}px) {
      max-width: ${theme.size(220)};
    }
  `,
);
