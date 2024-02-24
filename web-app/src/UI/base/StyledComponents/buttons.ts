import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/tools';

export const DefaultButton = styled.ol(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    padding: ${theme.size(2)} ${theme.size(3)};
    border: 1px solid transparent;
    border-radius: ${theme.radius.large};
    background-image: ${gradients.purple};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.low};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    cursor: pointer;
    transition: 0.1s;

    &:hover {
      background-image: ${gradients.darkPurple};
    }

    .icon {
      color: ${theme.colors.white};
    }
  `,
);
