import MuiTypography from "./MuiTypography";
import fontWeight from "../theme/fontWeight";
import lineHeight from "../theme/lineHeight";
import colors from "../theme/colors";

const MuiTableCell = {
  root: {
    ...MuiTypography.subtitle2,
    borderBottom: "none",
    paddingTop: "14px",
    paddingBottom: "14px",
    paddingRight: "32px",
    "&:not(:first-child)": {
      paddingLeft: 0,
    },
    "&:first-child": {
      paddingLeft: "32px",
    },
  },
  head: {
    ...MuiTypography.overline,
    fontWeight: fontWeight.medium,
    lineHeight: lineHeight.xs,
    paddingTop: "20px",
    paddingBottom: "20px",

    color: colors.text.inversePrimary,
    backgroundColor: colors.primary.light,
  },
};

export default MuiTableCell;
