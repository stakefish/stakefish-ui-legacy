import React, { ReactNode } from "react";
import MuiBox from "@material-ui/core/Box";
import { makeStyles, Theme } from "@material-ui/core/styles";
import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from "@material-ui/core/FormHelperText";

import colors from "../theme/colors";
import Typography from "./Typography";

export interface FormHelperTextProps extends MuiFormHelperTextProps {
  text: string;
  startAdornment?: ReactNode;
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    "& span": {
      lineHeight: 1,
    },
  },
}));

const FormHelperText: React.FC<FormHelperTextProps> = ({ text, startAdornment }) => {
  const classes = useStyles();

  return (
    <MuiFormHelperText component="div">
      <MuiBox
        display="inline-flex"
        alignItems="center"
        alignSelf="start"
        lineHeight={0}
        px={3}
        pt={0.8}
        pb={1}
        bgcolor={colors.button.secondary}
        className={classes.box}
      >
        {startAdornment && <MuiBox mr={1}>{startAdornment}</MuiBox>}

        <Typography variant="callout" component="span">
          {text}
        </Typography>
      </MuiBox>
    </MuiFormHelperText>
  );
};

export default FormHelperText;
