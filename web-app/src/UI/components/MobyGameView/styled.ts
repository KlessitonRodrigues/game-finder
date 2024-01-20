import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
  `,
);

export const Columns = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.size(4)};
    gap: ${theme.size(4)};
  `,
);

export const Column = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size(2)};
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg3};
    backdrop-filter: blur(4px);
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    color: ${theme.colors.text2};
  `,
);

export const Cover = styled.img(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(140)};
    border-radius: ${theme.radius.medium};
    overflow: hidden;
  `,
);

export const Title = styled.h1(({ theme }) => css``);

export const Year = styled.h4(({ theme }) => css``);

export const Description = styled.p(({ theme }) => css``);

export const MobyLink = styled.a(
  ({ theme }) => css`
    text-decoration: none;
  `,
);

export const MobyScore = styled.div(({ theme }) => css``);

export const Platforms = styled.div(({ theme }) => css``);

export const Categories = styled.div(({ theme }) => css``);

export const Category = styled.div(({ theme }) => css``);

export const ScreenShots = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)} 0;
  `,
);

export const ScreenShot = styled.img(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(164)};
    border-radius: ${theme.radius.veryLarge};
    border: 2px solid ${theme.colors.white + '44'};
  `,
);
