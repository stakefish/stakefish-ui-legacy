import React from "react";
import { Story, Meta } from "@storybook/react";
import ThumbnailInfoBar, { ThumbnailInfoBarProps } from "../components/ThumbnailInfoBar";

const argTypes = {
  thumbnailUrl: {
    name: "thumbnailUrl",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
    },
  },
  thumbnailAlt: {
    name: "thumbnailAlt",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
    },
  },
  title: {
    name: "title",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
    },
  },
  subtitle: {
    name: "subtitle",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
    },
  },
};

const Template: Story<ThumbnailInfoBarProps> = (args) => <ThumbnailInfoBar {...args} />;

export const Default = Template.bind({});

export default {
  title: "Form Controls/ThumbnailInfoBar",
  component: ThumbnailInfoBar,
  argTypes,
} as Meta;
