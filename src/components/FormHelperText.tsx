import React, { ReactNode } from "react";
import MuiBox from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";

import colors from "../theme/colors";
import Typography from "./Typography";

export interface FormHelperTextProps {
  text?: string;
  startAdornment?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    "& span": {
      color: colors.gray.bright,
    },
  },
}));

const FormHelperText: React.FC<FormHelperTextProps> = ({ text, startAdornment }) => {
  const classes = useStyles();

  return (
    <MuiBox
      display="inline-flex"
      lineHeight={0}
      px={3}
      py={0.5}
      bgcolor={colors.black.dark}
      className={`${classes.box}`}
    >
      {startAdornment && startAdornment}

      <Typography variant="subtitle2" component="span">
        {text}
      </Typography>
    </MuiBox>
  );
};

export default FormHelperText;
