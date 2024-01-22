import styled, { css } from 'styled-components';

import { animations } from 'src/styles/lib/animations';

export const Container = styled.div(() => css``);

export const FullScreen = styled.div(
  () => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
    z-index: 2;
  `,
);

export const Spinner = styled.div(
  props => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props.theme.size(8)};
    animation: ${animations.spinning} 0.8s infinite linear;
  `,
);

export const Title = styled.p(
  props => css`
    font-size: ${props.theme.fontSize.label};
    margin-bottom: ${props.theme.size(2)};
    animation: ${animations.slideUpLarge} 0.5s ease-out;
  `,
);

export const Description = styled.p(
  props => css`
    color: ${props.theme.colors.text4};
    font-size: ${props.theme.fontSize.verySmall};
    animation: ${animations.slideUpLarge} 0.5s ease-out;
  `,
);
