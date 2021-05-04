import fontFamily from "../theme/fontFamily";
import fontSize from "../theme/fontSize";
import fontWeight from "../theme/fontWeight";

const MuiTypography = {
  h1: {
    fontSize: fontSize.xl5,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
  },
  h2: {
    fontSize: fontSize.xl4,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
  },
  h3: {
    fontSize: fontSize.xl3,
    fontWeight: fontWeight.bold,
    fontFamily: fontFamily.serif,
  },
  h4: {
    fontSize: fontSize.xl3,
    fontWeight: fontWeight.normal,
    fontFamily: fontFamily.serif,
  },
  h5: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semi,
    fontFamily: fontFamily.serif,
  },
  h6: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.normal,
    fontFamily: fontFamily.serif,
  },
  body1: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.normal,
  },
  body2: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.medium,
  },
  subtitle1: {
    fontSize: fontSize.l,
    fontWeight: fontWeight.normal,
  },
  subtitle2: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.normal,
  },
  caption: {
    fontSize: fontSize.m,
    fontWeight: fontWeight.medium,
  },
  overline: {
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
  },
};

export default MuiTypography;
