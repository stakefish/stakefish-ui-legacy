import colors from "../theme/colors";

const MuiFormIconButton = {
  root: {
    "&:hover": {
      backgroundColor: "transparent",

      "& .icon path": {
        fill: colors.text.primary,
      },
    },
  },
};

export default MuiFormIconButton;
