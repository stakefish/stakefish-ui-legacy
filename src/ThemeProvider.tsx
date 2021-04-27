import React from "react";
import { ThemeProvider as MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

export interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }: ThemeProviderProps) => {
  return <MuiThemeProvider theme={createMuiTheme()}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
