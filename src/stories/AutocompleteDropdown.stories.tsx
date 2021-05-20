import { Meta } from "@storybook/react";
import ThumbnailInfoBar from "../components/ThumbnailInfoBar";
import AutocompleteDropdown from "../components/AutocompleteDropdown";

const validatorOptions = [
  {
    thumbnailUrl: "https://stake.fish/static/tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC-685da5dac221e497b4741685d29ced91.png",
    thumbnailAlt: "Tezos Capital Legacy",
    title: "Tezos Capital Legacy",
    subtitle: "tz1TDSmoZXwVevLTEvKCTHWpomG76oC9S2fJ",
  },
  {
    thumbnailUrl: "https://stake.fish/static/tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N-d90309be42def12ab0bedf29e6854522.png",
    thumbnailAlt: "Tezos Istanbul",
    title: "Tezos Istanbul",
    subtitle: "tz1Vm5cfHncKGBo7YvZfHc4mmudY4qpWzvSB",
  },
  {
    thumbnailUrl: "https://stake.fish/static/tz1WCd2jm4uSt4vntk4vSuUWoZQGhLcDuR9q-d3792854fd25d5e82b7134b347a3f934.png",
    thumbnailAlt: "Airfoil",
    title: "Airfoil",
    subtitle: "tz1gk3TDbU7cJuiBRMhwQXVvgDnjsxuWhcEA",
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
