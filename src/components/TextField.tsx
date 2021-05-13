import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import FormControl, { FormControlProps as MuiFormControlProps } from "@material-ui/core/FormControl";

import Input from "./Input";
import InputLabel from "./InputLabel";
import FormHelperText from "./FormHelperText";

export interface TextFieldProps extends MuiFormControlProps {
  id: string;
  label?: string;
  helperText?: string;
  textSize?: "big" | "medium";
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

function TextField({ id, label, helperText, placeholder, error, textSize }: TextFieldProps) {
  const [value, setValue] = useState("");
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <FormControl error={!!error} classes={classes}>
      {label && <InputLabel htmlFor={id}>{label}</InputLabel>}

      <Input
        id={id}
        textSize={textSize}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        aria-describedby={`${id}-text`}
      />

      {helperText && error && <FormHelperText id={`${id}-text`} text={helperText} />}
    </FormControl>
  );
}

export default TextField;
