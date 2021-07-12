import React from "react";
import Icon from "./Icon";
import MuiBox from "@material-ui/core/Box";
import { Order } from "./TableContainer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface TableSortLabelIconProps {
  active: boolean | undefined;
  order: Order | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    box: {
      display: "flex",
      "& .icon:first-child": {
        marginRight: "-1px",
      },
      "& .icon:last-child": {
        marginLeft: "-1px",
      },
    },
    defaultIcon: {
      color: theme.palette.icon.positiveAlt,
    },
    activeIcon: {
      color: theme.palette.icon.inversePrimary,
    },
  })
);

const TableSortLabelIcon = ({ active, order }: TableSortLabelIconProps) => {
  const classes = useStyles();

  return (
    <MuiBox lineHeight={1} className={`TableSortLabelIcon ${classes.box}`}>
      <Icon
        iconKey="sort-down"
        size="xs"
        className={active && order === "desc" ? classes.activeIcon : classes.defaultIcon}
      />
      <Icon
        iconKey="sort-up"
        size="xs"
        className={active && order === "asc" ? classes.activeIcon : classes.defaultIcon}
      />
    </MuiBox>
  );
};

export default TableSortLabelIcon;
