import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";
import { buttonArgTypes } from "../utils/buttonStories";

const argTypes = {
  ...buttonArgTypes,
  variant: { defaultValue: "text", table: { disable: true } },
};

interface ButtonStoryProps extends ButtonProps {}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Buttons/Link",
  component: Button,
  argTypes,
} as Meta;
