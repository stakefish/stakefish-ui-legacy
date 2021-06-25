import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MuiInputLabel, { InputLabelProps } from "@material-ui/core/InputLabel";

import Typography from "./Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.primary,
      "&.MuiFormLabel-root.Mui-error": {
        color: theme.palette.text.primary,
      },
      "&.MuiFormLabel-root.Mui-focused": {
        color: theme.palette.text.primary,
      },
      "& span": {
        lineHeight: 1,
      },
    },
  })
);

const InputLabel: React.FC<InputLabelProps> = ({ children }: InputLabelProps) => {
  const classes = useStyles();

  return (
    <MuiInputLabel classes={classes}>
      <Typography variant="calloutBold">{children}</Typography>
    </MuiInputLabel>
  );
};

export default InputLabel;
