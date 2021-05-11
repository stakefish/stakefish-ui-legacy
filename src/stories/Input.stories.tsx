import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "../";

const argTypes = {};

const Template: Story<InputProps> = (args: InputProps) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Input",
  component: Input,
  argTypes,
} as Meta;
