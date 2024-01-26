import styled, { css } from 'styled-components';

export const SelectBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    width: 100%;
    padding: ${theme.size(2)};
    font-weight: bold;
    font-size: ${theme.fontSize.label};
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.medium};
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.text1};
    font-family: sans-serif;
    font-size: ${theme.fontSize.body};
    padding-left: ${theme.size(4)};
    padding-top: ${theme.size(0.5)};

    &::-webkit-scrollbar {
      width: ${theme.size(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.white};
    }
  `,
);

export const SelectTitle = styled.div(
  () => css`
    min-width: max-content;
  `,
);

export const SelectItem = styled.option(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
  `,
);