import { Story, Meta } from "@storybook/react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import { Item } from "../utils/gridStories";

import GridItem from "../components/GridItem";
import GridContainer from "../components/GridContainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nestedContainer: {
      background: theme.palette.gray.main,
    },
  })
);

const Template = () => {
  const theme = useTheme();
  const classes = useStyles();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <GridContainer>
      <GridContainer item md={8} spacing={2} className={classes.nestedContainer}>
        <GridItem md={6}>
          <Item>{isMobile ? "xs=12" : "md=6"}</Item>
        </GridItem>
        <GridItem md={6}>
          <Item>{isMobile ? "xs=12" : "md=6"}</Item>
        </GridItem>
      </GridContainer>

      <GridItem md={4}>
        <Item>{isMobile ? "xs=12" : "md=4"}</Item>
      </GridItem>
    </GridContainer>
  );
};

export const Default = Template.bind({});

export default {
  title: "Grid layout/Nested items",
  component: GridContainer,
  subcomponents: { GridItem },
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
