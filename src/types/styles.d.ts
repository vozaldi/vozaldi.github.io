type HexColor = string & {};

export type ColorVariant = 'transparent' | 'primary' | 'primary-dark' | 'secondary' | 'accent' | 'success' | 'info' | 'danger' | 'warning' | 'light' | 'dark' | ColorGray | HexColor;

export type ColorGray = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
