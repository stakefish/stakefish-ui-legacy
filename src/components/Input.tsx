import React, { ReactNode } from "react";
import MuiInput from "@material-ui/core/Input";

export interface InputProps {
  endAdornment?: ReactNode;
  startAdornment?: ReactNode;
  size?: "large" | "medium";
}

const Input: React.FC<InputProps> = ({ size = "medium", startAdornment, endAdornment }: InputProps) => {
  return <MuiInput startAdornment={startAdornment} endAdornment={endAdornment} />;
};

export default Input;
