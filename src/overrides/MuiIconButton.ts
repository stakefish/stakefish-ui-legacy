import colors from "../theme/colors";

const MuiFormIconButton = {
  root: {
    "&:hover": {
      backgroundColor: "transparent",

      "& .icon path": {
        fill: colors.black.main,
      },
    },
  },
};

export default MuiFormIconButton;
