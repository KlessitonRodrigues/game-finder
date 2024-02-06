import { createGlobalStyle, css } from 'styled-components';

import 'src/UI/assets/fonts/quicksand.ttf';

import { gradients } from './tools';

export default createGlobalStyle(
  ({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
    }
    html {
      font-size: 16px;
    }
    body {
      font-size: ${theme.fontSize.body};
      width: 98vw;
      max-width: 100vw;
      // height: 100vh;
      // max-height: 100vh;
      // overflow-y: hidden;
    }
    html,
    body {
      font-family: 'Quicksand', sans-serif;
      color: ${theme.colors.text1};
      font-weight: 500;
      background-image: ${gradients.white};
    }
    h1 {
      font-size: ${theme.fontSize.h1};
    }
    h2 {
      font-size: ${theme.fontSize.h2};
    }
    h3 {
      font-size: ${theme.fontSize.h3};
    }
    h4 {
      font-size: ${theme.fontSize.h4};
    }
    h5 {
      font-size: ${theme.fontSize.h5};
    }
    h6 {
      font-size: ${theme.fontSize.h6};
    }
    p {
      font-size: ${theme.fontSize.body};
      max-width: ${theme.size(200)};
    }
    ul {
      list-style: none;
    }
    a {
      color: unset;
      text-decoration: underline;
    }
    button,
    select {
      font-family: 'Quicksand', sans-serif;
      font-weight: 600;
      min-height: ${theme.size(8)};
      display: flex;
      align-items: center;
      gap: ${theme.size(1)};
      padding: 0 ${theme.size(2)};
      background-color: transparent;
      outline: none;
      border: none;
      border-radius: ${theme.radius.verySmall};
      cursor: pointer;
    }
    div::-webkit-scrollbar {
      width: ${theme.size(2)};
    }
    div::-webkit-scrollbar-track {
      background: #0004;
    }
    div::-webkit-scrollbar-thumb {
      background: ${theme.colors.white};
      border-radius: 2px;
    }
    div::-webkit-scrollbar-thumb:hover {
      background: ${theme.colors.main};
    }
    #root {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  `,
);
