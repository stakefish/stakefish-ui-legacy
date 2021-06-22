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
    dark: "#FF5959",
  },
  gray: {
    0: "#FFFFFF",
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

const colors = {
  ...colorPalette,
  primary: {
    main: colorPalette.lightGreen.light,
    dark: colorPalette.lightGreen.dark,
  },
  secondary: {
    main: colorPalette.green.light,
    dark: colorPalette.green.dark,
  },
  error: {
    main: colorPalette.red.dark,
  },
  success: {
    main: colorPalette.lightGreen.light,
  },
  text: {
    primary: colorPalette.gray[800],
    secondary: colorPalette.gray[500],
    contrastPrimary: colorPalette.gray[0],
    contrastSecondary: colorPalette.gray[300],
    highlight: colorPalette.lightGreen.light,
    error: colorPalette.red.dark,
  },
  button: {
    primary: colorPalette.lightGreen.light,
    primaryActive: colorPalette.lightGreen.dark,
    secondary: colorPalette.green.light,
    secondaryActive: colorPalette.green.dark,
    dark: colorPalette.gray[800],
    darkActive: colorPalette.gray[700],
    gray: colorPalette.gray[500],
    grayActive: colorPalette.gray[600],
    disabled: colorPalette.gray[300],
    outlined: colorPalette.gray[400],
    outlinedActive: colorPalette.gray[500],
  },
};

export default colors;
