import colors from "../theme/colors";

const MuiFormHelperText = {
  root: {
    "&:hover": {
      backgroundColor: "transparent",

      "& .icon path": {
        fill: colors.black.main,
      },
    },
  },
};

export default MuiFormHelperText;
