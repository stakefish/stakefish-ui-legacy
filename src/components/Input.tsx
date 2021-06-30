import React, { forwardRef } from "react";
import MuiInput, { InputProps as MuiInputProps } from "@material-ui/core/Input";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { IconProps } from "./Icon";
import { IconButtonProps } from "./IconButton";

import InputAdornment from "./InputAdornment";

export interface InputProps extends MuiInputProps {
  textSize?: "big" | "medium";
  endAdornmentProps?: IconProps | IconButtonProps;
  startAdornmentProps?: IconProps | IconButtonProps;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { textSize: string; narrowEndPadding: boolean }) => ({
    padding: theme.spacing(1.5, props.narrowEndPadding ? 2.5 : 3, 1.5, 3),
    lineHeight: 1,
    fontSize: props.textSize === "big" ? theme.typography.fontSizeLg : theme.typography.fontSizeM,

    "&.MuiInputBase-adornedEnd": {
      paddingRight: 0,
    },
  }),
}));

const Input: React.FC<InputProps> = forwardRef(
  (
    {
      value,
      placeholder,
      textSize = "big",
      startAdornmentProps = undefined,
      endAdornmentProps = undefined,
      disabled = false,
      onChange,
      onBlur,
      ...props
    }: InputProps,
    ref
  ) => {
    const classes = useStyles({ textSize, narrowEndPadding: !!endAdornmentProps });

    const StartAdornment = startAdornmentProps && (
      <InputAdornment size="sm" {...startAdornmentProps} edge="start" position="start" />
    );
    const EndAdornment = endAdornmentProps && (
      <InputAdornment size="sm" {...endAdornmentProps} edge="end" position="end" />
    );

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
        inputRef={ref}
        {...props}
      />
    );
  }
);

export default Input;
