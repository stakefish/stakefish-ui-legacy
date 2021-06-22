import { iconList } from "../components/Icon";

const iconNameKeys = [...Object.keys(iconList), ""];


export const buttonArgTypes = {
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: "primary",
    options: ["default", "primary", "secondary", "red", "black"],
    control: { type: "select" }
  },
  size: {
    name: "size",
    defaultValue: "medium",
    options: ["small", 'medium', 'large'],
    control: { type: "select" }
  },
  fullWidth: {
    name: 'fullWidth',
    defaultValue: false,
    control: { type: "boolean" }
  },
  href: {
    name: "href",
    control: { type: "text" }
  },
  children: {
    defaultValue: "Button text",
  },
  align: {
    name: "text-align",
    description: "Button text alignment",
    defaultValue: "center",
    options: ["center", "left", "right"],
    control: { type: "select" }
  },
  endIcon: {
    name: "endIcon",
    description: "The key name of icon component.",
    options: iconNameKeys,
    control: { type: "select" }
  },
  startIcon: {
    name: "startIcon",
    description: "The key name of icon component.",
    options: iconNameKeys,
    control: { type: "select" }
  },
  disabled: {
    name: 'disabled',
    defaultValue: false,
    control: { type: "boolean" }
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
};
