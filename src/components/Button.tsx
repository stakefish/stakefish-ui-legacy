import React, { forwardRef } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Icon, { IconProps } from "./Icon";
import colors from "../theme/colors";

export interface ButtonProps {
  startIconProps?: IconProps;
  endIconProps?: IconProps;
  align?: "center" | "left" | "right";
}

export interface CombinedButtonProps extends MuiButtonProps, ButtonProps {}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { size: string; color: string; align: string; variant: string }) => ({
    textTransform: "none",
    lineHeight: 1.6,
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor:
      props.variant === "contained"
        ? props.color === "red"
          ? colors.red.main
          : props.color === "black"
          ? colors.black.dark
          : undefined
        : undefined,
    padding: props.size === "small" ? theme.spacing(1, 3) : theme.spacing(2, 4),
    justifyContent: props.align === "left" ? "flex-start" : props.align === "right" ? "flex-end" : "center",
    fontSize:
      props.size === "small"
        ? theme.typography.fontSizeM
        : props.size === "large"
        ? theme.typography.fontSizeXl2
        : theme.typography.fontSizeLg,

    "&:active, &:hover, &:focus": {
      boxShadow: "none",
      outline: "none",
      backgroundColor:
        props.variant === "contained"
          ? props.color === "red"
            ? colors.red.dark
            : props.color === "black"
            ? colors.black.main
            : undefined
          : undefined,
    },
  }),
}));

const Button: React.FC<CombinedButtonProps> = forwardRef(
  (
    {
      value,
      align = "center",
      placeholder,
      color = "primary",
      variant = "contained",
      size = "medium",
      disabled = false,
      startIcon = false,
      endIcon = false,
      onClick,
      ...props
    }: CombinedButtonProps,
    ref
  ) => {
    const classes = useStyles({ size, color, align, variant });

    const startIconComponent = startIcon && <Icon iconKey={startIcon} />;
    const endIconComponent = endIcon && <Icon iconKey={endIcon} />;

    return (
      <MuiButton
        value={value}
        classes={classes}
        color={color}
        variant={variant}
        disabled={disabled}
        onClick={onClick}
        startIcon={startIconComponent}
        endIcon={endIconComponent}
        buttonRef={ref}
        {...props}
      />
    );
  }
);
export default Button;
