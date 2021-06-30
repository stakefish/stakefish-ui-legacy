import React from "react";
import { Story, Meta } from "@storybook/react";
import ThumbnailInfoBar, { ThumbnailInfoBarProps } from "../components/ThumbnailInfoBar";

const argTypes = {
  thumbnailUrl: {
    name: "thumbnailUrl",
    defaultValue: "https://s3.amazonaws.com/keybase_processed_uploads/a084e1a96ecc3f24bd57dfec517a9205_360_360.jpg",
    control: {
      type: "text",
    },
  },
  thumbnailAlt: {
    name: "thumbnailAlt",
    defaultValue: "Tezos Capital Legacy",
    control: {
      type: "text",
    },
  },
  thumbnailAnchorLink: {
    name: "thumbnailAnchorLink",
    description: "External link of the thumbnail",
    control: {
      type: "text",
    },
  },
  title: {
    name: "title",
    defaultValue: "Tezos Capital Legacy",
    control: {
      type: "text",
    },
  },
  isTitleCopyable: {
    name: "isTitleCopyable",
    defaultValue: false,
    description: "Add a copy icon button right after the text for copying content to clipboard",
    control: {
      type: "boolean",
    },
  },
  subtitle: {
    name: "subtitle",
    defaultValue: "tz1Vm5cfHncKGBo7YvZfHc4mmudY4qpWzvSB",
    control: {
      type: "text",
    },
  },
  isSubtitleCopyable: {
    name: "isSubtitleCopyable",
    defaultValue: false,
    description: "Add a copy icon button right after the text for copying content to clipboard",
    control: {
      type: "boolean",
    },
  },
};

const Template: Story<ThumbnailInfoBarProps> = (args: ThumbnailInfoBarProps) => <ThumbnailInfoBar {...args} />;

export const Default = Template.bind({});

export default {
  title: "Form Controls/ThumbnailInfoBar",
  component: ThumbnailInfoBar,
  argTypes,
} as Meta;
