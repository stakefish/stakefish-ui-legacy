import { Story, Meta } from "@storybook/react";
import { iconList, iconColors, IconProps } from "../components/Icon";
import { IconKeys, IconColors } from "../../definitions/icon";
import { Input, InputProps } from "../";

const iconNameKeys = [...Object.keys(iconList), ""];
const iconColorKeys = [...Object.keys(iconColors), ""];

interface InputStoryProps extends InputProps {
  startAdornmentKey?: keyof IconKeys;
  startAdornmentColor?: keyof IconColors;
  startAdornmentRotation?: number;
  endAdornmentKey?: keyof IconKeys;
  endAdornmentColor?: keyof IconColors;
  endAdornmentRotation?: number;
}

const argTypes = {
  textSize: {
    name: "textSize",
    description: "The font size of the placeholder and input text.",
    defaultValue: "big",
    control: {
      type: "select",
      options: ["big", "medium"],
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "big" },
    },
  },
  /**
   * startAdornment controls
   */
  startAdornmentProps: { table: { disable: true } },
  startAdornmentKey: {
    name: "startAdornmentKey",
    description: "The key name of icon component.",
    control: {
      type: "select",
      options: iconNameKeys,
    },
    table: { category: "startAdornment" },
  },
  startAdornmentColor: {
    name: "startAdornmentColor",
    description: "The color icon component.",
    control: {
      type: "select",
      options: iconColorKeys,
    },
    table: { category: "startAdornment" },
  },
  startAdornmentRotation: {
    name: "startAdornmentRotation",
    description: "The rotation value of icon component.",
    control: {
      type: "number",
      default: 0,
    },
    table: { category: "startAdornment" },
  },
  /**
   * endAdornment controls
   */
  endAdornmentProps: { table: { disable: true } },
  endAdornmentKey: {
    name: "endAdornmentKey",
    description: "The key name of icon component.",
    control: {
      type: "select",
      options: iconNameKeys,
    },
    table: { category: "endAdornment" },
  },
  endAdornmentColor: {
    name: "endAdornmentColor",
    description: "The color icon component.",
    control: {
      type: "select",
      options: iconColorKeys,
    },
    table: { category: "endAdornment" },
  },
  endAdornmentRotation: {
    name: "endAdornmentRotation",
    description: "The rotation value of icon component.",
    control: {
      type: "number",
      default: 0,
    },
    table: { category: "endAdornment" },
  },
};

const Template: Story<InputProps> = (args: InputStoryProps) => {
  const startAdornmentProps: IconProps | undefined = args.startAdornmentKey?.length
    ? {
        iconKey: args.startAdornmentKey,
        color: args.startAdornmentColor,
        rotate: args.startAdornmentRotation,
      }
    : undefined;
  const endAdornmentProps: IconProps | undefined = args.endAdornmentKey?.length
    ? {
        iconKey: args.endAdornmentKey,
        color: args.endAdornmentColor,
        rotate: args.endAdornmentRotation,
      }
    : undefined;

  return <Input {...args} startAdornmentProps={startAdornmentProps} endAdornmentProps={endAdornmentProps} />;
};

export const Default = Template.bind({});

export default {
  title: "Example/Input",
  component: Input,
  argTypes,
} as Meta;
