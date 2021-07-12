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
      white: string;
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
      light: colorPalette.lightGreen.light;
      dark: colorPalette.lightGreen.dark;
      main: colorPalette.lightGreen.dark;
    };
    primaryAlt: {
      light: colorPalette.green.light;
      dark: colorPalette.green.dark;
      main: colorPalette.green.dark;
    };
    secondary: {
      light: colorPalette.gray[800];
      dark: colorPalette.gray[700];
      main: colorPalette.gray[700];
    };
    error: {
      light: colorPalette.red.light;
      dark: colorPalette.red.dark;
      main: colorPalette.red.dark;
    };
    success: {
      light: colorPalette.lightGreen.light;
      dark: colorPalette.lightGreen.dark;
      main: colorPalette.lightGreen.dark;
    };
    text: TextColorTypes;
    icon: IconColorTypes;
    button: ButtonColorTypes;
    link: LinksColorTypes;
  }

  export interface TextColorTypes extends ReadingColorTypes {}
  export interface IconColorTypes extends ReadingColorTypes {
    transparent: string;
    currentColor: string;
  }
  export interface ButtonColorTypes extends InteractiveColorTypes {}
  export interface LinksColorTypes extends InteractiveColorTypes {}

  export interface ReadingColorTypes {
    primary: colorPalette.gray[800];
    secondary: colorPalette.gray[500];
    inversePrimary: colorPalette.gray.white;
    inverseSecondary: colorPalette.gray[400];
    positive: colorPalette.lightGreen.light;
    positiveAlt: colorPalette.green.light;
    negative: colorPalette.red.light;
  }

  export interface InteractiveColorTypes {
    primary: colorPalette.lightGreen.light;
    primaryActive: colorPalette.lightGreen.dark;
    primaryAlt: colorPalette.green.light;
    primaryAltActive: colorPalette.green.dark;
    secondary: colorPalette.gray[800];
    secondaryActive: colorPalette.gray[700];
    secondaryAlt: colorPalette.gray[600];
    secondaryAltActive: colorPalette.gray[500];
    disabled: colorPalette.gray[400];
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
