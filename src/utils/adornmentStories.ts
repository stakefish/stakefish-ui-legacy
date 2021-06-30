import { iconList } from "../components/Icon";
import { IconKeys } from "../../definitions/icon";
import { InputAdornmentProps } from "../components/InputAdornment";
import { IconColorTypes } from "@material-ui/core/styles/createPalette";
import themeColors from "../theme/colors";

const iconNameKeys = [...Object.keys(iconList), ""];
const iconColorKeys = [...Object.keys(themeColors.icon), ""];

export interface AdornmentStoryProps {
  startAdornmentKey?: keyof IconKeys;
  startAdornmentColor?: keyof IconColorTypes;
  startAdornmentRotation?: number;
  startAdornmentOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  endAdornmentKey?: keyof IconKeys;
  endAdornmentColor?: keyof IconColorTypes;
  endAdornmentRotation?: number;
  endAdornmentOnClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const adornmentStoryControls = {
  /**
   * startAdornment controls
   */
  startAdornmentProps: { table: { disable: true } },
  startAdornmentKey: {
    name: "startAdornmentKey",
    description: "The key name of icon component.",
    options: iconNameKeys,
    control: { type: "select" },
    table: { category: "startAdornment" },
  },
  startAdornmentColor: {
    name: "startAdornmentColor",
    description: "The color icon component.",
    options: iconColorKeys,
    control: { type: "select" },
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
    options: iconNameKeys,
    control: { type: "select" },
    table: { category: "endAdornment" },
  },
  endAdornmentColor: {
    name: "endAdornmentColor",
    description: "The color icon component.",
    options: iconColorKeys,
    control: { type: "select" },
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

export const getAdornmentProps = (
  args: AdornmentStoryProps,
  type: "start" | "end"
): InputAdornmentProps | undefined => {
  if (type === "start") {
    return args.startAdornmentKey?.length
      ? {
          iconKey: args.startAdornmentKey,
          color: args.startAdornmentColor,
          rotate: args.startAdornmentRotation,
          onClick: args.startAdornmentOnClick,
        }
      : undefined;
  } else {
    return args.endAdornmentKey?.length
      ? {
          iconKey: args.endAdornmentKey,
          color: args.endAdornmentColor,
          rotate: args.endAdornmentRotation,
          onClick: args.endAdornmentOnClick,
        }
      : undefined;
  }
};
