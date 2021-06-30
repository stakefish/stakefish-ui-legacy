import { Story, Meta } from "@storybook/react";

import Button, { ButtonProps } from "../components/Button";
import { buttonArgTypes } from "../utils/buttonStories";

const argTypes = {
  ...buttonArgTypes,
  variant: { table: { disable: true } },
};

const Template: Story<ButtonProps> = (args: ButtonProps) => {
  return <Button variant="contained" {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Buttons/Regular",
  component: Button,
  argTypes,
} as Meta;
