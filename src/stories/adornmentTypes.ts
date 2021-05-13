import { IconKeys, IconColors } from "../../definitions/icon";
import { iconList, iconColors, IconProps } from "../components/Icon";

const iconNameKeys = [...Object.keys(iconList), ""];
const iconColorKeys = [...Object.keys(iconColors), ""];

export interface AdornmentStoryProps {
  startAdornmentKey?: keyof IconKeys;
  startAdornmentColor?: keyof IconColors;
  startAdornmentRotation?: number;
  endAdornmentKey?: keyof IconKeys;
  endAdornmentColor?: keyof IconColors;
  endAdornmentRotation?: number;
}

export const adornmentStoryControls = {
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

export const getAdornmentProps = (args: AdornmentStoryProps, type: "start" | "end"): IconProps | undefined => {
  if (type === "start") {
    return args.startAdornmentKey?.length
      ? {
          iconKey: args.startAdornmentKey,
          color: args.startAdornmentColor,
          rotate: args.startAdornmentRotation,
        }
      : undefined;
  } else {
    return args.endAdornmentKey?.length
      ? {
          iconKey: args.endAdornmentKey,
          color: args.endAdornmentColor,
          rotate: args.endAdornmentRotation,
        }
      : undefined;
  }
};
