import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MuiTableSortLabel, { TableSortLabelProps as MuiTableSortLabelProps } from "@material-ui/core/TableSortLabel";

import TableSortLabelIcon from "./TableSortLabelIcon";

export interface TableSortLabelProps extends MuiTableSortLabelProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexDirection: "row",
      "& .TableSortLabelIcon": {
        marginLeft: theme.spacing(0.5),
      },
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
  })
);

const TableSortLabel = ({ active, direction, onClick, children }: TableSortLabelProps) => {
  const classes = useStyles();

  return (
    <MuiTableSortLabel
      active={active}
      direction={direction}
      onClick={onClick}
      IconComponent={() => <TableSortLabelIcon active={active} order={direction} />}
      className={classes.root}
    >
      {children}
      {active ? (
        <span className={classes.visuallyHidden}>
          {direction === "desc" ? "sorted descending" : "sorted ascending"}
        </span>
      ) : null}
    </MuiTableSortLabel>
  );
};

export default TableSortLabel;
