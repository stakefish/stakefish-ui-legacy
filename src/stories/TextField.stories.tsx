import { Story, Meta } from "@storybook/react";
import TextField, { TextFieldProps } from "../components/TextField";

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
  placeholder: {
    name: "placeholder",
    defaultValue: "Text placeholder",
    control: {
      type: "text",
    },
  },
  children: { table: { disable: true } },
  color: { table: { disable: true } },
  fullWidth: { table: { disable: true } },
  hiddenLabel: { table: { disable: true } },
  margin: { table: { disable: true } },
  size: { table: { disable: true } },
  variant: { table: { disable: true } },
  ref: { table: { disable: true } },
};

const Template: Story<TextFieldProps> = (args: TextFieldProps) => {
  return <TextField {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/TextField",
  component: TextField,
  argTypes,
} as Meta;
