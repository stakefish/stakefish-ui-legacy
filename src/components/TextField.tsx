import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl, { FormControlProps as MuiFormControlProps } from "@material-ui/core/FormControl";

import Icon from "./Icon";
import Input, { InputProps } from "./Input";
import InputLabel from "./InputLabel";
import FormHelperText from "./FormHelperText";

export interface TextFieldProps extends MuiFormControlProps, InputProps {
  id: string;
  label?: string;
  helperText?: string;
  value?: any;
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

const TextField: React.FC<TextFieldProps> = ({ value, id, label, helperText, error, ...props }) => {
  const classes = useStyles();

  const formControlProps = {
    onChange: props.onChange,
    onBlur: props.onBlur,
    required: props.required,
  };

  const inputProps = {
    textSize: props.textSize,
    placeholder: props.placeholder,
    endAdornmentProps: props.endAdornmentProps,
    startAdornmentProps: props.startAdornmentProps,
  };

  return (
    <FormControl error={!!error} classes={classes} {...formControlProps}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <Input {...inputProps} id={id} value={value} aria-describedby={`${id}-text`} />

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
