import React, { ReactNode } from "react";
import MuiBox from "@material-ui/core/Box";
import MuiInput from "@material-ui/core/Input";
import { makeStyles, Theme } from "@material-ui/core/styles";

import Icon, { IconProps } from "./Icon";
import Typography from "./Typography";
import MuiFormHelperText from "./FormHelperText";
export interface InputProps {
  startAdornmentProps?: IconProps;
  endAdornmentProps?: IconProps;
  placeholder?: string;
  textSize?: "big" | "medium";
  label?: string;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  box: {
    "& label": {
      lineHeight: 1,
    },
  },
  input: (props: { textSize: string; narrowEndPadding: boolean }) => ({
    padding: theme.spacing(1.5, props.narrowEndPadding ? 2.5 : 3, 1.5, 3),
    lineHeight: 1,
    fontSize: props.textSize === "big" ? theme.typography.fontSizeLg : theme.typography.fontSizeM,
    "& .icon:first-of-type": {
      marginRight: theme.spacing(1.5),
    },
  }),
}));

const Input: React.FC<InputProps> = ({
  placeholder,
  textSize = "big",
  label,
  helperText,
  startAdornmentProps = undefined,
  endAdornmentProps = undefined,
  error = false,
  disabled = false,
}: InputProps) => {
  const classes = useStyles({ textSize, narrowEndPadding: !!endAdornmentProps });

  const StartAdornment = startAdornmentProps && <Icon size="sm" {...startAdornmentProps} />;
  const EndAdornment = endAdornmentProps && <Icon size="sm" {...endAdornmentProps} />;

  return (
    <MuiBox display="inline-flex" flexDirection="column" alignItems="flex-start" className={`${classes.box}`}>
      {label && (
        <MuiBox display="inline" mb={1.5} lineHeight={0}>
          <Typography variant="caption" component="label">
            {label}
          </Typography>
        </MuiBox>
      )}
      <MuiInput
        className={`${classes.input}`}
        startAdornment={StartAdornment}
        endAdornment={EndAdornment}
        placeholder={placeholder}
        inputProps={{ style: { padding: 0 } }}
        disabled={disabled}
      />
      {error && <MuiFormHelperText text={helperText} />}
    </MuiBox>
  );
};

export default Input;
