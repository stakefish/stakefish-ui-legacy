import React from "react";
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@material-ui/core/IconButton";

import Icon, { IconProps } from "./Icon";

export interface IconButtonProps extends Omit<MuiIconButtonProps, "color" | "size">, IconProps {
  ariaLabel?: string;
}

// TODO: add more event listeners
const IconButton: React.FC<IconButtonProps> = ({ ariaLabel, onClick, disabled, iconKey, ...props }) => {
  const iconProps = {
    className: props.className,
    size: props.size,
    rotate: props.rotate,
  };

  return (
    <MuiIconButton aria-label={ariaLabel} onClick={onClick} disabled={disabled} disableFocusRipple disableRipple>
      <Icon iconKey={iconKey} color={props.color} {...iconProps} />
    </MuiIconButton>
  );
};

export default IconButton;
