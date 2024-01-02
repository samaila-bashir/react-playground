import { IColors, ThemeMode } from "../types";

export const lightMode: IColors = {
  backgrounds: {
    primary: "white",
    secondary: "grey",
  },
  text: {
    primary: "black",
    secondary: "grey",
  },
};

export const darkMode: IColors = {
  backgrounds: {
    primary: "black",
    secondary: "grey",
  },
  text: {
    primary: "white",
    secondary: "grey",
  },
};

export const getColors = (mode: ThemeMode): IColors => {
  if (mode === ThemeMode.light) {
    return lightMode;
  }

  return darkMode;
};
