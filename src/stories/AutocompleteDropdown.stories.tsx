import { Meta } from "@storybook/react";
import Box from "@material-ui/core/Box";
import AutocompleteDropdown from "../components/AutocompleteDropdown";
import Typography from "../components/Typography";

// TODO: create OptionRect component?
interface ValidatorType {
  logo: string;
  name: string;
  address: string;
}
const OptionRect = ({ logo, name, address }: ValidatorType) => (
  <Box display="flex" alignItems="center" width="100%">
    <Box width={48} display="flex" alignItems="center" mr={2}>
      <img src={logo} alt={name} width="100%" />
    </Box>
    <Box>
      <Typography variant="caption" component="p">
        {name}
      </Typography>
      <Typography variant="overline" component="p" color="textSecondary">
        {address}
      </Typography>
    </Box>
  </Box>
);
const validatorOptions: ValidatorType[] = [
  {
    logo: "https://stake.fish/static/tz1Ldzz6k1BHdhuKvAtMRX7h5kJSMHESMHLC-685da5dac221e497b4741685d29ced91.png",
    name: "Tezos Capital Legacy",
    address: "tz1TDSmoZXwVevLTEvKCTHWpomG76oC9S2fJ",
  },
  {
    logo: "https://stake.fish/static/tz1MXFrtZoaXckE41bjUCSjAjAap3AFDSr3N-d90309be42def12ab0bedf29e6854522.png",
    name: "Tezos Istanbul",
    address: "tz1Vm5cfHncKGBo7YvZfHc4mmudY4qpWzvSB",
  },
  {
    logo: "https://stake.fish/static/tz1WCd2jm4uSt4vntk4vSuUWoZQGhLcDuR9q-d3792854fd25d5e82b7134b347a3f934.png",
    name: "Airfoil",
    address: "tz1gk3TDbU7cJuiBRMhwQXVvgDnjsxuWhcEA",
  },
];

export const Default = () => {
  return (
    <AutocompleteDropdown
      id="story-autocomplete"
      options={validatorOptions}
      getOptionLabel={(option) => option.address}
      renderOption={({ logo, name, address }) => <OptionRect logo={logo} name={name} address={address} />}
      placeholder="Select option"
    />
  );
};

export default {
  title: "Form Controls/Autocomplete",
  component: AutocompleteDropdown,
  // argTypes: inputArgTypes,
} as Meta;
