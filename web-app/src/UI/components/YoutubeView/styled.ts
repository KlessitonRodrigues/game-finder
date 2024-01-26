import styled, { css } from 'styled-components';

import screenSizes from 'src/styles/lib/screenSizes';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-height: ${theme.size(200)};
    padding: ${theme.size(4)};
  `,
);

export const Content = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size(2)};
    background-color: ${theme.colors.bg1 + '44'};
    backdrop-filter: blur(8px);
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    color: ${theme.colors.white};
    padding: ${theme.size(4)};
  `,
);

export const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
);

export const Controls = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    margin-top: ${theme.size(1.5)};

    :hover {
      color: ${theme.colors.red};
    }
  `,
);

export const VideoFrame = styled.iframe(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(300)};
    height: ${theme.size(170)};
    margin: auto;
    margin-top: ${theme.size(4)};
    background-color: #000;
    border-radius: ${theme.radius.veryLarge};
    box-shadow: ${theme.shadow.high};
    border: none;
    outline: none;

    @media (max-width: ${screenSizes.desktopL}px) {
      height: ${theme.size(170)};
    }

    @media (max-width: ${screenSizes.laptopM}px) {
      height: ${theme.size(150)};
    }

    @media (max-width: ${screenSizes.laptopS}px) {
      height: ${theme.size(125)};
    }

    @media (max-width: ${screenSizes.tablet}px) {
      height: ${theme.size(100)};
    }
  `,
);
