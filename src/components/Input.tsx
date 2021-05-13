import React from "react";
import MuiInput, { InputProps as MuiInputProps } from "@material-ui/core/Input";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Icon, { IconProps } from "./Icon";
export interface InputProps extends MuiInputProps {
  textSize?: "big" | "medium";
  endAdornmentProps?: IconProps;
  startAdornmentProps?: IconProps;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { textSize: string; narrowEndPadding: boolean }) => ({
    padding: theme.spacing(1.5, props.narrowEndPadding ? 2.5 : 3, 1.5, 3),
    lineHeight: 1,
    fontSize: props.textSize === "big" ? theme.typography.fontSizeLg : theme.typography.fontSizeM,
  }),
}));

const Input: React.FC<InputProps> = ({
  placeholder,
  textSize = "big",
  startAdornmentProps = undefined,
  endAdornmentProps = undefined,
  disabled = false,
}: InputProps) => {
  const classes = useStyles({ textSize, narrowEndPadding: !!endAdornmentProps });

  const StartAdornment = startAdornmentProps && <Icon size="sm" {...startAdornmentProps} />;
  const EndAdornment = endAdornmentProps && <Icon size="sm" {...endAdornmentProps} />;

  return (
    <MuiInput
      classes={classes}
      startAdornment={StartAdornment}
      endAdornment={EndAdornment}
      placeholder={placeholder}
      inputProps={{ style: { padding: 0 } }}
      disabled={disabled}
    />
  );
};

export default Input;
