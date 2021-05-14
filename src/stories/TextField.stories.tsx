import React from "react";
import { Story, Meta } from "@storybook/react";
import TextField, { TextFieldProps } from "../components/TextField";
import { AdornmentStoryProps, adornmentStoryControls, getAdornmentProps } from "./adornmentTypes";

interface TextFieldStoryProps extends TextFieldProps, AdornmentStoryProps {}

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

const Template: Story<TextFieldStoryProps> = (args) => {
  const startAdornmentProps = getAdornmentProps(args, "start");
  const endAdornmentProps = getAdornmentProps(args, "end");

  return <TextField {...args} startAdornmentProps={startAdornmentProps} endAdornmentProps={endAdornmentProps} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Input/TextField",
  component: TextField,
  argTypes,
} as Meta;
