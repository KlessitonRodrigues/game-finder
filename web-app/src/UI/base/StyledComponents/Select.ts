import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/tools';

export const SelectBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    width: 100%;
    padding: ${theme.size(2)} ${theme.size(3)};
    font-weight: bold;
    font-size: ${theme.fontSize.label};
    background-image: ${gradients.blue};
    color: ${theme.colors.white};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.low};

    &:hover {
      background-image: ${gradients.darkBlue};
    }
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    width: 100%;
    font-family: sans-serif;
    font-size: ${theme.fontSize.body};
    color: ${theme.colors.white};
    padding-left: ${theme.size(2)};
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
