import colors from "../theme/colors";
import fontWeight from "../theme/fontWeight";

const outlinedStyles = {
  borderColor: colors.gray.dark,
  color: colors.black.bright,
  backgroundColor: "transparent",
  fontWeight: fontWeight.normal,

  '&:active, &:hover': {
    borderColor: colors.black.bright,
    backgroundColor: "transparent",
  },}

const MuiButton = {
  contained: {
    backgroundColor: colors.black.bright,
    color: colors.black.contrastText,
    fontWeight: fontWeight.medium,

    '&:active, &:hover': {
      backgroundColor: colors.black.light,
    },

    '&.Mui-disabled': {
      backgroundColor: colors.gray.main,
      color: colors.gray.contrastText,
  
      '&:active, &:hover': {
        backgroundColor: colors.gray.main,
      },
    },
  },
  containedPrimary: {
    backgroundColor: colors.green.bright,
    color: colors.green.contrastText,

    '&:active, &:hover': {
      backgroundColor: colors.green.light,
    },
  },
  containedSecondary: {
    backgroundColor: colors.green.main,
    color: colors.green.contrastText,

    '&:active, &:hover': {
      backgroundColor: colors.green.dark,
    },
  },
  outlined: outlinedStyles,
  outlinedPrimary: outlinedStyles,
  outlinedSecondary: outlinedStyles,
  text: {
    backgroundColor: "transparent !important",
    color: colors.black.dark,
    fontWeight: fontWeight.medium,

    '&:active, &:hover': {
      color: colors.black.main,
    },
  },
  textPrimary: {
    color: colors.green.bright,

    '&:active, &:hover': {
      color: colors.green.light,
    },
  },
  textSecondary: {
    color: colors.green.main,

    '&:active, &:hover': {
      color: colors.green.dark,
    },
  },
};

export default MuiButton;
