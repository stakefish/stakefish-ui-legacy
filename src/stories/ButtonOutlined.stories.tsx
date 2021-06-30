import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";
import { buttonArgTypes } from "../utils/buttonStories";

const argTypes = {
  ...buttonArgTypes,
  color: { table: { disable: true } },
  size: { defaultValue: "small", table: { disable: true } },
  variant: { defaultValue: "outlined", table: { disable: true } },
};

interface ButtonStoryProps extends ButtonProps {}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Buttons/Outlined",
  component: Button,
  argTypes,
} as Meta;
