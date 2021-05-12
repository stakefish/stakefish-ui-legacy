import { Story, Meta } from "@storybook/react";

import { Input, InputProps } from "../";

const argTypes = {
  textSize: {
    name: "textSize",
    description: "The font size of the placeholder and input text.",
    defaultValue: "big",
    control: {
      type: "select",
      options: ["big", "medium"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "big" },
    },
  },
};

const Template: Story<InputProps> = (args: InputProps) => {
  return <Input {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Input",
  component: Input,
  argTypes,
} as Meta;
