import React, { ReactNode } from "react";
import { makeStyles, Theme } from "@material-ui/core";
import { Variant } from "@material-ui/core/styles/createTypography";
import MuiTypography from "@material-ui/core/Typography";

export interface TypographyProps {
  noWrap?: boolean;
  variant?: Variant;
  children: string | number | JSX.Element | JSX.Element[] | ReactNode;
  display?: "initial" | "block" | "inline";
  align?: "inherit" | "left" | "center" | "right" | "justify";
  color?: "initial" | "inherit" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error";
}

const useStyles = makeStyles((theme: Theme) => ({
  h1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeXl3,
      lineHeight: theme.typography.lineHeightLg,
    },
  },
  h2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeXl2,
      lineHeight: theme.typography.lineHeightMl,
    },
  },
  h3: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeLg,
      lineHeight: theme.typography.lineHeightM,
    },
  },
  h4: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeLg,
      lineHeight: theme.typography.lineHeightM,
    },
  },
  h5: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeMl,
      lineHeight: theme.typography.lineHeightMl,
    },
  },
  h6: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeMl,
      lineHeight: theme.typography.lineHeightMl,
    },
  },
  body1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeMl,
      lineHeight: theme.typography.lineHeightMl,
    },
  },
  body2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeMl,
      lineHeight: theme.typography.lineHeightSm,
    },
  },
  subtitle1: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeSm,
      lineHeight: theme.typography.lineHeightSm,
    },
  },
  subtitle2: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeS,
      lineHeight: theme.typography.lineHeightS,
    },
  },
  caption: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeS,
      lineHeight: theme.typography.lineHeightS,
    },
  },
  overline: {
    [theme.breakpoints.down("sm")]: {
      fontSize: theme.typography.fontSizeXs,
      lineHeight: theme.typography.lineHeightS,
    },
  },
}));

const Typography: React.FC<TypographyProps> = ({
  variant,
  align,
  color,
  noWrap,
  display,
  children,
}: TypographyProps) => {
  const classes = useStyles();

  return (
    <MuiTypography variant={variant} align={align} color={color} noWrap={noWrap} display={display} classes={classes}>
      {children}
    </MuiTypography>
  );
};

export default Typography;
