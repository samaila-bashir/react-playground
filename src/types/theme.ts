export enum ThemeMode {
  light = "light",
  dark = "dark",
}

export interface ITheme {
  mode: ThemeMode;
  toggle: (mode?: ThemeMode) => void;
  colors: IColors;
}

export interface IThemeProvider {
  children: JSX.Element;
}

interface IColorCategories {
  primary: string;
  secondary: string;
}

export interface IColors {
  backgrounds: IColorCategories;
  text: IColorCategories;
}
