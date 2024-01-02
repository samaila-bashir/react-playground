import { useContext } from "react";
import { themeContext } from "../../theme/ThemeContext";

export const useTheme = () => {
  return useContext(themeContext);
};
