import styled, { css } from 'styled-components';

import { slideUp } from './keyframe';

export const Modal = styled.div<{ show: boolean }>(
  ({ show }) => css`
    display: ${show ? 'flex' : 'none'};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #0006;
    backdrop-filter: blur(12px);
  `,
);

export const ModalHeader = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: ${theme.size(350)};
    padding: ${theme.size(4)};
    color: #fff;
  `,
);

export const ModalContent = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    max-width: ${theme.size(350)};
    margin-bottom: ${theme.size(10)};
    overflow: auto;
    animation: 0.5s ${slideUp} ease;
  `,
);
