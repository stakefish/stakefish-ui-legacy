import colors from "../theme/colors";

const MuiFormHelperText = {
  root: {
    lineHeight: 0,
    marginTop: 0,
    "&$error": {
      color: colors.gray.bright,
    },
  },
};

export default MuiFormHelperText;
