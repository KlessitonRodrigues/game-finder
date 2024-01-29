import styled, { css } from 'styled-components';

export const DefaultButton = styled.ol(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    padding: ${theme.size(3)} ${theme.size(4)};
    margin: ${theme.size(4)};
    background-color: ${theme.colors.bg3};
    border-radius: ${theme.radius.large};
    color: ${theme.colors.text1};
    box-shadow: ${theme.shadow.medium};
    font-size: ${theme.fontSize.label};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${theme.colors.bg2};
    }
  `,
);
