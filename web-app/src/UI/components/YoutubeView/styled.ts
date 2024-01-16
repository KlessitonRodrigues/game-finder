import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
  `,
);

export const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(8)};
    padding: ${theme.size(2)} 0;
    color: ${theme.colors.text3};
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

export const Title = styled.h1(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    color: ${theme.colors.red};
  `,
);

export const VideoFrame = styled.iframe(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(400)};
    max-height: ${theme.size(225)};
    background-color: #000;
    border-radius: ${theme.radius.veryLarge};
    box-shadow: ${theme.shadow.high};
    border: none;
    outline: none;
  `,
);
