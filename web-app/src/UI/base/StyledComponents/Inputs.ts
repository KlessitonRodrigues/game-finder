import styled, { css } from 'styled-components';

export const InputBox = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
    width: 100%;
    padding: ${theme.size(2)} ${theme.size(3)};
    font-weight: bold;
    font-size: ${theme.fontSize.label};
    color: ${theme.colors.text2};
    border: 1px solid ${theme.colors.text4};
    border-radius: ${theme.radius.large};
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
    padding: ${theme.size(0.5)} 0;
    font-size: ${theme.fontSize.h6};
    font-weight: bold;
    border: none;
    background-color: transparent;
    color: ${theme.colors.text1};
    border-bottom: 1px solid ${theme.colors.text1};
  `,
);
