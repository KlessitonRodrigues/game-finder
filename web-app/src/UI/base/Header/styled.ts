import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/tools';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(4)};
  `,
);

export const Buttons = styled.div(
  () => css`
    display: flex;
    align-items: center;
    gap: ${cssSize(4)};

    a {
      font-size: 0;
      padding: 0;
      margin: 0;
    }

    .icon:hover {
      opacity: 0.5;
    }
  `,
);
