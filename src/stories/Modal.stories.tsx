import { Story, Meta } from "@storybook/react";

import Modal, { ModalProps } from "../components/Modal";

const argTypes = {};

const Template: Story<ModalProps> = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Modal",
  component: Modal,
  argTypes,
} as Meta;
