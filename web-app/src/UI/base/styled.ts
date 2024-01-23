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
    box-shadow: 2px 2px 4px 1px #0008;
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

    @media (max-width: ${screenSizes.tablet}px) {
      width: 100%;
      flex-direction: column;
    }
  `,
);

export const SelectBox = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    gap: ${theme.size(4)};
    padding: ${theme.size(2)} ${theme.size(4)};
    background-color: ${theme.colors.bg4};
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h5};
    border-radius: ${theme.radius.large};
    box-shadow: 2px 2px 4px 1px #0008;
  `,
);

export const Select = styled.select(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h5};

    &::-webkit-scrollbar {
      width: ${theme.size(2)};
    }

    &::-webkit-scrollbar-track {
      background: ${theme.colors.bg1};
    }

    &::-webkit-scrollbar-thumb {
      background: ${theme.colors.gray};
      border-radius: 2px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.white};
    }
  `,
);

export const SelectItem = styled.option(
  ({ theme }) => css`
    background-color: ${theme.colors.bg1};
    color: ${theme.colors.text1};
    font-family: sans-serif;
  `,
);

export const Input = styled.input(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(2.5)} ${theme.size(5)};
    background-color: ${theme.colors.bg4};
    color: ${theme.colors.text2};
    font-size: ${theme.fontSize.h5};
    border-radius: ${theme.radius.large};
    font-weight: bold;
    border: none;
    box-shadow: 2px 2px 4px 1px #0008;
  `,
);
