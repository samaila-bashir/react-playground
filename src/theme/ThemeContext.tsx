import { createContext, useState } from "react";
import { ThemeMode, ITheme, IThemeProvider } from "../types";
import { getColors } from "./theme";

export const themeContext = createContext(null as any as ITheme);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const { Provider } = themeContext;
  const [currentMode, setCurrentMode] = useState(ThemeMode.light);

  const toggle = (newMode?: ThemeMode) => {
    if (newMode) {
      setCurrentMode(newMode);
    } else {
      const modeValue =
        ThemeMode.light === currentMode ? ThemeMode.dark : ThemeMode.light;
      setCurrentMode(modeValue);
    }
  };

  const contextValue: ITheme = {
    mode: currentMode,
    toggle,
    colors: getColors(currentMode),
  };

  return <Provider value={contextValue}>{children}</Provider>;
};
