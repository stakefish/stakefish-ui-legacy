# Getting started

This library is stakefish's open source design system, the library is at the core of our UI products.
Each component works in isolation. They are self-supporting, and will only inject the styles they need to display.

> A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.

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

> `<ThemeProvider />` should be _ALWAYS_ at the root of your React rendering tree.

```js
// your-react-app-root.js
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

All components that the library provides are documented using [Storybook](https://storybook.js.org/) and are available [here](https://stakefish.github.io/stakefish-ui).

## Usage with Typescript

The library can be used with Typescript and all the type definitions are available in the same package.
The naming convention is `ComponentNameProps`.

```tsx
// ...
import React from "react";
import { Typography, TypographyProps } from "@stakefish/ui";

const CustomTypography: React.FC<TypographyProps> = (customTypographyProps: TypographyProps) => {
  return <Typography {...customTypographyprops} />;
};
```
