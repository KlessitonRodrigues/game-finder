import styled, { css } from 'styled-components';

import { materialColors as mc } from 'src/styles/palettes';

import bgImage1 from 'UI/assets/jpg/bg_8.jpg';

export const ImageBg = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage1});
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
    background: linear-gradient(35deg, ${mc.lightBlue['300']}, ${mc.purple['300']});
    background-size: 100% 100%;
    z-index: -1;
  `,
);
