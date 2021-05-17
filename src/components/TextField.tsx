import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl, { FormControlProps as MuiFormControlProps } from "@material-ui/core/FormControl";

import Icon from "./Icon";
import Input, { CombinedInputProps as InputProps } from "./Input";
import InputLabel from "./InputLabel";
import FormHelperText from "./FormHelperText";

export interface TextFieldProps extends MuiFormControlProps {
  id: string;
  label?: string;
  helperText?: string;
  inputProps: Omit<InputProps, "onBlur" | "onChange" | "onFocus" | "onKeyDown" | "onKeyUp">;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& label + .MuiInput-formControl": {
        marginTop: theme.spacing(3.5),
      },
    },
  })
);

const TextField: React.FC<TextFieldProps> = ({ id, label, helperText, error, inputProps, ...props }) => {
  const classes = useStyles();

  const formControlProps = {
    onChange: props.onChange,
    onBlur: props.onBlur,
    required: props.required,
  };

  return (
    <FormControl error={!!error} classes={classes} {...formControlProps}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <Input {...inputProps} id={id} aria-describedby={`${id}-text`} />

      {helperText && error && (
        <FormHelperText
          id={`${id}-text`}
          text={helperText}
          startAdornment={<Icon iconKey="info-circle" color="contrastPrimary" size="xs" />}
        />
      )}
    </FormControl>
  );
};

export default TextField;
