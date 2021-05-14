import React, { useState } from "react";
import MuiIconButton, { IconButtonProps as MuiIconButtonProps } from "@material-ui/core/IconButton";

import Icon, { IconProps } from "./Icon";

export interface IconButtonProps extends Omit<MuiIconButtonProps, "color" | "size">, IconProps {
  ariaLabel?: string;
}

// TODO: add more event listeners
const IconButton: React.FC<IconButtonProps> = ({ ariaLabel, onClick, disabled, iconKey, ...props }) => {
  const [iconColor, setIconColor] = useState(props.color);

  const iconProps = {
    className: props.className,
    size: props.size,
    rotate: props.rotate,
  };

  return (
    <MuiIconButton
      aria-label={ariaLabel}
      onClick={onClick}
      onMouseEnter={() => setIconColor("primary")}
      onMouseLeave={() => setIconColor(props.color)}
      disabled={disabled}
      disableFocusRipple
      disableRipple
    >
      <Icon iconKey={iconKey} color={iconColor} {...iconProps} />
    </MuiIconButton>
  );
};

export default IconButton;
