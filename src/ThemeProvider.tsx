import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import colors from "./theme/colors";
import fontSize from "./theme/fontSize";
import fontFamily from "./theme/fontFamily";
import fontWeight from "./theme/fontWeight";

import MuiCssBaseline from "./overrides/MuiCssBaseline";
import MuiTypography from "./overrides/MuiTypography";

/**
 * Types
 */
export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

/**
 * Colors
 */
const palette = createPalette(colors);

/**
 * Setup
 */
const theme = createMuiTheme({
  palette,
  typography: {
    htmlFontSize: fontSize.s,
    fontSize: fontSize.lg,
    fontFamily: fontFamily.sans,
    fontWeightLight: fontWeight.light,
    fontWeightRegular: fontWeight.normal,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
  },
  overrides: {
    MuiCssBaseline,
    MuiTypography,
  },
});

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
