import colors from "../theme/colors";
import fontSize from "../theme/fontSize";
import fontWeight from "../theme/fontWeight";
import fontFamily from "../theme/fontFamily";
import lineHeight from "../theme/lineHeight";

const MuiTypography = {
  h1: {
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl6,
    lineHeight: lineHeight.xl3,
  },
  h2: {
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl5,
    lineHeight: lineHeight.xl2,
  },
  h3: {
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl4,
    lineHeight: lineHeight.xl,
  },
  h4: {
    fontWeight: fontWeight.normal,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl4,
    lineHeight: lineHeight.xl,
  },
  h5: {
    fontWeight: fontWeight.semi,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.lg,
  },
  h6: {
    fontWeight: fontWeight.normal,
    fontFamily: fontFamily.serif,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.lg,
  },
  body1: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.xl,
    lineHeight: lineHeight.lg,
  },
  body2: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.ml,
  },
  subtitle1: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.lg,
    lineHeight: lineHeight.ml,
  },
  subtitle2: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.m,
    lineHeight: lineHeight.m,
  },
  caption: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.medium,
    fontSize: fontSize.m,
    lineHeight: lineHeight.m,
  },
  overline: {
    fontFamily: fontFamily.sans,
    fontWeight: fontWeight.normal,
    fontSize: fontSize.sm,
    lineHeight: lineHeight.sm,
    textTransform: "none" as "none",
  },
  colorPrimary: {
    color: colors.text.primary,
  },
  colorSecondary: {
    color: colors.text.secondary,
  },
  colorError: {
    color: colors.text.negative,
  },
};

export default MuiTypography;
