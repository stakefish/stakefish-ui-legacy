import { iconList } from "../components/Icon";

const iconNameKeys = [...Object.keys(iconList), ""];


export const buttonArgTypes = {
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: "primary",
    control: {
      type: "select",
      options: ["default", "primary", "secondary", "red", "black"],
    },
  },
  size: {},
  fullWidth: {},
  href: {},
  children: {
    defaultValue: "Button text",
  },
  align: {
    name: "text-align",
    description: "Button text alignment",
    defaultValue: "center",
    control: {
      type: "select",
      options: ["center", "left", "right"],
    },
  },
  endIcon: {
    name: "endIcon",
    description: "The key name of icon component.",
    control: {
      type: "select",
      options: iconNameKeys,
    },
  },
  startIcon: {
    name: "startIcon",
    description: "The key name of icon component.",
    control: {
      type: "select",
      options: iconNameKeys,
    },
  },
  TouchRippleProps: { table: { disable: true } },
  onFocusVisible: { table: { disable: true } },
  focusVisibleClassName: { table: { disable: true } },
  focusRipple: { table: { disable: true } },
  disableTouchRipple: { table: { disable: true } },
  centerRipple: { table: { disable: true } },
  action: { table: { disable: true } },
  disableFocusRipple: { table: { disable: true } },
  disableElevation: { table: { disable: true } },
  disableRipple: { table: { disable: true } },
  ref: { table: { disable: true } },
  tabIndex: { table: { disable: true } },
  startAdornmentProps: { table: { disable: true } },
  endAdornmentProps: { table: { disable: true } },
  startIconProps: { table: { disable: true } },
  endIconProps: { table: { disable: true } },
};
