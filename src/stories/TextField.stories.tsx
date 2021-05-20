import React from "react";
import { Story, Meta } from "@storybook/react";

import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import FormHelperText from "../components/FormHelperText";
import TextField, { TextFieldProps } from "../components/TextField";

import { inputArgTypes } from "../utils/formControlStories";
import { AdornmentStoryProps, getAdornmentProps } from "../utils/adornmentStories";

interface TextFieldStoryProps extends TextFieldProps, AdornmentStoryProps {}

/**
 * Template and args
 */
const argTypes = {
  ...inputArgTypes,
  label: {
    name: "label",
    defaultValue: "Label",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" },
    },
  },
  helperText: {
    name: "helperText",
    defaultValue: "Error helper text",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "text" },
    },
  },
  id: {
    name: "id",
    defaultValue: "default-textfield-story",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "default-textfield-story" },
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

  return (
    <TextField
      {...args}
      inputProps={{
        placeholder: args.placeholder,
        startAdornmentProps,
        endAdornmentProps,
      }}
    />
  );
};

/**
 * Stories
 */
export const Default = Template.bind({});

export const ClearText = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="clear-text"
      label="Find validator"
      helperText="Address is not longer than 5 characters"
      onChange={handleChange}
      error={value.length > 5}
      inputProps={{
        value,
        placeholder: "Please enter validator address",
        startAdornmentProps: {
          iconKey: "search",
          color: "secondary",
        },
        endAdornmentProps: {
          iconKey: "decline",
          color: "secondary",
          onClick: () => setValue(""),
          disabled: !value.length,
        },
      }}
    />
  );
};

export default {
  title: "Form Controls/TextField",
  component: TextField,
  argTypes,
  subcomponents: {
    InputLabel,
    Input,
    FormHelperText,
  },
} as Meta;
