import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Popper from "@material-ui/core/Popper";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import MuiAutocomplete, { AutocompleteProps as MuiAutocompleteProps } from "@material-ui/lab/Autocomplete";

import TextField from "./TextField";

export interface AutocompleteDropdownProps extends Omit<MuiAutocompleteProps<any, false, false, false>, "renderInput"> {
  placeholder?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiFormControl-root": {
        display: "flex",
      },
    },
    listbox: {
      padding: 0,
    },
    option: {
      padding: theme.spacing(2, 3),

      '&[data-focus="true"], &[aria-selected="true"]': {
        backgroundColor: `${theme.palette.gray[200]} !important`,
      },
    },
  })
);

const AutocompleteDropdown: React.FC<AutocompleteDropdownProps> = ({
  id,
  options,
  getOptionLabel,
  renderOption,
  placeholder,
  ...props
}) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MuiAutocomplete
      classes={classes}
      id={id}
      options={options}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      renderInput={(params) => (
        <TextField
          ref={params.InputProps.ref}
          id={`${id}-input`}
          inputProps={{
            endAdornmentProps: {
              iconKey: "angle-left",
              color: isOpen ? "primary" : "secondary",
              rotate: isOpen ? 90 : -90,
              onClick: () => null,
            },
            placeholder,
            ...params.inputProps,
          }}
        />
      )}
      onOpen={(event) => {
        if (props.onOpen) props.onOpen(event);
        setIsOpen(true);
      }}
      onClose={(event, reason) => {
        if (props.onClose) props.onClose(event, reason);
        setIsOpen(false);
      }}
      freeSolo={true}
      PopperComponent={(props) => (
        <Popper
          {...props}
          transition
          placement="bottom-start"
          children={({ TransitionProps }) => (
            <Fade {...TransitionProps} in={props.open} style={{ transformOrigin: "0 0 0" }} timeout={350}>
              <Box>
                <>{props.children}</>
              </Box>
            </Fade>
          )}
        />
      )}
    />
  );
};

export default AutocompleteDropdown;
