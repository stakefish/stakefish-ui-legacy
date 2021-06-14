import { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Colors {
    // palette
    lightGreen: {
      light: string;
      dark: string;
    };
    green: {
      light: string;
      dark: string;
    };
    red: {
      light: string;
      dark: string;
    };
    gray: {
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
    };
    // tokens
    primary: {
      main: Colors.lightGreen.light;
      dark: Colors.lightGreen.dark;
    };
    secondary: {
      main: Colors.green.light;
      dark: Colors.green.dark;
    };
    error: {
      main: Colors.red.dark;
      dark: null;
    };
    success: {
      main: Colors.lightGreen.light;
      dark: null;
    };
    text: {
      primary: Colors.gray[800];
      secondary: Colors.gray[500];
      contrastPrimary: Colors.gray[100];
      contrastSecondary: Colors.gray[300];
      highlight: Colors.lightGreen.light;
      error: Colors.red.dark;
    };
    button: {
      primary: Colors.lightGreen.light;
      secondary: Colors.green.dark;
      dark: Colors.gray[800];
      gray: Colors.gray[500];
      disabled: Colors.gray[300];
    };
  }

  export interface SimplePaletteColorOptions {
    bright?: string;
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
  }

  export interface Palette extends Colors {}
  export interface PaletteOptions extends Colors {}
}
