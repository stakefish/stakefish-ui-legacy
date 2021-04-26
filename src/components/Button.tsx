import React from "react";

export interface ButtonProps {
  primary: any;
  backgroundColor: string;
  size: any;
  label: string;
}

/**
 * Primary UI component for user interaction
 */
export default ({ primary, backgroundColor, size, label }: ButtonProps) => {
  return <button type="button">{label}</button>;
};
