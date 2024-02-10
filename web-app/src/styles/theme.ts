import { atlassianColors, materialColors } from './palettes';
import { gradients } from './tools';

export const defaultTheme: Styles.Theme = {
  size: (n: number) => `${(n * 0.2).toFixed(1)}rem`,
  colors: {
    main: materialColors.purple['600'],
    mainBg: materialColors.purple['700'],
    bg1: materialColors.grey['50'],
    bg2: materialColors.grey['100'],
    bg3: materialColors.grey['200'],
    bg4: materialColors.grey['300'],
    text1: materialColors.grey['800'],
    text2: materialColors.grey['600'],
    text3: materialColors.grey['500'],
    text4: materialColors.grey['400'],
    gray: materialColors.grey['500'],
    yellow: atlassianColors.yellow['600'],
    red: atlassianColors.red['700'],
    blue: atlassianColors.blue['500'],
    green: materialColors.lightGreen['800'],
    white: materialColors.grey['50'],
    black: materialColors.black,
    gradientBg: gradients.white,
  },
  fontSize: {
    h1: '1.3rem',
    h2: '1.25rem',
    h3: '1.2rem',
    h4: '1.15rem',
    h5: '1.1rem',
    h6: '1.05rem',
    body: '1rem',
    label: '0.9rem',
    small: '0.95rem',
    verySmall: '0.85rem',
  },
  shadow: {
    low: '1px 1px 2px 1px #0004',
    medium: '1px 1px 3px 1px #0007',
    high: '1px 1px 3px 1px #000A',
  },
  radius: {
    verySmall: '0.2rem',
    small: '0.3rem',
    medium: '0.4rem',
    large: '0.5rem',
    veryLarge: '0.6rem',
    full: '50%',
  },
};

export const defaultThemeDark = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    bg1: materialColors.black,
    bg2: materialColors.black + 'DD',
    bg3: materialColors.black + 'BB',
    bg4: materialColors.black + '99',
    text1: materialColors.grey['200'],
    text2: materialColors.grey['300'],
    text3: materialColors.grey['400'],
    text4: materialColors.grey['500'],
    gray: materialColors.grey['600'],
    white: materialColors.grey['200'],
    gradientBg: gradients.black,
  },
};
