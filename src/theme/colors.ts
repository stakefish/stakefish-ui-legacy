import { Colors } from "@material-ui/core/styles/createPalette";

const colorPalette = {
  lightGreen: {
    light: "#82D318",
    dark: "#6BBD00",
  },
  green: {
    light: "#0BA012",
    dark: "#008E07",
  },
  red: {
    light: "#FF5959",
    dark: "#F04646",
  },
  gray: {
    white: "#FFFFFF",
    100: "#FAFBFC",
    200: "#F5F5F7",
    300: "#E1E3E8",
    400: "#BBBEC7",
    500: "#7D8499",
    600: "#697087",
    700: "#313540",
    800: "#00030E",
  },
};

const readingColorSet = {
  primary: colorPalette.gray[800],
  secondary: colorPalette.gray[500],
  inversePrimary: colorPalette.gray.white,
  inverseSecondary: colorPalette.gray[400],
  positive: colorPalette.lightGreen.light,
  positiveAlt: colorPalette.green.light,
  negative: colorPalette.red.light,
};

const interactiveColorSet = {
  primary: colorPalette.lightGreen.light,
  primaryActive: colorPalette.lightGreen.dark,
  primaryAlt: colorPalette.green.light,
  primaryAltActive: colorPalette.green.dark,
  secondary: colorPalette.gray[800],
  secondaryActive: colorPalette.gray[700],
  secondaryAlt: colorPalette.gray[600],
  secondaryAltActive: colorPalette.gray[500],
  disabled: colorPalette.gray[400],
};

const colors: Colors = {
  ...colorPalette,
  primary: {
    light: colorPalette.lightGreen.light,
    dark: colorPalette.lightGreen.dark,
    main: colorPalette.lightGreen.dark,
  },
  primaryAlt: {
    light: colorPalette.green.light,
    dark: colorPalette.green.dark,
    main: colorPalette.green.dark,
  },
  secondary: {
    light: colorPalette.gray[800],
    dark: colorPalette.gray[700],
    main: colorPalette.gray[700],
  },
  error: {
    light: colorPalette.red.light,
    dark: colorPalette.red.dark,
    main: colorPalette.red.dark,
  },
  success: {
    light: colorPalette.lightGreen.light,
    dark: colorPalette.lightGreen.dark,
    main: colorPalette.lightGreen.dark,
  },
  text: readingColorSet,
  icon: { ...readingColorSet, transparent: "transparent", currentColor: "currentColor" },
  button: interactiveColorSet,
  link: interactiveColorSet,
};

export default colors;
