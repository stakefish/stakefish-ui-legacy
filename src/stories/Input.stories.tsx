import { Story, Meta } from "@storybook/react";
import Input, { CombinedInputProps } from "../components/Input";
import { AdornmentStoryProps, adornmentStoryControls, getAdornmentProps } from "./adornmentTypes";

interface InputStoryProps extends CombinedInputProps, AdornmentStoryProps {}

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
  ref: { table: { disable: true } },
  ...adornmentStoryControls,
};

const Template: Story<InputStoryProps> = (args: InputStoryProps) => {
  const startAdornmentProps = getAdornmentProps(args, "start");
  const endAdornmentProps = getAdornmentProps(args, "end");

  return <Input {...args} startAdornmentProps={startAdornmentProps} endAdornmentProps={endAdornmentProps} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Input",
  component: Input,
  argTypes,
} as Meta;
