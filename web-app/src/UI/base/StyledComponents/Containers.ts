import styled, { css } from 'styled-components';

import { cssSize, screenSize } from 'src/styles/tools';

export const Columns = styled.div(
  () => css`
    width: 100%;
    display: flex;
    padding: 0 ${cssSize(4)} ${cssSize(4)};
    gap: ${cssSize(4)};

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
    gap: ${cssSize(4)};
    padding: ${cssSize(4)};
    background-color: ${theme.colors.bg2};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.veryLarge};
    box-shadow: ${theme.shadow.low};
  `,
);

export const Row = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${cssSize(4)};
    width: 100%;
  `,
);

export const FlexRow = styled.div<{ justify?: string }>(
  ({ justify }) => css`
    display: flex;
    align-items: center;
    justify-content: ${justify || 'flex-start'};
    gap: ${cssSize(4)};
    width: 100%;

    @media (max-width: ${screenSize.tablet}px) {
      width: 100%;
      flex-direction: column;
    }
  `,
);
