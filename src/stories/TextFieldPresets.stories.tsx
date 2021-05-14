import React from "react";
import { Story, Meta } from "@storybook/react";
import TextField, { TextFieldProps } from "../components/TextField";
import { AdornmentStoryProps } from "./adornmentTypes";

interface TextFieldStoryProps extends TextFieldProps, AdornmentStoryProps {}

const ClearTextTemplate: Story<TextFieldStoryProps> = () => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const props = {
    id: "clear-text",
    value,
    placeholder: "Please enter validator address",
    label: "Find validator",
    helperText: "Address is not longer than 5 characters",
  };

  return (
    <TextField
      {...props}
      onChange={handleChange}
      startAdornmentProps={{
        iconKey: "search",
        color: "secondary",
      }}
      endAdornmentProps={{
        iconKey: "decline",
        color: "secondary",
        onClick: () => setValue(""),
        disabled: !value.length,
      }}
      error={value.length > 5}
    />
  );
};

export const ClearText = ClearTextTemplate.bind({});

export default {
  title: "Example/Input/TextField/Examples",
  component: TextField,
} as Meta;
