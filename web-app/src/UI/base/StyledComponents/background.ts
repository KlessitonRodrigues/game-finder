import styled, { css } from 'styled-components';

import { materialColors as mc } from 'src/styles/palettes';

import bgImage2 from 'UI/assets/jpg/bg_8.jpg';
import bgImage1 from 'UI/assets/png/gradient_1.png';

export const ImageBg = styled.div<{ isDark?: boolean }>(
  ({ isDark }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bgImage2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: -1;
    transition: 0.3s;
    ${isDark && 'filter: brightness(0.5);'}
  `,
);

export const GradidentBg = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(35deg, ${mc.lightBlue['300']}, ${mc.purple['300']});
    background-size: 100% 100%;
    z-index: -1;
  `,
);
