import { Story, Meta } from "@storybook/react";

import Button, { CombinedButtonProps } from "../components/Button";

const argTypes = {
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: "primary",
    control: {
      type: "select",
      options: ["default", "primary", "secondary", "red", "black"],
    },
  },
  variant: {},
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
};

interface ButtonStoryProps extends CombinedButtonProps {}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
  return <Button {...args} disableRipple />;
};

export const Default = Template.bind({});

export default {
  title: "Form Controls/Button",
  component: Button,
  argTypes,
} as Meta;
