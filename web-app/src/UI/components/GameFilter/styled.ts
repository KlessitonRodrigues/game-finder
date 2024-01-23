import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    padding: ${theme.size(4)};
  `,
);

export const Filters = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
  `,
);

export const SelectBox = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    padding: ${theme.size(2)} ${theme.size(4)};
    background-color: ${theme.colors.bg4};
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h5};
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h5};

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

export const SelectItem = styled.option(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    font-family: sans-serif;
  `,
);

export const Platforms = styled.div(({ theme }) => css``);
