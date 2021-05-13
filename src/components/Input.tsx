import React from "react";
import MuiInput, { InputProps as MuiInputProps } from "@material-ui/core/Input";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { IconProps } from "./Icon";
import InputAdornment from "./InputAdornment";
export interface InputProps {
  textSize?: "big" | "medium";
  endAdornmentProps?: IconProps;
  startAdornmentProps?: IconProps;
}

export interface CombinedInputProps extends MuiInputProps, InputProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { textSize: string; narrowEndPadding: boolean }) => ({
    padding: theme.spacing(1.5, props.narrowEndPadding ? 2.5 : 3, 1.5, 3),
    lineHeight: 1,
    fontSize: props.textSize === "big" ? theme.typography.fontSizeLg : theme.typography.fontSizeM,
  }),
}));

const Input: React.FC<CombinedInputProps> = ({
  value,
  placeholder,
  textSize = "big",
  startAdornmentProps = undefined,
  endAdornmentProps = undefined,
  disabled = false,
  onChange,
  onBlur,
}: CombinedInputProps) => {
  const classes = useStyles({ textSize, narrowEndPadding: !!endAdornmentProps });

  const StartAdornment = startAdornmentProps && <InputAdornment size="sm" {...startAdornmentProps} edge="start" />;
  const EndAdornment = endAdornmentProps && <InputAdornment size="sm" {...endAdornmentProps} edge="end" />;

  return (
    <MuiInput
      value={value}
      classes={classes}
      startAdornment={StartAdornment}
      endAdornment={EndAdornment}
      placeholder={placeholder}
      inputProps={{ style: { padding: 0 } }}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
