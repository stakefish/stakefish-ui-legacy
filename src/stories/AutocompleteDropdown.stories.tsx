import { Meta } from "@storybook/react";

import ThumbnailInfoBar from "../components/ThumbnailInfoBar";
import AutocompleteDropdown from "../components/AutocompleteDropdown";

const validatorOptions = [
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/a084e1a96ecc3f24bd57dfec517a9205_360_360.jpg",
    thumbnailAlt: "Bi23 Labs",
    title: "Bi23 Labs",
    subtitle: "cosmosvaloper1hctafaqveg7dxad8aedf32aq2j877rrec2f5au",
  },
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/0896b54e305b3817c20ee844066ae905_360_360.jpg",
    thumbnailAlt: "cosmosave",
    title: "cosmosave",
    subtitle: "cosmosvaloper18fuhq6r933854432m0692m05ddqdvzm2gysypr",
  },
  {
    thumbnailUrl: "https://s3.amazonaws.com/keybase_processed_uploads/e7aca2c60e1b658db8cc8f175ce9aa05_360_360.jpg",
    thumbnailAlt: "Swiss Staking",
    title: "Swiss Staking",
    subtitle: "cosmosvaloper1y0us8xvsvfvqkk9c6nt5cfyu5au5tww2ztve7q",
  },
];

export const Default = () => {
  return (
    <AutocompleteDropdown
      id="story-autocomplete"
      options={validatorOptions}
      getOptionLabel={(option) => option.subtitle}
      renderOption={(params) => <ThumbnailInfoBar {...params} />}
      placeholder="Select option"
    />
  );
};

export default {
  title: "Form Controls/AutocompleteDropdown",
  component: AutocompleteDropdown,
} as Meta;
