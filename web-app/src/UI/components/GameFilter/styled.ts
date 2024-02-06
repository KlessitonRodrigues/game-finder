import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)};
    margin: auto;
  `,
);

export const ShowListBtn = styled.button(
  ({ theme }) => css`
    display: flex;
    padding: ${theme.size(2)} ${theme.size(4)};
    margin: ${theme.size(4)};
    background-color: ${theme.colors.bg3};
    border-radius: ${theme.radius.large};
    color: ${theme.colors.text1};
    font-size: ${theme.size(8)};

    &:hover {
      background-color: ${theme.colors.bg2};
    }
  `,
);
