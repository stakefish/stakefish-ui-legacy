# Getting started

This library is stakefish's open source design system, the library is at the core of our UI products.
Each component works in isolation. They are self-supporting, and will only inject the styles they need to display.

> 💡 A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

# Quick start

Here's a quick example to get you started, it's literally all you need:

## Installation

To install and save in your `package.json` dependencies, run:

```bash
# npm
$ npm i @stakefish/ui

# yarn
$ yarn add @stakefish/ui
```

## Usage

Add `ThemeProvider` at the root of your React application.
This is a component that provides a theme to all React components underneath itself via the context API.

> ⚠️ `<ThemeProvider />` should be _ALWAYS_ at the root of your React rendering tree.

```js
// YourAppRootFile.js
// ...
import { ThemeProvider } from "@stakefish/ui";

const Root = () => {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
};
```

Yes, this really is all you need to get started.

## Components

All the components that the library provides are documented using [Storybook](https://storybook.js.org/) and are available [here](https://stakefish.github.io/stakefish-ui).

## Component customization

Customization of the components should be achieved ideally through props.

If you find that is not the case, the library provides a `makeStyles` utility that can enhance the styles. You can use it, but you don't have to, since the library is also interoperable with all the other major styling solutions.

> ⚠️ Use this with caution and only if absolutely necessary.

```js
// Component.js
// ...
import styled from "styled-components";
import { Typography, makeStyles } from "@stakefish/ui";

export const OverrideWithStyledComponents = styled(Typography)`
  color: pink;
`;

const useStyles = makeStyles((theme) => {
  text: {
    color: "pink";
  }
});

export const OverrideWithJSS = (props) => {
  const classes = useStyles();

  return <Typography {...props} className={classes.text} />;
};
```

## Usage with Typescript

The library is written in TypeScript with complete type definitions that are available in the same package as the components.

The naming convention is `ComponentName` suffixed by `Props`. For example the type name of `Typography` will be named `TypographyProps`.

```tsx
// CustomTypography.tsx
// ...
import React from "react";
import { Typography, TypographyProps } from "@stakefish/ui";

const CustomTypography: React.FC<TypographyProps> = (customTypographyProps: TypographyProps) => {
  return <Typography {...customTypographyprops} />;
};
```
