import React, { ReactNode } from "react";
import MuiInput from "@material-ui/core/Input";

export interface InputProps {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  margin?: "dense" | "none";
}

const Input: React.FC<InputProps> = ({ margin, startAdornment, endAdornment }: InputProps) => {
  return <MuiInput margin={margin} startAdornment={startAdornment} endAdornment={endAdornment} />;
};

export default Input;
