import { Palette, PaletteOptions } from "@material-ui/core/styles/createPalette";

declare module "@material-ui/core/styles/createPalette" {
  interface Colors {
    red: {
      dark: "#F04646";
      main: "#FF5959";
      contrastText: "#FFFFFF";
    };
    green: {
      bright: "#82D318";
      light: "#6BBD00";
      dark: "#008E07";
      main: "#0BA012";
      contrastText: "#FFFFFF";
    };
    black: {
      bright: "#7D8499";
      light: "#697087";
      dark: "#00030E";
      main: "#313540";
      contrastText: "#FFFFFF";
    };
    gray: {
      bright: "#FAFBFC";
      light: "#F5F5F7";
      dark: "#BBBEC7";
      main: "#E1E3E8";
      contrastText: "#00030E";
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
