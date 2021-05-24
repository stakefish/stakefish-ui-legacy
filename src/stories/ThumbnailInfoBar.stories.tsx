import React from "react";
import { Story, Meta } from "@storybook/react";
import ThumbnailInfoBar, { ThumbnailInfoBarProps } from "../components/ThumbnailInfoBar";

const argTypes = {
  thumbnailUrl: {
    name: "thumbnailUrl",
    defaultValue: "https://stake.fish/static/tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC-685da5dac221e497b4741685d29ced91.png",
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

const Template: Story<ThumbnailInfoBarProps> = (args) => <ThumbnailInfoBar {...args} />;

export const Default = Template.bind({});

export default {
  title: "Form Controls/ThumbnailInfoBar",
  component: ThumbnailInfoBar,
  argTypes,
} as Meta;
