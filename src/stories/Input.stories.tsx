import { Story, Meta } from "@storybook/react";

import Input, { CombinedInputProps } from "../components/Input";

import { inputArgTypes } from "../utils/formControlStories";
import { AdornmentStoryProps, getAdornmentProps } from "../utils/adornmentStories";

interface InputStoryProps extends CombinedInputProps, AdornmentStoryProps {}

const Template: Story<InputStoryProps> = (args: InputStoryProps) => {
  const startAdornmentProps = getAdornmentProps(args, "start");
  const endAdornmentProps = getAdornmentProps(args, "end");
  const {
    startAdornmentKey,
    startAdornmentColor,
    startAdornmentRotation,
    startAdornmentOnClick,
    endAdornmentKey,
    endAdornmentColor,
    endAdornmentRotation,
    endAdornmentOnClick,
    ...inputProps
  } = args;

  return <Input {...inputProps} startAdornmentProps={startAdornmentProps} endAdornmentProps={endAdornmentProps} />;
};

export const Default = Template.bind({});

export default {
  title: "Form Controls/Input",
  component: Input,
  argTypes: inputArgTypes,
} as Meta;
