import { Story, Meta } from "@storybook/react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Item } from "../utils/gridStories";
import { GridSize as MuiGridSize } from "@material-ui/core/Grid";

import GridItem from "../components/GridItem";
import GridContainer from "../components/GridContainer";

const gridLayoutArgTypes = {
  itemCount: {
    name: "itemCount",
    description: "The amount of items in the grid container.",
    defaultValue: 6,
    control: { type: "range", min: 1, max: 12, step: 1 },
  },
};

interface GridLayoutArgs {
  itemCount: MuiGridSize;
}

const Template: Story<GridLayoutArgs> = (args: GridLayoutArgs) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const mdSize = Number.isInteger(12 / (args.itemCount as number)) ? 12 / (args.itemCount as number) : "auto";

  return (
    <GridContainer>
      {[...new Array(args.itemCount)].map((num, index) => (
        <GridItem md={mdSize as MuiGridSize} key={index}>
          <Item>{isMobile ? "xs=12" : `md=${mdSize}`}</Item>
        </GridItem>
      ))}
    </GridContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "Grid layout/Repeating items",
  component: GridContainer,
  subcomponents: { GridItem },
  argTypes: gridLayoutArgTypes,
  parameters: {
    docs: {
      description: {
        component:
          "Both `GridContainer` and `GridItem` inherit Mui's `Grid` component, but preset with attributes that align with our design system.",
      },
      source: {
        type: "code",
      },
    },
  },
} as Meta;
