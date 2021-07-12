import React, { ReactNode } from "react";
import mapValues from "lodash/mapValues";
import { makeStyles, Theme } from "@material-ui/core";
import MuiTypography from "@material-ui/core/Typography";
import { TextColorTypes } from "@material-ui/core/styles/createPalette";

import colors from "../theme/colors";
import fontSize from "../theme/fontSize";
import fontWeight from "../theme/fontWeight";
import fontFamily from "../theme/fontFamily";
import lineHeight from "../theme/lineHeight";

export const TypographyVariants = [
  "headline1",
  "headline2",
  "heroParagraph",
  "heroParagraphBold",
  "highlighter",
  "highlighterBold",
  "paragraph",
  "description",
  "descriptionBold",
  "callout",
  "calloutBold",
  "supportingText",
] as const;
type TypographyVariant = typeof TypographyVariants[number];

export interface TypographyProps {
  noWrap?: boolean;
  variant?: TypographyVariant;
  children: string | number | JSX.Element | JSX.Element[] | ReactNode;
  display?: "initial" | "block" | "inline";
  align?: "inherit" | "left" | "center" | "right" | "justify";
  color?: keyof TextColorTypes;
  component?: React.ElementType;
}

const overrideStyles = (theme: Theme) => ({
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
});

const customizedVariants = {
  headline1: {
    element: "h1",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl6,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.xl3,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeXl3,
        lineHeight: theme.typography.lineHeightLg,
      },
    }),
  },
  headline2: {
    element: "h2",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl5,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.xl2,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeXl2,
        lineHeight: theme.typography.lineHeightMl,
      },
    }),
  },
  heroParagraph: {
    element: "h3",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl4,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.xl,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeLg,
        lineHeight: theme.typography.lineHeightM,
      },
    }),
  },
  heroParagraphBold: {
    element: "h4",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl4,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.xl,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeLg,
        lineHeight: theme.typography.lineHeightM,
      },
    }),
  },
  highlighter: {
    element: "h5",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.lg,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeMl,
        lineHeight: theme.typography.lineHeightMl,
      },
    }),
  },
  highlighterBold: {
    element: "h6",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.headline,
      fontSize: fontSize.xl,
      fontWeight: fontWeight.bold,
      lineHeight: lineHeight.lg,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeMl,
        lineHeight: theme.typography.lineHeightMl,
      },
    }),
  },
  paragraph: {
    element: "p",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.xl,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.lg,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeMl,
        lineHeight: theme.typography.lineHeightMl,
      },
    }),
  },
  description: {
    element: "p",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.lg,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.ml,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeMl,
        lineHeight: theme.typography.lineHeightSm,
      },
    }),
  },
  descriptionBold: {
    element: "p",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.lg,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.ml,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeMl,
        lineHeight: theme.typography.lineHeightSm,
      },
    }),
  },
  callout: {
    element: "p",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.m,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.m,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeS,
        lineHeight: theme.typography.lineHeightS,
      },
    }),
  },
  calloutBold: {
    element: "p",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.m,
      fontWeight: fontWeight.medium,
      lineHeight: lineHeight.m,
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeS,
        lineHeight: theme.typography.lineHeightS,
      },
    }),
  },
  supportingText: {
    element: "span",
    styles: (theme: Theme) => ({
      fontFamily: fontFamily.body,
      fontSize: fontSize.sm,
      fontWeight: fontWeight.normal,
      lineHeight: lineHeight.sm,
      textTransform: "none" as "none",
      [theme.breakpoints.down("sm")]: {
        fontSize: theme.typography.fontSizeXs,
        lineHeight: theme.typography.lineHeightS,
      },
    }),
  },
};

const useStyles = makeStyles((theme: Theme) => ({
  root: ({ variant, color }: { variant: TypographyVariant; color?: keyof TextColorTypes }) => {
    return {
      color: colors.text[color ? color : "primary"],
      ...customizedVariants[variant].styles(theme),
    };
  },
  ...overrideStyles(theme),
}));

const variantMapping: { [key: string]: React.ElementType } = {
  // customized
  ...mapValues(customizedVariants, "element"),
  // overrides
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "p",
  subtitle2: "p",
  body1: "p",
  body2: "p",
  caption: "span",
  button: "span",
  overline: "span",
};

const Typography: React.FC<TypographyProps> = ({
  variant = "paragraph",
  align,
  color,
  noWrap,
  display,
  component,
  children,
}: TypographyProps) => {
  const classes = useStyles({ variant, color });

  return (
    <MuiTypography
      align={align}
      noWrap={noWrap}
      display={display}
      component={component ? component : variantMapping[variant]}
      variantMapping={variantMapping}
      classes={classes}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
