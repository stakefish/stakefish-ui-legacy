import { Story, Meta } from "@storybook/react";

import { Typography, TypographyProps } from "../";

const argTypes = {
  children: {
    name: "children",
    description: "The content of the component.",
    defaultValue: "The quick brown fox jumps over the lazy dog.",
    control: {
      type: "text",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "-" },
    },
  },
  variant: {
    name: "variant",
    description: "Applies the theme typography styles.",
    defaultValue: "body1",
    control: {
      type: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "overline"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "body1" },
    },
  },
  color: {
    name: "color",
    description: "The color of the component. It supports those theme colors that make sense for this component.",
    defaultValue: "initial",
    control: {
      type: "select",
      options: ["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "initial" },
    },
  },
  align: {
    name: "align",
    description: "Set the text-align on the component.",
    defaultValue: "inherit",
    control: {
      type: "select",
      options: ["inherit", "left", "center", "right", "justify"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "inherit" },
    },
  },
  display: {
    name: "display",
    description: "Set the display on the component.",
    defaultValue: "initial",
    control: {
      type: "select",
      options: ["initial", "block", "inline"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "initial" },
    },
  },
  noWrap: {
    name: "noWrap",
    description: "Set the text-wrap on the component.",
    defaultValue: false,
    control: {
      type: "boolean",
    },
    table: {
      type: { summary: "boolean" },
      defaultValue: { summary: false },
    },
  },
};

const Template: Story<TypographyProps> = (args: TypographyProps) => {
  return <Typography {...args} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Typography",
  component: Typography,
  argTypes,
} as Meta;
