import React, { ReactNode } from "react";
import MuiBox from "@material-ui/core/Box";
import MuiInput from "@material-ui/core/Input";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Typography from "./Typography";
import MuiFormHelperText from "./FormHelperText";

export interface InputProps {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  placeholder?: string;
  textSize?: "big" | "medium";
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    "& label": {
      lineHeight: 1,
    },
  },
  input: (props: { textSize: string }) => ({
    padding: theme.spacing(1.5, 3),
    lineHeight: 1,
    fontSize: props.textSize === "big" ? theme.typography.fontSizeLg : theme.typography.fontSizeM,
  }),
}));

const Input: React.FC<InputProps> = ({
  placeholder,
  textSize = "big",
  label,
  startAdornment,
  endAdornment,
  error = false,
  helperText,
  disabled = false,
}: InputProps) => {
  const classes = useStyles({ textSize });

  return (
    <MuiBox display="inline-flex" flexDirection="column" alignItems="flex-start" className={`${classes.box}`}>
      {label && (
        <MuiBox display="inline" mb={1.5} lineHeight={0}>
          <Typography variant="caption" component="label">
            {label}
          </Typography>
        </MuiBox>
      )}
      <MuiInput
        className={`${classes.input}`}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        placeholder={placeholder}
        inputProps={{ style: { padding: 0 } }}
        disabled={disabled}
      />
      {error && <MuiFormHelperText text={helperText} />}
    </MuiBox>
  );
};

export default Input;
