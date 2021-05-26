import { Story, Meta } from "@storybook/react";

import Button, { CombinedButtonProps } from "../components/Button";
import { buttonArgTypes } from "../utils/buttonStories";

const argTypes = {
  ...buttonArgTypes,
  variant: { table: { disable: true } },
};

interface ButtonStoryProps extends CombinedButtonProps {}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
  return <Button variant="contained" {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Buttons/Regular",
  component: Button,
  argTypes,
} as Meta;
