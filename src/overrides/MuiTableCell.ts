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
    lineHeight: lineHeight.ml,
    paddingTop: "12px",
    paddingBottom: "12px",

    color: colors.gray.bright,
    backgroundColor: colors.green.bright,
  },
};

export default MuiTableCell;
