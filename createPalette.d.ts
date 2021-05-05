import { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Colors {
    red: {
      dark: string;
      main: string;
      contrastText: string;
    };
    green: {
      bright: string;
      light: string;
      dark: string;
      main: string;
      contrastText: string;
    };
    black: {
      bright: string;
      light: string;
      dark: string;
      main: string;
      contrastText: string;
    };
    gray: {
      bright: string;
      light: string;
      dark: string;
      main: string;
      contrastText: string;
    };
    getContrastText?: (background: string) => string;
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
