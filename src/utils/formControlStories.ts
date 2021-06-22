import { adornmentStoryControls } from "./adornmentStories";

export const inputArgTypes = {
  textSize: {
    name: "textSize",
    description: "The font size of the placeholder and input text.",
    defaultValue: "big",
    options: ["big", "medium"],
    control: {
      type: "select",
    },
    table: {
      type: { summary: "string" },
      defaultValue: { summary: "big" },
    },
  },
  placeholder: {
    name: "placeholder",
    defaultValue: "Text placeholder",
    control: {
      type: "text",
    },
  },
  disabled: {
    name: "disabled",
    defaultValue: false,
    control: {
      type: "boolean",
    },
  },
  ref: { table: { disable: true } },
  ...adornmentStoryControls,
};
