import { useContext } from "react";
import { themeContext } from "../../theme/ThemeContext";

export const useTheme = () => {
  const theme = useContext(themeContext);
  if (theme === null) {
    throw Error("Please wrap your application with a ThemeProvider");
  }
  return theme;
};
