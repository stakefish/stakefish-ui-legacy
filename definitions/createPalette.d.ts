import { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Colors {
    red: {
      dark: string;
      main: string;
    };
    green: {
      bright: string;
      light: string;
      dark: string;
      main: string;
    };
    black: {
      bright: string;
      light: string;
      dark: string;
      main: string;
    };
    gray: {
      bright: string;
      light: string;
      dark: string;
      main: string;
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
