import React from "react";
import MuiTable from "@material-ui/core/Table";
import MuiTableRow from "@material-ui/core/TableRow";
import MuiTableBody from "@material-ui/core/TableBody";
import MuiTableContainer from "@material-ui/core/TableContainer";
import MuiTableCell, { TableCellProps as MuiTableCellProps } from "@material-ui/core/TableCell";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TableHeadSort, { HeadSortCell } from "./TableHeadSort";

/**
 *
 * Utilities
 *
 */
function getCellDataKey(data: CellData) {
  return Object.keys(data)[0];
}
function getCellComparatorKey(data: CellData, orderBy: CellDataKeys) {
  return data?.[orderBy]?.["key"] ? data[orderBy].key : null;
}

function descendingComparator(a: CellData, b: CellData, orderBy: CellDataKeys) {
  const aComparatorKey = getCellComparatorKey(a, orderBy);
  const bComparatorKey = getCellComparatorKey(b, orderBy);

  if (!aComparatorKey || !bComparatorKey || aComparatorKey === bComparatorKey) return 0;
  return bComparatorKey < aComparatorKey ? -1 : 1;
}
function getComparator(order: Order, orderBy: CellDataKeys): (a: CellData, b: CellData) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort(array: CellData[], comparator: (x: CellData, y: CellData) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [CellData, number]);

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    return order !== 0 ? order : a[1] - b[1];
  });

  return stabilizedThis.map((el) => el[0]);
}
function formatCellDataRowsIntoArray(data: CellData) {
  const array = [];
  for (const property in data) {
    array.push(data[property]);
  }
  return array;
}

/**
 *
 * Types
 *
 */
export type Order = "asc" | "desc";
export type CellDataKeys = keyof CellData;

export interface CellData {
  /**
   * The id of the cell to be synced with HeadCell at the same column
   */
  [cellKey: string]: {
    /**
     * The data as sorting reference
     */
    key: string;
    /**
     * The actual content to be rendered
     */
    content: string | number | JSX.Element | JSX.Element[] | React.ReactNode;
    /**
     * Additional props to decorate tableCell
     */
    props?: {
      [key in keyof MuiTableCellProps]: any;
    };
  };
}

export interface TableBodyProps {
  headCells: HeadSortCell[];
  bodyCellsRows: CellData[];
}

/**
 *
 * Styles
 *
 */
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    table: {
      minWidth: 750,
    },
  })
);

/**
 *
 * Component - Table
 *
 */
const TableContainerSort = ({ headCells, bodyCellsRows }: TableBodyProps) => {
  const classes = useStyles();

  const [order, setOrder] = React.useState<Order>("asc");
  // set initial orderBy as the key of first cell in first row
  const [orderBy, setOrderBy] = React.useState<CellDataKeys>(getCellDataKey(bodyCellsRows[0]));

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: CellDataKeys) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  return (
    <MuiTableContainer>
      <MuiTable className={classes.table} aria-labelledby="tableTitle" aria-label="enhanced table">
        <TableHeadSort
          headCells={headCells}
          order={order}
          orderBy={orderBy.toString()}
          onRequestSort={handleRequestSort}
        />
        <MuiTableBody>
          {stableSort(bodyCellsRows, getComparator(order, orderBy)).map((rowCells, index) => (
            <MuiTableRow tabIndex={-1} key={index}>
              {formatCellDataRowsIntoArray(rowCells).map((cell, cellIndex) => (
                <MuiTableCell key={cellIndex} {...cell.props}>
                  {cell.content}
                </MuiTableCell>
              ))}
            </MuiTableRow>
          ))}
        </MuiTableBody>
      </MuiTable>
    </MuiTableContainer>
  );
};

export default TableContainerSort;
