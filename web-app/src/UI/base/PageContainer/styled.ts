import styled, { css } from 'styled-components';

import { cssSize } from 'src/styles/tools';

export const Container = styled.div(
  () => css`
    width: 100%;
    max-width: ${cssSize(350)};
    margin: auto;
    margin-bottom: ${cssSize(4)};
  `,
);
