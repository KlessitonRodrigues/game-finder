import styled, { css } from 'styled-components';

import { gradients } from 'src/styles/tools';

export const InputBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    width: 100%;
    padding: ${theme.size(2)} ${theme.size(3)};
    font-weight: bold;
    font-size: ${theme.fontSize.label};
    border-radius: ${theme.radius.medium};
    background-image: ${gradients.blue};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadow.low};

    &:hover {
      background-image: ${gradients.darkBlue};

      input {
        border-bottom: 1px solid ${theme.colors.white};
      }
    }
  `,
);

export const InputTitle = styled.div(
  () => css`
    min-width: max-content;
  `,
);

export const Input = styled.input(
  ({ theme }) => css`
    width: 100%;
    padding-left: ${theme.size(2)};
    padding-top: ${theme.size(0.5)};
    font-size: ${theme.fontSize.body};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${theme.colors.white};
  `,
);
