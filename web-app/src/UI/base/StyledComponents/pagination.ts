import styled, { css } from 'styled-components';

import { cssSize, gradients } from 'src/styles/tools';

export const Pagination = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${cssSize(4)};
    position: -webkit-sticky;
    position: sticky;
    bottom: ${cssSize(4)};
  `,
);

export const PaginationBadge = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: ${cssSize(10)};
    height: ${cssSize(10)};
    background-image: ${gradients.blue};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.medium};
    font-size: ${theme.fontSize.h3};
    border-radius: 50%;

    &:hover {
      background-image: ${gradients.darkBlue};
    }
  `,
);
