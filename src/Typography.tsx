import React from "react";
import MuiTypography, { TypographyProps as MuiTypographyProps } from "@material-ui/core/Typography";

/**
 * Types
 */
export interface TypographyProps extends MuiTypographyProps {}

const Typography: React.FC<TypographyProps> = ({ children, color, variant }: TypographyProps) => {
  return (
    <MuiTypography variant={variant} color={color}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
