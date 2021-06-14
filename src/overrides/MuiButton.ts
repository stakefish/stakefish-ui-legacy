import colors from "../theme/colors";
import fontWeight from "../theme/fontWeight";

const outlinedStyles = {
  borderColor: colors.button.outlined,
  color: colors.text.secondary,
  backgroundColor: "transparent",
  fontWeight: fontWeight.normal,
  boxShadow: "none",

  "&:active, &:hover": {
    borderColor: colors.button.outlinedActive,
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
    backgroundColor: colors.button.gray,
    color: colors.text.contrastPrimary,
    fontWeight: fontWeight.medium,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.grayActive,
    },

    "&:disabled": {
      backgroundColor: colors.button.disabled,
      color: colors.text.contrastPrimary,

      "&:active, &:hover": {
        backgroundColor: colors.button.disabled,
      },
    },
  },
  containedPrimary: {
    backgroundColor: colors.button.primary,
    color: colors.text.contrastPrimary,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.primaryActive,
    },
  },
  containedSecondary: {
    backgroundColor: colors.button.secondary,
    color: colors.text.contrastPrimary,
    boxShadow: "none",

    "&:active, &:hover": {
      backgroundColor: colors.button.secondaryActive,
    },
  },
  outlined: outlinedStyles,
  outlinedPrimary: outlinedStyles,
  outlinedSecondary: outlinedStyles,
  text: {
    backgroundColor: "transparent !important",
    color: colors.button.dark,
    fontWeight: fontWeight.medium,

    "&:active, &:hover": {
      color: colors.button.darkActive,
    },
  },
  textPrimary: {
    color: colors.button.primary,

    "&:active, &:hover": {
      color: colors.button.primaryActive,
    },
  },
  textSecondary: {
    color: colors.button.secondary,

    "&:active, &:hover": {
      color: colors.button.secondaryActive,
    },
  },
};

export default MuiButton;
