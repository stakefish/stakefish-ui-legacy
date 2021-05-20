import { adornmentStoryControls } from "./adornmentStories";

export const inputArgTypes = {
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
  placeholder: {
    name: "placeholder",
    defaultValue: "Text placeholder",
    control: {
      type: "text",
    },
  },
  ref: { table: { disable: true } },
  ...adornmentStoryControls,
};
