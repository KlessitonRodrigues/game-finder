import styled, { css } from 'styled-components';

import { screenSize } from 'src/styles/tools';

export const Columns = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    padding: 0 ${theme.size(4)} ${theme.size(4)};
    gap: ${theme.size(4)};

    @media (max-width: ${screenSize.laptopM}px) {
      flex-direction: column;
    }
  `,
);

export const Column = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text2};
    backdrop-filter: blur(4px);
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.low};
  `,
);

export const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    width: 100%;

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
      flex-direction: column;
    }
  `,
);
