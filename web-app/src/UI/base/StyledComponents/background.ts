import styled, { css } from 'styled-components';

import { materialColors as mc } from 'src/styles/lib/palettes';

import purpleBg from 'UI/assets/jpg/purple.jpg';

export const Background = styled.div(
  () => css`
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

export const GradidentBg = styled.div(
  () => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${mc.blue['900']}, ${mc.purple['400']});
    background-size: 100% 100%;
    z-index: -1;
  `,
);
