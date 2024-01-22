import screenSizes from 'src/styles/lib/screenSizes';
import styled, { css } from 'styled-components';

export const Title = styled.h2(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(2)};
  `,
);

export const Columns = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    padding: ${theme.size(4)};
    gap: ${theme.size(4)};

    @media (max-width: ${screenSizes.laptopM}px) {
      flex-direction: column;
    }
  `,
);

export const Column = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: ${theme.size(2)};
    padding: ${theme.size(4)};
    background-color: ${theme.colors.bg3};
    backdrop-filter: blur(4px);
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    color: ${theme.colors.text2};
  `,
);

export const List = styled.ol(
  ({ theme }) => css`
    padding-left: ${theme.size(6)};
  `,
);

export const ListItem = styled.li(
  ({ theme }) => css`
    list-style: none;
    position: relative;

    &::after {
      content: '';
      padding: 3px;
      border: 1px solid ${theme.colors.text3};
      border-radius: 50%;
      position: absolute;
      left: -15px;
      top: 6px;
    }
  `,
);

export const Bar = styled.hr(
  ({ theme }) => css`
    border-color: ${theme.colors.text1 + '44'};
  `,
);

export const Row = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
  `,
);
