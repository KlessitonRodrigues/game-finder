import { keyframes } from 'styled-components';

import { materialColors as mc } from './palettes';

export const cssSize = (n: number) => `${(n * 0.2).toFixed(1)}rem`;

export const screenSize = {
  mobileS: 320,
  mobileM: 425,
  mobileL: 480,
  tablet: 768,
  laptopS: 900,
  laptopM: 1024,
  laptopL: 1280,
  desktopS: 1440,
  desktopM: 1980,
  desktopL: 2560,
};

export const animations = {
  fadeUp: keyframes`
    from { transform: translateY(6rem); opacity: 0; } 
    to { opacity: 1 }`,
  slideUp: keyframes`
    from { transform: translateY(12rem); opacity: 0; } 
    to { opacity: 1; }`,
  fadeIn: keyframes`
    from { opacity: 0; } 
    to { opacity: 1; }`,
  spinning: keyframes`
    to { transform: rotateZ(360deg); }`,
};

export const gradients = {
  black: `linear-gradient(180deg, ${mc.grey['600']}, ${mc.grey['700']})`,
  white: `linear-gradient(180deg, ${mc.grey['200']}, ${mc.grey['300']})`,
  blue: `linear-gradient(180deg, ${mc.blue['600']}, ${mc.blue['700']})`,
  darkBlue: `linear-gradient(180deg, ${mc.blue['800']}, ${mc.blue['900']})`,
};
