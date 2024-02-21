import styled, { css } from 'styled-components';

import { cssSize, gradients } from 'src/styles/tools';

export const Pages = styled.div(
  ({ theme }) => css`
    position: -webkit-sticky;
    position: sticky;
    bottom: ${cssSize(6)};
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: ${gradients.blue};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.medium};
    font-size: ${theme.fontSize.h3};
    border-radius: ${theme.radius.large};
    overflow: hidden;
    cursor: pointer;
    transition: 1s;
  `,
);

export const PagesBadge = styled.div<{ active?: boolean }>(
  ({ active }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${cssSize(14)};
    height: ${cssSize(12)};

    ${active && `background-image: ${gradients.darkBlue};`}

    &:hover {
      background-image: ${gradients.darkBlue};
    }
  `,
);
