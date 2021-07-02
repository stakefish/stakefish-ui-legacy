import colors from "../theme/colors";

const MuiFormHelperText = {
  root: {
    lineHeight: 0,
    marginTop: 0,
    "&$error": {
      color: colors.text.inversePrimary,
    },
  },
};

export default MuiFormHelperText;
