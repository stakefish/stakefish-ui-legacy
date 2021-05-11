import React from "react";
import MuiFormHelperText, { FormHelperTextProps as MuiFormHelperTextProps } from "@material-ui/core/FormHelperText";

export interface FormHelperTextProps extends MuiFormHelperTextProps {}

const FormHelperText: React.FC<FormHelperTextProps> = (props: FormHelperTextProps) => {
  return <MuiFormHelperText {...props} />;
};

export default FormHelperText;
