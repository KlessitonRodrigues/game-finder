import styled, { css } from 'styled-components';

import purpleBg from 'src/UI/assets/jpg/purple_bg_3.jpg';

export const Background = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${purpleBg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
  `,
);
