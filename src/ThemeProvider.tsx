import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";

import colors from "./theme/colors";

import MuiCssBaseline from "./overrides/MuiCssBaseline";

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
  overrides: {
    MuiCssBaseline,
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
