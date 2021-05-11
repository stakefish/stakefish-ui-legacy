import React from "react";
import MuiInput, { InputProps as MuiInputProps } from "@material-ui/core/Input";

export interface InputProps extends MuiInputProps {}

const Input: React.FC<InputProps> = (props: InputProps) => {
  return <MuiInput {...props} />;
};

export default Input;
