import React from "react";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args: any) => <Button {...args} />;

export const Primary = Template.bind({
  primary: true,
  label: "Button",
});

export const Secondary = Template.bind({
  label: "Button",
});

export const Large = Template.bind({
  size: "large",
  label: "Button",
});

export const Small = Template.bind({
  size: "small",
  label: "Button",
});
