import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl, { FormControlProps as MuiFormControlProps } from "@material-ui/core/FormControl";

import Input, { InputProps } from "./Input";
import InputLabel from "./InputLabel";
import FormHelperText from "./FormHelperText";

export interface TextFieldProps extends MuiFormControlProps, InputProps {
  id: string;
  label?: string;
  helperText?: string;
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

const TextField: React.FC<TextFieldProps> = ({ id, label, helperText, error, ...props }) => {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const inputProps = {
    textSize: props.textSize,
    placeholder: props.placeholder,
    endAdornmentProps: props.endAdornmentProps,
    startAdornmentProps: props.startAdornmentProps,
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl error={!!error} classes={classes}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <Input {...inputProps} id={id} value={value} onChange={handleChange} aria-describedby={`${id}-text`} />

      {helperText && error && <FormHelperText id={`${id}-text`} text={helperText} />}
    </FormControl>
  );
};

export default TextField;
