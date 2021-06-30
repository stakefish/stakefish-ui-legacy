import React, { forwardRef } from "react";
import MuiButton, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Icon from "./Icon";
import colors from "../theme/colors";
import { IconKeys } from "../../definitions/icon";

export interface ButtonProps extends MuiButtonProps {
  align?: "center" | "left" | "right";
}

const color: ColorMap = {
  initial: {
    red: colors.error.light,
    black: colors.text.primary,
  },
  action: {
    red: colors.error.light,
    black: colors.text.primary,
  },
};
interface ColorMap {
  initial: {
    [key: string]: string;
  };
  action: {
    [key: string]: string;
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: (props: { size?: string; color: string; align?: string; variant?: string }) => ({
    textTransform: "none",
    position: "relative",
    backgroundColor: props.variant === "contained" ? color.initial[props.color] : undefined,
    color: props.variant === "text" ? color.initial[props.color] : undefined,
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
      backgroundColor: props.variant === "contained" ? color.action[props.color] : undefined,
      color: props.variant === "text" ? color.action[props.color] : undefined,
    },
    "& .MuiButton-startIcon, & .MuiButton-endIcon": {
      position: "relative",
      top: "-1px",
    },
    "&.MuiButton-fullWidth": {
      paddingRight: props.size === "small" ? theme.spacing(4) : theme.spacing(8),

      "& .MuiButton-endIcon": {
        position: "absolute",
        right: theme.spacing(3),
        top: "50%",
        transform: "translate(0, -50%)",
      },
    },
    "& .MuiButton-startIcon > *:first-child, & .MuiButton-endIcon > *:first-child": {
      height: props.size === "small" ? theme.spacing(2) : props.size === "large" ? theme.spacing(4) : theme.spacing(3),
    },
    "&.MuiButton-text": {
      padding: props.size === "small" ? theme.spacing(0.5, 2) : theme.spacing(0, 1),
      transition: theme.transitions.create(["color"]),
    },
  }),
}));

const Button: React.FC<ButtonProps> = forwardRef(
  (
    {
      value,
      align = "center",
      placeholder,
      color = "primary",
      variant = "contained",
      size = "medium",
      disabled = false,
      startIcon,
      endIcon,
      onClick,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const classes = useStyles({ size, color, align, variant });

    const startIconComponent = startIcon && <Icon iconKey={startIcon as keyof IconKeys} />;
    const endIconComponent = endIcon && <Icon iconKey={endIcon as keyof IconKeys} />;

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
        disableRipple
        {...props}
      />
    );
  }
);
export default Button;
