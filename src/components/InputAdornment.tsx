import React from "react";
import MuiInputAdornment from "@material-ui/core/InputAdornment";

import Icon from "./Icon";
import IconButton, { IconButtonProps } from "./IconButton";

export interface InputAdornmentProps extends IconButtonProps {
  position?: "start" | "end";
  ariaLabel?: string;
  disabled?: boolean;
}

const InputAdornment: React.FC<InputAdornmentProps> = ({ position = "start", ...props }) => {
  const iconProps = {
    iconKey: props.iconKey,
    className: props.className,
    color: props.color,
    size: props.size,
    rotate: props.rotate,
  };
  const iconButtonProps = {
    ...iconProps,
    ariaLabel: props.ariaLabel,
    onClick: props.onClick,
    disabled: props.disabled,
  };

  return (
    <MuiInputAdornment position={position}>
      {iconButtonProps.onClick ? <IconButton {...iconButtonProps} /> : <Icon {...iconProps} />}
    </MuiInputAdornment>
  );
};

export default InputAdornment;
