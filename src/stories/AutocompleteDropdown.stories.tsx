import { Story, Meta } from "@storybook/react";
import AutocompleteDropdown from "../components/AutocompleteDropdown";

export const Default = () => {
  return (
    <AutocompleteDropdown
      id="story-autocomplete"
      options={["a", "b", "c"]}
      getOptionLabel={(option) => option}
      renderOption={(option) => <p>{option}</p>}
      placeholder="Select option"
    />
  );
};

export default {
  title: "Form Controls/Autocomplete",
  component: AutocompleteDropdown,
  // argTypes: inputArgTypes,
} as Meta;
