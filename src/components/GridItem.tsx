import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiGrid, { GridProps as MuiGridProps } from "@material-ui/core/Grid";

export interface GridItemProps extends Omit<MuiGridProps, "container" | "item" | "spacing"> {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  })
);

const GridItem = ({ children, ...props }: GridItemProps) => {
  const classes = useStyles();

  return (
    <MuiGrid item xs={12} {...props} className={classes.root}>
      {children}
    </MuiGrid>
  );
};

export default GridItem;
