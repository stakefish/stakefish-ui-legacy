import colors from "../theme/colors";
import fontWeight from "../theme/fontWeight";

const outlinedStyles = {
  borderColor: colors.button.secondaryAlt,
  color: colors.text.secondary,
  backgroundColor: "transparent",
  fontWeight: fontWeight.normal,
  boxShadow: "none",

  "&:active, &:hover": {
    borderColor: colors.button.secondaryAltActive,
    backgroundColor: "transparent",
  },
};

const MuiButton = {
  root: {
    lineHeight: 1.6,
    borderRadius: 0,
    boxShadow: "none",
  },
  contained: {
    backgroundColor: colors.button.secondaryAlt,
    color: colors.text.inversePrimary,
    fontWeight: fontWeight.medium,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.secondaryAltActive,
    },

    "&:disabled": {
      backgroundColor: colors.button.disabled,
      color: colors.text.inversePrimary,

      "&:active, &:hover": {
        backgroundColor: colors.button.disabled,
      },
    },
  },
  containedPrimary: {
    backgroundColor: colors.button.primary,
    color: colors.text.inversePrimary,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.primaryActive,
    },
  },
  containedSecondary: {
    backgroundColor: colors.button.primaryAlt,
    color: colors.text.inversePrimary,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.primaryAltActive,
    },
  },
  outlined: outlinedStyles,
  outlinedPrimary: outlinedStyles,
  outlinedSecondary: outlinedStyles,
  text: {
    backgroundColor: "transparent !important",
    color: colors.button.secondary,
    fontWeight: fontWeight.medium,

    "&:active, &:hover": {
      color: colors.button.secondaryActive,
    },
  },
  textPrimary: {
    color: colors.button.primary,

    "&:active, &:hover": {
      color: colors.button.primaryActive,
    },
  },
  textSecondary: {
    color: colors.button.primaryAlt,

    "&:active, &:hover": {
      color: colors.button.primaryAltActive,
    },
  },
};

export default MuiButton;
