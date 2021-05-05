import { ThemeProvider } from "../src";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
  controls: {
    matchers: {
      date: /Date$/,
      color: /(background|color)$/i,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
