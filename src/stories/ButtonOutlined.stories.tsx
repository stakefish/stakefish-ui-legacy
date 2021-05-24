import { Story, Meta } from "@storybook/react";

import Button, { CombinedButtonProps } from "../components/Button";
import { buttonArgTypes } from "../utils/buttonStories";

const argTypes = {
  ...buttonArgTypes,
  color: { table: { disable: true } },
  variant: { table: { disable: true } },
};

interface ButtonStoryProps extends CombinedButtonProps {}

const Template: Story<ButtonStoryProps> = (args: ButtonStoryProps) => {
  return <Button variant="outlined" size="small" {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Buttons/Outlined",
  component: Button,
  argTypes,
} as Meta;
