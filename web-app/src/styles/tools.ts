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
  black: `linear-gradient(45deg, ${mc.grey['800']}, ${mc.grey['900']})`,
  white: `linear-gradient(45deg, ${mc.grey['100']}, ${mc.grey['200']})`,
  blue: `linear-gradient(45deg, ${mc.lightBlue['600']}, ${mc.lightBlue['700']})`,
  darkBlue: `linear-gradient(45deg, ${mc.lightBlue['700']}, ${mc.lightBlue['800']})`,
};
