import styled, { css } from 'styled-components';

import screenSizes from 'src/styles/lib/screenSizes';

export const Columns = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.size(4)};
    gap: ${theme.size(4)};

    @media (max-width: ${screenSizes.laptopM}px) {
      flex-direction: column;
    }
  `,
);

export const Column = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size(2)};
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg2};
    backdrop-filter: blur(4px);
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    color: ${theme.colors.text2};
    box-shadow: ${theme.shadow.high};
  `,
);

export const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    width: 100%;

    @media (max-width: ${screenSizes.tablet}px) {
      width: 100%;
      flex-direction: column;
    }
  `,
);
